
import { useState } from 'react';
import './About.css';
import log from './people-avatar-collection-free-vekjnctor.png';
import { Card, Flex, Image, Typography } from 'antd';
import Spinner from './Spinner';

import prize from './prize1.jpg';
import Title from 'antd/es/typography/Title';
const {Text}=Typography
const About = () =>{
    const [topheight,setheight] = useState(0);
    window.onscroll = ()=>{
        setheight(document.documentElement.scrollTop);
        console.log(topheight);
    }
    return(
        
        <div className="About-container page-container" >
        <div className='grid-container2'>
        
        <div className={`about-item2 about-title`}>
        <Spinner text={'About Me'}/>
            </div>
            
            <div className='Swiper'>Swipe to right see &gt;&gt;</div>
            <div className="about-item4">
                <Flex >
                     
    <Card className='Card'>
        <Title underline level={4}>About:</Title>
        <Image src={log} preview={false}></Image>
        <div style={{textWrap:'wrap'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Pradeep T, a Full Stack Web Developer. I build websites from start to finish. On the front end, I make things look good and easy to use. I use HTML, CSS, and JavaScript. For the back end, I work with servers and databases, like Node.js and MongoDB.

I love solving problems and making things work smoothly. I believe in writing neat and organized code. Always eager to learn new things in the ever-changing world of web development.
</div>
    </Card>
    <Card className='Card'>
    <Title underline level={4}>Education</Title>
            <Title  level={5}>Under Graduate</Title>
            <div style={{marginLeft:'30px'}}>
                <Flex wrap="wrap" gap="large">
                <Text strong>Status</Text><div>:</div><div> Pursueing(6th Sem)</div>
                </Flex><Flex wrap="wrap" gap="large" >
                    <Text strong>CGPA </Text><div>:</div><div> 8.24</div>
                </Flex><Flex wrap="wrap" gap="large" >
                    <Text strong>Batch </Text><div>:</div><div> 2025</div>
                </Flex>
            </div>
            <Title level={5}>HSC</Title>
            <div style={{marginLeft:'30px'}}>
                <Flex wrap="wrap" gap="large">
                <Text strong>Status</Text><div>:</div><div> Pursueing(6th Sem)</div>
                </Flex><Flex wrap="wrap" gap="large" >
                    <Text strong>CGPA </Text><div>:</div><div> 8.24</div>
                </Flex><Flex wrap="wrap" gap="large" >
                    <Text strong>Batch </Text><div>:</div><div> 2025</div>
                </Flex>
            </div>
            <Title level={5}>SSLC</Title>
            <div style={{marginLeft:'30px'}}>
                <Flex wrap="wrap" gap="large">
                <Text strong>Status</Text><div>:</div><div> Pursueing(6th Sem)</div>
                </Flex><Flex wrap="wrap" gap="large" >
                    <Text strong>CGPA </Text><div>:</div><div> 8.24</div>
                </Flex><Flex wrap="wrap" gap="large" >
                    <Text strong>Batch </Text><div>:</div><div> 2025</div>
                </Flex>
            </div>
    
    </Card>
    <Card className='Card'>
        <Title underline level={4}>Achievements</Title>
        I won FIRST PRIZE 🥇 in the Renaissance Design Jam!<br></br>
        <a target='blank' href='https://www.linkedin.com/posts/pradeep-thirumoorthy_i-am-delighted-to-announce-that-i-won-first-activity-7163397905393856512-w7ph?utm_source=share&utm_medium=member_desktop'><Image preview={false} src={prize}></Image></a>
        </Card>
                </Flex>
</div>
            
        </div>
        </div>
    );
}
export default About;