module.exports = {
    apps: [
        {
            name: "vue-pi-clock",
            watch: false,
            script: "node_modules/.bin/serve",
            args: "-s dist -l 8080",
            env: {
                NODE_ENV: 'production',
            },
        }
    ]
};
