import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryPanel from "./components/CategoryPanel";
import Footer from "./components/Footer";
import { categories } from "./data/categories";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appRoot}>
      <Header></Header>
      <Hero></Hero>
      <main id="servicios" className={styles.main}>
        <div className={styles.servicesColumn}>
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
