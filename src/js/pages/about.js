import React from "react";
import CvCard from "../../img/cv-card.png";
import PichCard from "../../img/pichangapp-card.png";
import BodyFooter from "../component/bodyFooter";
import { PersonLinesFill, ChevronCompactDown } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div className="bodyFrame">
        <div className="container contentScroller ">
          <div className="card border-0 mt-4">
            <div className="card-header bg-dark " id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                  id="cardTitle"
                >
                  Perfil <ChevronCompactDown size={15} />
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#profileAccordeon"
            >
              <div className="card-body">
                Soy un profesional con interés en aprender herramientas de
                trabajo que mejoren la eficiencia de los recursos a través de
                herramientas digitales.
                <br />
                <br />
                Me gusta trabajar en equipo, generar lazos de confianza que
                faciliten el trabajo colaborativo y trabajar en ambientes
                distendidos.
                <br />
                <br />
                Me acomoda trabajar enfocado en metas y analizo constantemente
                mi entorno en busca de oportunidades que me ayuden a obtener
                mayor bienestar y mejores resultados, me gusta enseñar y valoro
                el consejo de mis colegas.
                <br />
                <br />
                Mis fortalezas están en el desarrollo lógico de aplicaciones y
                front-end. Ya sea back-end, front-end o full-stack, siempre
                prefiero los ambientes desafiantes con trabajo colectivo. <br />
                <br />
                <Link
                  to="/experience"
                  className="btn btn-sm btn-warning text-dark"
                >
                  Ver Experiencia
                </Link>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-lg-4">
              <div className="card my-2">
                <img src={CvCard} className="card-img-top" alt="Cv" />
                <div className="card-body">
                  <h5 className="card-title">Experiencia</h5>
                  <p className="card-text">
                    Revisa mi CV online o descargalo ¡Está en <b>inglés</b> y{" "}
                    <b>español</b>!
                  </p>
                </div>
                <div className="card-footer">
                  <Link
                    to="/experience"
                    className="btn btn-sm btn-warning text-dark"
                  >
                    Ver CV
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card my-2">
                <img src={PichCard} className="card-img-top" alt="Proyectos" />
                <div className="card-body">
                  <h5 className="card-title">Proyectos</h5>
                  <p className="card-text">
                    Revisa proyectos desarrollados en Github y activos.
                  </p>
                </div>

                <div className="card-footer">
                  <Link
                    to="/projects"
                    className="btn btn-sm btn-warning text-dark"
                  >
                    Ver Proyectos
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="card my-2">
                <div className="card-img-top bg-warning text-center py-4">
                  <PersonLinesFill
                    className="text-danger"
                    size={70}
                  ></PersonLinesFill>
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">Contacto</h5>
                  <p className="card-text text-light"></p>
                </div>
                <div className="card-footer">
                  <Link
                    to="/contact"
                    className="btn btn-sm btn-warning text-dark"
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BodyFooter />
      </div>
    </>
  );
};
export default About;
