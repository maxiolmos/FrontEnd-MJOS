import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{

  habilidades: Habilidades[]= [];

  constructor(private habilidadesS: HabilidadesService, private tokenService: TokenService){};
    
  isLogged= false;


  ngOnInit(): void {
    this.cargarHabilidades();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    } else{
      this.isLogged= false;
    }
  }

  cargarHabilidades(): void{
    this.habilidadesS.lista().subscribe(
      data=> {
        this.habilidades = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.habilidadesS.delete(id).subscribe(
        data=> {
          this.cargarHabilidades();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }

}