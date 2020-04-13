import React from 'react';

const Footer = () => {
    return (
        <div className='Footer'>
            <div>About Us | Contact Us | Privacy Policy | Terms of Service</div>
            <div>&copy; {new Date().getFullYear()} asciicode.ws</div>
            <div>PetersonDigital</div>
        </div>
    );
}

export default Footer;