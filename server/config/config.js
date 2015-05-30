module.exports = {
    server: {
        host: 'localhost',
        port: 8000,
        good: {
            options: {
                reporters: [{
                    reporter: require('good-console'),
                    events: { log: '*' }
                }, {
                    reporter: require('good-file'),
                    events: { response: '*'},
                    config: './logs/server.log'
                }]
            }
        }
    },
    database: {
        db: 'hockey_scheduler',
        host: 'localhost',
        port: 27017,
        username: '',
        password: ''
    },
    key: {
        privateKey: '37LvDSm4XvjYOh9Y',
        tokenExpiry: 1 * 30 * 1000 * 60 //1 hour
    },
    email: {
        accountName: "MattT",
        username: "test@test.com",
        password: "password",
        verifyEmailUrl: "verifyEmail"
    }
};