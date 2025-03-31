import { useState } from "react";
import "./App.css";

import Button from "./assets/button";
import Image from "./assets/image";
import palicoImage from "./assets/palico.png";

function App() {
  return (
    <>
      <div>
        <Image src={palicoImage} alt='Palico meme' />
      </div>
      <div>
        <Button text='Cliccami!' />
      </div>
    </>
  );
}

export default App;
