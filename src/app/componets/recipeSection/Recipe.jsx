"use client";

import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Recipe() {
  return (
    <div className="m-5 flex-auto">
      <div className="item-centered text-center row-span-3 mt-4">
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
      <div className="flex flex-row ">
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
            <h2>Recipe #2</h2>
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
            <h2>Recipe #3</h2>
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
      <div className="flex flex-row ">
        {/* Recipe 4 */}
        <Card className="m-5 w-25">
          <img className="w-100" src="/Pancakes.jpg" />
          <CardHeader>
            <h2>Recipe #4</h2>
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
        {/* Recipe 5 */}
        <Card className="m-5 w-25">
          <img className="w-100" src="/Chicken.jpg" />
          <CardHeader>
            <h2>Recipe #5</h2>
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
        {/* Recipe 6 - Hidden until clicked to view */}
        <Card className="m-5 w-25">
          <img className="w-100" src="/Burger.jpg" />
          <CardHeader>
            <h2>Recipe #6</h2>
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
