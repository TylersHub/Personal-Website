import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface Props {
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
}

const ContactForm: React.FC<Props> = ({ textAlign = "left" }: Props) => {
  const form = useRef<HTMLFormElement | null>(null); // Ref for form
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Ref for the submit button
  const [btnText, setBtnText] = useState("Submit");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (buttonRef.current) {
      buttonRef.current.value = "Sending...";
    }

    const serviceID = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_APP_EMAILJS_USER_ID;

    console.log("Service ID:", import.meta.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("User ID:", import.meta.env.REACT_APP_EMAILJS_USER_ID);

    if (form.current) {
      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: userID,
        })
        .then(() => {
          setBtnText("Submit");
          alert("Message sent! I will get back to you as soon as possible.");
        })
        .catch((err) => {
          setBtnText("Error Submitting");
          alert(JSON.stringify(err));
        });
    }
  };

  return (
    <div className="container-fluid main-dark text-white py-4">
      <form ref={form} onSubmit={sendEmail}>
        <div className="mx-auto main-dark pb-3" style={{ textAlign }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control main-gray"
              id="name"
              name="from_name"
              required
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control main-gray"
              id="email"
              name="from_email"
              required
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control main-gray"
              id="message"
              name="message"
              required
              rows={4}
            ></textarea>
          </div>
          <button
            ref={buttonRef}
            className="button-hover-animation mt-3"
            type="submit"
          >
            {btnText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
