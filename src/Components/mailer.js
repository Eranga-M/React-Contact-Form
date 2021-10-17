import React from 'react'
import emailjs from 'emailjs-com'

const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_pvfjpsc', 'template_9t1vd8m', e.target, 'user_QzW2YFCYljal0j3xatcyU')
        .then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className="container border"
        style={{marginTop:"50px",
        width: '50%',
        backgroundImage: 'url("https://images.pexels.com/photos/9687902/pexels-photo-9687902.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "10px",
        }}>
            <h1 style={{marginTop:'25px'}}>Contact Form</h1>
            <form className="row" style={{margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}> 
                <label>name</label>
                <input type="text" name="name" className="form-control" />

                <label>Email</label>
                <input type="email" name="user_email" className="form-control" />

                <label>Message</label>
                <textarea name="message" rows="4" className="form-control"/>
                <input type="submit" value="Send" className='form-control btn btn-primary'
                style={{marginTop: "30px"}}
                />
           
            </form>
        </div>
        
    );
};

export default Mailer
