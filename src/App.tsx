import React from "react";
import CategoryPanel from "./components/CategoryPanel";
import { categories } from "./data/categories";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
