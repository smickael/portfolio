import {
  Description,
  Header,
  Hero,
  Skills,
  Missions,
  CTASection,
  Footer,
} from "./components";
import "./App.css";
import styles from "./styles";

function App() {
  return (
    <div className="bg-gray-900 w-full h-full scrollbar-hide">
      <Header />
      <Hero />
      <Description />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Skills />
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Missions />
      </div>
      <CTASection />
      <Footer />
      {/* <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <p className={`${styles.heading2}`}>Stats</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
