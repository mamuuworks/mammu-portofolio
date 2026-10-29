import { CONTACT, GUIDELINE, HERO_VIDEO, TERMS, WORKS } from "../data.js";

const FRAMES = WORKS.slice(2, 5);

function TermRows({ items, offset = 0 }) {
  return (
    <div className="space-y-10 md:space-y-12">
      {items.map((t, i) => (
        <div
          key={t.term}
          className="grid gap-3 md:grid-cols-[34%_1fr] md:gap-10"
        >
          <h3
            data-rise
            style={{ "--d": `${offset + i * 50}ms` }}
            className="text-[18px] font-black uppercase tracking-[-0.01em] md:pt-1"
          >
            {t.term}
          </h3>
          <p
            data-rise
            style={{ "--d": `${offset + i * 50 + 50}ms` }}
            className="max-w-[62ch] text-[16px] leading-[1.55]"
          >
            {t.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Tos() {
  return (
    <section
      aria-labelledby="tos-heading"
      className="w-full px-6 pb-32 pt-10 md:px-12 md:pb-44 md:pt-16"
    >
      <h1
        id="tos-heading"
        data-rise
        className="text-[clamp(44px,7vw,108px)] font-black uppercase leading-[0.92] tracking-[-0.045em]"
      >
        Terms of service
      </h1>
      <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
        <p
          data-rise
          style={{ "--d": "100ms" }}
          className="max-w-[40ch] text-[clamp(19px,1.7vw,26px)] leading-[1.4] tracking-[-0.01em]"
        >
          The short version of how a commission with mammu runs.
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          data-rise
          style={{ "--d": "160ms" }}
          className="btn shrink-0"
        >
          Ask a question
        </a>
      </div>

      <div className="mt-20 md:mt-28">
        <TermRows items={TERMS} />
      </div>

      <div className="mt-24 md:mt-32">
        <h2
          data-rise
          className="text-[clamp(28px,3.4vw,48px)] font-black uppercase leading-[0.95] tracking-[-0.04em]"
        >
          Commission guideline
        </h2>
        <div className="mt-10 md:mt-14">
          <TermRows items={GUIDELINE} offset={60} />
        </div>
      </div>

      <figure className="mt-20 md:mt-28">
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
          Frames from recent works · loop: “E Ink Screen updating” by Alexander
          Gee, CC BY-SA 4.0
        </figcaption>
      </figure>

      <p data-rise className="mt-14 max-w-[52ch] text-[16px] text-soft">
        Anything not covered here? Ask before the deposit: {CONTACT.email}
      </p>
    </section>
  );
}
