"use client";

import { useState } from "react";

export default function LeadMagnetForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!email) return;
        // No backend is wired up yet, this simply confirms the intent to
        // opt in. Anita can connect this to her email provider later.
        setStatus("submitted");
      }}
      className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="w-full rounded-full border border-navy/20 bg-white px-5 py-3 text-sm text-navy-deep placeholder:text-navy-deep/40 focus:border-rose focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition-transform duration-250 hover:scale-[1.02]"
      >
        {status === "submitted" ? "Sent! Check your inbox" : "Send Me the Guide"}
      </button>
    </form>
  );
}
