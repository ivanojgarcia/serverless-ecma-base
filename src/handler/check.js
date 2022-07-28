import Logger from '../utils/logger';
import { success, error } from '../provider/httpResponse';
const logger = new Logger();

export const handler = async (event) => {
  logger.info("Hello world");
  try {
    throw new Error("Hola")
    return success(event);
  } catch (err) {
    logger.error(err.message);
    // return {
    //   statusCode: 500,
    //   body: JSON.stringify({
    //     statusCode: 500,
    //     data: err.message
    //   },
    //   null,
    //   2),
    // };
    return error(err.message, 500);
  }
};
