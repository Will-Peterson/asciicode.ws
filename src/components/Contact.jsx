import React from "react";

import { FormspreeProvider } from "@formspree/react";

import "../App.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <FormspreeProvider project="1665506654826790283">
      <div className="ac-container">
        <h2>CONTACT</h2>
        <div className="ac-txt--contact">
          If you have any questions, comments, or improvements, please fill in
          the contact form and let us know. We read and look forward to all
          submissions. Your valued comments help us improve this website for
          everyone's benefit.
        </div>
        <ContactForm />
      </div>
    </FormspreeProvider>
  );
};

export default Contact;
