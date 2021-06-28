import React, { useState } from "react";
import EmailForm from "../components/ForgetPasswordPage/EmailForm";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import CustomerService from "../services/CustomerService";
import OtpService from "../services/OtpService";
import OtpForm from "../components/RegisterPage/OtpForm";
import ChangePassword from "../components/ForgetPasswordPage/ChangePassword";
import { getToken } from "../utils/Storage";
import { NotificationManager } from "react-notifications";

export default function ForgetPasswordPage(props) {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  // ********** OTP STATE **********
  const [otp, setOtp] = useState("");
  const [isOtpAvailable, setIsOtpAvailable] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [userOtp, setUserOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBlur = (event) => {
    let error = emailValidation(event.target.value);
    setErrors({ ...errors, email: error });
  };

  const submitEmail = async (event) => {
    event.preventDefault();
    let error = emailValidation(email);
    if (!error) {
      try {
        setLoading(true);
        let customer = await CustomerService.getCustomerByEmail(email);
        setId(customer.data._id);
        let res = await OtpService.sendOtp(email);
        setIsOtpAvailable(true);
        setOtp(res.data);
        setLoading(false);
        NotificationManager.success("Otp send successfully", "", 2000);
      } catch (error) {
        setLoading(false);
        if (error.response.status === 404) {
          setErrors({ ...errors, email: "User not found with this email id" });
        }
      }
    } else {
      setErrors({ ...errors, email: error });
    }
  };

  // ********** OTP CHANGE **********
  const userOtpChange = (event) => {
    setUserOtp(event.target.value);
  };

  // ********** VERIFY OTP **********
  const verifyOtp = (event) => {
    event.preventDefault();
    if (userOtp === "") {
      setOtpError("Enter otp");
      return;
    }
    if (otp === parseInt(userOtp)) {
      setIsOtpVerified(true);
      NotificationManager.success("Otp verified successfully", "", 2000);
    } else {
      setOtpError("Incorrect Otp");
    }
  };

  const passwordsChange = (event) => {
    const { name, value } = event.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const passwordsBlur = (event) => {
    const { name, value } = event.target;

    let error = validate[name](value);
    setErrors({ ...errors, [name]: error });
  };

  // ********** FORM VALIDATION FUNCTION **********
  const validateForm = () => {
    let valid = true;
    let error = null;
    let tempErrors = errors;

    for (const item in passwords) {
      error = validate[item](passwords[item]);

      if (error) {
        valid = false;
      }

      tempErrors = { ...tempErrors, [item]: error };
    }

    setErrors({ ...tempErrors });

    return valid;
  };

  const changePassword = async (event) => {
    event.preventDefault();
    let isValidForm = validateForm();
    if (isValidForm) {
      try {
        setLoading(true);
        await CustomerService.forgetPassword(
          id,
          { newPassword: newPassword },
          getToken()
        );
        setLoading(false);
        NotificationManager.success("Password changed successfully", "", 2000);
        props.history.push("/login");
      } catch (error) {
        alert("Password not changed");
        setLoading(false);
      }
    }
  };

  // ********** VALIDATE OBJECT **********
  const validate = {
    newPassword: (password) => passwordValidation("New Password", password),
    confirmNewPassword: (password) =>
      confirmPasswordValidation(newPassword, password),
  };

  const passwordValidation = (fieldName, password) => {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(
        password
      )
    ) {
      return null;
    }

    if (password.trim() === "") {
      return `${fieldName} is required`;
    }
    return `${fieldName} must contains minimum 6 characters, at least one letter, one number and one special character`;
  };

  const confirmPasswordValidation = (password, confirmPassword) => {
    if (confirmPassword.trim() === "") {
      return "Confirm Password is required";
    }

    if (password !== confirmPassword) {
      return "New Password and Confirm new password are not same";
    }
  };

  const emailValidation = (email) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return null;
    }
    if (email === "") {
      return "Email is required";
    }
    return "Enter a valid email";
  };

  const { newPassword, confirmNewPassword } = passwords;

  if (loading) {
    return (
      <>
        <Navbar />
        <Loading />
      </>
    );
  }

  return (
    <>
      <Navbar />

      {isOtpAvailable === false && isOtpVerified === false && (
        <EmailForm
          email={email}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errors={errors}
          submitEmail={submitEmail}
        />
      )}

      {isOtpAvailable && isOtpVerified === false && (
        <OtpForm
          userOtp={userOtp}
          verifyOtp={verifyOtp}
          userOtpChange={userOtpChange}
          otpError={otpError}
        />
      )}

      {isOtpVerified && (
        <ChangePassword
          newPassword={newPassword}
          confirmNewPassword={confirmNewPassword}
          passwordsChange={passwordsChange}
          passwordsBlur={passwordsBlur}
          changePassword={changePassword}
          errors={errors}
        />
      )}
    </>
  );
}
