import React from "react";
import "../styles/components/FeaturedProducts.scss";

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            name: "Pink Silk Blouse",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80"
        },
        {
            id: 2,
            name: "Black Leather Jacket",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80"
        },
        {
            id: 3,
            name: "Designer Dress",
            price: 149.99,
            image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section className="featured-products section">
            <div className="container">
                <h2>Featured Collection</h2>
                <div className="products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                                <button className="btn btn-outline">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
