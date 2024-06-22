
import { useState } from 'react';
import './About.css';
import log from './people-avatar-collection-free-vekjnctor.png';
import { Card, Flex, Image, Progress, Steps, Typography } from 'antd';
import Spinner from './Spinner';
import prize from './prize1.jpg';
import Title from 'antd/es/typography/Title';
import { EnvironmentOutlined } from '@ant-design/icons';
import { Step } from 'ant-design-vue';
import Link from 'antd/es/typography/Link';
const {Text}=Typography
const About = () =>{
    const [topheight,setheight] = useState(0);
    window.onscroll = ()=>{
        setheight(document.documentElement.scrollTop);
        console.log(topheight);
    }
    return(
        
        <div className="About-container page-container" >
        
        <div className={`about-item2 about-title`}>
        <Spinner text={'About Me'}/>
            </div>
            <Flex vertical gap={50} className="about-item4">
                     
    <Card style={{backgroundColor:'rgba(255, 255, 255, 0.51)'}}>
        <Title underline level={4}>About</Title>
        <Flex align='center' justify='center'><Image src={log} preview={false} style={{width:'300px',height:'300px'}}></Image>
        <div style={{textWrap:'wrap'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, I'm Pradeep T, a Full Stack Web Developer. I build websites from start to finish. On the front end, I make things look good and easy to use.<br></br> I use HTML, CSS, and JavaScript. For the back end, I work with servers and databases, like Node.js and MongoDB.

I love solving problems and making things work smoothly. I believe in writing neat and organized code. Always eager to learn new things in the ever-changing world of web development.
</div>
</Flex>
    </Card>
    <Card style={{backgroundColor:'rgba(255, 255, 255, 0.51)'}}>
    <Title underline level={4}>Education</Title>
    <Steps  current={2}>
    <Step title="SSLC" description={
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <Progress type="circle" percent={89.8} width={60} />
          </div>
          <Text>K.V.M.Hr.Sec.School, Chennimalai</Text>
        </div>
      } />
      <Step title="HSC" description={
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <Progress type="circle" percent={91.78} width={60} />
          </div>
          <Link style={{color:'lightgreen'}} href='https://maps.app.goo.gl/isrVqXPYnV8c1yY28'><EnvironmentOutlined/></Link><Text>K.V.M.Hr.Sec.School, Chennimalai</Text>
        </div>
      } />
      
      <Step  title="Under Graduate" description={
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
            <Progress type="circle" percent={82.4} width={60} format={percent => `${(percent / 10).toFixed(2)}`} />
          </div>
          
          <Text>Kongu Engineering College</Text>
        </div>
      } />
    </Steps>
  </Card>
    {/* <Card className='Card'>
        <Title underline level={4}>Achievements</Title>
        I won FIRST PRIZE 🥇 in the Renaissance Design Jam!<br></br>
        <a target='blank' href='https://www.linkedin.com/posts/pradeep-thirumoorthy_i-am-delighted-to-announce-that-i-won-first-activity-7163397905393856512-w7ph?utm_source=share&utm_medium=member_desktop'><Image preview={false} src={prize}></Image></a>
        </Card> */}
</Flex>
{/* <div style={{ display: 'flex', justifyContent: 'center' }}>
  <LinkedInEmbed 
  url="https://www.linkedin.com/embed/feed/update/urn:li:share:7096518958312259584" width={550} height={550}/>
</div>
<InstagramEmbed url='https://www.instagram.com/p/C68rbb8IO_T/?utm_source=ig_web_copy_link' width={500} height={500}/> */}
        </div>
    );
}
export default About;