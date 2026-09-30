import { withBase } from "../lib/base";
import { Link, useParams } from "react-router";
import { getProduct, products } from "../data/products";
import NotFoundPage from "./NotFoundPage";

export default function ProductDetailPage() {
  const { slug = "" } = useParams();
  const product = getProduct(slug);

  if (!product) {
    return <NotFoundPage />;
  }

  const related = products
    .filter(
      (candidate) =>
        candidate.category === product.category &&
        candidate.slug !== product.slug,
    )
    .slice(0, 3);

  return (
    <main className="inner-page product-detail" id="top">
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Products</Link>
        <span>/</span>
        <span>{product.title}</span>
      </div>

      <section className="product-detail__hero">
        <div className="product-detail__visual">
          <div className="product-detail__axes" />
          {product.image ? (
            <img src={withBase(product.image)} alt={product.title} />
          ) : (
            <div className="catalogue-card__placeholder catalogue-card__placeholder--large">
              <i />
              <i />
              <i />
              <strong>VI</strong>
            </div>
          )}
          <span className="product-detail__visual-label">
            Engineering product system
          </span>
        </div>
        <div className="product-detail__intro">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div className="product-detail__actions">
            <Link
              className="button button--primary"
              to={`/contact?product=${encodeURIComponent(product.title)}`}
            >
              <span>Request information</span>
              <b aria-hidden="true">→</b>
            </Link>
            <Link className="product-detail__back" to="/products">
              Back to products
            </Link>
          </div>
          <div className="product-detail__meta">
            <div>
              <span>Category</span>
              <strong>{product.category}</strong>
            </div>
            <div>
              <span>Product reference</span>
              <strong>VI-{String(products.indexOf(product) + 1).padStart(3, "0")}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="product-specs">
        <header>
          <p className="eyebrow">Technical overview</p>
          <h2>Specifications &amp; features</h2>
          <p>
            Key product information based on the current engineering catalogue.
            Contact our team for the latest configuration and availability.
          </p>
        </header>
        <div className="product-specs__list">
          {product.specifications.length ? (
            product.specifications.map((specification, index) => (
              <div key={`${specification}-${index}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{specification}</p>
              </div>
            ))
          ) : (
            <div>
              <span>01</span>
              <p>Detailed technical specifications are available on request.</p>
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="related-products">
          <div className="related-products__head">
            <div>
              <p className="eyebrow">Continue exploring</p>
              <h2>Related products</h2>
            </div>
            <Link to="/products">View full catalogue →</Link>
          </div>
          <div className="related-products__grid">
            {related.map((item) => (
              <Link to={`/products/${item.slug}`} key={item.slug}>
                <div>
                  {item.image ? (
                    <img src={withBase(item.image)} alt={item.title} loading="lazy" />
                  ) : (
                    <div className="catalogue-card__placeholder">
                      <i />
                      <i />
                      <i />
                      <strong>VI</strong>
                    </div>
                  )}
                </div>
                <p>{item.category}</p>
                <h3>{item.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
