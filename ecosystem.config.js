module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "stark_of_winterfell",
      script    : "./src/server.min.js",
      env_production : {
        NODE_ENV: "production"
      }
    },


  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "root",
      host : "45.55.154.93",
      ref  : "origin/master",
      repo : "https://github.com/yuriykots/stark_of_winterfell.git",
      path : "~/stark",
      "post-deploy" : "nvm install && npm install && /root/.nvm/versions/node/v6.9.5/bin/pm2 startOrRestart ecosystem.json --env production"
    }
  }
}
