import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./components/MagneticButton";

const stats = [
  { value: "0%", label: "payment defaults" },
  { value: "24h", label: "average payout release" },
  { value: "100+", label: "verified brands" },
  { value: "10k+", label: "active creators" },
];

const logos = ["Northstar", "Luma", "Atelier", "Sundial", "Vanta", "Monarch"];

const creators = [
  "Verified creator identities",
  "Escrow-backed campaign terms",
  "Faster payout confidence",
];

const brands = [
  "Curated discovery with signal-rich profiles",
  "Live campaign oversight from brief to proof",
  "ROI clarity tied to trusted payout workflows",
];

const features = [
  {
    title: "Escrow-first commerce",
    body: "Every campaign starts from secured commitment so trust is embedded before content goes live.",
  },
  {
    title: "Curation, not chaos",
    body: "Find creators with sharper fit, stronger signal, and cleaner collaboration history.",
  },
  {
    title: "Campaign command",
    body: "Track approvals, milestones, proof-of-performance, and payout readiness in one flow.",
  },
  {
    title: "Fast release logic",
    body: "Once the work clears approval, the money moves with premium precision instead of back-office delay.",
  },
];

const workflow = [
  {
    count: "01",
    title: "Lock the deal",
    body: "Brand and creator align on scope, deliverables, milestones, and payout logic.",
  },
  {
    count: "02",
    title: "Launch with clarity",
    body: "Content goes live inside a shared operational layer with proof, status, and visibility.",
  },
  {
    count: "03",
    title: "Release with confidence",
    body: "Approved campaigns trigger escrow settlement without friction or ambiguity.",
  },
];

const faqs = [
  {
    q: "What makes Gradix different from a creator marketplace?",
    a: "Gradix is built around trusted execution. Discovery matters, but the real differentiator is escrow, workflow clarity, and payout confidence across the whole collaboration.",
  },
  {
    q: "Why does escrow matter for brand and creator relationships?",
    a: "Escrow removes the most damaging source of friction: uncertainty. Brands know terms are controlled, and creators know the budget is secured before they start.",
  },
  {
    q: "Is Gradix only for large brands?",
    a: "No. The platform is designed to feel premium for both scaling D2C teams and individual creators who want a more professional way to work.",
  },
  {
    q: "How fast are payouts released?",
    a: "Once agreed milestones are approved, payouts are released quickly through the escrow workflow, with an average release window around 24 hours.",
  },
];

function App() {
  const reduceMotion = useReducedMotion();
  const [activeFaq, setActiveFaq] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroLift = useTransform(scrollYProgress, [0, 0.3], [0, reduceMotion ? 0 : -80]);

  return (
    <div className="page-shell">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand-lockup" href="#top" aria-label="Gradix home">
            <span className="brand-glyph">G</span>
            <span className="brand-text">
              <strong>Gradix</strong>
              <small>The trust layer for brands and creators</small>
            </span>
          </a>

          <nav className="site-nav">
            <a href="#proof">Trust</a>
            <a href="#bridge">Platform</a>
            <a href="#motion">Flow</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <span className="nav-status">Escrow active</span>
            <MagneticButton href="#cta" variant="secondary">
              Talk to Sales
            </MagneticButton>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-cinematic">
          <motion.div className="hero-aura" style={{ y: heroLift }} />
          <div className="container hero-layout">
            <div className="hero-copy">
              <span className="hero-kicker" data-aos="fade-up">
                Escrow-powered influencer relationships
              </span>
              <h1 data-aos="fade-up" data-aos-delay="100">
                The trust layer where brands and creators actually connect.
              </h1>
              <p data-aos="fade-up" data-aos-delay="180">
                Gradix turns influencer marketing into a more cinematic, premium system by
                combining verified discovery, secure escrow payments, and clean campaign
                workflows in one modern platform.
              </p>

              <div className="hero-actions" data-aos="fade-up" data-aos-delay="260">
                <MagneticButton href="#cta">Create Free Account</MagneticButton>
                <MagneticButton href="#bridge" variant="secondary">
                  Explore the Platform
                </MagneticButton>
              </div>
            </div>

            <motion.div className="hero-stage" style={{ y: heroLift }}>
              <div className="stage-film" data-aos="zoom-in" data-aos-delay="120">
                <video
                  className="stage-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
                >
                  <source
                    src="https://cdn.coverr.co/videos/coverr-working-on-a-laptop-5176/1080p.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="stage-overlay">
                  <div className="stage-grid" />
                  <div className="stage-label stage-label-left" data-aos="fade-right" data-aos-delay="250">
                    <span>Brand</span>
                    <strong>Campaign brief</strong>
                  </div>
                  <div className="stage-label stage-label-center" data-aos="fade-up" data-aos-delay="350">
                    <span>Gradix</span>
                    <strong>Escrow + matching</strong>
                  </div>
                  <div className="stage-label stage-label-right" data-aos="fade-left" data-aos-delay="450">
                    <span>Creator</span>
                    <strong>Verified delivery</strong>
                  </div>
                  <div className="stage-beam" />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="proof" className="section proof-section">
          <div className="container">
            <div className="section-intro section-intro-split">
              <div data-aos="fade-up">
                <span className="section-kicker">Built for scale. Backed by trust.</span>
                <h2>A more elegant way to run the creator economy.</h2>
              </div>
              <p data-aos="fade-up" data-aos-delay="120">
                Gradix is designed to make the relationship itself feel premium: better visibility
                for brands, better security for creators, and fewer gaps between agreement and
                execution.
              </p>
            </div>

            <div className="stat-ribbon" data-aos="fade-up" data-aos-delay="180">
              {stats.map((stat, index) => (
                <div key={stat.label} className="stat-ribbon-item" data-aos="zoom-in" data-aos-delay={200 + index * 80}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="logo-line" data-aos="fade-up" data-aos-delay="220">
              {logos.map((logo, index) => (
                <span key={logo} data-aos="fade-up" data-aos-delay={260 + index * 60}>
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="bridge" className="section bridge-section">
          <div className="container">
            <div className="bridge-visual">
              <div className="bridge-column bridge-column-dark" data-aos="fade-right">
                <span className="column-kicker">For creators</span>
                <h3>Stop working inside uncertainty.</h3>
                <p>
                  Creators deserve a workspace where terms are secure, approvals are visible, and
                  payouts are not left to follow-up messages.
                </p>
                <ul>
                  {creators.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bridge-center" data-aos="zoom-in" data-aos-delay="120">
                <span className="bridge-word">Gradix</span>
                <div className="bridge-track">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="bridge-column bridge-column-light" data-aos="fade-left" data-aos-delay="120">
                <span className="column-kicker">For brands</span>
                <h3>Run creator marketing with better control.</h3>
                <p>
                  Brands need more than access to creators. They need signal, structure, and a
                  secure system for turning campaigns into repeatable growth.
                </p>
                <ul>
                  {brands.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section panorama-section">
          <div className="container">
            <div className="section-intro centered" data-aos="fade-up">
              <span className="section-kicker">A platform with different motion languages</span>
              <h2>Not a dashboard. A complete brand-to-creator operating canvas.</h2>
            </div>

            <div className="panorama-layout">
              <div className="panorama-left" data-aos="fade-up-right">
                <div className="panorama-strip">
                  <span>Discovery</span>
                  <span>Verification</span>
                  <span>Escrow</span>
                  <span>ROI</span>
                </div>
              </div>

              <div className="panorama-right">
                {features.map((feature, index) => (
                  <article
                    key={feature.title}
                    className="panorama-feature"
                    data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                    data-aos-delay={index * 90}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="motion" className="section flow-section">
          <div className="container">
            <div className="section-intro section-intro-split">
              <div data-aos="fade-up">
                <span className="section-kicker">The Gradix escrow guarantee</span>
                <h2>A workflow that moves like a film sequence.</h2>
              </div>
              <p data-aos="fade-up" data-aos-delay="120">
                Each step removes ambiguity and adds momentum. The system feels simple because the
                trust logic is already built in.
              </p>
            </div>

            <div className="flow-track">
              {workflow.map((item, index) => (
                <div
                  key={item.count}
                  className="flow-step"
                  data-aos="fade-up"
                  data-aos-delay={index * 120}
                >
                  <div className="flow-number">{item.count}</div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="container faq-layout">
            <div className="faq-copy" data-aos="fade-right">
              <span className="section-kicker">Frequently asked questions</span>
              <h2>Everything you need to know about trust, payouts, and platform security.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((item, index) => {
                const isOpen = activeFaq === index;

                return (
                  <motion.button
                    key={item.q}
                    className={`faq-item ${isOpen ? "faq-open" : ""}`}
                    onClick={() => setActiveFaq(isOpen ? -1 : index)}
                    whileHover={{ x: 4 }}
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                  >
                    <div className="faq-question">
                      <span>{item.q}</span>
                      <span className="faq-plus">{isOpen ? "−" : "+"}</span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          className="faq-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p>{item.a}</p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="cta" className="section cta-section">
          <div className="container">
            <div className="cta-band" data-aos="zoom-in-up">
              <span className="section-kicker">Ready to scale your influence?</span>
              <h2>Bring brands and creators into one trusted cinematic flow.</h2>
              <p>
                Join the next generation of creator commerce with escrow-backed collaboration and
                premium campaign control.
              </p>
              <div className="hero-actions">
                <MagneticButton href="#top">Create Free Account</MagneticButton>
                <MagneticButton href="#top" variant="secondary">
                  Talk to Sales
                </MagneticButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
