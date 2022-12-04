module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1339),
  app: {
    keys: [
      "randomKeyPassword",
      "randomKeyPassword22",
      "randomKeyPassword33"
    ]
  },
});
