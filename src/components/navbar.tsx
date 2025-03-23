"use client";

import { cva } from "@/lib/cva";
import { leftNavItems, rightNavItems } from "@/utils/navItems";
import { cx } from "cva";
import { Plus } from "lucide-react";
import { useRef } from "react";

function NavbarBackgrond() {
  return (
    <div
      className={cx(
        "absolute left-1/2 -translate-x-1/2 bg-[#242424] rounded-[8px] transition-all duration-700",
        "group-data-[visible=true]:w-[558px] group-data-[visible=true]:h-9 group-data-[visible=true]:top-[-2px]",
        "group-data-[visible=false]:size-8"
      )}
      style={{
        zIndex: -1,
      }}
    />
  );
}

function NavbarItemsContent({
  children,
  position,
}: {
  children: React.ReactNode;
  position: "left" | "right";
}) {
  const navbarItemsContentStyle = cva({
    base: [
      "absolute flex items-center gap-4 transition-all",
      "group-data-[visible=true]:duration-[1400ms] group-data-[visible=true]:translate-x-0 group-data-[visible=true]:opacity-100",
      "group-data-[visible=false]:opacity-0 group-data-[visible=false]:duration-200 group-data-[visible=false]:invisible",
    ],
    variants: {
      variant: {
        right: ["right-full pr-4 group-data-[visible=false]:translate-x-12"],
        left: ["left-full pl-4 group-data-[visible=false]:-translate-x-12"],
      },
    },
  });

  return (
    <div className={navbarItemsContentStyle({ variant: position })}>
      {children}
    </div>
  );
}

function NavbarItem({ item }: { item: string }) {
  return (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      className="text-primary text-sm hover:text-secondary transition-colors"
    >
      {item}
    </a>
  );
}

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  function handleNavbarVisiblyToggle() {
    const currentNegativeAttributeValue =
      navRef.current?.getAttribute("data-visible") === "true"
        ? "false"
        : "true";

    if (navRef.current) {
      navRef.current.setAttribute(
        "data-visible",
        currentNegativeAttributeValue
      );
    }
  }

  return (
    <nav
      ref={navRef}
      data-visible="false"
      className="fixed top-[18px] left-1/2 -translate-x-1/2 z-50 group"
    >
      <div className="relative flex items-center">
        <NavbarItemsContent position="right">
          {leftNavItems.map((item) => (
            <NavbarItem key={item} item={item} />
          ))}
        </NavbarItemsContent>

        <button
          type="button"
          aria-label="Navbar Trigger"
          onClick={() => handleNavbarVisiblyToggle()}
          className={cx(
            "z-50 size-8 cursor-pointer rounded-[6px] flex items-center justify-center transition-all duration-400",
            "group-data-[visible=true]:bg-[#121212]",
            "group-data-[visible=false]:bg-[#242424]"
          )}
        >
          <Plus
            size={22}
            strokeWidth={1}
            className={cx(
              "text-[#ABABAB] text-base transition-transform duration-700",
              "group-data-[visible=true]:rotate-45",
              "group-data-[visible=false]:rotate-0"
            )}
          />
        </button>

        <NavbarItemsContent position="left">
          {rightNavItems.map((item) => (
            <NavbarItem key={item} item={item} />
          ))}
        </NavbarItemsContent>

        <NavbarBackgrond />
      </div>
    </nav>
  );
}
