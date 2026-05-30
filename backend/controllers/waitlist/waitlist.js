import { sendWaitlistEmail } from "../../mailtrap/nodemailer";
import { Waitlist } from "./waitlistModel";

const joinWaitlist = async (req, res) => {
  const { name, email } = req.body;

  try {
    const alreadyJoined = await Waitlist.findOne({ email });

    if (alreadyJoined)
      return res
        .status(400)
        .json({ message: "You have joined the waitlist already" });

    const waitlist = await Waitlist.create({ name, email });

    await sendWaitlistEmail(email, name);

    return res
      .status(200)
      .json({ message: "You have been added to the waitlist" });
  } catch (error) {}
};
export { joinWaitlist };
