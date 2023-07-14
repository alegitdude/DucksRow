import styled from "styled-components";
import CheckIcon from "../assets/CheckIcon";
import { useFilterContext } from "../context/filterContext";
import { formatPrice, getUniqueValues } from "../utils/helpers";
import { nanoid } from "nanoid";

const Filters = () => {
  const {
    filters: { text, category, company, color, minPrice, price, maxPrice },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext();

  const categories = getUniqueValues(allProducts, "category");
  const comapnies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* ///// */}
          {/* categories */}
          <div className="form-control">
            <h5>Category</h5>
            <div className="categories">
              {categories.map((c) => {
                return (
                  <button
                    onClick={updateFilters}
                    type="button"
                    name="category"
                    key={nanoid()}
                    className={category === c.toLowerCase() ? "active" : null}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* //// */}
          {/* companies */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {comapnies.map((c) => {
                return (
                  <option key={nanoid()} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* //// */}
          {/* colors */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c) => {
                if (c === "all") {
                  return (
                    <button
                      name="color"
                      key={nanoid()}
                      onClick={updateFilters}
                      data-color="all"
                      className={color === "all" ? "all-btn active" : "all-btn"}
                    >
                      all
                    </button>
                  );
                }
                return (
                  <button
                    key={nanoid()}
                    name="color"
                    style={{ background: c }}
                    className={color === c ? "color-btn active" : "color-btn"}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? <CheckIcon /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* ////// */}
          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>
          {/* ///// */}
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--primary-yellow-light);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--primary-grey-dark);
    cursor: pointer;
  }
  .active {
    border-color: var(--primary-grey-dark);
  }
  .company {
    background: var(--primary-yellow-light);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    /* background: #222; */
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--color-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--primary-red);
    color: var(--color-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
  @media (max-width: 767px) {
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .clear-btn {
      width: 6rem;
    }
    form {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
    }
    .form-control {
      text-align: center;
    }
  }
  @media (max-width: 570px) {
    form {
      grid-template-columns: 1fr;
      justify-items: center;
      text-align: center;
    }
    .categories {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .colors {
      padding: 0 0.5rem;
      justify-content: center;
      max-width: 15rem;
    }
  }
`;
export default Filters;
