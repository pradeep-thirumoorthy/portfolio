import { Button } from 'antd';
import YourResumePDF from './../A4 - 1.pdf';

const downloadResume = () => {
  // Create a link element
  const downloadLink = document.createElement('a');
  downloadLink.href = YourResumePDF;
  downloadLink.download = 'YourResume.pdf';

  // Append the link to the document
  document.body.appendChild(downloadLink);

  // Trigger a click on the link
  downloadLink.click();

  // Remove the link from the document
  document.body.removeChild(downloadLink);
};

const DownloadResumeButton = () => {
  return (
    <Button size='large' onClick={downloadResume}>Download Resume</Button>
  );
};

export default DownloadResumeButton;