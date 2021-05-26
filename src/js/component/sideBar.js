import React from "react";
import "../styles/sideBar.css";
import html5 from "../../img/html5.png";
import css3 from "../../img/css3.png";
import jscript from "../../img/js.png";
import bootstrap from "../../img/bootstrap.png";
import reactjs from "../../img/Reactjs.png";
import flux from "../../img/flux.png";
import python from "../../img/python.png";
import postgresql from "../../img/postgresql.png";
import flask from "../../img/Flask.png";
import sqlAlchemy from "../../img/sqlAlchemy.png";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";

// import { LinkContainer } from "react-router-bootstrap";

export const SideBar = () => {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <div className="text-center sideBar bg-dark">
        <div className="top-sideBar pb-2">
          <div className="row pt-3">
            <div className="prof-foto mx-auto"></div>
          </div>
          <div className="text-center text-light">
            <h3>Felipe Arancibia</h3>
            <p className="mb-1">Desarrollador Web Full Stack Jr.</p>
            <p>
              <em>Administrador de Empresas de turismo</em>
            </p>
          </div>
        </div>
        <div className="idioma px-4 text-light">
          <h3 className=" text-center py-2">Idiomas</h3>
          <div className="row">
            <div className="col-6">
              <div className="circle mb-2 mx-auto">
                <h6 className="circleText text-light">100%</h6>
              </div>
              <p>Español - Nativo</p>
            </div>
            <div className="col-6 ">
              <div className="circle mb-2 mx-auto">
                <h6 className="circleText text-light ">90%</h6>
              </div>
              <p>Inglés - C2</p>
            </div>
          </div>
        </div>
        <hr className="bg-light mx-4" />
        <div className="codeblock px-4">
          <h3 className="text-light text-center">"Herramientas"</h3>
          <div className="row mt-3">
            <div className="col-6 col-sm-4">
              <img src={html5} alt="HTML5" width="40" />
              <p className="text-light mb-1">HTML5</p>
            </div>
            <div className="col-6 col-sm-4">
              <img src={css3} alt="CSS3" width="40" />
              <p className="text-light">CSS3</p>
            </div>
            <div className="col-6 col-sm-4">
              <img src={jscript} alt="JS" width="37" />
              <p className="text-light">Javascript</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-sm-4">
              <img src={bootstrap} alt="Bootstrap" width="40" />
              <p className="text-light">Bootstrap</p>
            </div>
            <div className="col-6 col-sm-4">
              <img src={reactjs} alt="reactjs" width="40" />
              <p className="text-light">React.js</p>
            </div>
            <div className="col-6 col-sm-4">
              <img src={flux} alt="flux" width="40" />
              <p className="text-light">Flux</p>
            </div>
          </div>
		  <div className="row">
            <div className="col-6 col-sm-4 pt-2">
              <img src={python} alt="Python" width="40" />
              <p className="text-light">Python</p>
            </div>
            <div className="col-6 col-sm-4">
              <img src={flask} alt="Flask" width="50" />
              <p className="text-light">Flask</p>
            </div>
			<div className="col-6 col-sm-4 pt-1">
              <img src={postgresql} alt="postgreSQL" width="40" />
              <p className="text-light">PostgreSql</p>
          </div>
          </div>
		  <div className="row ">
			  <div className="col-sm-2"></div>
           <div className="col-12 col-sm-8">
              <img src={sqlAlchemy} alt="sqlAlchemy" width="150" />
              <p className="text-light text-center">SqlAlchemy</p>
			  </div>
			  <div className="col-sm-2"></div>
            </div>

          <hr className="bg-light mx-2" />
        </div>
      </div>
    </>
  );
};
export default SideBar;
