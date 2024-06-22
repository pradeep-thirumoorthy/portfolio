
import './Home.css'
import pic from './../svgs/vecteezy_studying-and-learning-online-concept_1270244.svg';
import { Image, List } from 'antd';
import DownloadableFile from './DownloadFile';
import logo from './1707833865317.jpg';
import TypewriterList from './Typewriter';
const Home = () =>{
    const data = ['I',"'",'m',' ','P','R','A','D','E','E','P','.','T']
    return(
        <div className="page-container" style={{backgroundColor:'#373a40'}}>
            <div className='profile-photo'>
                <div className='home__img'></div>
                {/* <Image style={{borderRadius:'100%',marginBottom:'40px'}} src={logo} height={'250px'} width={'250px'}></Image> */}
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
                </div>
            
            <div className='item2'>
                <img src={pic} height={'100%'} width={'100%'} alt='vector'/>
            </div>
            <div className='item3'>
                <div className='small-about'>
                
                <TypewriterList/>
            </div>            </div>
            <DownloadableFile/>
            </div>
            
        </div>
    );
}
export default Home;