import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { HeartHandshake, Users, GraduationCap, Stethoscope, Leaf, ChevronRight, Quote } from "lucide-react";

// ---------- Helpers ----------
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`relative w-full py-20 ${className}`}>{children}</section>
);

const FadeIn = ({ delay = 0, duration = 0.6, y = 16, children, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Counter = ({ from = 0, to = 1000, duration = 1.2, suffix = "" }) => {
  const [value, setValue] = useState(from);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(from + (to - from) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString()} {suffix}
    </span>
  );
};

// ---------- Main Page ----------
export default function NGOHome() {
  // parallax on hero illustration
  const y = useMotionValue(0);
  const parallaxY = useTransform(y, [0, 1], [0, -40]);

  return (
    <div className="min-h-screen w-full bg-white text-neutral-800 antialiased">
      <Navbar />
      <Hero parallaxY={parallaxY} />
      <About />
      <Impact />
      <Programs />
      <Stories />
      <CTA />
      <Footer />
    </div>
  );
}

// ---------- Components ----------
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-purple-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 font-bold text-purple-700">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-purple-600 to-fuchsia-500 shadow-md" />
            <span>BrightFuture NGO</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="hover:text-purple-700 transition" href="#about">About</a>
            <a className="hover:text-purple-700 transition" href="#impact">Impact</a>
            <a className="hover:text-purple-700 transition" href="#programs">Programs</a>
            <a className="hover:text-purple-700 transition" href="#stories">Stories</a>
            <a className="hover:text-purple-700 transition" href="#contact">Contact</a>
            <a href="#donate" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-4 py-2 font-semibold text-white shadow hover:shadow-lg transition-shadow">
              Donate <ChevronRight size={16} />
            </a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center p-2 rounded-lg hover:bg-purple-50">
            <span className="i-lucide-menu" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white/90">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 text-sm">
            <a onClick={() => setOpen(false)} className="hover:text-purple-700" href="#about">About</a>
            <a onClick={() => setOpen(false)} className="hover:text-purple-700" href="#impact">Impact</a>
            <a onClick={() => setOpen(false)} className="hover:text-purple-700" href="#programs">Programs</a>
            <a onClick={() => setOpen(false)} className="hover:text-purple-700" href="#stories">Stories</a>
            <a onClick={() => setOpen(false)} className="hover:text-purple-700" href="#contact">Contact</a>
            <a onClick={() => setOpen(false)} href="#donate" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-4 py-2 font-semibold text-white shadow">
              Donate <ChevronRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = ({ parallaxY }) => {
  return (
    <Section id="hero" className="pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <FadeIn>
          <div>
            <span className="inline-block rounded-full bg-purple-100 text-purple-700 px-3 py-1 text-xs font-semibold mb-4">Nonprofit • Community • Impact</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">
              Empowering Communities, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">Building Futures</span>
            </h1>
            <p className="mt-4 text-neutral-600 max-w-xl">We partner with local leaders to deliver education, healthcare, and sustainability programs that create lasting change.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#donate" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow hover:shadow-lg transition-shadow">
                Donate Now <ChevronRight size={18} />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-purple-200 px-6 py-3 font-semibold text-purple-700 hover:bg-purple-50">
                Learn More
              </a>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="relative">
            {/* Decorative gradient blob */}
            <div className="absolute -top-16 -left-10 h-72 w-72 bg-gradient-to-tr from-purple-300/70 to-fuchsia-300/70 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-10 -right-16 h-72 w-72 bg-gradient-to-tr from-fuchsia-300/70 to-purple-300/70 blur-3xl rounded-full -z-10" />

            <motion.div
              className="relative rounded-3xl bg-white p-6 shadow-xl ring-1 ring-purple-100"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="grid grid-cols-3 gap-4">
                {["Education", "Healthcare", "Sustainability", "Youth", "Women", "Community", "Nutrition", "Water", "Climate"].map((tag) => (
                  <div key={tag} className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center text-sm font-semibold text-purple-700">
                    {tag}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-neutral-600">Our programs respond to local needs through partnerships and data-driven design.</p>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

const About = () => (
  <Section id="about">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
      <FadeIn>
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop"
          alt="Community gathering"
          className="rounded-3xl shadow-xl ring-1 ring-purple-100"
        />
      </FadeIn>
      <FadeIn delay={0.05}>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
          <p className="mt-4 text-neutral-600">We exist to unlock opportunity. By putting communities first, we co-create programs that improve access to education, strengthen health systems, and protect the environment.</p>
          <ul className="mt-6 space-y-3 text-neutral-700">
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-purple-500"/> Locally-led, evidence-based initiatives</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-purple-500"/> Transparent impact and open reporting</li>
            <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-purple-500"/> Partnerships that scale what works</li>
          </ul>
        </div>
      </FadeIn>
    </div>
  </Section>
);

const Impact = () => (
  <Section id="impact" className="bg-gradient-to-b from-white to-purple-50/50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Impact at a Glance</h2>
          <p className="mt-2 text-neutral-600">Together with supporters like you, we create measurable change.</p>
        </div>
      </FadeIn>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Users, label: "Lives Impacted", value: 10000 },
          { icon: GraduationCap, label: "Students Enrolled", value: 2500 },
          { icon: Stethoscope, label: "Clinic Visits", value: 18000 },
          { icon: Leaf, label: "Trees Planted", value: 52000 },
        ].map(({ icon: Icon, label, value }) => (
          <FadeIn key={label}>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-purple-100 hover:shadow-md transition-shadow">
              <Icon className="h-8 w-8 text-purple-600" />
              <div className="mt-4 text-3xl font-extrabold text-neutral-900">
                <Counter to={value} />
              </div>
              <p className="mt-1 text-neutral-600">{label}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </Section>
);

const Programs = () => (
  <Section id="programs">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
          <p className="mt-2 text-neutral-600">Four program pillars guide our work in the field.</p>
        </div>
      </FadeIn>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Education", desc: "Learning hubs, teacher training, scholarships.", icon: GraduationCap },
          { title: "Healthcare", desc: "Mobile clinics, maternal care, prevention.", icon: Stethoscope },
          { title: "Sustainability", desc: "Agroforestry, clean water, climate action.", icon: Leaf },
          { title: "Community", desc: "Youth leadership, small business support.", icon: Users },
        ].map(({ title, desc, icon: Icon }, idx) => (
          <FadeIn key={title} delay={idx * 0.05}>
            <a href="#" className="group block h-full rounded-3xl bg-white p-6 ring-1 ring-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <Icon className="h-8 w-8 text-purple-600" />
                <div className="rounded-full border border-purple-200 px-3 py-1 text-xs text-purple-700">Learn more</div>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-neutral-600">{desc}</p>
              <div className="mt-6 h-32 rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-100 group-hover:scale-[1.02] transition-transform"/>
            </a>
          </FadeIn>
        ))}
      </div>
    </div>
  </Section>
);

const Stories = () => {
  const sliderRef = useRef(null);
  return (
    <Section id="stories" className="overflow-hidden bg-gradient-to-b from-purple-50/50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">Stories of Change</h2>
            <p className="mt-2 text-neutral-600">Real people. Real impact.</p>
          </div>
        </FadeIn>
        <motion.div
          ref={sliderRef}
          drag="x"
          dragConstraints={{ left: -600, right: 0 }}
          className="mt-10 flex gap-6 cursor-grab active:cursor-grabbing"
        >
          {[
            {
              quote: "The learning hub helped me return to school and dream bigger.",
              name: "Amina",
              role: "Student",
              img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
            },
            {
              quote: "Our clinic now serves mothers in remote villages.",
              name: "Daniel",
              role: "Community Health Worker",
              img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
            },
            {
              quote: "Trees we planted are already shading our farms.",
              name: "Lulu",
              role: "Farmer",
              img: "https://images.unsplash.com/photo-1520974735194-95097c5a0e0b?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((s, i) => (
            <motion.div key={i} className="min-w-[320px] sm:min-w-[380px]">
              <FadeIn>
                <div className="h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-purple-100">
                  <img src={s.img} alt={s.name} className="h-40 w-full object-cover rounded-2xl" />
                  <div className="mt-4 flex items-start gap-3">
                    <Quote className="h-6 w-6 text-purple-600 shrink-0" />
                    <p className="text-neutral-700">{s.quote}</p>
                  </div>
                  <div className="mt-4 text-sm text-neutral-600">{s.name} • {s.role}</div>
                </div>
              </FadeIn>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

const CTA = () => (
  <Section id="donate" className="py-24">
    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-purple-600 to-fuchsia-500 blur-2xl opacity-20" />
      <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-fuchsia-500 p-8 sm:p-12 text-white shadow-2xl">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-extrabold">Your support changes lives</h3>
              <p className="mt-2 text-purple-100">Donate or volunteer today to help us reach more communities.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-purple-700 shadow hover:shadow-lg transition-shadow">
                Donate Now <ChevronRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Volunteer
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer id="contact" className="mt-24 bg-neutral-950 text-neutral-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-purple-600 to-fuchsia-500" />
            BrightFuture NGO
          </div>
          <p className="mt-3 text-sm text-neutral-300">© {new Date().getFullYear()} BrightFuture. All rights reserved.</p>
        </div>
        <div>
          <h4 className="font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
            <li><a className="hover:text-white" href="#about">About</a></li>
            <li><a className="hover:text-white" href="#impact">Impact</a></li>
            <li><a className="hover:text-white" href="#programs">Programs</a></li>
            <li><a className="hover:text-white" href="#stories">Stories</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Get Involved</h4>
          <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
            <li><a className="hover:text-white" href="#donate">Donate</a></li>
            <li><a className="hover:text-white" href="#contact">Volunteer</a></li>
            <li><a className="hover:text-white" href="#">Partner</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-neutral-300 text-sm">
            <li>hello@brightfuture.org</li>
            <li>+1 (555) 000-0000</li>
            <li>123 Hope St, Anywhere</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.177 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.356.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996A4.107 4.107 0 0015.448 4c-2.266 0-4.103 1.837-4.103 4.102 0 .322.036.635.106.935A11.654 11.654 0 013 5.149a4.106 4.106 0 001.27 5.477 4.073 4.073 0 01-1.859-.514v.052c0 1.98 1.41 3.631 3.283 4.005a4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg></a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm6-2a1 1 0 100 2 1 1 0 000-2z"/></svg></a>
            <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 hover:bg-white/20"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.983 2.12 4.983 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.053c.53-1.004 1.825-2.2 3.758-2.2C20.2 8 24 10.3 24 15.4V24h-4v-7.5c0-1.78-.036-4.07-2.48-4.07-2.48 0-2.86 1.94-2.86 3.94V24h-4V8z"/></svg></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
