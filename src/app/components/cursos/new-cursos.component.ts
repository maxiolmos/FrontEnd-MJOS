import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-new-cursos',
  templateUrl: './new-cursos.component.html',
  styleUrls: ['./new-cursos.component.css']
})

export class NewCursosComponent implements OnInit{
  
  curso: string;
  institucionCurso: string;
  fechaFinalizacion: string;
  estado: string;
  img: string;

  constructor(
    private cursosS: CursosService, 
    private router: Router,
    public imageService: ImageService
    ) {}

  
  ngOnInit(): void {
  }

  onCreate(): void{
    this.img = this.imageService.url;
    const cursos = new Cursos(this.curso, this.institucionCurso, this.fechaFinalizacion, this.estado, this.img);
    this.cursosS.save(cursos).subscribe(
      data=> {
        alert("Curso añadido correctamente");
        this.router.navigate(['']);
      }, err=> {
        alert("No se pudo añadir el curso");
        this.router.navigate(['']);
      }
    )
    this.imageService.clearUrl()
  }

  uploadImage($event:any){
    const name = "curso_" + this.curso;
    this.imageService.uploadImage($event, name);
  }
}
