import { CONTACT, HERO_VIDEO, WORKS } from "../data.js";

const FRAMES = WORKS.slice(0, 3);

export default function Contact() {
  return (
    <section
      aria-label="Contact"
      className="relative flex min-h-[calc(100svh-140px)] flex-col px-6 pb-10 pt-14 text-white md:px-12 md:pt-20"
    >
      <h1
        data-rise
        className="max-w-[24ch] text-[clamp(32px,3.4vw,46px)] font-black uppercase leading-[1.04] tracking-[-0.04em]"
      >
        New track, new show — tell me.
      </h1>

      <a
        href={`mailto:${CONTACT.email}`}
        data-rise
        style={{ "--d": "120ms" }}
        className="mt-auto block w-full break-all pt-16 text-[clamp(34px,8.6vw,140px)] font-normal leading-[1.02] tracking-[-0.04em] text-white transition-colors duration-300 hover:text-soft"
      >
        {CONTACT.email}
      </a>

      <div
        data-rise
        style={{ "--d": "200ms" }}
        className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
      >
        <a href={`mailto:${CONTACT.email}`} className="btn">
          Start a project
        </a>
        <p className="text-soft">Replies within two working days</p>
      </div>

      <div className="mt-14">
        <figure>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {FRAMES.map((w, i) => (
              <img
                key={w.title}
                data-rise
                style={{ "--d": `${280 + i * 60}ms` }}
                src={w.img}
                alt={w.alt}
                width="1200"
                height="1500"
                className="aspect-[4/5] w-full object-cover"
              />
            ))}
            <div
              data-rise
              style={{ "--d": "460ms" }}
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
            style={{ "--d": "520ms" }}
            className="mt-3 max-w-[70ch] text-[16px] text-soft"
          >
            Frames from recent works · loop: “E Ink Screen updating” by
            Alexander Gee, CC BY-SA 4.0
          </figcaption>
        </figure>
      </div>

      <div
        data-rise
        style={{ "--d": "600ms" }}
        className="mt-10 flex flex-col gap-6 text-[16px] md:flex-row md:items-baseline md:justify-between"
      >
        <p data-rise className="text-soft">
          {CONTACT.city}
        </p>
        <nav aria-label="Social links" className="flex gap-6">
          {CONTACT.socials.map((s, i) => (
            <a
              key={s.label}
              data-rise
              style={{ "--d": `${640 + i * 60}ms` }}
              href={s.href}
              className="tlink"
              target="_blank"
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
