import Link from "next/link";
import React from "react";
import styles from ".//../styles/SectionHeading.module.css";
import { useRouter } from "next/router";

const SectionHeading = ({
  sectionh2,
  sectionp = "view all",
  viewAllLink = "/",
}) => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.sectionheading}>
      <h2>{sectionh2}</h2>
      <Link href={`${viewAllLink}`}>
        <p>{router.pathname === "/" ? sectionp : ""}</p>
      </Link>
    </div>
  );
};

export default SectionHeading;
