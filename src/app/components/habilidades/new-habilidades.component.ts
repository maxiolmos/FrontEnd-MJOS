import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { ImageService } from 'src/app/service/image.service';

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

  constructor(
    private habilidadesS: HabilidadesService,
    private router: Router,
    public imageService: ImageService
    ){}



  ngOnInit(): void {
  }

  onCreate(): void{
    this.img = this.imageService.url;
    const habilidades = new Habilidades(this.grupo, this.nombre, this.categoria, this.nivel, this.img);
    this.habilidadesS.save(habilidades).subscribe(
      data => {
        alert("Habilidad creada correctamente");
        this.router.navigate(['']);
      }, err=> {
        alert("No se pudo añadir la habilidad");
        this.router.navigate(['']);
      }
    )
    this.imageService.clearUrl()

  }

  uploadImage($event:any){
    const name = "habilidad_" + this.nombre;
    this.imageService.uploadImage($event, name);
  }

}

