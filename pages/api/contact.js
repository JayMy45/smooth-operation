// load environment variables from .env file
require('dotenv').config();

import { serviceData } from "@/app/data/serviceData";
import nodemailer from "nodemailer";

export default async function ContactAPI(req, res) {
    const { name, email, phone, message, services } = req.body;

    // check if all fields are provided
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ message: "Please provide all required fields." });
    }

    // check if email is valid using isValidEmail function (see below)
    if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Please provide a valid email address." });
    }

    // store email credentials in user variable from .env file
    const user = process.env.user;


    // create transporter object using nodemailer and gmail credentials (see nodemailer docs for more info)
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.pass,
        },
    });

    // try to send email (see nodemailer docs for more info)
    try {
        // Map the service IDs to their names
        const serviceNames = services.map(id => {
            const service = serviceData.find(service => service.id === id);
            return service ? service.name : undefined;
        }).filter(Boolean); // this filter removes undefined values

        // Create a string of service names separated by commas
        const servicesString = serviceNames.join(", ");

        const mail = await transporter.sendMail({
            from: user,
            to: "jnmyers774@gmail.com",
            replyTo: email,
            subject: `Jones Landscaping Services Submission ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
            <p><strong>Services Interested In</strong>: ${servicesString}</p>  <!-- Include the services here -->
            `,
        });

        console.log("Message sent: %s", mail.messageId);

        // if successful, return success message
        return res.status(200).json({ message: "success" });

        // if error, return error message and log error
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Could not send email. Your message was not sent.",
        });
    }
}

// Validate email address to make sure the format is valid
const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
};

