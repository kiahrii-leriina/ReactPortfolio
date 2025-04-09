import React from 'react'
import './contact.css'
import logo from '../../assets/logo.png'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'
import pin from '../../assets/pin.png'
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "20ac7411-eb00-4491-ae70-74150577916f");
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            console.log(data);
            if (data.success) {
                alert("Form Submitted Successfully");
            } else {
                alert("Form Submission Failed: " + data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    
  return (
    <div id = 'contact' className='contact'>
        <div className="contacttitle">
            <h1>Get in touch</h1>
            <img src={logo} alt="Logo" />
        </div>
        <div className="contactsection">
            <div className="contactleft">
                <h1>Let's talk</h1>
                <p>I'm currently avaible to take on new project, so feel free about anything that you me to work on. You can contact me anytime.</p>
                <div className="contactdetial">
                    <div className="detial">
                        <img src={mail} alt="" /><p>kaihrii78kaihrii7@gmail.com</p>
                    </div>
                    <div className="detial">
                        <img src={phone} alt="" /><p>9863087495</p>
                    </div>
                    <div className="detial">
                        <img src={pin} alt="" /><p>Karnataka, Bengaluru 540063</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contactright">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="" rows={8} placeholder='Enter your message'></textarea>
                <button className='submitcontact' type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
