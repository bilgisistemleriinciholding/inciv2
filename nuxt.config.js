require("dotenv").config();
import axios from "axios";
import mediaService from "./src/services/mediaService";


export default async () => {
  generate: {
    dir: 'dist'
  }
head: {
      script: [
        { src: 'https://bundles.efilli.com/inciholding.com.prod.js' }
      ]
    }

  const service = axios.create({
    baseURL: "https://api.inciholding.com", // url = base url + request url
    timeout: 1000 * 30, // request timeout
  });

  let newsDetailUrls = {};


  var _req = await service.request({
    url: "/settings/getPageSettings",
    method: "get",
  });
  var _data = _req.data.result;

  var paths = _data.map((d) => d.code).filter((v, i, a) => a.indexOf(v) === i);
  var pages = {};

  const siteMapRoutes = [
    {
      url: '/',
      name: 'index',
      links: [
        {
          name: 'index___tr',
          url: '/tr'
        },
        {
          name: 'index___en',
          url: '/en'
        }]
    }
  ];

  paths.forEach(function (v, k) {
    if (v != "index") {
      var _pp = _data.filter((s) => s.code == v);
      var _pPage = {};
      if (v == 'news-detail') {

        _pp.forEach(function (vv, kk) {
          _pPage[vv.langCode] = vv.route;
          newsDetailUrls[vv.langCode] = vv.route;
        });

      }
      else {
        var _route = {
          name: v,
          url: '/' + v,
          links: []
        };

        _pp.forEach(function (vv, kk) {
          _pPage[vv.langCode] = vv.route;
          _route.links.push(
            {
              url: '/' + vv.langCode + vv.route.replace(':page?', ''),
              name: v + '___' + vv.langCode
            })

        });
        siteMapRoutes.push(_route);
      }
      pages[v] = _pPage;
    }
  });

  var pageFilter = { page: 1, limit: 100000, langCode: 'tr' };
  var newsResult = await mediaService.getNews(pageFilter);
  var trNews = newsResult.result;
  trNews.forEach(function (v, i) {

    siteMapRoutes.push({
      url: '/tr' + newsDetailUrls['tr'].replace(':id', v.path),
      locale: 'tr'
    })
  });

  var pageFilterEn = { page: 1, limit: 100000, langCode: 'en' };
  var enNewsRes = await mediaService.getNews(pageFilterEn);
  var enNews = enNewsRes.result;
  enNews.forEach(function (v, i) {
    siteMapRoutes.push({
      url: '/en' + newsDetailUrls['en'].replace(':id', v.path),
      locale: 'en'
    })
  });

  return {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",
    srcDir: "src/",
    // Global page headers: https://go.nuxtjs.dev/config-head
    head() {
      const i18nHead = this.$nuxtI18nHead
        ? this.$nuxtI18nHead({ addSeoAttributes: true })
        : { htmlAttrs: [], meta: [], link: [] };

      return {
        title: "İnci Holding",
        htmlAttrs: {
          ...i18nHead.htmlAttrs,
        },
        meta: [
          { charset: "utf-8" },
          {
            name: "viewport",
            content:
              "height=device-height, width=device-width, initial-scale=1.0,   minimum-scale=1.0, maximum-scale=1.0,user-scalable=no ",
          },
          { hid: "description", name: "description", content: "" },
          { name: "format-detection", content: "telephone=no" },
          ...i18nHead.meta,
        ],
        script: [
          {
    src: 'https://bundles.efilli.com/inciholding.com.prod.js',
    type: 'text/javascript',
    async: false,
  },
          {

            hid: 'gtm-script1',
            src: 'https://www.googletagmanager.com/gtag/js?id=G-PLNT5KGK69',
            defer: true,
            async: true
          },
          {
            hid: 'gtm-script2',
            innerHTML: ' window.dataLayer = window.dataLayer || [];' +
              'function gtag(){ dataLayer.push (arguments);}' +
              'gtag("js", new Date());  gtag("config", "G-PLNT5KGK69");',
            type: 'text/javascript',
            charset: 'utf-8'
          }
        ],
        __dangerouslyDisableSanitizers: ['script'],
        link: [
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
          ...i18nHead.link,
        ],
      };
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/input.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      { src: "@/../node_modules/aos", ssr: false, mode: "client" },
      "@/plugins/axios.config.js",
      "@/plugins/youtube.js",
      "@/plugins/counter.js",
    ],
    dev: process.env.NODE_ENV !== "production",
    env: {
      VUE_APP_BASE_API: process.env.VUE_APP_BASE_API,
      VUE_APP_IMG_PATH: process.env.VUE_APP_IMG_PATH,
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      "@nuxt/postcss8",
      "@nuxtjs/router",
      "@nuxt/image",
      [
        "@nuxtjs/dotenv",
        {
          filename: `.env.${process.env.NODE_ENV}`,
        },
      ],
    ],
    server: { host: "0.0.0.0" },
    routerModule: {
      /* module options */
    },
    serverMiddleware: [{
      path: '/',
      handler: '~/redirectMiddleware.js',
    }],
    //loading: {
    //  color: 'blue',
    //  height: '5px'
    //},
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      "@nuxtjs/i18n",
      "@nuxtjs/dotenv",
      "@nuxtjs/axios",
      "@nuxtjs/recaptcha",
      //"@nuxtjs/robots",
      ["@nuxtjs/google-tag-manager", {
        id: "G-PLNT5KGK69", enabled: true, scriptURL: 'https://www.googletagmanager.com/gtag/js'
      }],
      [
        "nuxt-cookie-control",
        {
          barPosition: "bottom-left",
          blockIframe: true,
          colors: {
            barTextColor: "#fff",
            barBackground: "#e30613",
            barButtonColor: "#fff",
            barButtonBackground: "#e30613",
            barButtonHoverColor: "#fff",
            barButtonHoverBackground: "#ca0001",
            modalButtonBackground: "#e30613",
            modalButtonHoverColor: "#fff",
            controlButtonBackground: "#12957b",
            controlButtonHoverBackground: "#ca0001",
            controlButtonIconHoverColor: "#fff",
            controlButtonIconColor: "#fff",
            modalButtonHoverBackground: "#ca0001",
            checkboxActiveBackground: "#ca0001",
            checkboxInactiveBackground: "#ede1e1",
            checkboxActiveCircleBackground: "#00c58e",
            checkboxInactiveCircleBackground: "#f44336",
            checkboxDisabledBackground: "#ddd",
            checkboxDisabledCircleBackground: "#fff",
          },
          text: {
            acceptAll: "Kabul Et",
            declineAll: "Delete all",
            manageCookies: "Manage cookies",
            unsaved: "You have unsaved settings",
            close: "Close",
            save: "Save",
            necessary: "Necessary cookies",
            optional: "Optional cookies",
            functional: "Functional cookies",
            blockedIframe: "To see this, please enable functional cookies",
            here: "here",
          },
        },
      ],
      '@nuxtjs/sitemap'
    ],
    robots: {
      UserAgent: "*",
      Disallow: "/",
    },
    image: {
      domains: ["api.inciholding.com"],
      provider: 'none',
      alias: { cdnimg: "https://api.inciholding.com/Uploads/images" },
    },
    recaptcha: {
      siteKey: "6LcXl5EjAAAAAK0T5KFc3gUI3okXbcgwZeLXjXC3",
      version: 2,
      hideBadge: true,
    },
    i18n: {
      parsePages: false,
      langDir: "@/locales/",
      defaultLocale: "tr",
      seo: true,
      strategy: "prefix",
      vueI18nLoader: true,

      locales: [
        { code: "tr", iso: "tr-TR", file: "tr.js" },
        { code: "en", iso: "en-US", file: "en.js" },
      ],
      pages: pages,
      detectBrowserLanguage: {
        alwaysRedirect: false,
        fallbackLocale: "tr",
        redirectOn: "root",
        useCookie: true,
        cookieAge: 365,
        cookieCrossOrigin: true,
        cookieDomain: null,
        cookieKey: "inci_i18n",
        cookieSecure: true,
      },
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    sitemap: {
      hostname: 'https://inci-82xxva8tv-sulobags-projects.vercel.app',
      i18n: {
        defaultLocale: 'tr',
        locales: ['tr', 'en'],
        routesNameSeparator: '___'
      },
      gzip: true,
      exclude: ['/**'],
      routes: siteMapRoutes
    },
    build: {
      filenames: {
        app: ({ isDev, isModern }) =>
          isDev
            ? `[name]${isModern ? ".modern" : ""}.js`
            : `[contenthash:7]${isModern ? ".modern" : ""}.js`,
        chunk: ({ isDev, isModern }) =>
          isDev
            ? `[name]${isModern ? ".modern" : ""}.js`
            : `[contenthash:7]${isModern ? ".modern" : ""}.js`,
        css: ({ isDev }) => (isDev ? "[name].css" : "css/[contenthash:7].css"),
        img: ({ isDev }) =>
          isDev ? "[path][name].[ext]" : "img/[name].[contenthash:7].[ext]",
        font: ({ isDev }) =>
          isDev ? "[path][name].[ext]" : "fonts/[name].[contenthash:7].[ext]",
        video: ({ isDev }) =>
          isDev ? "[path][name].[ext]" : "videos/[name].[contenthash:7].[ext]",
      },
      babel: {
        compact: true,
      },
      standalone: true,
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
    render: {
      csp: {
        reportOnly: false,
        addMeta: false,
        policies: {
          "script-src": [
            "self",
            "unsafe-inline",
            "strict-dynamic",
            "https://static.cloudflareinsights.com",
            "https://www.youtube.com ",
            "https://www.google.com ",
            "https://www.gstatic.com",
            "https://www.recaptcha.net",
            "https://connect.facebook.net",
            "https://www.googletagmanager.com"
          ],
        },
      },
    },
  };
};
