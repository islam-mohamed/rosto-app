import React from "react";
import styles from ".//../styles/SectionHeading.module.css";

const SectionHeading = ({ sectionh2, sectionp = "view all" }) => {
  return (
    <div className={styles.sectionheading}>
      <h2>{sectionh2}</h2>
      <a href="">
        <p>{sectionp}</p>
      </a>
    </div>
  );
};

export default SectionHeading;
