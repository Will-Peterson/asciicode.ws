import React from "react";

import { FormspreeProvider } from "@formspree/react";

import "../App.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <FormspreeProvider project="1665506654826790283">
      <div className="container-contact">
        <h2>CONTACT</h2>
        <ContactForm />
      </div>
    </FormspreeProvider>
  );
};

export default Contact;
