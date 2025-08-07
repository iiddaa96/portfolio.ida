"use client";
import { useEffect, useState } from "react";
import "../styles/StyleText.css";

function Introduce() {
  const fullText = "Ida Casperson";
  const [displayedText, setDisplayedText] = useState("");
  const [showFlip, setShowFlip] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setShowFlip(true);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section>
        <h1
          style={{
            fontSize: "85px",
            textAlign: "center",
            margin: "10px",
            fontFamily: "Arial, sans-serif",
            whiteSpace: "pre",
            borderRight: "2px solid black",
            animation: "blink-caret 0.8s steps(1) infinite",
          }}
        >
          {displayedText}
        </h1>

        {/* Visa flip-animationen först när namnet är utskrivet */}
        {showFlip && (
          <div style={{ textAlign: "center" }} id="container">
            <div id="flip">
              <div>
                <div>Typescript</div>
                <div>Next.js</div>
                <div>Javascript</div>
                <div>Vite</div>
                <div>Git</div>
                <div>React</div>
                <div>UX</div>
                <div>API</div>
                <div>CMS</div>
                <div>Figma</div>
                <div>Storybook</div>
                <div>Html & Css</div>
                <div>GitHub</div>
                <div>Prisma</div>
                <div>MongoDB</div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Introduce;
