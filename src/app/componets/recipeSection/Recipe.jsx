"use client";

import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "react-bootstrap";

export default function Recipe() {
  return (
    <div className="m-5">
      <div className="flex d-flex justify-content-center align-items-center flex-wrap">
        <h1>Recipe Section</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis animi,
          unde, alias consectetur iure saepe voluptatibus consequuntur maiores
          cumque possimus ad sit nulla ratione earum odit fugit adipisci ut
          eaque! Rerum in veniam dignissimos voluptates minus? Eligendi ipsam
          voluptatem natus non excepturi, eius voluptatibus. Architecto animi
          quam alias? Consequuntur assumenda non aliquam repellendus repudiandae
          placeat amet. At, repellendus ex! Ratione?
        </p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {/* Recipe 1 */}
        <Card className="m-5 w-25">
          <img className="w-100" src="/Poboy.png" />
          <CardHeader>
            <h2>Recipe #1</h2>
          </CardHeader>
          <CardBody>
            <p>This is the first recipe.</p>
            <ul>
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </CardBody>
          <CardFooter className="d-flex justify-content-center">
            <button className="btn btn-primary">View Recipe</button>
          </CardFooter>
        </Card>
        {/* Recipe 2 */}
        <Card className="m-5 w-25">
          <img className="w-100" src="/Jambalaya.png" />
          <CardHeader>
            <h2>Recipe #1</h2>
          </CardHeader>
          <CardBody>
            <p>This is the first recipe.</p>
            <ul>
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </CardBody>
          <CardFooter className="d-flex justify-content-center">
            <button className="btn btn-primary">View Recipe</button>
          </CardFooter>
        </Card>
        {/* Recipe 3 - Hidden until clicked to view */}
        <Card className="m-5 w-25">
          <img className="w-100" src="/Beignets.png" />
          <CardHeader>
            <h2>Recipe #1</h2>
          </CardHeader>
          <CardBody>
            <p>This is the first recipe.</p>
            <ul>
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </CardBody>
          <CardFooter className="d-flex justify-content-center">
            <button className="btn btn-primary">View Recipe</button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
