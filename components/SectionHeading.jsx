import Link from "next/link";
import React from "react";
import styles from ".//../styles/SectionHeading.module.css";

const SectionHeading = ({
  sectionh2,
  sectionp = "view all",
  viewAllLink = "/",
}) => {
  return (
    <div className={styles.sectionheading}>
      <h2>{sectionh2}</h2>
      <Link href={`${viewAllLink}`}>
        <p>{sectionp}</p>
      </Link>
    </div>
  );
};

export default SectionHeading;
