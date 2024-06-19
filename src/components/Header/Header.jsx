import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Commandez votre plat préféré ici</h2>
        <p>Choisissez parmi un menu varié comprenant une gamme délicieuse de plats préparés avec les meilleurs ingrédients</p>
        
        <button>Voir menu</button>
      </div>
    </div>
  );
};

export default Header;
