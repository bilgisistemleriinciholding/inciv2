<template>
  <div>
    <LittleHero v-show="pageSettings"
                :title="pageSettings.title"
                :img="pageSettings.image" />

    <section class="container my-14">
      <div class="max-w-5xl mx-auto">
        <div data-aos="fade-up" data-aos-duration="800">
          <h2 class="text-2xl md:text-3xl 2xl:text-5xl font-bold mb-10 text-center">
            {{ pageSettings.title2 }}
          </h2>
        </div>
        <form @submit.prevent="submit"
              data-aos="fade-up"
              data-aos-duration="1200">
          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="">
              <input type="text"
                     name="name"
                     :placeholder="$t('ContactName')"
                     autocomplete="given-name"
                     class="block w-full text-base md:text-lg font-extralight placeholder-current border border-inci_gray_light focus:border-inci_gray focus:ring-inci_gray outline-none rounded-md px-6 py-4"
                     required=""
                     :class="{ error: !name }"
                     v-model="name" />
            </div>
            <div class="">
              <input type="tel"
                     name="tel"
                     :placeholder="$t('ContactTel')"
                     autocomplete="tel"
                     class="block w-full text-base md:text-lg font-extralight placeholder-current border border-inci_gray_light focus:border-inci_gray focus:ring-inci_gray outline-none rounded-md px-6 py-4 appearance-none"
                     v-model="gsm" />
            </div>
          </div>
          <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div class="">
              <input type="text"
                     name="subject"
                     :placeholder="$t('ContactMessageTitle')"
                     autocomplete="off"
                     class="block w-full text-base md:text-lg font-extralight placeholder-current border border-inci_gray_light focus:border-inci_gray focus:ring-inci_gray outline-none rounded-md px-6 py-4"
                     required=""
                     :class="{ error: !subject }"
                     v-model="subject" />
            </div>
            <div class="">
              <input type="email"
                     name="email"
                     :placeholder="$t('ContactEmail')"
                     autocomplete="email"
                     class="block w-full text-base md:text-lg font-extralight placeholder-current border border-inci_gray_light focus:border-inci_gray focus:ring-inci_gray outline-none rounded-md px-6 py-4 appearance-none"
                     required=""
                     :class="{ error: !mail }"
                     v-model="mail" />
            </div>
          </div>
          <div class="mt-6 grid grid-cols-1">
            <div class="">
              <textarea type="text"
                        name="story"
                        :placeholder="$t('ContactMessageText')"
                        autocomplete="off"
                        class="block w-full text-base md:text-lg font-extralight placeholder-current border border-inci_gray_light focus:border-inci_gray focus:ring-inci_gray outline-none rounded-md px-6 py-4 resize-none"
                        required=""
                        :class="{ error: !msg }"
                        v-model="msg" />
            </div>
          </div>
          <div class="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div class="">
              <recaptcha />
            </div>
            <div>
              <div class="text-inci_red" v-if="errorMsg">{{ errorMsg }}</div>
              <div class="text-inci_green" v-if="success">
                {{ $t("EmailSendSuccess") }}
              </div>
            </div>
            <button :disabled="mailSending"
                    class="block bg-inci_red button-hover text-base xl:text-lg text-white px-8 xl:px-10 py-3 2xl:py-4 rounded-md">
              {{ $t("Send") }}
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="flex flex-col justify-center items-center">
      <div v-html="pageSettings.htmlContent"
           class="container plain-text"
           data-aos="fade-up"
           data-aos-duration="800"></div>

      <div class="lg:relative w-full my-16 lg:my-32 2xl:my-60">
        <div class="mx-auto w-full max-w-screen-3xl py-12"
             data-aos="fade-right"
             data-aos-duration="800">
          <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16 text-center lg:text-right">
            <h2 class="text-2xl xl:text-4xl 2xl:text-6xl font-bold mb-5 xl:mb-10">
              {{ $t("ContactAddressTitle") }}
            </h2>
            <p class="text-lg 2xl:text-xl font-light mb-3 2xl:mb-5">
              <span class="font-bold"> {{ $t("ContactAddressText") }}:</span>
              {{ $t("ContactAddressInfo") }}
            </p>
            <p class="text-lg 2xl:text-xl font-light mb-3 2xl:mb-5">
              <span class="font-bold">{{ $t("ContactTel") }} :</span> 0 (232)
              265 45 00 (pbx)
            </p>
            <p class="text-lg 2xl:text-xl font-light mb-3 2xl:mb-5">
              <span class="font-bold">{{ $t("ContactFax") }}:</span> 0 (232) 265
              48 61
            </p>
          </div>
        </div>
        <div class="w-full lg:absolute lg:top-1/2 lg:-translate-y-1/2 right-0 lg:w-1/2">
          <div class=""
               data-aos="fade-left"
               data-aos-duration="800"
               data-aos-offset="-50">
            <ImgOnCircle left map />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style></style>
<script>
  import ImgOnCircle from "../components/ImgOnCircle.vue";
  import LittleHero from "../components/LittleHero.vue";
  import pageSettingsService from "@/services/pageSettingService.js";

  export default {
    name: "contact",
    layout: "default",
    components: { LittleHero, ImgOnCircle },
    data() {
      return {
        name: "",
        gsm: "",
        subject: "",
        mail: "",
        msg: "",
        mailSending: false,
        success: false,
        errorMsg: "",
      };
    },
    async asyncData({ i18n }) {
      var pageSettings = await pageSettingsService.getPageSetting(
        "contact",
        i18n.locale
      );
      pageSettings = pageSettings || {
        seoTitle: "",
        seoKeywords: "",
        seoDescription: "",
        image: "",
        title: "",
      };

      return { pageSettings };
    },
    methods: {
      async submit() {
        this.errorMsg = "";
        this.success = false;
        this.mailSending = true;
        try {
          const token = await this.$recaptcha.getResponse();

          // send token to server alongside your form data

          var mailModel = {
            name: this.name,
            gsm: this.gsm,
            mail: this.mail,
            subject: this.subject,
            msg: this.msg,
            token: token
          };

          let mailRes = await pageSettingsService.sendEmail(mailModel);
          let mailResponse = mailRes.data;
          if (mailResponse.success) {
            this.success = true;
            this.errorMsg = "";
          } else {
            this.success = false;
            this.errorMsg = $nuxt.$t('UnexpectedError');
          }

          // at the end you need to reset recaptcha
          await this.$recaptcha.reset();
          this.mailSending = false;
        } catch (error) {
          this.errorMsg = $nuxt.$t('RecaptchaError');
          this.mailSending = false;
        }
      },
    },
    head() {
      return {
        title: `${this.pageSettings.seoTitle}`,
        meta: [
          {
            vmid: "description",
            name: "description",
            content: this.pageSettings.seoDescription,
          },
          {
            vmid: "keywords",
            name: "keywords",
            content: this.pageSettings.seoKeywords,
          },
        ],
      };
    },
  };
</script>
