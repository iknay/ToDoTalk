import { useState } from 'react';

interface PasswordValidation {
  haveDigits: boolean;
  haveSpecialChar: boolean;
  eightCharLong: boolean;
  haveUppercase: boolean;
}

export const useFormValidation = () => {
  const [passwordValidation, setPasswordValidation] =
    useState<PasswordValidation>({
      haveDigits: false,
      haveSpecialChar: false,
      eightCharLong: false,
      haveUppercase: false,
    });

  // * Function for validating email
  const validateEmail = (email: string) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  // * Function for validating password
  const validatePassword = (password: string) => {
    const regs = /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/;

    const validate = {
      haveDigits: password?.search(/[0-9]/) >= 0,
      haveSpecialChar: regs.test(password),
      eightCharLong: password?.length >= 8,
      haveUppercase: /[A-Z]/.test(password),
    };

    setPasswordValidation(validate);

    return validate;
  };

  // function for validating names
  const validateName = (name: string) => {
    const nameRegex = /^[A-Za-z\s\\-]+$/;
    return !!name.trim().length && nameRegex.test(name);
  };

  return {
    validateEmail,
    validatePassword,
    passwordValidation,
    validateName,
  };
};
