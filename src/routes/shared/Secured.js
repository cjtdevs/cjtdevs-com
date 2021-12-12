import { sendEMail } from "../../modules/mailer.js";

export default function secured(req, res, next) {
  if (req.user) {
    return next();
  }
  sendEMail({
    to: "info@cjtdevs.com",
    subject: `Someone tried to access an Admin route (secured route) and failed.`,
    text: req.url,
  }).finally(() => {
    res.json(null).status(401);
  });
}
