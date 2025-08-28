import request from './extensions.js'

async function getFlare(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/flare/get?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {

      resolve(data.result);
    });
  });


}



export default { getFlare }
