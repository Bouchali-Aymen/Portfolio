"use client";

import { useRef, useEffect, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = animationRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      className={`min-h-screen container py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      ref={animationRef}
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-4">
            Let&#39;s Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          <p className="text-theme-text-muted mt-6 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I&#39;d love to hear about your
            project and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-theme-text-primary mb-6">
                Get in Touch
              </h3>
              <p className="text-theme-text-secondary leading-relaxed">
                I&#39;m always open to discussing new opportunities, interesting
                projects, and creative ideas. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-theme-card-bg border border-theme-card-border rounded-lg hover:border-theme-accent transition-colors group"
                >
                  <div className="p-3 bg-theme-accent/10 rounded-lg group-hover:bg-theme-accent/20 transition-colors">
                    <info.icon className="w-6 h-6 text-theme-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-theme-text-muted">{info.label}</p>
                    <p className="text-theme-text-primary font-medium">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-theme-card-bg border border-theme-card-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-theme-text-primary mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-theme-text-secondary mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-theme-bg-primary border border-theme-border rounded-lg text-theme-text-primary placeholder-theme-text-muted focus:outline-none focus:border-theme-accent transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-theme-text-secondary mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-theme-bg-primary border border-theme-border rounded-lg text-theme-text-primary placeholder-theme-text-muted focus:outline-none focus:border-theme-accent transition-colors"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-theme-text-secondary mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-theme-bg-primary border border-theme-border rounded-lg text-theme-text-primary placeholder-theme-text-muted focus:outline-none focus:border-theme-accent transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-theme-text-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-theme-bg-primary border border-theme-border rounded-lg text-theme-text-primary placeholder-theme-text-muted focus:outline-none focus:border-theme-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-theme-accent text-white font-medium rounded-lg hover:bg-theme-accent-hover transition-colors"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
