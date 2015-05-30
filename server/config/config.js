module.exports = {
    server: {
            host: 'localhost',
            port: 8000
    },
    database: {
        host: 'localhost',
        port: 27017,
        db: 'hockey_scheduler',
        username: '',
        password: ''
    },
    key: {
        privateKey: '37LvDSm4XvjYOh9Y',
        tokenExpiry: 1 * 30 * 1000 * 60 //1 hour
    },
    email: {
        username: "test@test.com",
        password: "password",
        accountName: "MattT",
        verifyEmailUrl: "verifyEmail"
    }
};