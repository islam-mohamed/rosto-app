import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { RostoContext } from "../context/rostoContext";
import styles from "./../styles/CheckOut.module.css";
import Link from "next/link";
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

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const CheckOut = () => {
  const { cartItems } = useContext(RostoContext);
  const router = useRouter();

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/cart");
    }
  }, [cartItems.length, router]);

  const totalPrice = cartItems.reduce((curr, item) => {
    return curr + item.price * item.quantity;
  }, 0);

  const [formData, setFormaData] = useState({
    firstName: "",
    lastName: "",
    operator: "010",
    mNumber: "",
    email: "",
    buildingNumber: "",
    floorNumber: "",
    flatNumber: "",
    streetName: "",
    city: "Cairo",
    country: "Egypt",
    deliveryNotes: "",
    paymentMethod: "Cash",
    cardNumber: "",
    expMonth: "01",
    expYear: "2022",
    CVV: "",
  });
  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFormaData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [formValidity, setFormValidity] = useState({
    firstName: true,
    lastName: true,
    mobile: true,
    email: true,
    cardNumber: true,
    CVV: true,
  });

  const handleBlur = (e) => {
    const { value, name } = e.target;

    const checkValidity = (reg) => {
      if (value.match(reg)) {
        setFormValidity((prevValidity) => ({
          ...prevValidity,
          [name]: true,
        }));
      } else {
        setFormValidity((prevValidity) => ({
          ...prevValidity,
          [name]: false,
        }));
      }
    };

    if (name === "firstName" || name === "lastName") {
      const reg = "^[[a-zA-Z]{3,16}$";
      checkValidity(reg);
    }
    if (name === "mNumber") {
      const reg = "^[[0-9]{8}$";
      checkValidity(reg);
    }
    if (name === "email") {
      checkValidity(emailRegex);
    }
    if (name === "cardNumber") {
      const reg = "^[[0-9]{16}$";
      checkValidity(reg);
    }
    if (name === "CVV") {
      const reg = "^[[0-9]{3}$";
      checkValidity(reg);
    }
  };

  const checkoutSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.checkout}>
      <Paper
        className={[styles.paperBg, styles.paperCh]}
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
            <Link href="/signin">
              <p className={styles.haveAccountbtn}> Sign In </p>
            </Link>
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
              name="firstName"
              value={formData.firstName}
              required
              pattern="^[[a-zA-Z]{3,16}$"
              onBlur={handleBlur}
              onChange={handleInputData}
            />
            {formValidity.firstName === false ? (
              <span>
                Username must contain only letters and must be between 3 and 16
                characters long.
              </span>
            ) : (
              ""
            )}

            <input
              type="text"
              placeholder="Last Name*"
              name="lastName"
              value={formData.lastName}
              required
              pattern="^[[a-zA-Z]{3,16}$"
              onBlur={handleBlur}
              onChange={handleInputData}
            />
            {formValidity.lastName === false ? (
              <span>
                Username must contain only letters and must be between 3 and 16
                characters long.
              </span>
            ) : (
              ""
            )}
            <div className={styles.mobileNumber}>
              <label htmlFor="operator"> Mobile</label>
              <select
                name="operator"
                value={formData.operator}
                id="operator"
                required
                onChange={handleInputData}
              >
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="012">012</option>
                <option value="015">014</option>
                <option value="015">015</option>
              </select>
              <input
                style={{
                  width: "100%",
                }}
                type="text"
                placeholder=" 8 Numbers*"
                name="mNumber"
                value={formData.mNumber}
                required
                pattern="^[[0-9]{8}$"
                onBlur={handleBlur}
                onChange={handleInputData}
              />
            </div>
            {formValidity.mNumber === false ? (
              <span>Please enter 8 numbers followed your cell operator.</span>
            ) : (
              ""
            )}
            <input
              type="email"
              placeholder="Email*"
              name="email"
              required
              pattern={emailRegex}
              onBlur={handleBlur}
              onChange={handleInputData}
            />
            {formValidity.email === false ? (
              <span>
                Please enter valid email address such as name@unknown.com.
              </span>
            ) : (
              ""
            )}
            <div className={styles.building}>
              <input
                type="text"
                placeholder="Building Number*"
                name="buildingNumber"
                value={formValidity.buildingNumber}
                onChange={handleInputData}
              />
              <input
                type="text"
                placeholder="Floor Number*"
                name="floorNumber"
                value={formValidity.floorNumber}
                onChange={handleInputData}
              />
              <input
                type="text"
                placeholder="Flat Number*"
                name="flatNumber"
                value={formValidity.flatNumber}
                onChange={handleInputData}
              />
            </div>
            <input
              type="text"
              placeholder="Street Name*"
              name="streetName"
              value={formValidity.streetName}
              onChange={handleInputData}
            />

            <label htmlFor="city">Choose City:</label>
            <select
              name="city"
              id="city"
              value={formValidity.city}
              onChange={handleInputData}
            >
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <option value="Alexandria">Alexandria</option>
            </select>
            <label htmlFor="egypt">Choose Country:</label>
            <select
              name="country"
              id="egypt"
              value={formValidity.country}
              onChange={handleInputData}
            >
              <option value="Egypt">Egypt</option>
            </select>
            <textarea
              placeholder="Delivery instructions"
              name="deliveryNotes"
              value={formValidity.deliveyNotes}
              onChange={handleInputData}
            />
          </form>
        </div>
      </Paper>
      <div className={styles.payment}>
        <Paper
          className={[styles.paperBg, styles.overflow]}
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
            <div className={styles.orderSummary} key={item.id}>
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
            <h2 className={[styles.orderSummaryTotalPrice]}>
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
                name="paymentMethod"
                defaultValue="cash"
                onChange={handleInputData}
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
          {formData.paymentMethod === "card" ? (
            <div className={styles.creditCardPayment}>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                required
                pattern="^[[0-9]{16}$"
                name="cardNumber"
                value={formData.cardNumber}
                onBlur={handleBlur}
                onChange={handleInputData}
              />
              {formValidity.cardNumber === false ? (
                <span>
                  Please enter the 16 numbers on your card without spaces.
                </span>
              ) : (
                ""
              )}

              <div className={styles.expiration}>
                <select
                  name="expMonth"
                  value={formData.expMonth}
                  onBlur={handleBlur}
                  onChange={handleInputData}
                >
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
                <select
                  name="expYear"
                  value={formData.expYear}
                  onChange={handleInputData}
                >
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
                  required
                  pattern="^[[0-9]{3}$"
                  name="CVV"
                  value={formData.CVV}
                  onBlur={handleBlur}
                  onChange={handleInputData}
                />
              </div>
              {formValidity.CVV === false ? (
                <span>
                  Please enter the 3 numbers on the back of your card without
                  spaces.
                </span>
              ) : (
                ""
              )}
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
