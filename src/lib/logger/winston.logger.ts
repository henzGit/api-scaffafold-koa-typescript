import { support } from 'fluent-logger';
import { createLogger, format, transports, Logger as WinstonLogger } from 'winston';
import * as config from 'config';
import * as httpContext from 'express-http-context';
import { UNDEFINED_ERROR_STATUS } from '../constant/error';

class Logger {
  private readonly winstonLogger: WinstonLogger;

  constructor() {
    const fluentTransport = support.winstonTransport();
    const MESSAGE = Symbol.for("message");
    const jsonFormatter = (logEntry: any) => {
      const base = { timestamp: new Date() };
      const json = Object.assign(base, logEntry);
      logEntry[MESSAGE] = JSON.stringify(json);
      return logEntry;
    };
    this.winstonLogger = createLogger({
      format: format(jsonFormatter)(),
      level: "info",
      transports: [
        new fluentTransport('mytag', {
          host: config.get("App.logger.host"),
          port: config.get("App.logger.port"),
          timeout: config.get("App.logger.timeout")
        }),
        new transports.Console()
      ]
    });
  }

  public info(...args: string[]) {
    this.printLog(args.join(), "info");
  }

  // similar to info(...args)
  public error(...args: any[]) {
    this.printLog(args.join(), "error");
  }

  public errorObject(className: string, methodName: string, err: any) {
    this.error(`[${className} -> ${methodName}] Error[${err.status || UNDEFINED_ERROR_STATUS}] => ${err}`);
  }

  private printLog(message: string, level: any) {
    const reqInfo = httpContext.get("reqInfo");
    this.winstonLogger.log(level, message, reqInfo);
  }
}

export const logger = new Logger();
