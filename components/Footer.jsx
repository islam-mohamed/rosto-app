import React from "react";
import styles from ".//../styles/Footer.module.css";
import Separator from "./SeparatorSlider";
import Logo from ".//../public/images/svg/rosto-logo.svg";
import AppleStore from ".//../public/images/svg/apple-store.svg";
import PlayStore from ".//../public/images/svg/play-store.svg";
import FacebookIcom from ".//../public/images/svg/facebook.svg";
import InstagramIcom from ".//../public/images/svg/instagram.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Separator />
      <div className="container">
        <div className={styles.rostomapp}>
          <div className={styles.mainlogo}>
            <Link href="/">
              <Image src={Logo} alt="Rosto logo" title="Rosto logo" />
            </Link>
          </div>
          <h2>Try rosto app</h2>
          <p>
            Introducing the all new Rosto app for easy ordering and great
            exclusive deals.
          </p>
          <div className={styles.androidios}>
            <Link href="#">
              <Image
                src={AppleStore}
                alt="ios store"
                width="152.5"
                height="45"
              />
            </Link>
            <Link href="#">
              <Image
                src={PlayStore}
                alt="play store"
                width="152.5"
                height="45"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="stretch">
        <div className={styles.footertop}>
          <div className="container">
            <div className={styles.footertopcontent}>
              <div className={styles.footermenu}>
                <ul>
                  <li>
                    <Link href="# ">about us</Link>
                  </li>
                  <li>
                    <Link href="#">customer service</Link>
                  </li>
                  <li>
                    <Link href="#">our policy</Link>
                  </li>
                  <li>
                    <Link href="#">contact</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.footersocialicons}>
                <p>Connect with Rosto</p>
                <div className={styles.socialicons}>
                  <Link href="#">
                    <div className={styles.socialiconimg}>
                      <Image
                        src={FacebookIcom}
                        alt="Facebook"
                        width="40"
                        height="40"
                      />
                    </div>
                  </Link>
                  <Link href="#">
                    <div className={styles.socialiconimg}>
                      <Image
                        src={InstagramIcom}
                        alt="Instagram"
                        width="40"
                        height="40"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.footerbottom}>
          <p>
            © 2022 Rosto Restaurant. All rights reserved. Terms & Conditions
            apply.
          </p>
          <p>
            Designed by{" "}
            <span>
              <a
                href="https://islamabdelsalam.com/"
                target="_blank"
                rel="noreferrer"
              >
                Islam Mohamed
              </a>
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
