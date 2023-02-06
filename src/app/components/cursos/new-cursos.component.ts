import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';


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

  constructor(private cursosS: CursosService, private router: Router){}

  
  ngOnInit(): void {
  }

  onCreate(): void{
    const cursos = new Cursos(this.curso, this.institucionCurso, this.fechaFinalizacion, this.estado, this.img);
    this.cursosS.save(cursos).subscribe(
      data=> {
        alert("Curso añadido correctamente");
        this.router.navigate(['']);
      }, err=> {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
