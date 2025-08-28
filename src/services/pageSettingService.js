import request from './extensions.js'
import axios from 'axios'

async function search(langCode, searchText) {

  return new Promise(function (resolve, reject) {
    request({
      url: '/home/search',
      params: { searchText: searchText, langCode: langCode, page: 0, limit: 1000 },
      method: 'get',
      https: false
    }).then(function (data) {
      resolve(data.result);
    });
  });


}

async function getRedirects() {

  return new Promise(function (resolve, reject) {
    request({
      url: '/settings/getRedirects',
      method: 'get'
    }).then(function (data) {
      resolve(data.result);
    });
  });


}

async function getCircles(langCode) {

  return new Promise(function (resolve, reject) {
    request({
      url: '/home/getCircles',
      params: { langCode: langCode },
      method: 'get',
      https: false
    }).then(function (data) {
      resolve(data.result);
    });
  });


}

async function sendEmail(mailModel) {

  const service = axios.create({
    baseURL: "https://api.inciholding.com", // url = base url + request url
    timeout: 1000 * 30, // request timeout
    xsrfCookieName: 'X-SRF-TOKEN',
    xsrfHeaderName: 'XSRF-TOKEN',
    withCredentials: true
  });

  var _xsrf = await service.request({
    url: '/api/xsrf-token',
    method: 'get'
  });

  var _xToken = _xsrf.data.data;



  service.interceptors.request.use(
    (config) => {
      // do something before request is sent
      if (_xToken) {
        config.headers["XSRF-TOKEN"] = _xToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );



  return new Promise(function (resolve, reject) {
    service.request({
      url: '/home/sendEmail',
      method: 'post',
      data: mailModel,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    }).then(function (data) {
      resolve(data);
    }).catch(function (err) {
      reject(err);
    });
  });


}

async function getPageSetting(pageCode, langCode) {

  return new Promise(function (resolve, reject) {
    request({
      url: '/settings/getPageSetting',
      params: { key: pageCode, langCode: langCode },
      method: 'get',
      https: false
    }).then(function (data) {
      resolve(data.result);
    });
  });


}

async function getMediaSideMenu(i18n) {

  var newsSettings = await getPageSetting(
    "news",
    i18n.locale
  );

  var pressSettings = await getPageSetting(
    "press",
    i18n.locale
  );

  var magazineSettings = await getPageSetting(
    "magazine",
    i18n.locale
  );

  var logoSettings = await getPageSetting(
    "logos",
    i18n.locale
  );

  var sideMenus = [];
  if (newsSettings)
    sideMenus.push({ isActive: false, lang: newsSettings.langCode, url: newsSettings.route, title: newsSettings.title2 })
  if (pressSettings)
    sideMenus.push({ isActive: false, lang: pressSettings.langCode, url: pressSettings.route, title: pressSettings.title2 })
  if (magazineSettings)
    sideMenus.push({ isActive: false, lang: magazineSettings.langCode, url: magazineSettings.route, title: magazineSettings.title2 });

  sideMenus.push({ isActive: false, lang: '-', url: 'https://blog.inciholding.com/', title: 'İnci Blog' })

  if (logoSettings)
    sideMenus.push({ isActive: false, lang: logoSettings.langCode, url: logoSettings.route, title: logoSettings.title2 })

  return sideMenus;

}

export default { getPageSetting, getMediaSideMenu, search, sendEmail, getCircles, getRedirects }
