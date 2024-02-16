// imageLoader.js
// Export the paths of images explicitly
export const projectAImagePaths = [
  './photos/projectA/image1.png',
  './photos/projectA/image2.png',
  './photos/projectA/image3.png',
  './photos/projectA/image4.png',
  './photos/projectA/image5.png',
  './photos/projectA/image6.png',
  './photos/projectA/image7.png',
  './photos/projectA/image8.png',
  './photos/projectA/image9.png',
  './photos/projectA/image10.png',
];

export const projectBImagePaths = [
  
  './photos/projectB/image1.png',
  './photos/projectB/image2.png',
  './photos/projectB/image3.png',
  './photos/projectB/image4.png',
  './photos/projectB/image5.png',
  './photos/projectB/image6.png',
  './photos/projectB/image7.png',
  './photos/projectB/image8.png',
  './photos/projectB/image9.png',
  './photos/projectB/image10.png',
];

export const projectCImagePaths = [
  
  './photos/projectC/image1.png',
  './photos/projectC/image2.png',
  './photos/projectC/image3.png',
  './photos/projectC/image4.png',
  './photos/projectC/image5.png',
  './photos/projectC/image6.png',
  './photos/projectC/image7.png',
  './photos/projectC/image8.png',
  './photos/projectC/image9.png',
  './photos/projectC/image10.png',
];

// Function to import all images based on paths
export const importAll = async (imagePaths) => {
  const images = [];
  for (const path of imagePaths) {
    const image = await import(path);
    images.push(image.default);
  }
  return images;
};
