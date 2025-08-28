import request from './extensions.js'

async function loadHero(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/home/getHero?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {

      resolve(data.result);
    });
  });
}


async function loadStories(langCode) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/home/getStories?langCode=' + langCode,
      method: 'get',
      https: false
    }).then(function (data) {
      resolve(data.result);
    });
  });
}

export default { loadHero, loadStories }
