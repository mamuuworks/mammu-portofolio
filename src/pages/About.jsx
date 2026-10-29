import { Link } from "react-router-dom";
import {
  ABOUT_IMG,
  CLIENTS,
  HERO_VIDEO,
  SHOWS,
  WORKS,
} from "../data.js";

const FRAMES = WORKS.slice(0, 3);

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="px-6 pb-32 pt-16 md:px-12 md:pb-44 md:pt-24">
      <h1
        id="about-heading"
        data-rise
        className="text-[clamp(44px,7vw,108px)] font-black uppercase leading-[0.92] tracking-[-0.045em]"
      >
        About mammu
      </h1>

      <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-[34%_1fr]">
        <dl className="grid max-w-[260px] grid-cols-2 gap-x-6 gap-y-5 text-[16px] md:block md:space-y-5">
          <div data-rise>
            <dt className="text-soft">Based in</dt>
            <dd className="mt-1 font-bold md:mt-1">Jakarta, Indonesia</dd>
          </div>
          <div data-rise style={{ "--d": "100ms" }}>
            <dt className="text-soft">Practice since</dt>
            <dd className="mt-1 font-bold md:mt-1">2019</dd>
          </div>
          <div data-rise style={{ "--d": "160ms" }}>
            <dt className="text-soft">Works with</dt>
            <dd className="mt-1 font-bold md:mt-1">
              Musicians, labels, festivals
            </dd>
          </div>
        </dl>
        <div>
          <p
            data-rise
            style={{ "--d": "220ms" }}
            className="max-w-[62ch] text-[clamp(19px,1.7vw,26px)] leading-[1.4] tracking-[-0.01em]"
          >
            mammu is a multimedia artist working only in black and white. The
            practice covers music videos, stage visuals and identities, built
            from type, light and grain instead of colour. Every piece starts as a
            storyboard on paper and ends as motion: loops for live shows, titles
            for releases, quiet systems for brands that want to be recognized
            without shouting.
          </p>
          <div data-rise style={{ "--d": "300ms" }} className="mt-10">
            <Link to="/contact" className="btn">
              Start a project
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-10 md:mt-32 md:grid-cols-[34%_1fr]">
        <h2 data-rise className="text-[14px] font-bold uppercase tracking-[0.02em] md:pt-1">
          Record
        </h2>
        <div className="flex flex-col gap-12 md:flex-row md:gap-16">
          <ul
            data-rise
            className="min-w-0 flex-1 space-y-2.5 text-[16px] md:max-w-[260px]"
          >
            {CLIENTS.map((c) => (
              <li key={c.name} className="flex justify-between gap-4">
                <span className="font-bold">{c.name}</span>
                <span className="tabular-nums text-soft">{c.year}</span>
              </li>
            ))}
          </ul>
          <ul
            data-rise
            style={{ "--d": "120ms" }}
            className="min-w-0 flex-1 space-y-2.5 text-[16px] md:max-w-[260px]"
          >
            {SHOWS.map((s) => (
              <li key={s.name} className="flex justify-between gap-4">
                <span className="font-bold">{s.name}</span>
                <span className="tabular-nums text-soft">{s.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figure data-rise className="mt-24 md:mt-32">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {FRAMES.map((w, i) => (
            <img
              key={w.title}
              data-rise
              style={{ "--d": `${i * 60}ms` }}
              src={w.img}
              alt={w.alt}
              width="1200"
              height="1500"
              className="aspect-[4/5] w-full object-cover"
            />
          ))}
          <div
            data-rise
            style={{ "--d": "180ms" }}
            className="loop-media relative aspect-[4/5] overflow-hidden"
          >
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
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
          </div>
        </div>
        <figcaption
          data-rise
          className="mt-3 max-w-[70ch] text-[16px] text-soft"
        >
          Frames: {FRAMES.map((w) => w.title).join(", ")} · loop: “E Ink Screen
          updating” by Alexander Gee, CC BY-SA 4.0
        </figcaption>
      </figure>

      <figure data-rise className="mt-24 md:mt-32">
        <img
          src={ABOUT_IMG.src}
          alt={ABOUT_IMG.alt}
          width="2400"
          height="1350"
          loading="lazy"
          className="h-[52svh] w-full object-cover md:h-[64svh]"
        />
        <figcaption
          data-rise
          className="mt-3 flex flex-col gap-1 text-[14px] text-soft md:flex-row md:justify-between"
        >
          <span>Atmosphere frame: the world the work comes from</span>
          <span>photo {ABOUT_IMG.by}</span>
        </figcaption>
      </figure>
    </section>
  );
}
