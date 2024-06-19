import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrSate] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Votre nom" required />
          )}
          <input type="text" placeholder="Votre email" required />
          <input type="password" placeholder="Votre mot de passe" required />
        </div>
        <button>
          {currState === "Sign Up" ? "Créer un compte" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            En continuant, j'accepte les conditions d'utilisation et la
            politique de confidentialité
          </p>
        </div>
        {currState === "Login" ? (
          <p>
            Créer un nouveau compte? <span onClick={() =>setCurrSate("Sign Up")}>Cliquer ici</span>
          </p>
        ) : (
          <p>
            Avez-vous déjà un compte? <span onClick={() =>setCurrSate("Login")}>Connecter-vous ici</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
