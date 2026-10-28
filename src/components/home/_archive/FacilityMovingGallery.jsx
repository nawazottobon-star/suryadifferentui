import React, { useState } from "react";
import { Container } from "../ui/Container";
import { HOSPITAL_MEDIA } from "../../constants/hospitalMedia";
import { Sparkles, Eye, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FacilityMovingGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const items = HOSPITAL_MEDIA.facilityCollage;

  return (
    <section id="facilities" className="py-20 sm:py-32 bg-surya-slate-950 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-surya-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="mb-12 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-surya-teal-400 bg-surya-slate-900 px-3.5 py-1.5 rounded-full border border-surya-slate-800 inline-block">
              HOSPITAL INFRASTRUCTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Spaces engineered for recovery<span className="text-surya-teal-400">.</span>
            </h2>
            <p className="text-base text-surya-slate-300 max-w-xl leading-relaxed">
              Equipped with sterile surgical suites, on-premise pathology testing, and 24/7 emergency facilities in Anantapur.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-surya-slate-400 bg-surya-slate-900 px-4 py-2 rounded-xl border border-surya-slate-800">
            <Sparkles className="w-4 h-4 text-surya-teal-400" />
            <span>Interactive Visual Campus Collage</span>
          </div>
        </div>
      </Container>

      {/* Moving Collage Grid with Asymmetric Floating Positions */}
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1540px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: isEven ? 30 : -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                onClick={() => setSelectedImage(item)}
                className={`group cursor-pointer rounded-3xl overflow-hidden bg-surya-slate-900 border border-surya-slate-800 shadow-2xl relative transition-all duration-500 hover:-translate-y-2 hover:border-surya-teal-400/80 ${
                  item.size === "tall"
                    ? "aspect-[3/4]"
                    : item.size === "large"
                    ? "aspect-[16/11]"
                    : "aspect-[4/3]"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.8] contrast-[1.05]"
                  loading="lazy"
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-surya-navy-950/90 via-surya-navy-950/30 to-transparent" />

                {/* Overlay Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-surya-teal-400 block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-surya-teal-500 group-hover:text-surya-navy-950 flex items-center justify-center text-white transition-all duration-300 shrink-0 ml-3 shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal on Image Click */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surya-navy-950/90 backdrop-blur-xl"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-surya-slate-900 border border-surya-slate-700 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-surya-navy-950/80 text-white flex items-center justify-center hover:bg-surya-emergency-600 transition"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-surya-slate-900 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs uppercase font-bold text-surya-teal-400 tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-xl font-bold mt-0.5">{selectedImage.title}</h3>
                </div>
                <span className="text-xs text-surya-slate-400">
                  Surya Hospital Campus
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
