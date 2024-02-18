import { Button, FloatButton } from 'antd';
import YourResumePDF from './../A4 - 1.pdf';

import {DownloadOutlined} from '@ant-design/icons'
const downloadResume = () => {
  const downloadLink = document.createElement('a');
  downloadLink.href = YourResumePDF;
  downloadLink.download = 'Pradeep Thirummorthy.pdf';

  document.body.appendChild(downloadLink);

  downloadLink.click();

  document.body.removeChild(downloadLink);
};

const DownloadResumeButton = () => {
  return (
    <FloatButton shape="square" icon={<DownloadOutlined />} tooltip="Download My Resume" size='large' onClick={downloadResume}>Download Resume</FloatButton>
  );
};

export default DownloadResumeButton;