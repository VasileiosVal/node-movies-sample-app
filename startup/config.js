const config = require("config");
const logger = require('./logging');

module.exports = () => {
    if (!config.get("jwtPrivateKey")) {
        logger.error('FATAL ERROR: jwtPrivateKey is not defined')
        process.exit(1);
    }
}