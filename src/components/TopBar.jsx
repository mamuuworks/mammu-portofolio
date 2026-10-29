import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const LINKS = [
  { label: "Work", to: "/" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Terms", to: "/tos" },
  { label: "Contact", to: "/contact" },
];

export function TopBar({ inverse = false }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const overlayRef = useRef(null);
  const [phase, setPhase] = useState("idle"); // idle | cover | reveal

  // Close the menu and the curtain whenever the route settles.
  useEffect(() => {
    setPhase("idle");
  }, [location.pathname]);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("mammu:menu", { detail: open }),
    );
    document.body.classList.toggle("locked", open);
    const prev = open ? document.activeElement : null;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !open || !overlayRef.current) return;
      const els = overlayRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (!overlayRef.current.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("locked");
      if (prev && typeof prev.focus === "function") prev.focus();
    };
  }, [open]);

  const go = (to) => (e) => {
    e.preventDefault();
    if (to === location.pathname) {
      setOpen(false);
      return;
    }
    setOpen(false);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      navigate(to);
      return;
    }
    setPhase("cover");
    setTimeout(() => {
      navigate(to);
      setPhase("reveal");
      setTimeout(() => setPhase("idle"), 340);
    }, 340);
  };

  const ink = inverse ? "text-white" : "text-ink";
  // Over the Home hero the bar sits on footage: difference keeps it readable
  // whether the e-ink clip is light or dark.
  const blend = location.pathname === "/";

  return (
    <>
      <header
        className={`relative z-20 flex items-baseline justify-between px-6 pt-8 md:px-12 md:pt-11 ${
          blend ? "mix-blend-difference text-white" : ink
        }`}
      >
        <Link
          to="/"
          onClick={go("/")}
          className="text-[22px] font-bold leading-none tracking-[-0.02em]"
          aria-label="mammu — home"
        >
          mammu
        </Link>
        <nav aria-label="Primary" className="flex items-baseline gap-10">
          <Link to="/" onClick={go("/")} className="tlink hidden md:inline-block">
            Work
          </Link>
          <Link
            to="/about"
            onClick={go("/about")}
            className="tlink hidden md:inline-block"
          >
            About
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="menu-overlay"
            className="tlink"
          >
            Menu +
          </button>
        </nav>
      </header>

      {open && (
        <div
          id="menu-overlay"
          ref={overlayRef}
          className="menu-open fixed inset-0 z-40 bg-ink text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex items-baseline justify-between px-6 pt-8 md:px-12 md:pt-11">
            <span className="text-[22px] font-bold tracking-[-0.02em]">
              mammu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="tlink"
              autoFocus
            >
              Close ×
            </button>
          </div>
          <nav
            aria-label="Menu"
            className="flex h-[70vh] flex-col justify-center px-6 md:px-12"
          >
            <ul className="space-y-1">
              {LINKS.map((l, i) => (
                <li key={l.to} className="line-mask menu-line">
                  <span style={{ "--d": `${120 + i * 70}ms` }}>
                    <a
                      href={`#${l.to}`}
                      onClick={go(l.to)}
                      className="menu-link text-[13vw] md:text-[7.5vw]"
                    >
                      {l.label}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          <p className="absolute bottom-8 left-6 text-[16px] font-bold text-soft md:left-12">
            Monochrome visuals · Jakarta · GMT+7
          </p>
        </div>
      )}

      <div
        className={`curtain ${phase === "cover" ? "cover" : ""} ${
          phase === "reveal" ? "reveal" : ""
        }`}
        aria-hidden="true"
      />
    </>
  );
}
