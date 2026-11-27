import { useState } from "react";

const EMAIL = "pratikvyas247@gmail.com";
const PHONE_DISPLAY = "+91 82003 96237";
const PHONE_INTL = "918200396237"; // country code + number, no spaces or +
const LINKEDIN_URL = "https://www.linkedin.com/in/pratikvyas10";

// small wrapper so every icon shares the same size and stroke
const Icon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    className="size-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const methods = [
  {
    label: "WhatsApp",
    value: PHONE_DISPLAY,
    href: `https://wa.me/${PHONE_INTL}`,
    external: true,
    icon: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    label: "Call",
    value: PHONE_DISPLAY,
    href: `tel:+${PHONE_INTL}`,
    external: false,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    value: "in/pratikvyas10",
    href: LINKEDIN_URL,
    external: true,
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
];

const inputClass =
  "w-full rounded-xl border border-line bg-night/60 px-4 py-3 text-sm text-ink outline-none transition placeholder:text-ink-low focus:border-sakura focus:shadow-glow";

const Contact = () => {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // there is no backend, so submitting opens the visitor's email app
  // with the subject and message already filled in
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Hello from ${form.name}`;
    const body = `${form.message}\n\n- ${form.name}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-12 max-md:px-4 max-md:pt-8">
      {/* hero */}
      <div className="text-center">
        <span className="text-2xl text-sakura">✦</span>
        <h1 className="text-gradient mt-2 font-display text-4xl uppercase tracking-wide max-md:text-3xl">
          Contact
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-mid">
          Have a question, an idea, or just want to say hi? Pick whichever
          channel suits you, or send a message right here.
        </p>
      </div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-5">
        {/* contact method cards */}
        <ul className="flex flex-col gap-4 lg:col-span-2">
          {methods.map(({ label, value, href, external, icon }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group flex items-center gap-4 rounded-2xl border border-line bg-panel p-4 shadow-card transition duration-300 hover:-translate-y-0.5 hover:border-sakura/60 hover:shadow-card-hover"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-sakura/20 to-violet/20 text-sakura ring-1 ring-sakura/30">
                  <Icon>{icon}</Icon>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-[11px] uppercase tracking-wider text-ink-low">
                    {label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-semibold text-ink">
                    {value}
                  </span>
                </span>
                <span className="text-ink-low transition group-hover:translate-x-1 group-hover:text-sakura">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* message form */}
        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-3xl border border-line bg-panel p-7 shadow-card max-md:p-5 lg:col-span-3"
        >
          {/* soft gradient glow in the corner */}
          <span className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-linear-to-br from-sakura/25 to-violet/25 blur-3xl" />

          <h2 className="relative font-display text-lg uppercase tracking-wider text-ink">
            Send a message
          </h2>
          <p className="relative mt-1.5 text-sm text-ink-low">
            This opens your email app with everything filled in, ready to send.
          </p>

          <div className="relative mt-6 space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block font-display text-[11px] uppercase tracking-wider text-ink-mid"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Sakura Tanaka"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-display text-[11px] uppercase tracking-wider text-ink-mid"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="What would you like to talk about?"
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-linear-to-r from-sakura to-violet px-6 py-3.5 font-display text-xs uppercase tracking-wider text-night shadow-glow transition hover:scale-[1.02] hover:brightness-110 active:scale-95"
            >
              ✦ Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
