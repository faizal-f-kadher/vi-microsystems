import smartGridImage from "../assets/products/smart-grid.jpg";
import iotImage from "../assets/products/iot.png";
import ipmImage from "../assets/products/ipm.jpg";
import factsImage from "../assets/products/facts.jpg";
import rfImage from "../assets/products/rf-source.jpg";

const base = "https://www.vimicrosystems.com/";

const catalogues = [
  ["Advanced Special R&D Products", "assets/img/MODIFIED_FINAL_special_R&D_Catalogue.pdf", rfImage, "Research systems"],
  ["Innovation Products for Electric Vehicles", "assets/img/2 nnew  new - E_Vechicle_catloque.pdf", ipmImage, "Electric mobility"],
  ["IoT Development Solution", "assets/img/iot-development solution.pdf", iotImage, "Connected systems"],
  ["ML / AI & Embedded Boards", "assets/img/embadded boards.pdf", iotImage, "Embedded computing"],
  ["3-Phase FOC & DTC", "assets/img/3 PH FOC,DTC cataloque.pdf", ipmImage, "Motor control"],
  ["Siemens DCS with Simulation", "assets/img/siemens dcs with simulation.pdf", factsImage, "Industrial automation"],
  ["Advanced Solar Wind Grid & Smart Grid", "assets/img/Advanced solar wind grind&smart grid.pdf", smartGridImage, "Renewable energy"],
  ["Digital Twin", "assets/img/Digital Twin (1).pdf", factsImage, "Industry 4.0"],
  ["Digital Twin for Paint Industry & Smart Agriculture", "assets/img/1Digital twin Experimental set up for paint Industry Smart Agri-2.pdf", iotImage, "Applied digital twins"],
  ["3VA2 MCCB Trainer", "assets/img/3VA2 MCCB Trainer catalog2.pdf", smartGridImage, "Power distribution"],
  ["Four Types of Three-Phase Inverter", "assets/img/4 types of 3Q INVERTER.pdf", ipmImage, "Power electronics"],
  ["PLC & IoT Multi-Protocol Trainer", "assets/img/PLC (2)-20240902104738.pdf", factsImage, "PLC and IoT"],
  ["Configurable DC-DC Converter", "assets/img/Analog digital config DC DC Converter - Catalogue.pdf", ipmImage, "Converter systems"],
  ["1.5KW Hybrid PQ-DQ Inverter", "assets/img/pq-dq inverter - modified.pdf", ipmImage, "Hybrid inverter"],
  ["MATLAB IGBT / MIPM / SiC", "assets/img/matlab based IGBTMIPM,SIC.pdf", ipmImage, "MATLAB systems"],
  ["Nine Real-Time Controllers", "assets/img/9 real time controllers (DSP,FPGA).pdf", rfImage, "DSP and FPGA"],
  ["2KW DFIG Setup with IGBT", "assets/img/2kw dfig setup with 1 gbt.pdf", smartGridImage, "Wind energy"],
  ["AR / VR & VDAS-02", "assets/img/AR-VR CATALOGUE.pdf", factsImage, "Immersive engineering"],
] as const;

export default function CataloguesPage() {
  return (
    <main className="inner-page" id="top">
      <section className="page-hero editorial-hero">
        <div>
          <p className="eyebrow">Technical library</p>
          <h1>Product catalogues for deeper exploration.</h1>
          <p>
            Download detailed literature covering R&amp;D systems, embedded
            technology, power electronics, automation, IoT, and digital twins.
          </p>
        </div>
        <div className="page-hero__stat">
          <strong>18</strong>
          <span>Technical catalogues available to download</span>
        </div>
      </section>

      <section className="download-library">
        <header className="library-intro">
          <p className="eyebrow">Download centre</p>
          <h2>Choose a technology area.</h2>
          <p>PDF documents open in a new tab for viewing or download.</p>
        </header>
        <div className="download-grid">
          {catalogues.map(([title, path, image, category], index) => (
            <a
              className="download-card"
              href={`${base}${encodeURI(path)}`}
              target="_blank"
              rel="noreferrer"
              key={title}
            >
              <div className="download-card__visual">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img src={image} alt="" />
                <b>PDF</b>
              </div>
              <div className="download-card__copy">
                <p>{category}</p>
                <h2>{title}</h2>
                <span>Open catalogue ↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
