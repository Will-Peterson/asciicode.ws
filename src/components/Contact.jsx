import React from 'react';
import ContactForm from './ContactForm';
import '../App.css';
import {FormspreeProvider} from '@formspree/react';

const Contact = () => {
    return (
      <FormspreeProvider project='1665506654826790283'>
        <div className='container-contact'>
            <h2>CONTACT</h2>
            <ContactForm />
        </div>
      </FormspreeProvider>
    );
}

export default Contact;