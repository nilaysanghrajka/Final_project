import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import ModalGButton from "./ModalGButton.js";

export default class NewReleasesGallery extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        {/* Jumbotron Header screen 1*/}
        <section class="jumbotron text-center">
          <div class="container">
            <h1>New Releases!</h1>
            <p class="lead text-muted">Check out the new films we have arriving!</p> 
          </div>
        </section>

        {/* Start of gallery cards for Screen 1*/}
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <Link to={"./individual/Gremlins"}>
                    <img
                      alt="Gremlins"
                      src={require("./images/gremlins_500px.jpg")}
                      width="100%"
                      height="100%"
                      class="img-responsive"
                    ></img>
                  </Link>
                  <div class="card-body">
                    <p class="card-text">Blast from the Past: Gremlins</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a
                          href="https://www.imdb.com/title/tt0087363/"
                          target="_blank"
                          role="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          IMDB
                        </a>
                        <ModalGButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <Link to={"./individual/Gremlins"}>
                    <img
                      alt="Gremlins"
                      src={require("./images/gremlins_500px.jpg")}
                      width="100%"
                      height="100%"
                      class="img-responsive"
                    ></img>
                  </Link>
                  <div class="card-body">
                    <p class="card-text">Late night horror: Sea Fever</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                       
                        <a
                          href="https://www.imdb.com/title/tt0087363/"
                          target="_blank"
                          role="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          IMDB
                        </a>
                        <ModalGButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                <Link to={"./individual/Gremlins"}>
                    <img
                      alt="Gremlins"
                      src={require("./images/gremlins_500px.jpg")}
                      width="100%"
                      height="100%"
                      class="img-responsive"
                    ></img>
                  </Link>
                  <div class="card-body">
                    <p class="card-text">Matinee: Howl's Moving Castle</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        
                        <a
                          href="https://www.imdb.com/title/tt0087363/"
                          target="_blank"
                          role="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          IMDB
                        </a>
                        <ModalGButton />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of gallery cards for screen 1 */}
        <br></br>
        <br></br>
      </div>
    );
  }
}