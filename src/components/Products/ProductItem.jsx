import "./ProductItem.css";
import Rating from "./Rating";
import Card from "../UI/Card";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const ProductItem = ({ product }) => {
  const { name, description, img, price } = product;

  const {addItem} = useContext(CartContext);
  
  return (
    <Card>
      <img src={img} alt={name} />
      <h3 className="product-title">{name}</h3>
      <p className="product-description">{description}</p>
      <div className="product-info">
        <Rating />
        <span className="price">{price}₺</span>
      </div>
      <button className="add-to-card" onClick={() => addItem(product)}>Sepete Ekle</button>
    </Card>
  );
};

export default ProductItem;
