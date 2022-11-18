import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminInput } from 'src/app/Interfaces/admin.interface';
import { Granja } from 'src/app/Interfaces/granja.interface';
import { AdminService } from 'src/app/Services/admin.service';
import { GranjaService } from 'src/app/Services/granja.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  granjas:Granja[]=[];
  farmId:String="";
  user:String="";
  pasword:String="";
  remeber:Boolean=false;

  constructor(private router:Router,private farmService:GranjaService, private adminService:AdminService) { }

  async ngOnInit(){
    let usr=window.localStorage.getItem('user');
    if(usr){
      window.sessionStorage.setItem('user',usr)
      this.router.navigate(['Inicio'])
    }else{
      window.sessionStorage.removeItem('user')
    }
    
    await this.farmService.getGranja({}).then((res)=>{
      console.log(res);
      if(res.status){
        if(res.data.length>0){
          this.granjas=res.data;
          this.farmId=this.granjas[0].id;
        }else{
          console.log("No existen granjas para acceder");
        }
      }else{
        console.log(res.error);
      }
    })
  }

  async login(){
    if(this.user!="" && this.pasword!="" && this.farmId!=""){
      console.log(this.user,this.pasword,this.farmId,this.remeber);
      console.log();
      let user:AdminInput={
        usuario:this.user,
        password:this.pasword,
        idGranja:this.farmId
      }
      await this.adminService.getAdmin(user).then((res)=>{
        console.log(res);
        if(res.status){
          if(res.data.length>0){
            if(this.remeber)
              window.localStorage.setItem('user',JSON.stringify(res.data[0]));
            window.sessionStorage.setItem('user',JSON.stringify(res.data[0]));
            this.router.navigate(['Inicio'])
          }else{
            console.log("Usuario y/o contraseña incorrectos");
          }
        }else{
          console.log(res.error);
        }
      })
    }else{
      console.log("COMPLETE LOS CAMPOS");
    }
  }

}
