import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuloInput } from 'src/app/Interfaces/modulo.interface';
import { AdminInput } from 'src/app/Interfaces/admin.interface';
import { GranjaInput } from 'src/app/Interfaces/granja.interface';
import { InventarioService } from 'src/app/Services/inventario.service';
import { Inventario } from 'src/app/Interfaces/inventario.interface';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {

  
  user:AdminInput={};
  farm:GranjaInput={};
  modulo:ModuloInput={};
  inventarios:Inventario[]=[];

  constructor(private router:Router, private invenServ:InventarioService) { }

  ngOnInit(): void {

    let usr=window.sessionStorage.getItem('user');
    let farm=window.sessionStorage.getItem('farm');
    let mod=window.sessionStorage.getItem('modulo');

    if(usr && farm && mod && usr!=null && mod!=null){
      this.user=JSON.parse(usr);
      this.farm=JSON.parse(farm);
      this.modulo=JSON.parse(mod);

      console.log(this.modulo);

      this.getInventarios();
      
    }else{
      this.router.navigate(['LogIn'])
    }
  }

  async getInventarios(){
    console.log(this.modulo.id);
    
    await this.invenServ.getInventario({idModulo:this.modulo.id}).then((res)=>{
      if(res.status){
        if(res.data.length>0){
          console.log(res.data);
          this.inventarios=res.data
        }else{
          console.log("No existen granjas para acceder");
        }
      }else{
        console.log(res.error);
      }
    })
  }

}
