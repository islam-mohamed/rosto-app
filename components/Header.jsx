import React from "react";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";
import styles from ".//../styles/Header.module.css";
import Logo from ".//../public/images/svg/rosto-logo.svg";
import SignInIcon from ".//../public/images/svg/sign-in.svg";
import RegisterIcon from ".//../public/images/svg/create-account.svg";
import LocationIcon from ".//../public/images/svg/location.svg";
import HotNumberIcon from ".//../public/images/svg/hot-number-01.svg";
import CartIcon from ".//../public/images/svg/cart.svg";
import MCartIcon from ".//../public/images/svg/cart-m.svg";
import DealsIcon from ".//../public/images/svg/deals.svg";
import PizzaIcon from ".//../public/images/svg/pizza.svg";
import PastaIcon from ".//../public/images/svg/pasta.svg";
import StarterIcon from ".//../public/images/svg/starters.svg";
import SaladsIcon from ".//../public/images/svg/salad.svg";
import DessertIcon from ".//../public/images/svg/Deserts.svg";
import DrinksIcon from ".//../public/images/svg/drinks.svg";

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

  return (
    <>
      <div className={styles.header}>
        <div className={styles.stretch}>
          <div className={styles.container}>
            <div className={styles.headertop}>
              <div className={styles.headerleft}>
                <div className={styles.mainlogo}>
                  <a href="">
                    <Image
                      src={Logo}
                      alt="Rosto logo"
                      title="Rosto logo"
                      width="80"
                      height="80"
                    />
                  </a>
                </div>
                <div className={styles.topheaderlinks}>
                  <div className={styles.signin}>
                    <div className={styles.signinimg}>
                      <Image
                        className={styles.signin}
                        src={SignInIcon}
                        alt="sign-in icon"
                        title="Sign-in"
                        width="24"
                        height="24"
                      />
                    </div>
                    <a href="">
                      <p>Sign In</p>
                    </a>
                  </div>
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
                <a href="">العربية</a>
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
                      <a href="">Deals</a>
                    </li>
                    <li>
                      <a href="">pizza</a>
                    </li>
                    <li>
                      <a href="">Pasta</a>
                    </li>
                    <li>
                      <a href="">starters</a>
                    </li>
                    <li>
                      <a href="">salads</a>
                    </li>
                    <li>
                      <a href="">desserts</a>
                    </li>
                    <li>
                      <a href="">drinks</a>
                    </li>
                  </ul>
                </div>
                <div className={styles.cart}>
                  <div className={styles.cartimg}>
                    <Image
                      src={CartIcon}
                      alt="cart"
                      title="cart icon"
                      width="24"
                      height="24"
                    />
                  </div>
                  <a href="">
                    <p>Cart</p>
                  </a>
                </div>
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
          <a href="">
            <Image src={Logo} alt="Rosto logo" title="Rosto logo" height="80" />
          </a>
        </div>
        <div className={styles.mcart}>
          <div className={styles.mcartimg}>
            <a href="">
              <Image
                src={MCartIcon}
                alt="cart"
                title="cart icon"
                width="24"
                height="24"
              />
            </a>
          </div>
          <a href="">Cart</a>
        </div>
      </div>

      <div className={styles.hamburgermenu} id="hamburger-menu">
        <div className={styles.hamburgertop}>
          <div className={styles.changelang}>
            <a href="">العربية</a>
          </div>
          <div className={styles.mcart}>
            <a href="">
              <Image
                src={MCartIcon}
                alt="cart"
                title="cart icon"
                width="25"
                height="25"
              />
            </a>
            <a href="">Cart</a>
          </div>
        </div>
        <div className={styles.tophamburgermenu}>
          <div className={styles.hlogo}>
            <a href="">
              <Image
                src={Logo}
                alt="Rosto logo"
                title="Rosto logo"
                width="100"
              />
            </a>
          </div>
          <div className={styles.hsignin}>
            <a href="">Sign In</a>
          </div>
          <div className={styles.hregister}>
            <a href="">Create Account</a>
          </div>
        </div>
        <div className={styles.menulist}>
          <h2 className={styles.menulisth2}>Menu List</h2>
          <div className={styles.menulistcontainer}>
            <div className={styles.menulistcard}>
              <Image src={DealsIcon} alt="deals" width="25" height="25" />
              <p>Deals</p>
            </div>
            <div className={styles.menulistcard}>
              <Image src={PizzaIcon} alt="Pizza" width="25" height="25" />
              <p>Pizza</p>
            </div>
            <div className={styles.menulistcard}>
              <Image src={PastaIcon} alt="Pasta" width="25" height="25" />
              <p>Pasta</p>
            </div>
            <div className={styles.menulistcard}>
              <Image src={StarterIcon} alt="Starters" width="25" height="25" />
              <p>Starters</p>
            </div>
            <div className={styles.menulistcard}>
              <Image src={SaladsIcon} alt="Salads" width="25" height="25" />
              <p>Salads</p>
            </div>
            <div className={styles.menulistcard}>
              <Image src={DessertIcon} alt="Deserts" width="25" height="25" />
              <p>Dessert</p>
            </div>
            <div className={styles.menulistcard}>
              <Image src={DrinksIcon} alt="Drinks" width="25" height="25" />
              <p>Drinks</p>
            </div>
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
        onClick={() => {
          showMenuAnimation.reverse();
          showMenuAnimation.play();
          setTimeout(() => {
            hideBackDropAnimation.play();
          }, 400);
        }}
      ></div>
    </>
  );
};

export default Header;
