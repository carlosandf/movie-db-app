export const compressImage = (urlImage, qualityPercentage) => {
  return new Promise((resolve, reject) => {
    const $canvas = document.createElement('canvas');
    const image = new window.Image();
    fetch(urlImage)
      .then(res => res.blob())
      .then(data => {
        image.src = URL.createObjectURL(data);
      });
    image.onload = () => {
      $canvas.width = image.width;
      $canvas.height = image.height;
      $canvas.getContext('2d').drawImage(image, 0, 0);
      $canvas.toBlob(
        (blob) => {
          if (blob === null) {
            reject(blob);
          } else {
            const urlCompres = URL.createObjectURL(blob);
            resolve({ urlCompres, blob });
          }
        },
        'image/jpeg',
        qualityPercentage / 100
      );
    };
  });
};
