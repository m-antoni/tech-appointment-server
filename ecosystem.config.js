module.exports = {
    apps: [
      {
        name: 'Tech Appointment (MERN + GraphQL + Apollo)',
        script: '.index.js',
        instances: 'MAX',
        autorestart: true,
        watch: true,
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'development',
        },
        env_test: {
          NODE_ENV: 'test',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  