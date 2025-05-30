import nodemailer from "nodemailer";
import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  LOGIN_EMAIL_TEMPLATE,
  ASSIGNED_TASK_TEMPLATE,
  TASK_REMINDER_TEMPLATE,
  LOGOUT_EMAIL_TEMPLATE,
  COMPLETE_TASK_USER_TEMPLATE,
} from "./emailTemplates.js";

var transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port: "465",
  auth: {
    user: "johnedokpolor@gmail.com",
    pass: "sanewcdrhspbldqq",
  },
});
export const sendVerificationEmail = (
  email,
  name,
  verificationToken,
  tokenExpiry
) => {
  var mailOptions = {
    from: '"Nexa" johnedokpolor@gmail.com',
    to: email,
    subject: "Verification Token from Nexa",
    html: VERIFICATION_EMAIL_TEMPLATE.replace("{user}", name)
      .replace("{verificationCode}", verificationToken)
      .replace("{tokenExpiry}", tokenExpiry),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendWelcomeEmail = (email, name) => {
  var mailOptions = {
    from: '"Nexa" johnedokpolor@gmail.com',
    to: email,
    subject: "Welcome to Nexa",
    html: WELCOME_EMAIL_TEMPLATE.replace("{user}", name),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendPasswordResetEmail = (email, name, resetURL, tokenExpiry) => {
  var mailOptions = {
    from: '"Nexa" johnedokpolor@gmail.com',
    to: email,
    subject: "Password Reset",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{user}", name)
      .replace("{resetURL}", resetURL)
      .replace("{tokenExpiry}", tokenExpiry),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendResetSuccessEmail = (email, name) => {
  var mailOptions = {
    from: '"Nexa" johnedokpolor@gmail.com',
    to: email,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace("{user}", name),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendLoginEmail = (email, name, loginDate) => {
  var mailOptions = {
    from: '"Nexa" johnedokpolor@gmail.com',
    to: email,
    subject: "Login Notification from Nexa",
    html: LOGIN_EMAIL_TEMPLATE.replace("{loginDate}", loginDate).replace(
      "{user}",
      name
    ),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendLogoutEmail = (email, name, logoutDate) => {
  var mailOptions = {
    from: '"Nexa" johnedokpolor@gmail.com',
    to: email,
    subject: "Logout Notification from Nexa",
    html: LOGOUT_EMAIL_TEMPLATE.replace("{logoutDate}", logoutDate).replace(
      "{user}",
      name
    ),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendTaskEmail = (
  email,
  name,
  title,
  description,
  status,
  priority,
  formatedDate,
  url,
  admin
) => {
  var mailOptions = {
    from: '"Nexa" johnedokpolor@gmail.com',
    to: email,
    subject: "Task Notification from Nexa",
    html: ASSIGNED_TASK_TEMPLATE.replace("{title}", title)
      .replace("{user}", name)
      .replace("{description}", description)
      .replace("{status}", status)
      .replace("{priority}", priority)
      .replace("{dueDate}", formatedDate)
      .replace("{loginURL}", url)
      .replace("{admin}", admin),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendCompleteTaskUserEmail = (
  email,
  name,
  title,
  description,
  priority,
  formatedDate,
  url,
  admin
) => {
  var mailOptions = {
    from: '"Nexa" johnedokpolor@gmail.com',
    to: email,
    subject: "Task Completed from Nexa",
    html: COMPLETE_TASK_USER_TEMPLATE.replace("{title}", title)
      .replace("{user}", name)
      .replace("{description}", description)
      .replace("{priority}", priority)
      .replace("{dueDate}", formatedDate)
      .replace("{loginURL}", url)
      .replace("{admin}", admin),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
export const sendTaskReminderEmail = (email, name, title, description) => {
  var mailOptions = {
    from: '"Nexa" johnedokpolor@gmail.com',
    to: email,
    subject: "Task Reminder from Nexa",
    html: TASK_REMINDER_TEMPLATE.replace("{title}", title)
      .replace("{user}", name)
      .replace("{description}", description),
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
