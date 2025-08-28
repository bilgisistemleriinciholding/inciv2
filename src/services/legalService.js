import request from './extensions.js'

async function getLegal(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/legal/get?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {

      resolve(data.result);
    });
  });


}

export default { getLegal }
