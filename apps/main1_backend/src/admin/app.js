import favicon from "./extensions/logo.png";
export default {
  config: {
    head: {
      favicon: favicon,
    },
    locales: ["zh-Hans"],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "BTF DashBoard",
        "Auth.form.welcome.title": "Welcome to BTF CMS",
        "Auth.form.welcome.subtitle": "Log in to your BTF account",
        "app.components.HomePage.welcomeBlock.content":
          "Congrats! You are logged as the first administrator. To discover the powerful features provided by BTF-CMS, please create your first Content type!",
        "app.components.HomePage.create": "Create your content-type",
      },
      "zh-Hans": {
        "app.components.LeftMenu.navbrand.title": "BTF 仪表板",
        "Auth.form.welcome.title": "欢迎来到 BTF CMS",
        "Auth.form.welcome.subtitle": "登陆您的 BTF 账户",
        "global.plugins.content-type-builder": "模型构建器",
        "app.components.HomePage.welcomeBlock.content":
          "恭喜! 您已登录为管理员。为了探索 BTF-CMS 提供的强大功能，请创建一个你的内容类型",
        "app.components.HomePage.create": "创建一个你的内容类型",
      },
    },
    tutorials: false,
  },
  bootstrap() {},
};
