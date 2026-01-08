"use client";

import { cx } from "cva";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import { cva } from "@/lib/cva";
import { leftNavItems, type NavItem, rightNavItems } from "@/utils/navItems";

function NavbarBackground() {
  return (
    <div
      className={cx(
        "absolute left-1/2 -z-10 -translate-x-1/2 rounded-[8px] bg-input-background transition-all duration-700",
        "group-data-[visible=true]:top-[-8px] group-data-[visible=true]:h-[340px] group-data-[visible=true]:w-[220px] group-data-[visible=false]:top-0",
        "sm:group-data-[visible=true]:top-[-2px] sm:group-data-[visible=true]:h-9 sm:group-data-[visible=true]:w-(--navbar-width,520px)",
        "group-data-[visible=false]:size-4 sm:group-data-[visible=false]:size-8"
      )}
    />
  );
}

const navbarItemsContentStyle = cva({
  base: [
    "absolute flex flex-col items-center gap-5 transition-all",
    "sm:flex-row sm:gap-4",
    "group-data-[visible=true]:translate-x-0 group-data-[visible=true]:opacity-100 group-data-[visible=true]:duration-[1400ms]",
    "group-data-[visible=false]:invisible group-data-[visible=false]:opacity-0 group-data-[visible=false]:duration-200",
  ],
  variants: {
    variant: {
      right: [
        "-right-[22px] top-13 group-data-[visible=false]:-translate-y-12",
        "sm:top-1.5 sm:right-full sm:pr-4 sm:group-data-[visible=false]:translate-x-12 sm:group-data-[visible=false]:-translate-y-0",
      ],
      left: [
        "-right-[20px] top-[212px] pl-1 group-data-[visible=false]:-translate-y-12",
        "sm:top-1.5 sm:left-full sm:pl-4 sm:group-data-[visible=false]:-translate-x-12 sm:group-data-[visible=false]:-translate-y-0",
      ],
    },
  },
});

function NavbarItemsContent({
  children,
  position,
  ref,
}: _WithChildren & {
  position: "left" | "right";
  ref: React.Ref<HTMLDivElement>;
}) {
  return (
    <div ref={ref} className={navbarItemsContentStyle({ variant: position })}>
      {children}
    </div>
  );
}

function NavbarItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const t = useTranslations("Nav.items");

  return (
    <Link
      href={`/#${item}`}
      onClick={onNavigate}
      className="whitespace-nowrap text-primary text-sm transition-colors hover:text-secondary"
    >
      {t(item)}
    </Link>
  );
}

export function Navbar() {
  const t = useTranslations("Nav");
  const [isOpen, setIsOpen] = useState(false);
  const itemsId = useId();
  const navRef = useRef<HTMLElement>(null);
  const leftItemsRef = useRef<HTMLDivElement>(null);
  const rightItemsRef = useRef<HTMLDivElement>(null);

  // Labels change width per locale, so the expanded background is sized from
  // the widest side (the trigger stays centered).
  useLayoutEffect(() => {
    const nav = navRef.current;
    const left = leftItemsRef.current;
    const right = rightItemsRef.current;
    if (!(nav && left && right)) {
      return;
    }

    const TRIGGER_WIDTH = 32;
    const EDGE_PADDING = 24;
    const observer = new ResizeObserver(() => {
      const side = Math.max(left.offsetWidth, right.offsetWidth);
      nav.style.setProperty(
        "--navbar-width",
        `${side * 2 + TRIGGER_WIDTH + EDGE_PADDING}px`
      );
    });

    observer.observe(left);
    observer.observe(right);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <nav
      ref={navRef}
      aria-label={t("label")}
      data-navbar
      data-visible={isOpen}
      className="group fixed top-[18px] left-1/2 z-50 -translate-x-1/2"
    >
      <div id={itemsId} className="relative flex items-center">
        <NavbarItemsContent position="right" ref={leftItemsRef}>
          {leftNavItems.map((item) => (
            <NavbarItem key={item} item={item} onNavigate={close} />
          ))}
        </NavbarItemsContent>

        <button
          type="button"
          aria-label={isOpen ? t("close") : t("open")}
          aria-expanded={isOpen}
          aria-controls={itemsId}
          onClick={() => setIsOpen((current) => !current)}
          className={cx(
            "z-50 flex size-8 cursor-pointer items-center justify-center rounded-[6px] transition-all duration-400",
            "group-data-[visible=true]:bg-background",
            "group-data-[visible=false]:bg-input-background"
          )}
        >
          <Plus
            size={22}
            strokeWidth={1}
            className={cx(
              "text-secondary transition-transform duration-700",
              "group-data-[visible=true]:rotate-45",
              "group-data-[visible=false]:rotate-0"
            )}
          />
        </button>

        <NavbarItemsContent position="left" ref={rightItemsRef}>
          {rightNavItems.map((item) => (
            <NavbarItem key={item} item={item} onNavigate={close} />
          ))}
        </NavbarItemsContent>

        <NavbarBackground />
      </div>
    </nav>
  );
}
