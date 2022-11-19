import { Injectable } from '@angular/core';
import { Granja, GranjaInput } from '../Interfaces/granja.interface';
import { ServiceResponse } from '../Interfaces/response.interface'; 
import { environment } from '../../environments/environment';
import { UtilService } from './util.service';
import querys from './http/http.Constants'
import  axios  from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GranjaService {
  
  host=environment.host||"http://localhost:3000/graphql"

  constructor(private utilServ:UtilService) {}

  async getGranja(farm:GranjaInput){
    return await axios.post(this.host, {
      query: querys.Granja.getGranja,
      variables: {farm}
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      let data:Granja[]=res.data.data.getGranja
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
