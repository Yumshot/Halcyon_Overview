import { useState } from "react";
import styles from "./charactercard.module.css";

const CharacterCard = ({ characters }) => {
  const [index, setIndex] = useState(0);
  const character = characters[index];
  const handlePrevClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? character.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setIndex((prevIndex) =>
      prevIndex === character.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className={styles.characterCard}>
        <div
          className={styles.characterImage}
          style={{
            backgroundImage: `url(${
              character.image ||
              "https://thenounproject.com/api/private/icons/83025/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABkAl0n9OJi92vursFEFie8DDeyYcQwHEjO_vAOBNhuG0JlHSrhoy6KPYIp9j1qinbCe57DMhBPZXUkfrNabEMi_z_WAw%3D%3D"
            })`,
          }}
        ></div>
        <h2 className={styles.name}>{character.name}</h2>
        <h4 className={styles.class}>{character.class}</h4>
        <p className={styles.description}>{character.description}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.prevButton} onClick={handlePrevClick}>
          Previous Character
        </button>
        <button className={styles.nextButton} onClick={handleNextClick}>
          Next Character
        </button>
      </div>
    </>
  );
};

export default CharacterCard;
