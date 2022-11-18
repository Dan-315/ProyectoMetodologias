import { Injectable } from '@angular/core';
import { GranjaInput } from '../Interfaces/granja.interface';
import { ServiceResponse } from '../Interfaces/response.interface'; 
import { environment } from '../../environments/environment';
import { UtilService } from './util.service';
import querys from './http/http.Constants'
import  axios  from 'axios';
import { Admin } from '../Interfaces/admin.interface';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  host=environment.host||"http://localhost:3000/graphql"

  constructor(private utilServ:UtilService) {}

  async getAdmin(admin:GranjaInput){
    return await axios.post(this.host, {
      query: querys.Admin.getAdmin,
      variables: {admin}
    },{
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res)=>{
      let data:Admin=res.data.data.getAdmin
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
