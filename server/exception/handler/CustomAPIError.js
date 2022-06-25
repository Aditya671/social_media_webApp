export class CustomAPIError extends Error{
   constructor(errorCode,description){
      super(description,errorCode,message);
      this.description = description;
      this.statusCode = errorCode;
   }
}