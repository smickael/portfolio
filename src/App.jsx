import React, { useRef } from "react";

import {
  Missions,
  Header,
  Introduction,
  Skills,
  HeroSection,
  Footer,
  Showcase,
  Contact,
} from "./components";

function App() {
  const magicRef = useRef(null);
  const sceneRef = useRef(null);

  const handleMouseMove = (e) => {
    const magicWHalf = magicRef.current.offsetWidth / 2;
    const x = e.pageX - sceneRef.current.offsetLeft;
    const y = e.pageY - sceneRef.current.offsetTop;
    magicRef.current.style.left = `${x - magicWHalf}px`;
    magicRef.current.style.top = `${y - magicWHalf}px`;
  };

  return (
    <div className="relative repeat bg-[#0b0b16] w-full h-full scrollbar-hide scene" ref={sceneRef} onMouseMove={handleMouseMove}
    >
      <div className="magic" ref={magicRef}></div>
      <div className="max-w-7xl mx-auto">
        <Header />
        <HeroSection />
        <Introduction />
        <Missions />
        <Skills />
        <Showcase />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
