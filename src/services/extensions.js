import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || "https://apiv2.inciholding.com/service",
  timeout: 1000 * 30 // 30 saniye timeout
})

// ✅ Request Interceptor
service.interceptors.request.use(
  config => {
    // Giden isteği logla
    console.log("[AXIOS REQUEST]", {
      method: config.method,
      url: config.baseURL + config.url,
      data: config.data,
      headers: config.headers,
    })

    return config
  },
  error => {
    console.error("[AXIOS REQUEST ERROR]", error)
    return Promise.reject(error)
  }
)

// ✅ Response Interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    // Başarısız özel durum
    if (res.success !== true) {
      console.warn("[AXIOS RESPONSE WARNING]", {
        url: response.config.url,
        message: res.message || "Unknown error",
      })
      return Promise.reject(new Error(res.message || 'Error'))
    }

    // Başarılı cevap
    return res
  },
  error => {
    // HTTP hata durumu
    if (error.response) {
      console.error("[AXIOS RESPONSE ERROR]", {
        url: error.config?.url,
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      })
    } else if (error.request) {
      // Sunucu hiç cevap vermedi
      console.error("[AXIOS NETWORK ERROR]", {
        url: error.config?.url,
        message: "Sunucu cevap vermedi.",
      })
    } else {
      // Axios dışında JS hatası
      console.error("[AXIOS SETUP ERROR]", error.message)
    }

    return Promise.reject(error)
  }
)

export default service
