import { useState } from "react";
import { Link } from "react-router-dom";
import { WORKS, HERO_VIDEO, CREDITS, CONTACT } from "../data.js";
import WorkDialog from "../components/WorkDialog.jsx";

export default function Home() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* Hero — e-ink footage full bleed under the navbar, statement over it */}
      <section
        aria-label="Introduction"
        className="relative -mt-[54px] flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-10 md:-mt-[66px] md:px-12"
      >
        <div className="hero-media absolute inset-0">
          <img
            src={HERO_VIDEO.poster}
            alt=""
            width="1280"
            height="720"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <video
            src={HERO_VIDEO.src}
            poster={HERO_VIDEO.poster}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            width="854"
            height="480"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
        </div>

        <div className="relative">
          <div className="grid items-end gap-8 md:grid-cols-[42%_1fr]">
            <p
              data-rise
              style={{ "--d": "700ms" }}
              className="max-w-[32ch] bg-white box-decoration-clone px-2 -mx-2 text-[18px] font-bold leading-[1.7] md:pb-3"
            >
              mammu is a multimedia artist making monochrome visuals, motion
              and identity for musicians and brands.
            </p>
            <h1 className="font-black uppercase leading-[0.92] tracking-[-0.045em] text-[clamp(44px,7vw,108px)]">
              <span className="line-mask">
                <span style={{ "--d": "80ms" }}>Motion,</span>
              </span>
              <span className="line-mask">
                <span style={{ "--d": "200ms" }}>monochrome.</span>
              </span>
            </h1>
          </div>
          <div className="mt-8 flex items-end justify-between gap-6 md:mt-10">
            <span
              data-rise
              style={{ "--d": "820ms" }}
              className="text-[14px] font-bold"
            >
              Selected work below
            </span>
            <Link
              to="/contact"
              data-rise
              style={{ "--d": "900ms" }}
              className="btn"
            >
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* Work — one row per piece, thumb and title */}
      <section
        aria-labelledby="work-heading"
        className="px-6 pb-24 pt-16 md:px-12 md:pb-24 md:pt-20"
      >
        <h2
          id="work-heading"
          data-rise
          className="font-black uppercase leading-none tracking-[-0.04em] text-[clamp(30px,3.4vw,44px)]"
        >
          Selected work
        </h2>
        <ul className="mt-8 md:mt-12">
          {WORKS.map((w, i) => (
            <li key={w.title} data-rise style={{ "--d": `${i * 60}ms` }}>
              <button
                type="button"
                onClick={() => setActive(w)}
                aria-haspopup="dialog"
                className="work-row"
              >
                <span className="work-row-text">
                  <span className="work-row-title">{w.title}</span>
                  <span className="work-row-meta">
                    {w.kind} · {w.year}
                  </span>
                </span>
                {w.img && (
                  <span className="work-row-thumb">
                    <img
                      src={w.img}
                      alt={w.alt}
                      width="440"
                      height="330"
                      className="h-full w-full object-cover"
                    />
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-14 md:mt-20">
          <Link
            to="/contact"
            data-rise
            className="flex flex-col gap-3 border-t-2 border-ink pt-6 md:flex-row md:items-end md:justify-between md:gap-6"
          >
            <span className="font-black uppercase leading-[0.92] tracking-[-0.045em] text-[clamp(34px,4.6vw,72px)]">
              Start a project
            </span>
            <span className="pb-1 text-[16px] font-bold">
              {CONTACT.email}
            </span>
          </Link>
        </div>
        <div className="mt-10 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <p data-rise className="text-[16px] text-soft">
            Eight works · 2022–2026 · commissions open
          </p>
          <p data-rise className="max-w-[52ch] text-[16px] text-soft">
            {CREDITS}
          </p>
        </div>
      </section>

      <WorkDialog work={active} onClose={() => setActive(null)} />
    </>
  );
}
