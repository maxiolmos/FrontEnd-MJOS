import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  experiencia: string = '';
  empresa: string = '';
  tareas: string = '';
  periodo: string = '';
  img: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router){ }

  ngOnInit(): void{
  }

  onCreate(): void{
    const experiencia = new Experiencia(this.experiencia, this.empresa, this.tareas, this.periodo, this.img);
    this.sExperiencia.save(experiencia).subscribe(
      data=>{
        alert("Experiencia añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
