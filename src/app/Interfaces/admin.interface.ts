export interface Admin{
    id:String,
    idGranja:String,
    nombre:String,
    apellido:String,
    usuario:String
}

export interface AdminInput{
    id?:String,
    idGranja?:String,
    nombre?:String,
    apellido?:String,
    usuario?:String,
    password?:String
}