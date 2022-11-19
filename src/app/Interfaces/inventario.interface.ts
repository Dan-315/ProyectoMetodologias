export interface Inventario{
    id:String,
    idModulo:String,
    concepto:String,
    minimo:Number,
    existencias:Number,
    solicitud:Number,
    fechaUpdate:string
}
export interface InventarioInput{
    id?:String,
    idModulo?:String,
    concepto?:String,
    minimo?:Number,
    existencias?:Number,
    solicitud?:Number,
    fechaUpdate?:string
}