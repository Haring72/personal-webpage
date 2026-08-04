import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryPanel from "./components/CategoryPanel";
import Footer from "./components/Footer";
import { categories } from "./data/categories";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050d1a",
      }}
    >
      <Header></Header>
      <Hero></Hero>
      <main
        id="servicios"
        style={{
          padding: "80px 40px 100px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
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
