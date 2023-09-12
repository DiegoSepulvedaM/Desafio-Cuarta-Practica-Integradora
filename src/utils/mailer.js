import nodemailer from "nodemailer";
import config from "../config/config.js";

const transport = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: "diego.sepu@outlook.es",
    pass: config.emailApp,
  },
});

export default transport