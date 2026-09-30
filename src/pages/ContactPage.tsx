import { useSearchParams } from "react-router";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const selectedProduct = searchParams.get("product") ?? "";

  return (
    <main className="inner-page contact-page" id="top">
      <section className="page-hero page-hero--contact">
        <div>
          <p className="eyebrow">Contact our team</p>
          <h1>Let’s discuss your engineering requirement.</h1>
          <p>
            Product selection, technical information, quotations, and support
            begin with a clear conversation.
          </p>
        </div>
      </section>

      <section className="contact-page__content">
        <div className="contact-page__details">
          <p className="eyebrow">Head office</p>
          <h2>Vi Microsystems Pvt. Ltd.</h2>
          <address>
            No. 75, Electronics Estate
            <br />
            Perungudi, Chennai – 600 096
            <br />
            India
          </address>
          <div className="contact-page__channels">
            <a href="tel:+914424961842">
              <span>Phone</span>
              <strong>+91 44 2496 1842</strong>
            </a>
            <a href="tel:+914424961852">
              <span>Alternate line</span>
              <strong>+91 44 2496 1852</strong>
            </a>
            <a href="mailto:sales@vimicrosystems.com">
              <span>Sales enquiries</span>
              <strong>sales@vimicrosystems.com</strong>
            </a>
            <a href="mailto:suresh@vimicrosystems.com">
              <span>Training &amp; academic projects</span>
              <strong>suresh@vimicrosystems.com</strong>
            </a>
            <a href="tel:+919444061857">
              <span>Training enquiries</span>
              <strong>+91 94440 61857</strong>
            </a>
          </div>
        </div>

        <form
          className="contact-form"
          action="mailto:sales@vimicrosystems.com"
          method="post"
          encType="text/plain"
        >
          <div className="contact-form__head">
            <p className="eyebrow">Send an enquiry</p>
            <h2>Tell us what you need.</h2>
          </div>
          <label>
            <span>Your name</span>
            <input name="name" type="text" required placeholder="Name" />
          </label>
          <label>
            <span>Work email</span>
            <input name="email" type="email" required placeholder="Email address" />
          </label>
          <label>
            <span>Organisation</span>
            <input name="organisation" type="text" placeholder="Organisation name" />
          </label>
          <label>
            <span>Product or requirement</span>
            <input
              name="product"
              type="text"
              defaultValue={selectedProduct}
              placeholder="What are you looking for?"
            />
          </label>
          <label className="contact-form__message">
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Share any useful technical details"
            />
          </label>
          <button className="button button--primary" type="submit">
            <span>Send enquiry</span>
            <b aria-hidden="true">→</b>
          </button>
        </form>
      </section>
    </main>
  );
}
