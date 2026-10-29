// Sample content — swap with real works, facts and links before launch.
const px = (id, w = 1200, h = 1500) =>
  `https://picsum.photos/id/${id}/${w}/${h}?grayscale`;

export const WORKS = [
  {
    title: "AFTERGLOW",
    year: "2026",
    kind: "Music video",
    img: px(942),
    alt: "White angular concrete building against a black sky",
    by: "Carl Nenzen Loven",
  },
  {
    title: "NOIRFM",
    year: "2025",
    kind: "Station identity",
    img: px(620),
    alt: "White arched bridge spanning grey water under a pale sky",
    by: "Matthew Wiebe",
  },
  {
    title: "STATIC BLOOM",
    year: "2025",
    kind: "Tour visuals",
    img: px(1081),
    alt: "Stepped white modern building corner rising into a pale sky",
    by: "Julien Moreau",
  },
  {
    title: "GRAYSCALE FEST",
    year: "2024",
    kind: "Festival identity",
    img: px(639),
    alt: "Ferris wheel curving against a clear sky",
    by: "Ilya",
  },
  {
    title: "HALF//LIGHT",
    year: "2023",
    kind: "Lyric film",
    img: px(887),
    alt: "White apartment block facade with repeating balconies",
    by: "Roman Kraft",
  },
  { title: "VESPER", year: "2025", kind: "Stage visuals" },
  { title: "OBLIQUE", year: "2023", kind: "Album art and loops" },
  { title: "KASSA", year: "2022", kind: "Product film" },
];

// Home hero footage — black microspheres forming glyphs on an e-ink screen.
export const HERO_VIDEO = {
  src: "/media/eink.webm",
  poster: "/media/eink-poster.jpg",
};

export const ABOUT_IMG = {
  src: px(781, 2400, 1350),
  alt: "Dark station platform with a row of bright windows, black and white",
  by: "Matthew Wiebe",
};

export const CLIENTS = [
  { name: "NOIRFM", year: "2025" },
  { name: "VESPER", year: "2025" },
  { name: "GRAYSCALE FEST", year: "2024" },
  { name: "KASSA", year: "2024" },
  { name: "HALF//LIGHT", year: "2023" },
  { name: "OBLIQUE", year: "2023" },
];

export const SHOWS = [
  { name: "Loop Fest, Jakarta", year: "2025" },
  { name: "Move West showcase", year: "2025" },
  { name: "Monochrome Sessions", year: "2024" },
  { name: "Night Frequency FM", year: "2023" },
  { name: "Static Room, Bandung", year: "2022" },
  { name: "First print run", year: "2021" },
];

export const PRICE = {
  unit: "per finished minute, starts from",
  tiers: [
    {
      name: "Simple",
      price: "$80",
      weeks: "1–2 weeks",
      features: [
        "Simple, sharp effects",
        "Clean, minimal design",
        "Type animations",
      ],
    },
    {
      name: "Standard",
      price: "$120",
      weeks: "2–3 weeks",
      features: [
        "3D camera movements",
        "Multiple scenes",
        "Strong visual effects",
      ],
    },
    {
      name: "Complex",
      price: "$160",
      weeks: "2–4 weeks",
      features: [
        "Complex 3D camera movements",
        "Varied scenes",
        "2D + 3D visuals, advanced effects",
        "Lyric animation",
        "Character animation*",
      ],
    },
    {
      name: "Custom",
      price: null,
      weeks: "quoted per project",
      features: ["Adjusted to your needs and scope"],
    },
  ],
  addons: [
    {
      term: "Rush fee",
      body: "Starts at 50% of the project price, depending on the turnaround requested. Very tight deadlines can raise it to 100% of the original price.",
    },
    {
      term: "Major revision",
      body: "Revision fees depend on scope. Requests that significantly deviate from the concept agreed at the start are charged up to 50% of the original price.",
    },
    {
      term: "Character animation",
      body: "$25–50 per character when artwork arrives layered (hair, arms, legs separated). Redrawing or layer separation raises the fee to up to $100 per character.",
    },
    {
      term: "3D scenes",
      body: "Complex includes 1–2 3D sets; each extra set is $100. Simple and Standard include none by default — 3D can be added at $100 per set.",
    },
  ],
};

export const TERMS = [
  {
    term: "Ownership",
    body: "Please do not claim the work as your own. Proper credit must be given whenever the video is published — for example, “Video by: mammu (@mammuwork)”. Requests to remove the credit, or publishing without attribution, incur an additional fee.",
  },
  {
    term: "Commercial fee",
    body: "Projects intended for commercial use — monetized music videos, original songs, promotional content or other revenue-generating works — carry an additional licensing fee of 100% of the original project price.",
  },
  {
    term: "Right to decline",
    body: "mammu reserves the right to decline any commission, particularly if the project falls outside its expertise, exceeds current capabilities, or if the proposed terms do not fit the workflow and working conditions.",
  },
  {
    term: "Revisions",
    body: "Minor revisions are unlimited when they correct mistakes on mammu's end, such as typos or small errors. Requests that deviate from the originally agreed concept or scope incur an additional revision fee.",
  },
  {
    term: "Refunds",
    body: "Refunds and cancellations are not available once work has commenced. If a project is cancelled after progress has been made, payments already made are non-refundable and forfeited.",
  },
  {
    term: "File retention",
    body: "For projects inactive for more than six months due to a lack of communication, retention of project files, assets and backups cannot be guaranteed. Rebuilding lost portions after resuming may require additional fees and time.",
  },
];

export const GUIDELINE = [
  {
    term: "Assets and material",
    body: "All assets and materials must be prepared and delivered before production begins — music, illustrations, logos and any other required resources.",
  },
  {
    term: "Resolution and framerate",
    body: "Projects are produced at 1920 × 1080 and 24 FPS by default. Exports up to 4K are available on request, made at the beginning of the project.",
  },
  {
    term: "Down payment",
    body: "A down payment of at least 50% of the total project price is required before work can begin.",
  },
  {
    term: "References and ideas",
    body: "Specific references or ideas must come as clear guidelines or a storyboard before production begins. Otherwise, creative direction and visual interpretation are left to mammu's discretion.",
  },
];

export const CONTACT = {
  email: "hello@mammu.studio",
  city: "Jakarta, Indonesia · GMT+7",
  socials: [
    { label: "Instagram", href: "https://instagram.com/mammu.work" },
    { label: "X", href: "https://x.com/mammuwork" },
    { label: "SoundCloud", href: "https://soundcloud.com/mammuwork" },
  ],
};

export const CREDITS =
  'Photos: Carl Nenzen Loven, Matthew Wiebe, Julien Moreau, Ilya, Roman Kraft (Unsplash) · Footage: "E Ink Screen updating" by Alexander Gee, CC BY-SA 4.0 (Wikimedia Commons)';
