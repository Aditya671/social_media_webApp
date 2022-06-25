import { StatusCodes } from 'http-status-codes';
import { CustomAPIError } from './handler/CustomAPIError.js';

export class NotFound extends CustomAPIError{
   constructor(description,message){
      super(description,message);
      this.statusCode = StatusCodes.NOT_FOUND
   }
}