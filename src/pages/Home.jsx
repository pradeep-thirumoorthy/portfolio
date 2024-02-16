
import './Home.css'
import pic from './../svgs/vecteezy_studying-and-learning-online-concept_1270244.svg';
import { Image } from 'antd';
import DownloadableFile from './DownloadFile';
import logo from './1707833865317.jpg';
const Home = () =>{
    const data = ['I',"'",'m',' ','P','R','A','D','E','E','P','.','T']
    return(
        <div className="page-container" style={{backgroundColor:'#1a1a1a'}}>
            <div className='profile-photo'>
                <Image style={{borderRadius:'100%',marginBottom:'40px'}} src={logo} height={'250px'} width={'250px'}></Image>
            </div>
            <div className=' grid-container'>
            <div className='item1'>
                <div className="Title">
                {data.map((index,i)=>(
                    
                    (index === ' ')?
                    <>
                    <div className='break'></div>
                    </>
                    :
                    (index === '.')?
                    <>
                        <div>&nbsp;</div>
                    </>
                    :
                    <><span key={i} style={{['--i']: i}}>{index}</span></>
                ))}
                </div>
            </div>
            <div className='item4'>
                <DownloadableFile/></div>
            
            <div className='item2'>
                <img src={pic} height={'100%'} width={'100%'} alt='vector'/>
            </div>
            <div className='item3'>
                <div className='small-about'>I aim to work in a challenging job with dedication,utilizing my skills to the fullest in a professional setting. I want to contribute my best to an organization and discover my potential through my responsibilities</div>
            </div>
            
            </div>
            
        </div>
    );
}
export default Home;