export const getImageWithDimensions = (src, width, height) => {
    const fileExtension = src.split(".").pop();
  
    const baseURL = src.replace(`.${fileExtension}`, "");
  
    const modifiedURL = `${baseURL}_${width}x${height}.${fileExtension}`;
  
    return modifiedURL;
  };
  