import React from "react";
import styles from "./style";
import {
  Cursor,
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => {
  const cursorRef = React.useRef();

  const handleTextEnter = () => {
    if (cursorRef.current) {
      cursorRef.current.textEnter();
    }
  };

  const handleTextLeave = () => {
    if (cursorRef.current) {
      cursorRef.current.textLeave();
    }
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <Cursor ref={cursorRef} />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Hero onTextEnter={handleTextEnter} onTextLeave={handleTextLeave} />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business onTextEnter={handleTextEnter} onTextLeave={handleTextLeave}/>
          <Billing onTextEnter={handleTextEnter} onTextLeave={handleTextLeave}/>
          <CardDeal onTextEnter={handleTextEnter} onTextLeave={handleTextLeave}/>
          <Testimonials onTextEnter={handleTextEnter} onTextLeave={handleTextLeave}/>
          <Clients />
          <CTA />
          <Footer onTextEnter={handleTextEnter} onTextLeave={handleTextLeave}/>
        </div>
      </div>
    </div>
  );
};

export default App;
