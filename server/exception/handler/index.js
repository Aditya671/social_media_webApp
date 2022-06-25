import { ServerError } from "./ServerError"


export const errorhandler = (err,req,res,next) => {
   const defaultError = new ServerError("There is an Error","Occured due to Some Reason");

   if (err.name === "ValidationError"){
      defaultError.statusCode = StatusCodes.BAD_REQUEST;
      defaultError.msg = Object.values(err.errors).map(item => {
         return {
            fieldName:item.path,
            message:item.message
         }
      })
   }

   if (err.code && err.code === 11000){
      defaultError.message = `${Object.keys(err.keyValue)} has to be unique`
   }

   res.status(defaultError.statusCode).send({message:defaultError.message})
}