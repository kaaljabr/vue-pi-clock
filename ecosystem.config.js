module.exports = {
    apps: [
        {
            name: "vue-pi-clock",
            watch: true,
            script: "./node_modules/@vue/cli-service/bin/vue-cli-service.js",
            ignore_watch: ['node_modules', 'logs'],
            args: "serve",
            instance_var: 'INSTANCE_ID',
            env: {
                PORT: 8080,
                NODE_ENV: 'production',
            },
        }
    ]
};
