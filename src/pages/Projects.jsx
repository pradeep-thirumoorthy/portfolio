// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './project.css';
import jsondata from './data.json';
import { Card, Carousel, ConfigProvider, Empty, Modal, theme } from 'antd';
import {
  LinkOutlined,
} from '@ant-design/icons';

import { projectAImages, projectBImages, projectCImages } from '../assets/photos/Photos2';
import Spinner from './Spinner';
const Projects = () => {
  const data = jsondata.projects;
  const [open, setOpen] = useState('');
  const [images, setImages] = useState([]);
  const [selectedProject, setSelectedProject] = useState(data[0]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let projectImagesArray = [];

        switch (selectedProject.title) {
          case 'Student Complaint System':
            projectImagesArray = await projectAImages;
            break;
          case 'E Vault System':
            projectImagesArray = await projectBImages;
            break;
          case 'Assist App':
            projectImagesArray = await projectCImages;
            break;
          // Add more cases if needed for other projects

          default:
            break;
        }

        setImages(projectImagesArray);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [selectedProject]);return (
    <>
      <div className="page-container" id='Project'>
      <div className="about-item2 about-title">
        <Spinner text={'PROJECTS'}/>
            </div>
          <ConfigProvider theme={{ algorithm: theme.darkAlgorithm}}>
        <div className="Project-Cards">
          {data.map((index) => (
            <Card className='Card-100' key={index.title} >
              <div className='card-view'>
                <a onClick={() => {setOpen(true);setSelectedProject(index)}}>View</a></div>
              <h1>{index.title}</h1>
              <h3>{index.description}</h3>
              
            </Card>
          ))}
        </div>
        </ConfigProvider>
      </div>
      <Modal
        centered
        visible={open}
        onCancel={() => setOpen(false)}
        footer={[]}
        width={1000}
        style={{overflow:scroll}}
      >
        <h2>{selectedProject.title}</h2>
        <p>{selectedProject.description}</p>
        
        <h3>Team Members:</h3>
        <ul>
          {selectedProject.teamMembers.map((member, index) => (
            <li key={index}>{member.name} - {member.role}&nbsp;<a target='blank' href={member.Link}><LinkOutlined/></a></li>
          ))}
        </ul>
        <h3>Link :<a href={selectedProject.Link}>{selectedProject.Link}</a></h3>
        <h3>Start Date: {selectedProject.startDate}</h3>
        <h3>End Date: {selectedProject.endDate}</h3>
        
        <h3>ScreenShots</h3>
        <Carousel autoplay>
        {(images.length!==0)?images.map((image, index) => (
          <div key={index}>
        <img style={{width:'100%'}} src={image} alt={`Image ${index + 1}`} />
        </div>
      )):<><Empty/></>}
        </Carousel>
        <h3>Technology Stack:</h3>
        <ul>
          {selectedProject.TechnologyStack.map((stack, index) => (
            <li key={index}>{stack.name} - {stack.value}</li>
          ))}
        </ul>
      </Modal>
      
    </>
  );
};

export default Projects;
