import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import "./header.scss";
const logo = require("../../assets/logo_store.svg");

function HeaderDefault() {
  return (
    <div className="header-default">
      <section className="logo-company">
        <div className="icons">
          <FacebookIcon className="networks" />
          <InstagramIcon className="networks" />
        </div>
        <div className="info-header">
          PAGOS CON TARJETA TIENEN UN RECARGO DEL 5%
        </div>
      </section>
      <section className="wishlist">
        <div>
          <img src={logo} alt="logo company"></img>
        </div>
        <div>
          <input placeholder="Buscar un producto" />
        </div>
        <section className="icons-purchase">
          <div>
            <PersonIcon />
            Mi cuenta
          </div>
          <div>
            <FavoriteIcon />
            lista de deseos
          </div>
          <div>
            <AddShoppingCartIcon /> Carrito
          </div>
        </section>
      </section>
    </div>
  );
}

export default HeaderDefault;
