import React from "react";
import styles from ".//../styles/Footer.module.css";
import Separator from "./SeparatorSlider";
import Logo from ".//../public/images/svg/rosto-logo.svg";
import FacebookIcom from ".//../public/images/svg/facebook.svg";
import InstagramIcom from ".//../public/images/svg/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Separator />
      <div className="container">
        <div className={styles.rostomapp}>
          <div className={styles.mainlogo}>
            <a href="">
              <Image src={Logo} alt="Rosto logo" title="Rosto logo" />
            </a>
          </div>
          <h2>Try rosto app</h2>
          <p>
            Introducing the all new Rosto app for easy ordering and great
            exclusive deals.
          </p>
          <div className={styles.androidios}>
            <a href="">
              <Image
                src="/../public/images/svg/ios-store-icon.png"
                alt="ios store"
                width="122"
                height="36"
              />
            </a>
            <a href="">
              <Image
                src="/../public/images/svg/play-store-icon.png"
                alt="play store"
                width="122"
                height="36"
              />
            </a>
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
                    <a href=" ">about us</a>
                  </li>
                  <li>
                    <a href="">customer service</a>
                  </li>
                  <li>
                    <a href="">our policy</a>
                  </li>
                  <li>
                    <a href="">contact</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footersocialicons}>
                <p>Connect with Rosto</p>
                <div className={styles.socialicons}>
                  <a href="">
                    <div className={styles.socialiconimg}>
                      <Image
                        src={FacebookIcom}
                        alt="Facebook"
                        width="40"
                        height="40"
                      />
                    </div>
                  </a>
                  <a href="">
                    <div className={styles.socialiconimg}>
                      <Image
                        src={InstagramIcom}
                        alt="Instagram"
                        width="40"
                        height="40"
                      />
                    </div>
                  </a>
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
              <a href="#">Islam Mohamed</a>
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
