import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().required("Email is required!"),
  password: yup.string().required("Password is required!"),
});

export const registerSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(8, "Must be at least 8 characters").required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required(),
});

export const resetPasswordSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
});
