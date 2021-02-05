const prod = process.env.NODE_ENV === 'production'


module.exports = {
    env: {
        ProjectUrl: prod ? 'https://cms.servethemoment.org/' : 'https://cms.servethemoment.org/',
    },
    target: 'serverless',
}

