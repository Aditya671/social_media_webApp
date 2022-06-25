import { CustomAPIError } from "./CustomAPIError.js";
import { StatusCodes } from 'http-status-codes';


export class ServerError extends CustomAPIError{
   constructor(message,description){
      super(message,description);
      this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR
   }
}