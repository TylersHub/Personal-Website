import React from "react";

interface Props {
  formWidth: string;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
}

const ContactForm = ({ formWidth, textAlign = "left" }: Props) => {
  return (
    <div className="container-fluid main-dark text-white py-4">
      <div
        className="mx-auto main-dark pb-3"
        style={{ maxWidth: formWidth, textAlign }}
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Name
          </label>
          <input
            className="form-control main-gray"
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
            className="form-control main-gray"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control main-gray"
            id="exampleFormControlTextarea1"
            rows={3}
          ></textarea>
        </div>
        <button className="button-hover-animation mt-3" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
