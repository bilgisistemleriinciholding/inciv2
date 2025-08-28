import request from './extensions.js'

async function getSustainability(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/sustainability/get?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {

      resolve(data.result);
    });
  });


}


export default { getSustainability }
