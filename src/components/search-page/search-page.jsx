import React from "react";
import "./search-page.css";

const SearchPage = () => {
  return (
    <>
      <section id="search-bar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <input className="btn input-search" type="text" name="" id="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div class="media mb-5">
                <img class="mr-3" src="..." alt="Generic placeholder image" />
                <div class="media-body">
                  <h5 class="mt-0">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
              <div class="media">
                <img class="mr-3" src="..." alt="Generic placeholder image" />
                <div class="media-body">
                  <h5 class="mt-0">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
