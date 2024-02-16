
import './contact.css'
import { github, hackerrank, leetcode, linkedin } from '../svgs';
import { Button, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import emailjs from 'emailjs-com';
import { useState } from 'react';
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        email: '',
        subject: '',
        message: '',
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...formErrors };

        // Validate First Name
        if (!formData.firstName.trim()) {
            newErrors.firstName = '*First Name is required';
            isValid = false;
        } else {
            newErrors.firstName = '';
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = '*Valid Email is required';
            isValid = false;
        } else {
            newErrors.email = '';
        }

        // Validate Subject
        if (!formData.subject.trim()) {
            newErrors.subject = '*Subject is required';
            isValid = false;
        } else {
            newErrors.subject = '';
        }

        // Validate Message
        if (!formData.message.trim()) {
            newErrors.message = '*Message is required';
            isValid = false;
        } else {
            newErrors.message = '';
        }

        setFormErrors(newErrors);
        return isValid;
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (validateForm()) {
            
        message.loading({ content: 'Sending email...', key: 'loadingKey' });
            emailjs.send(
                'service_x2gcfeb',
                'template_mxz4ctd',  // Replace with your EmailJS template ID
                {
                    from_name: formData.firstName,
                    reply_to: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                '_1qV5abC1ODr0drYz'
            )
            .then((response) => {
                
        message.success({ content: 'Email sent successfully!', key: 'loadingKey' });
                console.log('Email sent successfully:', response);
            })
            .catch((error) => {
                
                message.error({ content: 'Email send failed!', key: 'loadingKey' });
                console.error('Email send failed:', error);
            });
        }
    }
    return (
        
            <div className='contact-body'>
            <div className="about-item2 contact-title">
    
        </div>
        <form onSubmit={sendEmail}>
                <div className='contact-form'>
                    <div className='form-row'>
                        First Name:
                        <div><Input type='text' name='firstName' value={formData.firstName} onChange={handleInputChange} />
                        <span className='error-message'>{formErrors.firstName}</span></div>
                    </div>
                    <div className='form-row'>
                        Email:
                        <div><Input type='email' name='email' value={formData.email} onChange={handleInputChange} />
                        <span className='error-message'>{formErrors.email}</span></div>
                    </div>
                    <div className='form-row'>
                        Subject:
                        <div><Input type='text' name='subject' value={formData.subject} onChange={handleInputChange} />
                        <span className='error-message'>{formErrors.subject}</span></div>
                    </div>
                    <div className='form-row'>
                        Your Message:
                        <div><TextArea style={{ borderRadius: '20px' }} rows={5} name='message' value={formData.message} onChange={handleInputChange} />
                        <span className='error-message'>{formErrors.message}</span></div>
                    </div>
                    <div className='form-row' style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <Button htmlType='submit'>Submit</Button>
                    </div>
                </div>
            </form>
            <div className='contact-list'>
                <div>
                    <img style={{paddingLeft:'20px'}} src={linkedin}/>
                    </div>
                    <div>
                    <a target='blank' href='https://www.linkedin.com/in/pradeep-thirumoorthy/'>@pradeep-thirumoorthy</a>
                </div>
                <div>
                    <img style={{paddingLeft:'20px'}} src={github}/>
                    </div>
                    <div>
                    <a target='blank' href='https://github.com/pradeep-thirumoorthy'>@pradeep-thirumoorthy</a>
                </div>
                <div>
                    <img style={{paddingLeft:'20px'}} src={leetcode}/>
                    </div>
                    <div>
                    <a target='blank' href='https://leetcode.com/Pradeep_thiru/'>@Pradeep_thiru</a>
                </div>
                <div>
                    <img style={{paddingLeft:'20px'}} src={hackerrank}/>
                    </div>
                    <div>
                    <a target='blank' href='https://www.hackerrank.com/profile/pradeept_21cse'>@pradeept_21cse</a>
                </div>
            </div>
            
        </div>
        
    );
}
export default Contact;

// Contact component

