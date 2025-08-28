import request from './extensions.js'

async function getAbout(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/about/get?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {

      resolve(data.result);
    });
  });


}


async function getCommitee(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/about/getCommitee?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {

      resolve(data.result);
    });
  });


}


export default { getAbout, getCommitee }
