import request from './extensions.js'

async function getMagazine(query) {
  query.page--;

  return new Promise(function (resolve, reject) {
    request({
      url: '/magazine/get',
      method: 'get',
      params: query,
      https: false
    }).then(function (data) {
      resolve(data);
    });
  });
}
async function getPress(query) {
  query.page--;

  return new Promise(function (resolve, reject) {
    request({
      url: '/press/get',
      method: 'get',
      params: query,
      https: false
    }).then(function (data) {
      resolve(data);
    });
  });
}
async function getLogos(query) {
  query.page--;

  return new Promise(function (resolve, reject) {
    request({
      url: '/logo/get',
      method: 'get',
      params: query,
      https: false
    }).then(function (data) {
      resolve(data);
    });
  });
}
async function getNews(query) {
  query.page--;

  return new Promise(function (resolve, reject) {
    request({
      url: '/news/get',
      method: 'get',
      params: query,
      https: false
    }).then(function (data) {
      resolve(data);
    });
  });
}

async function getNewsDetail(_slug) {
  return new Promise(function (resolve, reject) {
    request({
      url: '/news/get/' + _slug,
      method: 'get',
      https: false
    }).then(function (data) {
      resolve(data.result);
    });
  });
}
async function getHomeNews(lang) {

  return new Promise(function (resolve, reject) {
    request({
      url: '/home/getNews?langCode=' + lang,
      method: 'get',
      https: false
    }).then(function (data) {
      resolve(data);
    });
  });
}
export default { getMagazine, getLogos, getNews, getNewsDetail, getPress, getHomeNews }
