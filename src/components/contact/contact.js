// components/contact/contact.js
//و تغییر دهیم میتونی خلاصه ترش کنیم 

import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
// حالت برای فیلدهای فرم
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

// وضعیت برای ارسال

const [isSubmitted, setIsSubmitted] = useState(false);

    // مدیریت تغییر ورودی در فیلدهای فرم
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // رسیدگی به ارسال فرم
    const handleSubmit = (e) => {
        e.preventDefault();
        // به سادگی داده های فرم را وارد کرده و فرم را بازنشانی کنید
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-container">
            <h2>با ما تماس بگیرید</h2>
            <h4 dir='ltr' style={{fontSize: '20px'}}>
                +24 33464946
                <br/>
                +98 9029107728
                
            </h4>
            {isSubmitted ? (
                <p>از پیام شما متشکریم. به زودی با شما تماس خواهیم گرفت.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">نام و نام خانوادگی :</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor= "phone">شماره تلفن : </label>
                        <input 
                        type= "tel"
                        id= "phone"
                        name= "phone"
                        value = {formData.phone}
                        onChange={handleInputChange}
                        placeholder= "لطفا شماره تلفن واقعی خود را وارد کنید"
                        required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">ایمیل:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder= "لطفا ایمیل خود را وارد نمایید..."
                        />
                    </div>
                    <div>
                        <label htmlFor="message">پیام:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <button type="submit">ارسال  به پشتیبانی ...</button>
                </form>
            )}
        </div>
    );
};

export default Contact;