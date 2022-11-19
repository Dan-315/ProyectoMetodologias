import { Injectable } from '@angular/core';
import { ServiceResponse } from '../Interfaces/response.interface'; 
import { environment } from '../../environments/environment';
import { UtilService } from './util.service';
import querys from './http/http.Constants'
import  axios  from 'axios';
import { Inventario, InventarioInput } from '../Interfaces/inventario.interface';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  host=environment.host||"http://localhost:3000/graphql"

  constructor(private utilServ:UtilService) {}

  async getInventario(inventario:InventarioInput){
    return await axios.post(this.host, {
      query: querys.Inventario.getInven,
      variables: {inventario}
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      let data:Inventario[]=res.data.data.getInventario
      let respons:ServiceResponse={
        status:true,
        message:"OK",
        dateResponse:this.utilServ.getFecha(true),
        data
      }
      return respons;
    }).catch((error:Error)=>{
      let respons:ServiceResponse={
        status:false,
        message:error.message,
        dateResponse:this.utilServ.getFecha(true),
        error:true,
        errorData:error
      }
      return respons;
    })
  }
}
