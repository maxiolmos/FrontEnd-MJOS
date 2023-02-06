import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/service/educacion.service';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})

export class NewEducacionComponent implements OnInit{
  
 titulo: string;
 institucion: string;
 promedio: string;
 periodo: string;
 img: string;


  constructor(private educacionS: EducacionService, private router: Router){}



  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.titulo, this.institucion, this.promedio, this.periodo, this.img);
    this.educacionS.save(educacion).subscribe(
      data=> {
        alert("Educación añadida correctamente");
        this.router.navigate(['']);
      }, err=> {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
