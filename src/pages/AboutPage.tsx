import { Link } from "react-router";
import buildingImage from "../assets/company/vi-building.png";
import smartGridImage from "../assets/products/smart-grid.jpg";

export default function AboutPage() {
  return (
    <main className="inner-page about-page" id="top">
      <section className="page-hero page-hero--about">
        <div>
          <p className="eyebrow">About Vi Microsystems</p>
          <h1>Engineering progress since 1986.</h1>
          <p>
            We design and develop hardware and software products for technical
            education, engineering research, and industrial application.
          </p>
        </div>
        <div className="about-page__hero-visual">
          <img src={buildingImage} alt="Vi Microsystems office in Chennai" />
          <span>Perungudi / Chennai / India</span>
        </div>
      </section>

      <section className="about-page__story">
        <div>
          <p className="eyebrow">Our purpose</p>
          <h2>Keeping pace with the technologies shaping modern engineering.</h2>
        </div>
        <div>
          <p>
            Vi Microsystems was established with the prime motto to “Design and
            Develop the Hardware and Software products.” Our work spans
            electrical, electronics, instrumentation, mechanical, chemical,
            embedded, communication, and automation technologies.
          </p>
          <p>
            The company operates from a three-storey, approximately 20,000
            square-foot facility in Chennai, bringing R&amp;D, production,
            quality control, sales, service, finance, purchase, and project
            teams together.
          </p>
        </div>
      </section>

      <section className="about-page__pillars">
        {[
          [
            "01",
            "Research & development",
            "Our R&D wing is recognised by the Department of Scientific & Industrial Research, Government of India.",
          ],
          [
            "02",
            "Multi-disciplinary engineering",
            "Electronics, power, instrumentation, communication, and automation expertise work together.",
          ],
          [
            "03",
            "Customer support",
            "Experienced engineers provide technical guidance and after-sales support to educational customers across India.",
          ],
        ].map(([number, title, copy]) => (
          <article key={title}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="about-page__feature">
        <div>
          <img src={smartGridImage} alt="Smart grid engineering trainer" />
        </div>
        <div>
          <p className="eyebrow">Product depth</p>
          <h2>A broad engineering catalogue, organized around specialist labs.</h2>
          <p>
            From foundational electronics to IoT, smart grid, digital twins,
            robotics, VLSI, DSP, and process control, the catalogue supports a
            connected approach to technical learning and development.
          </p>
          <Link className="button button--primary" to="/products">
            <span>Explore the catalogue</span>
            <b aria-hidden="true">→</b>
          </Link>
        </div>
      </section>
    </main>
  );
}
