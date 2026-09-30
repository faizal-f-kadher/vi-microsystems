import { withBase } from "../lib/base";
const gallery = [
  ["Industrial visits", "Students and educators visiting our Chennai engineering facility.", "/img/gallery/industrial-visit.jpeg"],
  ["Naan Mudhalvan programmes", "Faculty development and practical engineering programmes across Tamil Nadu.", "/img/gallery/naan-mudhalvan-cit-coimbatore.jpg"],
  ["Instrumentation & process control", "Practical systems for measuring and controlling industrial processes.", "/img/products/level-process-station.png"],
  ["IoT applications", "Connected sensing and control systems developed for real-time applications.", "/img/products/iot-development-system.png"],
  ["PLC & multi-protocol systems", "Automation platforms connecting PLCs, gateways, and industrial communication.", "/img/products/plc-sie2-with-demo-panel-training-kit.png"],
  ["Research & development", "Product development from technical concept through prototype and validation.", "/img/products/advanced-universal-fpga-trainer.png"],
  ["Power electronics", "Converter, inverter, drive, and electrical machine training systems.", "/img/products/ipm-based-power-module.png"],
  ["Industry 4.0 & digital twins", "DCS, PLC, IoT, simulation, VR, and AR brought together in integrated systems.", "/img/products/distributed-control-system.png"],
] as const;

export default function GalleryPage() {
  return (
    <main className="inner-page" id="top">
      <section className="page-hero editorial-hero">
        <div>
          <p className="eyebrow">Inside Vi Microsystems</p>
          <h1>People, products, and engineering in practice.</h1>
          <p>
            Explore moments from industrial visits, training programmes,
            product development, and specialist engineering departments.
          </p>
        </div>
      </section>
      <section className="gallery-index">
        {gallery.map(([title, copy, image], index) => (
          <article className="gallery-story" key={title}>
            <div className="gallery-story__image">
              <img src={withBase(image)} alt={title} loading="lazy" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div>
              <p className="eyebrow">Gallery series</p>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
