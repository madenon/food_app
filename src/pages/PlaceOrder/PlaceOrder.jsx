import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Information sur la livraison</p>
        <div className="multi-fields">
          <input type="text" placeholder="Votre Prénom" />
          <input type="text" placeholder="Votre Nom de famille" />
        </div>
        <input type="email" placeholder="Adresse email" />
        <input type="text" placeholder="Rue" />
        <div className="multi-fields">
          <input type="text" placeholder="Ville" />
          <input type="text" placeholder="Province" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Code postal" />
          <input type="text" placeholder="Pays" />
        </div>
        <input type="text" placeholder="Téléphone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Prix total</h2>
          <div>
            <div className="cart-total-details">
              <p>Total-t</p>
              <p>{getTotalCartAmount()} €</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Frais de livraisons</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2} €</p>
            </div>

            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                {" "}
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2} €
              </b>
            </div>
          </div>
          <button>PASSER AU PAIMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
