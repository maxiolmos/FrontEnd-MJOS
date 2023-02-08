import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})

export class NewHabilidadesComponent implements OnInit{
  
  grupo: string;
  nombre: string;
  categoria: string;
  nivel: string;
  img: string;

  constructor(private habilidadesS: HabilidadesService, private router: Router){}



  ngOnInit(): void {
  }

  onCreate(): void{
    const habilidades = new Habilidades(this.grupo, this.nombre, this.categoria, this.nivel, this.img);
    this.habilidadesS.save(habilidades).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        this.router.navigate(['']);
      }, err=> {
        alert("Falló al añadir la habilidad");
        this.router.navigate(['']);
      }
    )

  }

}

