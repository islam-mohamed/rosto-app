import React, { useState, useContext } from "react";
import { RostoContext } from "../context/rostoContext";
import cl from "classNames";
import styles from "./../styles/CheckOut.module.css";
import {
  Paper,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

const CheckOut = () => {
  const { cartItems } = useContext(RostoContext);
  const totalPrice = cartItems.reduce((curr, item) => {
    return curr + item.price * item.quantity;
  }, 0);

  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const checkoutSubmit = (e) => {
    e.preventDefault();
  };

  const [formaData, setFormaData] = useState({
    firstName: "",
    lastName: "",
    mobil: "",
    firstName: "",
    buildingNumber: "",
    floorNumber: "",
    flatNumber: "",
    streetName: "",
    city: "",
    country: "",
    deliveryNotes: "",
  });

  return (
    <div className={styles.checkout}>
      <Paper
        className={cl(styles.paperBg, styles.paperCh)}
        sx={{ padding: "2rem 2rem 5rem" }}
      >
        <div className={styles.CheckOutHeader}>
          <div className={styles.headerLogo}>
            <PointOfSaleIcon sx={{ fontSize: "4rem", color: "#e35e3a" }} />
            <h2>CHECKOUT</h2>
          </div>
          <div className={styles.headerSignIn}>
            <div className={styles.haveAccount}>
              <p>Have An Account?</p>
              <span> Sign in to view saved address.</span>
            </div>
            <p className={styles.haveAccountbtn}> Sign In </p>
          </div>
        </div>
        <div className={styles.deliveryAddress}>
          <p> Delivery Address</p>
          <form
            className={styles.deliveryForm}
            id="checkoutSubmit"
            onSubmit={checkoutSubmit}
          >
            <input
              type="text"
              placeholder="First Name*"
              name="fname"
              required
              pattern="^[[a-zA-Z]{3,16}$"
            />
            {
              //   <span>
              //   Username must contain only letters and must be between 3 and 16
              //   characters long.
              // </span>
            }

            <input
              type="text"
              placeholder="Last Name*"
              name="lname"
              required
              pattern="^[[a-zA-Z]{3,16}$"
            />
            <div className={styles.mobileNumber}>
              <select name="operator" id="operator">
                <option value="---">---Choose Mobile Operator---</option>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="012">012</option>
                <option value="015">014</option>
                <option value="015">015</option>
              </select>
              <input type="number" placeholder=" Number*" name="mobile" />
            </div>
            <input type="email" placeholder="Email*" name="email" required />
            <div className={styles.building}>
              <input type="text" placeholder="Building Number*" name="lname" />
              <input type="text" placeholder="Floor Number*" name="lname" />
              <input type="text" placeholder="Flat Number*" name="lname" />
            </div>
            <input type="text" placeholder="Street Name*" name="lname" />

            <label htmlFor="city">Choose City:</label>
            <select name="city" id="city">
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <option value="Alexandria">Alexandria</option>
            </select>
            <label htmlFor="egypt">Choose Country:</label>
            <select name="egypt" id="egypt">
              <option value="Egypt">Egypt</option>
            </select>
            <textarea placeholder="Delivery instructions" />
          </form>
        </div>
      </Paper>
      <div className={styles.payment}>
        <Paper
          className={cl(styles.paperBg, styles.overflow)}
          sx={{
            width: "100%",
            height: "30%",
            padding: "2rem 2rem 5rem",
          }}
        >
          <div className={styles.CheckOutHeader}>
            <div className={styles.headerLogo}>
              <SummarizeIcon sx={{ fontSize: "4rem", color: "#e35e3a" }} />
              <h2>Order summary</h2>
            </div>
          </div>
          {cartItems.map((item) => (
            <div className={styles.ordersummary} key={item.id}>
              <p>{item.quantity} x</p>
              <p>
                {item.name}
                <span>{item.size === 0 ? " - S" : ""}</span>
                <span>{item.size === 1 ? " - M" : ""}</span>
                <span>{item.size === 2 ? " - L" : ""}</span>
              </p>
              <p>EGP {item.price}</p>
            </div>
          ))}
          {totalPrice > 0 && (
            <h2
              className={cl(
                styles.totalPriceTitle,
                styles.ordersummaryTotalPrice
              )}
            >
              Total Price: EGP{" "}
              <span className={styles.totalPrice}>{totalPrice}</span>
            </h2>
          )}
        </Paper>
        <Paper
          className={styles.paperBg}
          sx={{
            width: "100%",
            padding: "2rem 2rem 5rem",
          }}
        >
          <div className={styles.CheckOutHeader}>
            <div className={styles.headerLogo}>
              <DeliveryDiningIcon sx={{ fontSize: "4rem", color: "#e35e3a" }} />
              <h2>Delivery price </h2>
            </div>
          </div>
          <div className={styles.deliveryPrice}>
            <span className={styles.fixedRateDelivery}>
              fixed rate delivery price for all our branches in cairo, giza and
              Alexandria
            </span>
            <h2 className={styles.totalPriceTitle}>
              EGP <span className={styles.totalPrice}>21</span>
            </h2>
          </div>
        </Paper>
        <Paper
          className={styles.paperBg}
          sx={{
            width: "100%",
            padding: "2rem 2rem 5rem",
          }}
        >
          <div className={styles.CheckOutHeader}>
            <div className={styles.headerLogo}>
              <PriceCheckIcon sx={{ fontSize: "4rem", color: "#e35e3a" }} />
              <h2>Total price</h2>
            </div>
            <h2 className={styles.totalPriceTitle}>
              EGP <span className={styles.totalPrice}>{totalPrice + 21}</span>
            </h2>
          </div>
        </Paper>
        <Paper
          className={styles.paperBg}
          sx={{
            width: "100%",
            padding: "2rem 2rem 5rem",
          }}
        >
          <div className={styles.CheckOutHeader}>
            <div className={styles.headerLogo}>
              <PaymentsIcon sx={{ fontSize: "4rem", color: "#e35e3a" }} />
              <h2>Payment method</h2>
            </div>
          </div>
          <div className={styles.paymentMethods}>
            <FormControl>
              <RadioGroup
                name="payment-method"
                value={paymentMethod}
                onChange={handlePaymentMethod}
              >
                <FormControlLabel
                  componentsProps={{
                    typography: { fontSize: 14, fontWeight: 700 },
                  }}
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                        },
                        color: "#e35e3a",
                        "&.Mui-checked": {
                          color: "#e35e3a",
                        },
                      }}
                    />
                  }
                  label="Cash On Delivery"
                  value="cash"
                />
                <FormControlLabel
                  componentsProps={{
                    typography: { fontSize: 14, fontWeight: 700 },
                  }}
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                        },
                        color: "#e35e3a",
                        "&.Mui-checked": {
                          color: "#e35e3a",
                        },
                      }}
                    />
                  }
                  label="Pay Online with Credit Card"
                  value="card"
                />
              </RadioGroup>
            </FormControl>
          </div>
          {paymentMethod === "card" ? (
            <div className={styles.creditCardPayment}>
              <input
                type="text"
                placeholder="Name On Card"
                name="nameOnCard"
                required
              />
              <input
                type="text"
                inputMode="number"
                placeholder="0000 0000 0000 0000"
                name="cardNumber"
                required
              />

              <div className={styles.expiration}>
                <select name="month" id="month">
                  <option value="--">--Month--</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select name="year" id="year">
                  <option value="--">--Year--</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                </select>
                <input
                  type="text"
                  inputMode="number"
                  placeholder="CVV"
                  name="cvv"
                  required
                />
              </div>
            </div>
          ) : (
            ""
          )}
          <button type="submit" form="checkoutSubmit" className="rostobtn">
            {" "}
            place your order{" "}
          </button>
        </Paper>
      </div>
    </div>
  );
};

export default CheckOut;
