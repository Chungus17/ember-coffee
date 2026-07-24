import { useEffect, useRef, useState } from 'preact/hooks';

import { primaryNavigation } from '../../data/navigation';
import { cn } from '../../utils/cn';

interface MobileMenuProps {
  currentPath: string;
  appearance?: 'transparent' | 'light' | 'dark';
}

const TRANSITION_DURATION = 280;

function normalizePath(path: string): string {
  if (path === '/') {
    return path;
  }

  return path.replace(/\/+$/, '');
}

function isCurrentRoute(
  currentPath: string,
  destinationPath: string,
): boolean {
  const current = normalizePath(currentPath);
  const destination = normalizePath(destinationPath);

  return (
    current === destination ||
    current.startsWith(`${destination}/`)
  );
}

function prefersReducedMotion(): boolean {
  return window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
}

export default function MobileMenu({
  currentPath,
  appearance = 'light',
}: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const isInverse =
    appearance === 'transparent' ||
    appearance === 'dark';

  function clearCloseTimer(): void {
    if (closeTimerRef.current === null) {
      return;
    }

    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }

  function lockPageScroll(): void {
    const scrollbarWidth =
      window.innerWidth -
      document.documentElement.clientWidth;

    document.body.dataset.previousOverflow =
      document.body.style.overflow;

    document.body.dataset.previousPaddingRight =
      document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';

    /*
     * Prevent the page from shifting horizontally when the scrollbar
     * disappears.
     */
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight =
        `${scrollbarWidth}px`;
    }
  }

  function unlockPageScroll(): void {
    document.body.style.overflow =
      document.body.dataset.previousOverflow ?? '';

    document.body.style.paddingRight =
      document.body.dataset.previousPaddingRight ?? '';

    delete document.body.dataset.previousOverflow;
    delete document.body.dataset.previousPaddingRight;
  }

  function openMenu(): void {
    const dialog = dialogRef.current;

    if (!dialog || dialog.open) {
      return;
    }

    clearCloseTimer();
    lockPageScroll();

    setIsOpen(false);
    setIsClosing(false);

    dialog.showModal();

    /*
     * Two animation frames ensure the browser paints the closed position
     * before transitioning to the open position.
     */
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsOpen(true);

        const firstLink =
          dialog.querySelector<HTMLAnchorElement>(
            '[data-mobile-menu-link]',
          );

        firstLink?.focus();
      });
    });
  }

  function finishClose(): void {
    const dialog = dialogRef.current;

    clearCloseTimer();
    setIsOpen(false);
    setIsClosing(false);

    if (dialog?.open) {
      dialog.close();
    }
  }

  function closeMenu(): void {
    const dialog = dialogRef.current;

    if (!dialog?.open || isClosing) {
      return;
    }

    setIsOpen(false);

    if (prefersReducedMotion()) {
      finishClose();
      return;
    }

    setIsClosing(true);

    /*
     * Keep the native dialog open while the visual exit transition runs.
     */
    closeTimerRef.current = window.setTimeout(
      finishClose,
      TRANSITION_DURATION,
    );
  }

  function handleDialogClose(): void {
    clearCloseTimer();
    setIsOpen(false);
    setIsClosing(false);

    unlockPageScroll();
    triggerRef.current?.focus();
  }

  function handleDialogCancel(event: Event): void {
    /*
     * Escape normally closes a dialog immediately. Prevent that default so
     * the closing animation can finish first.
     */
    event.preventDefault();
    closeMenu();
  }

  function handleDialogClick(event: MouseEvent): void {
    /*
     * The dialog fills the viewport. A click directly on the dialog rather
     * than its drawer panel is treated as a backdrop click.
     */
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  }

  function handleNavigationClick(): void {
    closeMenu();
  }

  useEffect(() => {
    return () => {
      clearCloseTimer();
      unlockPageScroll();
    };
  }, []);

  const dialogState = isClosing
    ? 'closing'
    : isOpen
      ? 'open'
      : 'closed';

  return (
    <div class="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Open navigation menu"
        aria-haspopup="dialog"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        class={cn(
          'inline-flex size-11 items-center justify-center',
          'rounded-full',
          'transition duration-200 ease-ember',
          'focus-visible:outline focus-visible:outline-3',
          'focus-visible:outline-offset-4',
          'motion-reduce:transition-none',
          isInverse
            ? [
                'text-canvas',
                'hover:bg-canvas/10',
                'active:bg-canvas/20',
                'focus-visible:outline-canvas',
              ]
            : [
                'text-ink',
                'hover:bg-oat',
                'active:bg-brand/25',
                'focus-visible:outline-clay',
              ],
        )}
        onClick={openMenu}
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-navigation-title"
        data-state={dialogState}
        class={cn(
          'group/dialog',
          'fixed inset-0',
          'm-0 h-dvh max-h-none w-screen max-w-none',
          'overflow-hidden border-0 p-0',
          'bg-ink/0 text-ink',
          'transition-colors duration-[280ms] ease-ember',
          'open:flex open:justify-end',
          'motion-reduce:transition-none',
          'data-[state=open]:bg-ink/65',
          'data-[state=closing]:bg-ink/0',
          'backdrop:bg-transparent',
        )}
        onClose={handleDialogClose}
        onCancel={handleDialogCancel}
        onClick={handleDialogClick}
      >
        <div
          class={cn(
            'flex h-full w-full max-w-sm flex-col',
            'bg-canvas shadow-overlay',
            'translate-x-full opacity-95',
            'transition-[transform,opacity]',
            'duration-[280ms] ease-ember',
            'will-change-transform',
            'motion-reduce:translate-x-0',
            'motion-reduce:opacity-100',
            'motion-reduce:transition-none',
            'group-data-[state=open]/dialog:translate-x-0',
            'group-data-[state=open]/dialog:opacity-100',
            'group-data-[state=closing]/dialog:translate-x-full',
            'group-data-[state=closing]/dialog:opacity-95',
          )}
          onClick={(event) => {
            /*
             * Prevent clicks inside the panel from reaching the full-screen
             * dialog backdrop handler.
             */
            event.stopPropagation();
          }}
        >
          <header
            class={cn(
              'flex min-h-20 items-center justify-between',
              'border-b border-ink/10',
              'px-4 py-3 sm:px-6',
            )}
          >
            <p
              id="mobile-navigation-title"
              class="font-display text-2xl font-semibold"
            >
              Menu
            </p>

            <button
              type="button"
              aria-label="Close navigation menu"
              class={cn(
                'inline-flex size-11 items-center justify-center',
                'rounded-full text-ink',
                'transition duration-200 ease-ember',
                'hover:bg-oat',
                'active:bg-brand/25',
                'focus-visible:outline focus-visible:outline-3',
                'focus-visible:outline-offset-4',
                'focus-visible:outline-clay',
                'motion-reduce:transition-none',
              )}
              onClick={closeMenu}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                stroke-width="1.75"
                stroke-linecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            </button>
          </header>

          <nav
            aria-label="Mobile navigation"
            class="flex-1 overflow-y-auto px-4 py-6 sm:px-6"
          >
            <ul class="space-y-1">
              {primaryNavigation.map((item) => {
                const current = isCurrentRoute(
                  currentPath,
                  item.href,
                );

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      data-mobile-menu-link
                      aria-current={
                        current
                          ? 'page'
                          : undefined
                      }
                      class={cn(
                        'relative flex min-h-14 items-center',
                        'rounded-panel px-4 py-3',
                        'font-display text-2xl font-semibold',
                        'transition duration-200 ease-ember',
                        'hover:bg-oat',
                        'active:bg-brand/25',
                        'focus-visible:outline focus-visible:outline-3',
                        'focus-visible:outline-offset-2',
                        'focus-visible:outline-clay',
                        'motion-reduce:transition-none',
                        current && 'bg-oat',
                      )}
                      onClick={handleNavigationClick}
                    >
                      {item.label}

                      {current && (
                        <span
                          class={cn(
                            'ml-auto',
                            'font-sans text-xs font-bold',
                            'uppercase tracking-wide text-clay',
                          )}
                        >
                          Current
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <footer
            class={cn(
              'border-t border-ink/10',
              'px-4 py-5 sm:px-6',
            )}
          >
            <p class="text-sm leading-relaxed text-ink/70">
              Coffee worth slowing down for.
            </p>
          </footer>
        </div>
      </dialog>
    </div>
  );
}