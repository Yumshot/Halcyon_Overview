import { useState } from "react";
import styles from "./traditioncard.module.css";
const TraditionCard = ({ cities }) => {
  const [index, setIndex] = useState(0);
  const city = cities[index];
  const handlePrevClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? city.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setIndex((prevIndex) =>
      prevIndex === city.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: 10 }}>
                <strong className={styles.name}>{cities[index].name}:</strong>{" "}
                <br /> {cities[index].tradition}
              </li>
              <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handlePrevClick}>
                  Previous
                </button>
                <div className={styles.buttonSpacer}></div>
                <button className={styles.button} onClick={handleNextClick}>
                  Next
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TraditionCard;
