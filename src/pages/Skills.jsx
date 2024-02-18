import { Card, Flex, Progress, Space } from "antd";
import Spinner from "./Spinner";
import Title from "antd/es/typography/Title";

const Skills = () => {

  const cardData = [
    {
      title: "Languages Known",
      progressData: [
        { label: "C", value: 80 },
        { label: "Java", value: 30 },
        { label: "Python", value: 75 },
        { label: "Javascript", value: 70 },
        { label: "Dart", value: 10 },
        { label: "Go Lang", value:20}
      ],
    },
    {
      title: "Tech & Tools",
      progressData: [
        { label: "React", value: 70 },
        { label: "Figma", value: 90 },
        { label: "OpenCV", value: 40 },
        { label: "Node", value: 50 },
        { label: "MongoDB", value: 50 },
        { label: "MySQL", value: 50 },
      ],
    },
    
  ];

  return (
    <div className="page-container2">
      <Spinner text={'SKILL SET'} />
      <div className="col-md-12" style={{ fontSize: "2rem" }}>
        <Flex wrap="wrap" gap="16px" style={{overflowY:'scroll'}}>
          {cardData.map((data, index) => {
            const key = `card-${index}`;
            return (
              <Card
                key={key}
                hoverable
                
              >
                <Title style={{ whiteSpace: 'nowrap' }}>{data.title}</Title>
                <Space direction="vertical" style={{ width: '100%' }}>
                  {data.progressData.map((progress, subIndex) => (
                    <div key={`progress-${subIndex}`}>
                      <div style={{fontSize:'20px'}}>{`${progress.label}`}
                      {(progress.value>0)?<>:<Progress percent={progress.value} size={[270, 20]} /></>:<>&nbsp;</>}</div>
                      
                    </div>
                  ))}
                </Space>
              </Card>
            );
          })}
        </Flex>
      </div>
    </div>
  );
}

export default Skills;
