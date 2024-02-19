
import './contact.css'
import { github, hackerrank, } from '../svgs';
import { Button, Flex, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {LinkedinFilled,InstagramFilled,GithubFilled,FacebookFilled} from '@ant-design/icons'
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
        <form onSubmit={sendEmail} style={{height:'64vh'}}>
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
            <Flex wrap='wrap' gap={'large'} align='center' justify='center' className='contact-list'>
                <div>
                    <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=pradeep-thirumoorthy" target="blank"><LinkedinFilled style={{fontSize:'50px'}}/></a>
                    </div>
                <div>
                    <a target='blank' href='https://github.com/pradeep-thirumoorthy'><GithubFilled style={{fontSize:'50px'}}/></a>
                </div>
                <div>
                    <a target='blank' href='https://leetcode.com/Pradeep_thiru/'><svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.2806 -0.000610207C24.9409 0.0106628 24.6069 0.0890302 24.2976 0.229978C23.9884 0.370925 23.7101 0.571667 23.4787 0.82064L13.3425 11.6731L6.11624 19.4094C5.0638 20.53 4.28757 21.8808 3.84936 23.3544C3.75545 23.671 3.67723 23.992 3.61499 24.3163C3.33404 25.7836 3.3737 27.2944 3.73124 28.745C3.89016 29.3994 4.10922 30.0378 4.38561 30.6519C4.95882 31.9277 5.7673 33.0842 6.76874 34.0606L14.7881 41.9225L14.8612 41.9938C19.0762 46.0531 25.8337 45.9931 29.9794 41.855L34.4719 37.37C35.4844 36.3575 35.4844 34.7188 34.4775 33.7044C34.2379 33.4635 33.9531 33.2722 33.6394 33.1415C33.3257 33.0108 32.9894 32.9433 32.6496 32.9427C32.3098 32.9422 31.9732 33.0087 31.6592 33.1384C31.3451 33.2682 31.0597 33.4586 30.8194 33.6988L26.3269 38.1838C25.2794 39.2176 23.8707 39.8031 22.3991 39.8164C20.9275 39.8297 19.5084 39.2697 18.4425 38.255L18.405 38.2194L10.3875 30.3575C9.16499 29.1575 8.56499 27.6031 8.60999 26.1144C8.61891 25.7842 8.66036 25.4558 8.73374 25.1338C8.9222 24.3169 9.3225 23.5642 9.89436 22.9513L17.1187 15.2131C19.1025 13.0869 23.1262 12.8319 25.425 14.6919L31.9894 20C33.1012 20.9 34.7287 20.7256 35.6269 19.6119C36.0574 19.0769 36.2583 18.393 36.1855 17.7101C36.1128 17.0273 35.7723 16.4011 35.2387 15.9688L28.6762 10.6606C27.1762 9.44751 25.365 8.70127 23.475 8.40689L27.2531 4.36064C27.6014 3.98617 27.8312 3.51714 27.9138 3.01246C27.9964 2.50779 27.9281 1.98996 27.7173 1.52401C27.5066 1.05806 27.1629 0.664762 26.7293 0.39351C26.2958 0.122258 25.7918 -0.0148547 25.2806 -0.000610207ZM19.9069 24.0275C19.5668 24.0275 19.23 24.0946 18.9158 24.2248C18.6016 24.3551 18.3162 24.546 18.0759 24.7867C17.8356 25.0274 17.6451 25.3131 17.5152 25.6274C17.3854 25.9418 17.3189 26.2787 17.3194 26.6188C17.3189 26.9589 17.3854 27.2957 17.5152 27.6101C17.6451 27.9245 17.8356 28.2102 18.0759 28.4508C18.3162 28.6915 18.6016 28.8824 18.9158 29.0127C19.23 29.143 19.5668 29.21 19.9069 29.21H38.9812C39.3214 29.21 39.6581 29.143 39.9723 29.0127C40.2865 28.8824 40.5719 28.6915 40.8122 28.4508C41.0525 28.2102 41.243 27.9245 41.3729 27.6101C41.5027 27.2957 41.5692 26.9589 41.5687 26.6188C41.5692 26.2787 41.5027 25.9418 41.3729 25.6274C41.243 25.3131 41.0525 25.0274 40.8122 24.7867C40.5719 24.546 40.2865 24.3551 39.9723 24.2248C39.6581 24.0946 39.3214 24.0275 38.9812 24.0275H19.9069Z" fill="white"/>
<defs>
</defs>
</svg>
</a>
                </div>
                <div>
                    <a target='blank' href='https://www.hackerrank.com/profile/pradeepthiru'>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V45H45V0H0ZM18.6562 15.0037H22.0406C22.155 15.0037 22.2488 15.0975 22.2488 15.2119V29.775C22.2488 29.8894 22.155 29.9831 22.0425 29.9831H18.6562C18.6014 29.9831 18.5487 29.9615 18.5097 29.9228C18.4708 29.8842 18.4486 29.8317 18.4481 29.7769V24.3956H14.8013V29.7769C14.8013 29.8894 14.7075 29.9831 14.595 29.9831H11.205C11.1779 29.9831 11.1511 29.9778 11.1261 29.9674C11.101 29.9571 11.0783 29.9419 11.0592 29.9227C11.04 29.9036 11.0248 29.8808 11.0145 29.8558C11.0041 29.8308 10.9988 29.804 10.9988 29.7769V15.21C10.9988 15.0975 11.0925 15.0037 11.205 15.0037H14.5913C14.7056 15.0037 14.7975 15.0975 14.7975 15.21V20.5894H18.45V15.2081C18.45 15.0956 18.5437 15.0037 18.6562 15.0037ZM24.2794 15.0037H35.1131C35.2275 15.0037 35.3212 15.0975 35.3212 15.21V29.7731C35.3217 29.8005 35.3168 29.8277 35.3066 29.8532C35.2965 29.8787 35.2814 29.9018 35.2622 29.9214C35.243 29.9409 35.2201 29.9565 35.1948 29.9671C35.1695 29.9777 35.1424 29.9831 35.115 29.9831H24.2775C24.2228 29.9831 24.1703 29.9614 24.1317 29.9227C24.093 29.884 24.0713 29.8316 24.0713 29.7769V15.2081C24.0713 15.0956 24.165 15.0019 24.2775 15.0019L24.2794 15.0037Z" fill="white"/>
</svg>
</a>
                </div>
                <div>
                    <a target='blank' href='https://www.instagram.com/pradeep.thirumoorthy/'><InstagramFilled style={{fontSize:'50px'}}/></a>
                </div>
                <div>
                    <a target='blank' href='https://www.facebook.com/profile.php?id=100088868871843'><FacebookFilled style={{fontSize:'50px'}}/></a>
                </div>
                
            </Flex>
            
        </div>
        
    );
}
export default Contact;

// Contact component

