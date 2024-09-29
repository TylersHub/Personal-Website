import React from "react";

interface Props {
  formWidth: string;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
}

const ContactForm = ({ formWidth, textAlign = "left" }: Props) => {
  return (
    <div className="mx-auto" style={{ maxWidth: formWidth, textAlign }}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">
          Name
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
        ></textarea>
      </div>
    </div>
  );
};

export default ContactForm;
