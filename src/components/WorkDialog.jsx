import { useEffect, useRef } from "react";

export default function WorkDialog({ work, onClose }) {
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!work) return;
    const prev = document.activeElement;
    closeRef.current?.focus();
    document.body.classList.add("locked");
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const els = panelRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (!panelRef.current.contains(document.activeElement)) {
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
      document.body.classList.remove("locked");
      window.removeEventListener("keydown", onKey);
      if (prev && typeof prev.focus === "function") prev.focus();
    };
  }, [work, onClose]);

  if (!work) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-6 md:p-12"
      role="dialog"
      aria-modal="true"
      aria-label={`${work.title} — ${work.kind}`}
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="dialog-panel grid w-full max-w-4xl gap-8 bg-ground text-ink md:grid-cols-[3fr_2fr]"
        onClick={(e) => e.stopPropagation()}
      >
        {work.img ? (
          <div className="overflow-hidden">
            <img
              src={work.img}
              alt={work.alt}
              width="1200"
              height="1500"
              className="dialog-img h-full max-h-[70vh] w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex h-full min-h-[240px] items-center justify-center bg-tone p-8">
            <span className="text-[10vw] font-black leading-none tracking-[-0.05em] md:text-[6vw]">
              {work.title.slice(0, 2)}
            </span>
          </div>
        )}
        <div className="flex flex-col justify-between gap-10 p-6 md:p-8">
          <div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-black uppercase leading-[0.95] tracking-[-0.04em]">
              {work.title}
            </h2>
            <p className="mt-4 text-[16px] text-soft">
              {work.kind} · {work.year}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button ref={closeRef} type="button" onClick={onClose} className="btn">
              Close
            </button>
            {work.by && (
              <span className="text-[14px] text-soft">photo {work.by}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
