"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!name || !email || !message) return;
        const subject = encodeURIComponent(`New message from ${name}`);
        const body = encodeURIComponent(
          `${message}\n\nFrom: ${name}\nEmail: ${email}`
        );
        window.location.href = `mailto:anitatia212@gmail.com?subject=${subject}&body=${body}`;
        setSent(true);
      }}
      className="mx-auto mt-10 flex w-full max-w-lg flex-col gap-4 text-left"
    >
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-navy-deep/60">
          Name
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-rose focus:outline-none"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-navy-deep/60">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className="mt-1.5 w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-rose focus:outline-none"
        />
      </div>
      <div>
        <label className="text-xs font-semibold uppercase tracking-wider text-navy-deep/60">
          Message
        </label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me a bit about your business and what you need help with."
          className="mt-1.5 w-full resize-none rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy-deep placeholder:text-navy-deep/35 focus:border-rose focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-block rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-cream transition-transform duration-250 hover:scale-[1.02] hover:bg-navy-soft"
      >
        {sent ? "Opening your email app..." : "Send Message"}
      </button>
    </form>
  );
}
