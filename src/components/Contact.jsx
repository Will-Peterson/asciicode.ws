import React from "react";

import { FormspreeProvider } from "@formspree/react";

import "../App.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <FormspreeProvider project="1665506654826790283">
      <div className="container-contact">
        <h2>CONTACT</h2>
        <div style={{fontSize: '1.3vm',margin: '-50px auto 30px',backgroundColor:'rgb(238,228,228',padding:'.8vw',borderLeft:'3px solid blue'}}>If you have any questions, comments, or improvements, please fill 
          in the contact form and let us know. We read and look forward to all 
          submissions. Your valued comments help us improve this website for 
          everyone's benefit.</div>
        <ContactForm />
      </div>
    </FormspreeProvider>
  );
};

export default Contact;
