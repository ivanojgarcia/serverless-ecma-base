const util    = require('util')
const moment  = require('moment')
const winston = require('winston')

class Logger {
  constructor() {
    this.winstonLogger = winston.createLogger({
      levels      : { error: 1, warn: 2, info: 3 },
      transports  : this._createTransports(),
      exitOnError : false,
    })
  }

  info(message, data) { this.winstonLogger.info({ message, data }) }
  warn(message, data) { this.winstonLogger.warn({ message, data }) }
  error(message, data) { this.winstonLogger.error({ message, data }) }

  _createTransports() {
    const TRANSPORTS = []
    TRANSPORTS.push(new winston.transports.Console({
      format           : winston.format.printf(this._consoleFormat()),
      level            : 'info', // Muestra logs de nivel 3 o menor
      handleExceptions : false,
      colorize         : false,
      json             : false,
    }))
    return TRANSPORTS
  }

  _consoleFormat () {
    const COLORS = {
      error : `\x1b[91m`, // LIGHT_RED
      warn  : `\x1b[93m`, // LIGHT_YELLOW
      info  : `\x1b[96m`, // LIGHT_CYAN
      reset : `\x1b[0m`,  // Restaura al color por defecto
    }
    return (info) => {
      const START     = COLORS[info.level]
      const END       = COLORS.reset
      const TIMESTAMP = moment().format('DD/MM/YYYY HH:mm:ss')
      const LEVEL     = info.level
      const MESSAGE   = info.message
      const DATA      = info.data ? util.inspect(info.data, false, null) : ''
      return `${START} ${TIMESTAMP} [${LEVEL}] ${MESSAGE} ${DATA} ${END}`
    }
  }
}

module.exports = Logger
