// Function to import all images based on paths
export const importAll = async (imagePaths) => {
  const images = [];
  for (const path of imagePaths) {
    // Use static import instead of dynamic import
    const image = await importImage(path);
    images.push(image);
  }
  return images;
};

// Helper function for static import
const importImage = async (path) => {
  let image;
  switch (path) {
    case './photos/projectA/image1.png':
      image = await import('./photos/projectA/image1.png');
      break;
    case './photos/projectA/image2.png':
      image = await import('./photos/projectA/image2.png');
      break;
    // Add cases for other images in projectA
    case './photos/projectB/image1.png':
      image = await import('./photos/projectB/image1.png');
      break;
    case './photos/projectB/image2.png':
      image = await import('./photos/projectB/image2.png');
      break;
    // Add cases for other images in projectB
    // Repeat the pattern for other projects
    default:
      console.error(`Unknown image path: ${path}`);
  }
  return image.default;
};
