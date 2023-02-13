import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { CursosService } from 'src/app/service/cursos.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-cursos',
  templateUrl: './edit-cursos.component.html',
  styleUrls: ['./edit-cursos.component.css']
})

export class EditCursosComponent implements OnInit{

  cursos: Cursos = null;

  constructor(
    private cursosS: CursosService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public imageService: ImageService,
    ) {}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.cursosS.detail(id).subscribe(
      data=>{
        this.cursos = data;
      }, err=>{
        alert("Error al modificar el curso");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id']; 
    if(this.imageService.url != "") {
      this.cursos.img = this.imageService.url;
    }
    this.cursosS.update(id, this.cursos).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=>{
        alert("Error al modificar el curso");
        this.router.navigate(['']);
      }
    )
    this.imageService.clearUrl()
  }

  uploadImage($event:any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name= "cursos_" + id;
    this.imageService.uploadImage($event, name);
  }


}
