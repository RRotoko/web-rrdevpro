"use client";

import { useState, FormEvent } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Mock submit — no backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Form */}
      <Card className="relative">
        {submitted && (
          <div className="bg-surface/95 absolute inset-0 z-10 flex items-center justify-center rounded-2xl backdrop-blur-sm">
            <div className="text-center">
              <span className="mb-2 inline-block text-5xl">🎉</span>
              <h3 className="text-text-primary text-xl font-semibold">Thanks!</h3>
              <p className="text-text-secondary">I&apos;ll get back to you soon.</p>
            </div>
          </div>
        )}
        <h3 className="text-text-primary mb-6 text-xl font-semibold">Send a message</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="text-text-primary mb-1.5 block text-sm font-medium">
              Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border-border bg-surface-secondary text-text-primary focus:border-accent focus:ring-accent w-full rounded-xl border px-4 py-3 text-sm transition-colors outline-none focus:ring-1"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-text-primary mb-1.5 block text-sm font-medium">
              Email *
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border-border bg-surface-secondary text-text-primary focus:border-accent focus:ring-accent w-full rounded-xl border px-4 py-3 text-sm transition-colors outline-none focus:ring-1"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-text-primary mb-1.5 block text-sm font-medium">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border-border bg-surface-secondary text-text-primary focus:border-accent focus:ring-accent w-full resize-none rounded-xl border px-4 py-3 text-sm transition-colors outline-none focus:ring-1"
              placeholder="Tell me about your project..."
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Send message
          </Button>
        </form>
      </Card>

      {/* Contact info */}
      <Card>
        <h3 className="text-text-primary mb-6 text-xl font-semibold">Contact info</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="bg-accent/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg">
              📧
            </span>
            <div>
              <p className="text-text-primary text-sm font-medium">Email</p>
              <a href="mailto:hello@rrdevpro.com" className="text-accent text-sm hover:underline">
                hello@rrdevpro.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-accent/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg">
              📍
            </span>
            <div>
              <p className="text-text-primary text-sm font-medium">Location</p>
              <p className="text-text-secondary text-sm">Europe / Remote (CET timezone)</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="bg-accent/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg">
              ⏰
            </span>
            <div>
              <p className="text-text-primary text-sm font-medium">Availability</p>
              <p className="text-text-secondary text-sm">
                Open for freelance projects and collaborations
              </p>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-border" />

          {/* Social links */}
          <div>
            <p className="text-text-primary mb-3 text-sm font-medium">Find me online</p>
            <div className="flex gap-3">
              {[
                { label: "GitHub", url: "https://github.com" },
                { label: "LinkedIn", url: "https://linkedin.com" },
                { label: "Dribbble", url: "https://dribbble.com" },
                { label: "Behance", url: "https://behance.net" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border text-text-secondary hover:bg-surface-secondary hover:text-text-primary rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
