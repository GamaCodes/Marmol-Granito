import React from "react";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="section-footer">
        <section className="section-footer-img">
          <img src="./marmol_white.png" alt="logo blanco" />
        </section>
        <div className="section-footer-content">
          <h2>Marmol y Granito</h2>
          <p className="foot-just">
            Somos constructores Mexicanos, la elección inteligente de las
            constructoras
          </p>
        </div>
        <div className="divv-footer-content">
          <h2>Enlaces</h2>
          <section className="ul-contin nolinkd">
            <NavLink to="/" onClick={window.scrollTo(0, 0)}>
              Inicio
            </NavLink>
            <NavLink to="acerca" onClick={window.scrollTo(0, 0)}>
              Nosotros
            </NavLink>
            <NavLink to="servicios" onClick={window.scrollTo(0, 0)}>
              Servicios
            </NavLink>
          </section>
        </div>
        <div className="divv-footer-content">
          <h2>Contacto</h2>
          <p className="pcorreo">obras@constructoramarmolygranito.com</p>
          <p className="pcorreo">
            Calle 1B 342 Local 4B, Vista Alegre Norte, CP 97138, Merida
          </p>
          <p className="pcorreo">(+52) 55 6586 - 6296</p>
        </div>
      </div>
      <section className="center-foo">2019 – Derechos Reservados</section>
    </div>
  );
}
