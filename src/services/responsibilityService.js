import request from './extensions.js'

async function getResponsibility(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/responsibility/get?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {

      resolve(data.result);
    });
  });


}


export default { getResponsibility }
