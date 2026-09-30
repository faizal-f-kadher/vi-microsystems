import { withBase } from "../lib/base";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { productCategories, products } from "../data/products";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const [category, setCategoryState] = useState(
    requestedCategory && productCategories.includes(requestedCategory)
      ? requestedCategory
      : "All products",
  );
  const [query, setQuery] = useState("");
  const setCategory = (nextCategory: string) => {
    setCategoryState(nextCategory);
    setSearchParams(
      nextCategory === "All products" ? {} : { category: nextCategory },
      { replace: true },
    );
  };

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory =
        category === "All products" || product.category === category;
      const matchesQuery =
        !normalizedQuery ||
        product.title.toLowerCase().includes(normalizedQuery) ||
        product.category.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <main className="inner-page" id="top">
      <section className="page-hero page-hero--products">
        <div>
          <p className="eyebrow">Product catalogue</p>
          <h1>Technology built for hands-on engineering.</h1>
          <p>
            Browse detailed product pages across electronics, embedded systems,
            automation, power, communication, and advanced engineering labs.
          </p>
        </div>
        <div className="page-hero__stat">
          <strong>20</strong>
          <span>Specialist engineering product categories</span>
        </div>
      </section>

      <section className="catalogue">
        <aside className="catalogue__filters">
          <div className="catalogue__filter-head">
            <p>Browse categories</p>
            <span>{productCategories.length} categories</span>
          </div>
          <div className="catalogue__search">
            <label htmlFor="product-search">Search catalogue</label>
            <input
              id="product-search"
              type="search"
              placeholder="Search products"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="catalogue__categories">
            {["All products", ...productCategories].map((item) => {
              const count =
                item === "All products"
                  ? products.length
                  : products.filter((product) => product.category === item).length;
              return (
                <button
                  className={category === item ? "is-active" : ""}
                  key={item}
                  onClick={() => setCategory(item)}
                >
                  <span>{item}</span>
                  <small>{String(count).padStart(2, "0")}</small>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="catalogue__results">
          <div className="catalogue__results-head">
            <div>
              <p className="eyebrow">Selected range</p>
              <h2>{category}</h2>
            </div>
            <span>{visibleProducts.length} products</span>
          </div>
          {visibleProducts.length ? (
            <div className="catalogue-grid">
              {visibleProducts.map((product, index) => (
                <Link
                  className="catalogue-card"
                  to={`/products/${product.slug}`}
                  key={product.slug}
                >
                  <div className="catalogue-card__visual">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {product.image ? (
                      <img
                        src={withBase(product.image)}
                        alt={product.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="catalogue-card__placeholder">
                        <i />
                        <i />
                        <i />
                        <strong>VI</strong>
                      </div>
                    )}
                  </div>
                  <div className="catalogue-card__body">
                    <p>{product.category}</p>
                    <h3>{product.title}</h3>
                    <div>
                      <span>View product</span>
                      <b aria-hidden="true">→</b>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="catalogue__empty">
              <h3>No matching products</h3>
              <p>Try a different search term or select another category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="catalogue-cta">
        <p className="eyebrow">Need help selecting a system?</p>
        <h2>Tell us what you want to teach, test, or develop.</h2>
        <Link className="button button--light" to="/contact">
          <span>Discuss your requirement</span>
          <b aria-hidden="true">→</b>
        </Link>
      </section>
    </main>
  );
}
