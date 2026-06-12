"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import Logo from "./Logo";
import TopBar from "./TopBar";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type NavLinkProps = {
  href: string;
  label: string;
  active: boolean;
  onNavigate?: () => void;
  onStartNavigate?: () => void;
  className?: string;
};

function NavLinkItem({
  href,
  label,
  active,
  onNavigate,
  onStartNavigate,
  className = "",
}: NavLinkProps) {
  return (
    <Link
      href={href}
      prefetch
      onClick={() => {
        onStartNavigate?.();
        onNavigate?.();
      }}
      className={`relative z-10 block whitespace-nowrap pb-1 text-[11px] font-bold uppercase tracking-[0.1em] transition hover:text-gold md:text-xs ${className} ${
        active
          ? "text-gold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-gold"
          : "text-navy"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setOpen(false);
  const startNavigate = () => setNavigating(true);

  useEffect(() => {
    setNavigating(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-cream-light shadow-[0_1px_8px_rgba(26,36,47,0.08)]">
      {navigating && (
        <div
          className="absolute inset-x-0 top-0 z-[60] h-0.5 overflow-hidden bg-gold/20"
          aria-hidden="true"
        >
          <div className="nav-progress h-full w-1/3 bg-gold" />
        </div>
      )}
      <TopBar />

      <div className="border-b border-cream-dark">
        <div className="section-container">
          {/* Desktop & tablette */}
          <div className="relative hidden h-[76px] items-center md:flex">
            <Link href="/" prefetch className="relative z-20 shrink-0" onClick={startNavigate}>
              <Logo />
            </Link>

            <nav
              aria-label="Navigation principale"
              className="pointer-events-auto absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 lg:gap-7 xl:gap-9"
            >
              {navLinks.map((link) => (
                <NavLinkItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  active={isActive(pathname, link.href)}
                  onStartNavigate={startNavigate}
                />
              ))}
            </nav>
          </div>

          {/* Mobile */}
          <div className="relative md:hidden">
            <div className="relative z-[80] flex h-[68px] items-center justify-between">
              <Link
                href="/"
                prefetch
                className="relative z-20 shrink-0"
                onClick={() => {
                  startNavigate();
                  closeMenu();
                }}
              >
                <Logo compact />
              </Link>
              <button
                type="button"
                className="relative z-30 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-navy touch-manipulation"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((v) => !v);
                }}
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {open && (
              <>
                <button
                  type="button"
                  className="fixed inset-0 z-[70] bg-navy/40 md:hidden"
                  aria-label="Fermer le menu"
                  onClick={closeMenu}
                />
                <nav
                  id="mobile-menu"
                  aria-label="Menu mobile"
                  className="fixed inset-x-0 top-[68px] z-[75] max-h-[calc(100dvh-68px)] overflow-y-auto border-b border-cream-dark bg-cream-light px-4 py-6 shadow-lg md:hidden"
                >
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <NavLinkItem
                        key={link.href}
                        href={link.href}
                        label={link.label}
                        active={isActive(pathname, link.href)}
                        onNavigate={closeMenu}
                        onStartNavigate={startNavigate}
                        className="text-sm"
                      />
                    ))}
                  </div>
                </nav>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
