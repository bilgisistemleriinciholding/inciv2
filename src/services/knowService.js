import request from './extensions.js'

async function getKnow(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/know/get?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {
      resolve(data.result);
    });
  });
}


async function getHistory(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/history/get?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {
      resolve(data.result);
    });
  });
}

export default { getKnow, getHistory }
