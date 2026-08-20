import React from "react";

const ProductsPage = () => {
  return (
    <>
      {/* Page Header */}
      <section>
        <div>
          <span>Dhakapa Collection</span>
          <h1>Our Products</h1>
          <p>
            Discover thoughtfully crafted bags that bring together traditional
            Nepali craftsmanship and contemporary design.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section>
        <div>
          <button>All</button>
          <button>Backpacks</button>
          <button>Handbags</button>
          <button>Tote Bags</button>
          <button>Travel Bags</button>
          <button>Briefcases</button>
        </div>
      </section>

      {/* Products Section */}
      <main>
        {/* Toolbar */}
        <div>
          <div>
            <input
              type="text"
              placeholder="Search products..."
            />
          </div>

          <div>
            <button>Filter</button>

            <select>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <section>
          {/* Product Card */}
          <article>
            <div>
              <img src="" alt="" />
              <button>♡</button>
            </div>
            <div>
              <span>Backpack</span>
              <h2>Heritage Backpack</h2>

              <div>
                <span>★★★★★</span>
                <span>(24)</span>
              </div>

              <div>
                <span>Rs. 3,200</span>
                <button>Add to Cart</button>
              </div>
            </div>
          </article>

          {/* Product Card */}
          <article>
            <div>
              <img src="" alt="" />
              <button>♡</button>
            </div>

            <div>
              <span>Travel Bag</span>
              <h2>Himalayan Travel Bag</h2>

              <div>
                <span>★★★★★</span>
                <span>(18)</span>
              </div>

              <div>
                <span>Rs. 4,500</span>
                <button>Add to Cart</button>
              </div>
            </div>
          </article>

          {/* Product Card */}
          <article>
            <div>
              <img src="" alt="" />
              <button>♡</button>
            </div>

            <div>
              <span>Handbag</span>
              <h2>Dhakapa Classic</h2>

              <div>
                <span>★★★★★</span>
                <span>(31)</span>
              </div>

              <div>
                <span>Rs. 2,800</span>
                <button>Add to Cart</button>
              </div>
            </div>
          </article>

          {/* Product Card */}
          <article>
            <div>
              <img src="" alt="" />
              <button>♡</button>
            </div>

            <div>
              <span>Tote Bag</span>
              <h2>Heritage Tote</h2>

              <div>
                <span>★★★★☆</span>
                <span>(15)</span>
              </div>

              <div>
                <span>Rs. 2,400</span>
                <button>Add to Cart</button>
              </div>
            </div>
          </article>
        </section>

        {/* Pagination */}
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>→</button>
        </div>
      </main>
    </>
  );
};

export default ProductsPage;