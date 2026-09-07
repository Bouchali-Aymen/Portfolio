"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "aymenbouchali14@gmail.com",
    href: "mailto:aymenbouchali14@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+213 5 42 62 96 45",
    href: "tel:+213542629645",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Blida, Algeria",
    href: "#",
  },
];

/**
 * Contact section with info links and a message form wired to /api/send.
 */
const Contact = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = animationRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    setSending(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      toast.success("Message sent — thanks for reaching out.");
      form.reset();
    } catch {
      toast.error("Could not send message. Try emailing me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      ref={animationRef}
      className="py-section_padding"
    >
      <Toaster position="bottom-center" />
      <div className="container mx-auto max-w-6xl">
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s build something</h2>
          <p className="section-lede">
            Open to roles, freelance, and collaborations. Send a note and I&apos;ll
            get back to you.
          </p>
        </div>

        <div
          className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          } transition-all delay-100 duration-700`}
        >
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="flex items-center gap-4 border border-theme-border p-4 transition-colors hover:border-theme-accent"
              >
                <div className="bg-theme-accent/10 p-3 text-theme-accent">
                  <info.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-theme-text-muted">
                    {info.label}
                  </p>
                  <p className="font-medium text-theme-text-primary">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="surface-panel space-y-5 rounded-xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-theme-text-secondary"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-theme-border bg-theme-bg-primary px-4 py-3 text-theme-text-primary outline-none transition-colors placeholder:text-theme-text-muted focus:border-theme-accent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-theme-text-secondary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-theme-border bg-theme-bg-primary px-4 py-3 text-theme-text-primary outline-none transition-colors placeholder:text-theme-text-muted focus:border-theme-accent"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-theme-text-secondary"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full border border-theme-border bg-theme-bg-primary px-4 py-3 text-theme-text-primary outline-none transition-colors placeholder:text-theme-text-muted focus:border-theme-accent"
                  placeholder="What's this about?"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-theme-text-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none border border-theme-border bg-theme-bg-primary px-4 py-3 text-theme-text-primary outline-none transition-colors placeholder:text-theme-text-muted focus:border-theme-accent"
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto">
              {sending ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}
              {sending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
