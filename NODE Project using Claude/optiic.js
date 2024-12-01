const Optiic = require('optiic');

const apiKey = '15CzrKe2ycH3cjfgXQKtv9zQksy9GJJfPMfqa3y9hvXD';
const optiic = new Optiic({ apiKey });

const processRemoteImage = async () => {
  try {
    const result = await optiic.process({
      url: 'https://optiic.dev/assets/images/samples/we-love-optiic.png',
    });
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const processLocalImage = async () => {
  try {
    const result = await optiic.process({
      image: 'sunset.jpg',
    });
    return result;
  } catch (error) {
    console.error('Error processing local image:', error);
    throw new Error(`An error occurred while processing local image: ${error.message}`);
  }
};

module.exports = { processRemoteImage, processLocalImage };