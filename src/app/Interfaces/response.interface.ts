export interface ServiceResponse{
    status:boolean,
    message:String,
    dateResponse: String,
    data?:any,
    error?:boolean,
    errorData?:Error
}