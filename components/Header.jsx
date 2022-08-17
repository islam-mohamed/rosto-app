import React, { useEffect } from "react";
import Image from "next/image";
import anime from "animejs";
import styles from ".//../styles/Header.module.css";
import Logo from ".//../public/images/svg/rosto-logo.svg";
import SignInIcon from ".//../public/images/svg/sign-in.svg";
import RegisterIcon from ".//../public/images/svg/create-account.svg";
import LocationIcon from ".//../public/images/svg/location.svg";
import HotNumberIcon from ".//../public/images/svg/hot-number-01.svg";
import DealsIcon from ".//../public/images/svg/deals.svg";
import PizzaIcon from ".//../public/images/svg/pizza.svg";
import PastaIcon from ".//../public/images/svg/pasta.svg";
import StarterIcon from ".//../public/images/svg/starters.svg";
import SaladsIcon from ".//../public/images/svg/salad.svg";
import DessertIcon from ".//../public/images/svg/Deserts.svg";
import DrinksIcon from ".//../public/images/svg/drinks.svg";
import Link from "next/link";
import CartMain from "./CartMain";
import CartMobile from "./CartMobile";

let showMenuAnimation;
let hideMenuAnimation;
let showBackDropAnimation;
let hideBackDropAnimation;

const Header = () => {
  useEffect(() => {
    showMenuAnimation = anime({
      autoplay: false,
      targets: "#hamburger-menu",
      translateX: [`-100%`, `0%`],
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 400,
    });

    hideMenuAnimation = showMenuAnimation.reverse();

    showBackDropAnimation = anime({
      autoplay: false,
      targets: "#backdrop",
      opacity: [0, 0.75],
      easing: "easeInOutExpo",
      duration: 200,
      begin: function () {
        document.querySelector("#backdrop").style.display = "flex";
      },
    });

    hideBackDropAnimation = anime({
      autoplay: false,
      targets: "#backdrop",
      opacity: [0.75, 0],
      easing: "easeInOutExpo",
      duration: 100,
      begin: function () {
        document.querySelector("#backdrop").style.display = "none";
      },
    });
  }, []);

  const showHideMenuBackDrop = () => {
    showMenuAnimation.reverse();
    showMenuAnimation.play();
    setTimeout(() => {
      hideBackDropAnimation.play();
    }, 400);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.stretch}>
          <div className={styles.container}>
            <div className={styles.headertop}>
              <div className={styles.headerleft}>
                <div className={styles.mainlogo}>
                  <Link href="/">
                    <Image
                      src={Logo}
                      alt="Rosto logo"
                      title="Rosto logo"
                      width="80"
                      height="80"
                    />
                  </Link>
                </div>
                <div className={styles.topheaderlinks}>
                  <Link href="/registersignin">
                    <div className={styles.signin}>
                      <div className={styles.signinimg}>
                        <Image
                          src={SignInIcon}
                          alt="sign-in icon"
                          title="Sign-in"
                          width="24"
                          height="24"
                        />
                      </div>
                      <p>Sign In</p>
                    </div>
                  </Link>
                  <Link href="/registersignin">
                    <div className={styles.register}>
                      <div className={styles.registerimg}>
                        <Image
                          src={RegisterIcon}
                          alt="Register icon"
                          title="Register"
                          width="24"
                          height="24"
                        />
                      </div>
                      <a href="">
                        <p>Create Account</p>
                      </a>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className={styles.location}>
                      <div className={styles.locationimg}>
                        <Image
                          src={LocationIcon}
                          alt="Location icon"
                          title="Location"
                          width="24"
                          height="24"
                        />
                      </div>
                      <a href="">
                        <p>Find Rosto</p>
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
              <div className={styles.headerright}>
                <div className={styles.hotnumber}>
                  <Image
                    src={HotNumberIcon}
                    alt="Hot hot-number-01"
                    title="Hot number"
                    height="80"
                  />
                </div>
                <Link href="#">العربية</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.stretch}>
          <div className={styles.navcontainer}>
            <div className={styles.container}>
              <div className={styles.headernav}>
                <div className={styles.nav}>
                  <ul>
                    <li>
                      <Link href="/deals">Deals</Link>
                    </li>
                    <li>
                      <Link href="/pizza">pizza</Link>
                    </li>
                    <li>
                      <Link href="/pasta">Pasta</Link>
                    </li>
                    <li>
                      <Link href="/starters">starters</Link>
                    </li>
                    <li>
                      <Link href="/salads">salads</Link>
                    </li>
                    <li>
                      <Link href="/desserts">desserts</Link>
                    </li>
                    <li>
                      <Link href="/drinks">drinks</Link>
                    </li>
                  </ul>
                </div>
                <CartMain />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileheader}>
        <div
          className={styles.menuicon}
          onClick={() => {
            showMenuAnimation.reverse();
            showMenuAnimation.play();
            showBackDropAnimation.play();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.mobilelogo}>
          <Link href="/">
            <Image src={Logo} alt="Rosto logo" title="Rosto logo" height="80" />
          </Link>
        </div>
        <CartMobile />
      </div>

      <div className={styles.hamburgermenu} id="hamburger-menu">
        <div className={styles.hamburgertop}>
          <div className={styles.changelang}>
            <Link href="#">العربية</Link>
          </div>
          <CartMobile onCartClick={showHideMenuBackDrop} />
        </div>
        <div className={styles.tophamburgermenu}>
          <div className={styles.hlogo}>
            <Link href="/">
              <Image
                src={Logo}
                alt="Rosto logo"
                title="Rosto logo"
                width="100"
                onClick={showHideMenuBackDrop}
              />
            </Link>
          </div>
          <div className={styles.hsignin}>
            <Link href="/registersignin">
              <a onClick={showHideMenuBackDrop}>Sign In</a>
            </Link>
          </div>
          <div className={styles.hregister}>
            <Link href="/registersignin">
              <a onClick={showHideMenuBackDrop}>Create Account</a>
            </Link>
          </div>
        </div>
        <div className={styles.menulist}>
          <h2 className={styles.menulisth2}>Menu List</h2>
          <div className={styles.menulistcontainer}>
            <Link href="/deals">
              <div
                className={styles.menulistcard}
                onClick={showHideMenuBackDrop}
              >
                <Image src={DealsIcon} alt="deals" width="25" height="25" />
                <p>Deals</p>
              </div>
            </Link>
            <Link href="/pizza">
              <div
                className={styles.menulistcard}
                onClick={showHideMenuBackDrop}
              >
                <Image src={PizzaIcon} alt="Pizza" width="25" height="25" />
                <p>Pizza</p>
              </div>
            </Link>
            <Link href="/pasta">
              <div
                className={styles.menulistcard}
                onClick={showHideMenuBackDrop}
              >
                <Image src={PastaIcon} alt="Pasta" width="25" height="25" />
                <p>Pasta</p>
              </div>
            </Link>
            <Link href="/starters">
              <div
                className={styles.menulistcard}
                onClick={showHideMenuBackDrop}
              >
                <Image
                  src={StarterIcon}
                  alt="Starters"
                  width="25"
                  height="25"
                />
                <p>Starters</p>
              </div>
            </Link>
            <Link href="/salads">
              <div
                className={styles.menulistcard}
                onClick={showHideMenuBackDrop}
              >
                <Image src={SaladsIcon} alt="Salads" width="25" height="25" />
                <p>Salads</p>
              </div>
            </Link>
            <Link href="/desserts">
              <div
                className={styles.menulistcard}
                onClick={showHideMenuBackDrop}
              >
                <Image src={DessertIcon} alt="Deserts" width="25" height="25" />
                <p>Dessert</p>
              </div>
            </Link>
            <Link href="/drinks">
              <div
                className={styles.menulistcard}
                onClick={showHideMenuBackDrop}
              >
                <Image src={DrinksIcon} alt="Drinks" width="25" height="25" />
                <p>Drinks</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.hotnumber}>
          <Image
            src={HotNumberIcon}
            alt="Hot hot-number-01"
            title="Hot number"
            width="250"
            height="155"
          />
        </div>
      </div>
      <div
        className="backdrop"
        id="backdrop"
        onClick={showHideMenuBackDrop}
      ></div>
    </>
  );
};

export default Header;
