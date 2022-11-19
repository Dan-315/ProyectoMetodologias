import { Injectable } from '@angular/core';
import { ServiceResponse } from '../Interfaces/response.interface'; 
import { environment } from '../../environments/environment';
import { UtilService } from './util.service';
import querys from './http/http.Constants'
import  axios  from 'axios';
import { Modulo, ModuloInput } from '../Interfaces/modulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  host=environment.host||"http://localhost:3000/graphql"

  constructor(private utilServ:UtilService) {}

  async getModulo(modulo:ModuloInput){
    return await axios.post(this.host, {
      query: querys.Modulo.getModulo,
      variables: {modulo}
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      let data:Modulo[]=res.data.data.getModulo
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
