const ocrSpaceApi = require('ocr-space-api-alt2');

const options = {
  apikey: 'K81052179688957',
  filetype: 'png',
  verbose: true,
  url: `${__dirname}/loveText.jpg`
};

const getText = async () => {
  try {
    const result = await ocrSpaceApi(options);
    console.log({ result });
  } catch (error) {
    console.error(error);
  }
};

module.exports = getText;