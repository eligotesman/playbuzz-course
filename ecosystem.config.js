module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : 'server.js',
      max_restarts: 3,
      watch:['server.js','./src/**/*.js'],
      instances:2,
      exec_mode:'cluster',
      node_args:'--debug=5859'
    }
  ]
};
