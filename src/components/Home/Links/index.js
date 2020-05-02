import React from "react";
import { Link } from "react-router-dom";

class Links extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="navigation__pc">
          <div className="navigation__pc__options">
            <div className="option__left">
              <Link
                to={{
                  pathname: `/`,
                }}
              >
                <button type="button">Inicio</button>
              </Link>
            </div>

            <div className="option__left">
              <Link
                to={{
                  pathname: `/page1`,
                }}
              >
                <button type="button">Página 1</button>
              </Link>
            </div>
            <div className="option__left">
              <Link
                to={{
                  pathname: `/page2`,
                }}
              >
                <button type="button">Página 2</button>
              </Link>
            </div>
            <div className="option__left">
              <Link
                to={{
                  pathname: `/page3`,
                }}
              >
                <button type="button">Página 3</button>
              </Link>
            </div>
            <div className="option__left">
              <Link
                to={{
                  pathname: `/page4`,
                }}
              >
                <button type="button">Página 4</button>
              </Link>
            </div>
            <div className="option__left">
              <Link
                to={{
                  pathname: `/page5`,
                }}
              >
                <button type="button">Página 5</button>
              </Link>
            </div>
            <div className="option__left">
              <Link
                to={{
                  pathname: `/pageNotFound`,
                }}
              >
                <button type="button">Página no encontrada</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Links;
