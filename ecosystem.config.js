/* eslint-disable linebreak-style */
module.exports = {
  apps: [{
    name: 'LS',
    script: './server.js',
    instances: 'max',
    exec_mode: 'cluster',
    max_memory_restart: '1G',
    max_restarts: 1,
    autorestart: true, // default
    wait_ready: true,
    listen_timeout: 1000,
    kill_timeout: 1000,
    watch: ['public/dist', 'modules', 'config'],
    ignore_watch: ['node_modules'],
    node_args: '-r dotenv/config',
    watch_options: {
      'followSymlinks': false
    },
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
