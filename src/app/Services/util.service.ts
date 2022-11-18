import { Injectable } from '@angular/core';
import moment from 'moment-timezone';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  tz=environment.timeZone||'America/Mexico_City'

  constructor() {
    moment.locale('es') 
  }
  
  getFecha(fromat:boolean,date?:string){
    let aux=date?moment(new Date(date)).tz(this.tz):moment().tz(this.tz)
    return fromat? 
        aux.format("DD/MMMM/YYYY - HH:mm:ss")  :  aux.toString()
  }
  getHora(time?:string){ 
      let aux = time?moment(new Date("Jan 01 2000 "+time),):moment.utc()
      return aux.tz(this.tz).format("HH:mm:ss")
  }
}
