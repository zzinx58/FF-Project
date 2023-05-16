module.exports = ({env}) => ({
    email: {
        config: {
            provider: "nodemailer",
            // provider: "@strapi/provider-email-nodemailer",
            providerOptions: {
                host: "smtp.qq.com",
                port: 465,
                auth: {
                    user: "1095568627@qq.com",
                    pass:  "kyastnyukwlgfeag",
                },
                secure: true
            },
            settings: {
                defaultFrom: "1095568627@qq.com",
                defaultReplyTo: "1095568627@qq.com",
            }
        },
    }
})