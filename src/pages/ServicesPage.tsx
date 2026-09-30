import { withBase } from "../lib/base";
import { Link, useParams } from "react-router";
import iotImage from "../assets/products/iot.png";
import processImage from "../assets/products/process-control.png";
import roboticsImage from "../assets/products/robotics.png";

const services = {
  "academic-projects": {
    eyebrow: "Academic projects",
    title: "Industry-relevant projects for emerging engineers.",
    intro:
      "Vi Microsystems supports real-time and IEEE projects for B.E., M.E., diploma students, and research scholars across electronics, embedded systems, power, instrumentation, and computing.",
    image: iotImage,
    areas: [
      "Internet of Things",
      "Embedded systems",
      "Wireless technology",
      "PLC & SCADA",
      "Power electronics",
      "VLSI",
      "Web and software development",
      "Mini projects",
    ],
    detail:
      "Projects are structured to bridge theoretical knowledge and practical application through current controllers, sensors, cloud platforms, communication systems, and engineering tools.",
  },
  "inplant-training": {
    eyebrow: "Inplant & internship training",
    title: "Practical exposure to industrial technology.",
    intro:
      "Hands-on training gives students the technical knowledge and skills required to understand industrial operations, hardware-software integration, testing, and troubleshooting.",
    image: roboticsImage,
    areas: [
      "Embedded systems",
      "Internet of Things",
      "AI-based embedded applications",
      "Basic electronics",
      "PCB design and fabrication",
      "Wireless solutions",
      "Web design",
      "Industrial automation",
    ],
    detail:
      "Training uses Arduino, ESP8266 and ESP32, Raspberry Pi Pico, Raspberry Pi 5, STM32, Embedded C, Python, MicroPython, ThingSpeak, Firebase, and Blynk.",
  },
  courses: {
    eyebrow: "Technical courses",
    title: "Develop skills through focused engineering courses.",
    intro:
      "Course programmes build a solid understanding of embedded systems, IoT, AI applications, electronics, PCB design, wireless systems, and software development.",
    image: processImage,
    areas: [
      "Internet of Things",
      "Embedded systems",
      "AI-based embedded applications",
      "Basic electronics",
      "PCB design with fabrication",
      "Wireless solutions",
      "PHP & Python web design",
      "MATLAB and Simulink",
    ],
    detail:
      "Programmes combine technical fundamentals with practical sessions, helping learners connect design concepts with implementation and testing.",
  },
} as const;

type ServiceKey = keyof typeof services;

function ServiceDetail({ type }: { type: ServiceKey }) {
  const service = services[type];
  return (
    <>
      <section className="page-hero service-detail-hero">
        <div>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
        </div>
        <div className="service-detail-hero__visual">
          <img src={withBase(service.image)} alt="" />
        </div>
      </section>
      <section className="service-detail">
        <div>
          <p className="eyebrow">Programme overview</p>
          <h2>Learning designed around real tools and applications.</h2>
          <p>{service.detail}</p>
          <Link className="button button--primary" to="/contact">
            <span>Enquire about this programme</span>
            <b aria-hidden="true">→</b>
          </Link>
        </div>
        <div className="service-detail__areas">
          {service.areas.map((area, index) => (
            <div key={area}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{area}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function ServicesPage() {
  const { service } = useParams();
  if (service && service in services) {
    return (
      <main className="inner-page" id="top">
        <ServiceDetail type={service as ServiceKey} />
      </main>
    );
  }

  return (
    <main className="inner-page" id="top">
      <section className="page-hero editorial-hero">
        <div>
          <p className="eyebrow">Training & development</p>
          <h1>Engineering education beyond the equipment.</h1>
          <p>
            Projects, internships, and technical courses connect students with
            current tools, practical systems, and industrial workflows.
          </p>
        </div>
      </section>
      <section className="services-index">
        {(Object.entries(services) as [ServiceKey, (typeof services)[ServiceKey]][]).map(
          ([slug, item], index) => (
            <Link to={`/services/${slug}`} className="service-index-card" key={slug}>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img src={withBase(item.image)} alt="" />
              </div>
              <p>{item.eyebrow}</p>
              <h2>{item.title}</h2>
              <strong>Explore programme →</strong>
            </Link>
          ),
        )}
      </section>
    </main>
  );
}
