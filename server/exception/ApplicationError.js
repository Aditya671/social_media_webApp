import { StatusCodes } from 'http-status-codes';
import { CustomAPIError } from './handler/CustomAPIError.js';

export class ApplicationError extends CustomAPIError{
   constructor(description,message){
      super(description,message);
      this.statusCode = StatusCodes.BAD_GATEWAY
   }
}