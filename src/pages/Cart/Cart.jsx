import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
const navigate = useNavigate()

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Articles</p>
          <p>Titre</p>
          <p>Prix</p>
          <p>Quantitié</p>
          <p>Total</p>
          <p>Supprimer</p>
        </div>

        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title  cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price} €</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]} €</p>
                <p onClick={() =>removeFromCart(item._id)} className="cross"> X</p>
              </div>
              <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-botton">
<div className="cart-total">
  <h2>Cart Total</h2>
  <div>
    <div className="cart-total-details">
      <p>Total-t</p>
      <p>{getTotalCartAmount()} €</p>
    </div>
    <hr />
    <div className="cart-total-details">
      <p>Frais de livraisons</p>
      <p>{getTotalCartAmount()===0?0:2} €</p>
    </div>

    <hr />
    <div className="cart-total-details">
      <b>Total</b>
     <b> {getTotalCartAmount()===0 ?0:getTotalCartAmount()+2} €</b>
    </div>
  </div>
  <button onClick={()=>navigate('/order')}>PASSER À LA CAISSE</button>

</div>

<div className="cart-promocode">
  <div>
    <p>Si vous avez un code promo entrez le ici</p>
    <div className="cart-promocode-input">
<input type="text"  placeholder="Code promo"/>
<button>Soumettre</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Cart;
