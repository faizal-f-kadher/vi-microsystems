import { withBase } from "./lib/base";
import { useEffect, useState, type ReactNode } from "react";
import viIcon from "./assets/brand/vi-icon.png";
import viWordmark from "./assets/brand/vi-microsystems-logo.png";
import factsImage from "./assets/products/facts.jpg";
import iotImage from "./assets/products/iot.png";
import ipmImage from "./assets/products/ipm.jpg";
import processControlImage from "./assets/products/process-control.png";
import rfImage from "./assets/products/rf-source.jpg";
import roboticsImage from "./assets/products/robotics.png";
import smartGridImage from "./assets/products/smart-grid.jpg";

type IconName =
  | "arrow"
  | "automation"
  | "bolt"
  | "chip"
  | "menu"
  | "network"
  | "precision"
  | "x";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    automation: (
      <>
        <path d="M5 19v-4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" />
        <path d="M8 12V7a4 4 0 0 1 8 0v5M3 19h18M12 3v4" />
      </>
    ),
    bolt: (
      <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />
    ),
    chip: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <path d="M9 9h6v6H9zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    network: (
      <>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="m10.9 6.7-4.8 9.6M13.1 6.7l4.8 9.6M7 18h10" />
      </>
    ),
    precision: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

export function BrandLogo() {
  return (
    <a className="brand-logo" href={withBase("/")} aria-label="Vi Microsystems home">
      <img className="brand-logo__icon" src={viIcon} alt="" />
      <img
        className="brand-logo__wordmark"
        src={viWordmark}
        alt="Vi Microsystems Pvt. Ltd."
      />
    </a>
  );
}

function TextLink({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a className={`text-link ${className}`} href={withBase(href)}>
      <span>{children}</span>
      <Icon name="arrow" />
    </a>
  );
}

function ButtonLink({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
}) {
  return (
    <a className={`button button--${variant}`} href={withBase(href)}>
      <span>{children}</span>
      <Icon name="arrow" />
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <header className={`section-intro${light ? " section-intro--light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </header>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const links = [
    ["About", "/about"],
    ["Catalogues", "/catalogues"],
    ["Clients", "/clients"],
    ["Gallery", "/gallery"],
  ];
  const productCategories = [
    "Advanced Digital Drives",
    "Communication Trainers",
    "Control System Trainers",
    "Digital Signal Processing",
    "Embedded Technology",
    "Instrumentation Trainers",
    "Internet of Things",
    "Mechanical Labs",
    "Microprocessor & Controller",
    "PLC Application Modules",
    "Power Electronics Trainers",
    "Power System Trainers",
    "Process Control Trainers",
    "RF Microwave Trainers",
    "Robotics Labs",
    "Smart Grid Products",
    "Special Products",
    "VLSI Technology",
    "Wireless Sensor Network",
    "Digital Twins Industry 4.0",
  ];

  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav__inner">
        <BrandLogo />
        <div className="nav__links">
          <div className="nav-menu">
            <a href={withBase("/products")}>Products</a>
            <div className="nav-menu__panel nav-menu__panel--products">
              <header>
                <p>Product catalogue</p>
                <a href={withBase("/products")}>View all products →</a>
              </header>
              <div>
                {productCategories.map((category) => (
                  <a
                    href={withBase(`/products?category=${encodeURIComponent(category)}`)}
                    key={category}
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {links.map(([label, href]) => (
            <a key={label} href={withBase(href)}>
              {label}
            </a>
          ))}
          <div className="nav-menu">
            <a href={withBase("/services")}>Services</a>
            <div className="nav-menu__panel nav-menu__panel--services">
              <a href={withBase("/services/academic-projects")}>Academic projects</a>
              <a href={withBase("/services/inplant-training")}>Inplant & internship training</a>
              <a href={withBase("/services/courses")}>Technical courses</a>
            </div>
          </div>
        </div>
        <a className="nav__cta" href={withBase("/contact")}>
          Talk to us
          <Icon name="arrow" />
        </a>
        <button
          className="nav__toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <Icon name={open ? "x" : "menu"} />
        </button>
      </div>
      <div className={`mobile-nav${open ? " mobile-nav--open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={label} href={withBase(href)} onClick={() => setOpen(false)}>
            {label}
            <Icon name="arrow" />
          </a>
        ))}
        <ButtonLink href={withBase("/contact")}>Talk to us</ButtonLink>
      </div>
    </nav>
  );
}

const products = [
  {
    category: "Smart energy",
    title: "Smart Grid Simulator",
    copy: "An integrated training platform for exploring generation, transmission, and smart-grid concepts.",
    image: smartGridImage,
  },
  {
    category: "Industrial electronics",
    title: "Flexible AC Transmission Systems",
    copy: "Purpose-built engineering hardware for practical power-system learning and experimentation.",
    image: factsImage,
  },
  {
    category: "Connected systems",
    title: "Internet of Things (IoT)",
    copy: "Modular systems created to make connected-device concepts tangible in the lab.",
    image: iotImage,
  },
  {
    category: "Power electronics",
    title: "IPM Based Power Module",
    copy: "A focused power-electronics module for motor-control and converter applications.",
    image: ipmImage,
  },
];

const capabilities = [
  {
    icon: "chip" as IconName,
    number: "01",
    title: "Electronics Engineering",
    copy: "Hardware platforms designed around real engineering principles and practical use.",
  },
  {
    icon: "network" as IconName,
    number: "02",
    title: "Embedded & IoT Systems",
    copy: "Connected modules that bring sensing, control, and communication together.",
  },
  {
    icon: "automation" as IconName,
    number: "03",
    title: "Automation & Robotics",
    copy: "Hands-on systems for motion, process control, and industrial automation.",
  },
  {
    icon: "bolt" as IconName,
    number: "04",
    title: "Power & Energy",
    copy: "Engineering products for power electronics, smart grids, and protection systems.",
  },
];

export function HomePage() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">
              Chennai · Since 1986 · DSIR-recognised R&amp;D
            </p>
            <h1>
              Engineering technology for <em>people who build.</em>
            </h1>
            <p className="hero__copy">
              Vi Microsystems designs and develops hardware and software
              products across electrical, electronics, instrumentation,
              mechanical, and automation engineering.
            </p>
            <div className="hero__actions">
              <ButtonLink href={withBase("/products")}>Explore products</ButtonLink>
              <ButtonLink href={withBase("/catalogues")} variant="secondary">
                Download catalogues
              </ButtonLink>
            </div>
          </div>
          <div className="hero__visual" aria-label="Robotics and engineering system">
            <div className="hero__grid-lines" />
            <div className="hero__marker hero__marker--one">MOTION / 06</div>
            <div className="hero__marker hero__marker--two">CONTROL</div>
            <img
              className="hero__robot"
              src={roboticsImage}
              alt="Six-axis robotic training system"
            />
            <div className="hero__scrim" aria-hidden="true" />
            <div className="hero__detail">
              <span>Vi Microsystems / Chennai</span>
              <strong>Design and develop hardware and software products.</strong>
            </div>
          </div>
        </div>
        <a className="hero__scroll" href="#about">
          <span>Scroll to explore</span>
          <span className="hero__scroll-line" />
        </a>
      </section>

      <section className="statement" id="about">
        <div className="statement__index">01 / ABOUT</div>
        <div className="statement__content">
          <p className="eyebrow">Engineering in India since 1986</p>
          <h2>
            From research and development to production and support, we make
            advanced engineering <em>practical and hands-on.</em>
          </h2>
          <div className="statement__bottom">
            <p>
              Our Chennai-based team develops technical education laboratory
              equipment across electronics, embedded systems, automation,
              power, communication, instrumentation, and mechanical engineering.
            </p>
            <TextLink href={withBase("/about")}>Discover our company</TextLink>
          </div>
        </div>
      </section>

      <section className="facts-band" aria-label="Company facts">
        {[
          ["1986", "Established in Chennai"],
          ["3,000+", "Engineering products"],
          ["20,000", "Sq. ft. company facility"],
          ["~200", "People across departments"],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="products section" id="products">
        <div className="section__bar">
          <SectionIntro
            eyebrow="02 / Featured products"
            title="Laboratory systems built for learning by doing."
            copy="Explore selected systems from a catalogue spanning 20 specialist product categories."
          />
          <TextLink href={withBase("/products")}>View all 106 products</TextLink>
        </div>
        <div className="product-grid" id="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.title}>
              <div className="product-card__image">
                <span>0{index + 1}</span>
                <img
                  src={withBase(product.image)}
                  alt={product.title}
                  loading={index > 1 ? "lazy" : "eager"}
                />
              </div>
              <div className="product-card__body">
                <p>{product.category}</p>
                <h3>{product.title}</h3>
                <div className="product-card__footer">
                  <span>{product.copy}</span>
                  <a
                    href={withBase(`/products/${["smart-grid-simulator", "flexible-ac-transmission-systems", "iot-development-system", "ipm-based-power-module"][index]}`)}
                    aria-label={`View ${product.title}`}
                  >
                    <Icon name="arrow" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="capabilities__header">
          <SectionIntro
            eyebrow="03 / Engineering disciplines"
            title="One R&D organisation. Multiple technology disciplines."
            copy="Integrated capabilities for technical education, research, development, and industrial training."
            light
          />
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.title}>
              <div className="capability-card__top">
                <Icon name={item.icon} />
                <span>{item.number}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="capabilities__feature">
          <div className="capabilities__feature-image">
            <img src={processControlImage} alt="Industrial process control trainer" loading="lazy" />
          </div>
          <div className="capabilities__feature-copy">
            <p className="eyebrow">Connected by design</p>
            <h3>Systems thinking, from every component to the complete experience.</h3>
            <p>
              We bring hardware, software, instrumentation, and control
              concepts together in coherent engineering platforms.
            </p>
            <TextLink href="#contact" className="text-link--light">
              Discuss a requirement
            </TextLink>
          </div>
        </div>
      </section>

      <section className="industries section" id="industries">
        <SectionIntro
          eyebrow="04 / Applications"
          title="Built around how technology is applied."
          copy="Our systems support practical exploration across core engineering environments."
        />
        <div className="industry-list">
          {[
            ["01", "Education & technical training", "Hands-on learning platforms"],
            ["02", "Industrial automation", "Control and instrumentation"],
            ["03", "Power & energy systems", "Generation, protection, conversion"],
            ["04", "Research & development", "Flexible technical platforms"],
          ].map(([number, title, detail]) => (
            <a href="#contact" className="industry-row" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
              <Icon name="arrow" />
            </a>
          ))}
        </div>
      </section>

      <section className="precision">
        <div className="precision__visual">
          <img src={rfImage} alt="RF signal source engineering equipment" loading="lazy" />
          <span className="precision__axis precision__axis--x" />
          <span className="precision__axis precision__axis--y" />
          <div className="precision__label">
            <Icon name="precision" />
            <span>Designed with purpose</span>
          </div>
        </div>
        <div className="precision__copy">
          <p className="eyebrow">Why Vi Microsystems</p>
          <h2>Indigenous engineering. Built around real applications.</h2>
          <p>
            A DSIR-recognised R&amp;D team brings product design, manufacturing,
            testing, sales, and technical support together under one roof.
          </p>
          <div className="precision__points">
            <span>3,000+ product portfolio</span>
            <span>Multi-disciplinary engineering</span>
            <span>Sales and service support across India</span>
          </div>
        </div>
      </section>

      <section className="process section" id="process">
        <SectionIntro
          eyebrow="05 / Our process"
          title="A deliberate path from requirement to solution."
        />
        <div className="process__timeline">
          {[
            ["01", "Understand", "Define the requirement and technical context."],
            ["02", "Design", "Develop the system concept and architecture."],
            ["03", "Develop", "Prototype and build the working solution."],
            ["04", "Validate", "Test, refine, and verify the system."],
            ["05", "Deliver", "Prepare the solution for practical use."],
          ].map(([number, title, copy]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact__signal" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="eyebrow">Let’s build what’s next</p>
        <h2>
          Have a technology challenge?
          <br />
          <em>Let’s engineer the solution.</em>
        </h2>
        <p>
          Tell us about your requirement and our team will help you explore the
          right technology approach.
        </p>
        <ButtonLink href={withBase("/contact")} variant="light">
          Start a conversation
        </ButtonLink>
      </section>
    </main>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__lead">
        <BrandLogo />
        <p>
          Designing and manufacturing technical education laboratory equipment
          and engineering systems since 1986.
        </p>
      </div>
      <div className="footer__links">
        <div>
          <h3>Explore</h3>
          <a href={withBase("/about")}>About</a>
          <a href={withBase("/products")}>Products</a>
          <a href={withBase("/catalogues")}>Catalogues</a>
        </div>
        <div>
          <h3>Discover</h3>
          <a href={withBase("/services")}>Services</a>
          <a href={withBase("/clients")}>Clients</a>
          <a href={withBase("/gallery")}>Gallery</a>
          <a href={withBase("/contact")}>Contact</a>
        </div>
      </div>
      <div className="footer__bottom">
        <span>Vi Microsystems Pvt. Ltd.</span>
        <span>No. 75, Electronics Estate, Perungudi, Chennai</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return <HomePage />;
}
