import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminInput } from 'src/app/Interfaces/admin.interface';
import { GranjaInput } from 'src/app/Interfaces/granja.interface';
import { Modulo } from 'src/app/Interfaces/modulo.interface';
import { ModuloService } from 'src/app/Services/modulo.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  
  user:AdminInput={};
  farm:GranjaInput={};
  modulos:Modulo[]=[];

  constructor(private router:Router, private moduloServe:ModuloService) { }

  ngOnInit(): void {

    let usr=window.sessionStorage.getItem('user');
    let farm=window.sessionStorage.getItem('farm');

    if(usr && farm && usr!=null && farm!=null){
      this.user=JSON.parse(usr);
      this.farm=JSON.parse(farm);
      this.getModulos();
    }else{
      this.router.navigate(['LogIn'])
    }
  }

  async getModulos(){
    await this.moduloServe.getModulo({idGranja:this.farm.id}).then((res)=>{
      if(res.status){
        if(res.data.length>0){
          console.log(res.data);
          this.modulos=res.data
        }else{
          console.log("No existen granjas para acceder");
        }
      }else{
        console.log(res.error);
      }
    })
  }

  selectModulo(idMod:String){
    let mod = this.getMod(idMod);
    window.sessionStorage.setItem('modulo',JSON.stringify(mod))
    this.router.navigate(['Inventarios/'+mod?.id])
  }

  deleteModulo(inv:String){
  }

  getMod(id:String):Modulo|undefined{
    for(let mod of this.modulos){
      if(mod.id===id){
        return mod;
      }
    }
    return undefined
  }

}
