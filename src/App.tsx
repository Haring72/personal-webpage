import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryPanel from "./components/CategoryPanel";
import Footer from "./components/Footer";
import { categories } from "./data/categories";

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <main id="servicios">
        <div>
          {categories.map((cat, idx) => (
            <CategoryPanel
              key={cat.key}
              index={idx}
              label={cat.label}
              summary={cat.summary}
              accent={cat.accent}
              services={cat.services}
            ></CategoryPanel>
          ))}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
