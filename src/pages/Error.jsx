import React from "react";
import { Link, useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();

  if (error.status == 404) {
    return (
      <body className="body-error">
        <div class="room">
          <div class="cuboid">
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
          </div>
          <div class="oops">
            <h2>OOPS!</h2>
            <p>We can't find the page that you're looking for :(</p>
          </div>
          <div class="center-line">
            <div class="hole">
              <div class="ladder-shadow"></div>
              <div class="ladder"></div>
            </div>
            <div class="four">4</div>
            <div class="four">4</div>
            <div class="btnn" to="/">
              <a href="/">BACK TO HOME</a>
            </div>
          </div>
        </div>
      </body>
    );
  } else {
  }
  return (
    <body className="body-error">
      <div class="room">
        <div class="cuboid">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </div>
        <div class="oops">
          <h2>OOPS!</h2>
          <p>We can't find the page that you're looking for :(</p>
        </div>
        <div class="center-line">
          <div class="hole">
            <div class="ladder-shadow"></div>
            <div class="ladder"></div>
          </div>
          <div class="four">4</div>
          <div class="four">4</div>
          <div class="btnn" to="/">
            <a href="/">BACK TO HOME</a>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Error;
