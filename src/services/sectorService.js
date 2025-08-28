import request from './extensions.js'

async function getSectors(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/home/getSectors?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {

      resolve(data.result);
    });
  });


}

async function getAllSectors(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/sector/get?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {

      resolve(data.result);
    });
  });


}


export default { getSectors, getAllSectors }
