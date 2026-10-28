import React, { useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { HeartPulse, Menu, X, Calendar, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header({ onBookAppointment, onCallEmergency }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Departments", href: "#care-slider" },
    { label: "Doctors", href: "#doctors" },
    { label: "Services", href: "#specialties" },
    { label: "Facilities", href: "#facilities" },
    { label: "Contact", href: "#location" },
  ];

  const handleScrollTo = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3.5 border-b border-surya-slate-200/80"
          : "bg-gradient-to-b from-surya-navy-950/85 via-surya-navy-950/40 to-transparent py-5"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("#hero");
            }}
            className="flex items-center gap-3 group text-left"
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                isScrolled
                  ? "bg-surya-navy-900 text-surya-teal-400 shadow-sm"
                  : "bg-white/10 backdrop-blur-md text-surya-teal-300 ring-1 ring-white/20"
              }`}
            >
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`text-xl font-bold tracking-tight leading-none transition-colors ${
                    isScrolled ? "text-surya-slate-900" : "text-white"
                  }`}
                >
                  SURYA
                </span>
                <span
                  className={`text-xs uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded transition-colors ${
                    isScrolled
                      ? "bg-surya-teal-50 text-surya-teal-800 border border-surya-teal-200"
                      : "bg-white/15 text-white/90 border border-white/20"
                  }`}
                >
                  Hospital
                </span>
              </div>
              <span
                className={`text-[10px] uppercase font-semibold tracking-widest block mt-0.5 transition-colors ${
                  isScrolled ? "text-surya-slate-500" : "text-surya-slate-300"
                }`}
              >
                Anantapur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScrollTo(item.href)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                  isScrolled
                    ? "text-surya-slate-700 hover:text-surya-navy-900 hover:bg-surya-slate-100"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant={isScrolled ? "emergency" : "secondary"}
              size="sm"
              icon={PhoneCall}
              onClick={onCallEmergency}
              className={
                !isScrolled
                  ? "bg-white/10 text-white border border-white/20 hover:bg-surya-emergency-600 hover:border-surya-emergency-600"
                  : ""
              }
            >
              24/7 Emergency
            </Button>
            <Button
              variant="accent"
              size="sm"
              icon={Calendar}
              onClick={onBookAppointment}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="accent"
              size="sm"
              icon={Calendar}
              onClick={onBookAppointment}
              className="sm:hidden text-xs px-2.5 py-1.5"
            >
              Book
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-surya-slate-700 hover:bg-surya-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-surya-navy-950/98 backdrop-blur-xl border-t border-surya-navy-800 text-white overflow-hidden shadow-2xl"
          >
            <Container className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleScrollTo(item.href)}
                  className="block w-full text-left px-4 py-2.5 text-sm font-semibold text-surya-slate-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-3 border-t border-surya-navy-800 grid grid-cols-2 gap-2">
                <Button
                  variant="emergency"
                  size="sm"
                  fullWidth
                  icon={PhoneCall}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onCallEmergency();
                  }}
                >
                  Emergency
                </Button>
                <Button
                  variant="accent"
                  size="sm"
                  fullWidth
                  icon={Calendar}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookAppointment();
                  }}
                >
                  Appointment
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
