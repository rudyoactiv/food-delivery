import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";
import { useContext } from "react";
import "./ProductPage.css";
import { assets } from "../../assets/assets";

const ProductPage = () => {
  const { id } = useParams();
  const { food_list, cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = food_list.find((item) => item._id === id);
    setProduct(foundProduct);
  }, [id, food_list]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <div className="product-page-left">
          <div className="product-item-img-container">
            <img
              className="product-item-image"
              src={`${url}/images/${product.image}`}
              alt={product.name}
            />
          </div>
      </div>
      <div className="product-page-right">
        <div className="product-item-info">
          <div className="product-item-name-rating">
            <p>{product.name}</p>
            <img src={assets.rating_starts} alt="Rating stars" />
          </div>
          <p className="product-item-desc">{product.description}</p>
          <p className="product-item-price">Rs. {product.price}</p>
          {!cartItems[product._id] ? (
            <div className="product-add" onClick={() => addToCart(product._id)}>
              Add to Cart
            </div>
          ) : (
            <div className="product-item-counter">
              <img
                onClick={() => removeFromCart(product._id)}
                src={assets.remove_icon_red}
                alt="Remove from cart"
              />
              <p>{cartItems[product._id]}</p>
              <img
                onClick={() => addToCart(product._id)}
                src={assets.add_icon_green}
                alt="Add more to cart"
              />
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductPage;
