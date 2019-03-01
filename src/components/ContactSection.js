import React from 'react';
import './ContactSection.css';
import email_logo from "./../img/email_logo.png"
import phone_logo from "./../img/phone_logo.png"
import linkedin_logo from "./../img/linkedin_logo.png"
import github_logo from "./../img/github_logo.png"

class ContactSection extends React.Component {
    constructor(props){
            super(props)
            this.state = {}
    }
    render() {
        return (
            <div className="contactBody">
                <h1>Contact</h1>
                <div className="withText">
                    <img src={email_logo}/>
                    <p>Lukas.Petersson.1999@gmail.com</p>
                </div>
                <div className="withText">
                    <img src={phone_logo}/>
                    <p>0707898860</p>
                </div>
                <div className="withText" style={{cursor:'pointer'}} onClick={function(event){ window.open("https://github.com/lukaspetersson");}}>
                    <img src={github_logo}/>
                    <p>https://github.com/lukaspetersson</p>
                </div>
                <div className="withText" style={{cursor:'pointer'}} onClick={function(){  window.open("https://www.linkedin.com/in/lukas-petersson-181a83172/");}}>
                    <img src={linkedin_logo}/>
                    <p>https://linkedin.com/in/lukas-petersson-181a83172/</p>
                </div>

            </div>
        );
    }
}

export default ContactSection;