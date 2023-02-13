import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})

export class EditEducacionComponent implements OnInit{
  
  educacion: Educacion = null;

  constructor(
    private educacionS: EducacionService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public imageService: ImageService,
    ) {}
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionS.detail(id).subscribe(
      data=>{
        this.educacion = data;
      }, err=>{
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.imageService.url != "") {
    this.educacion.img = this.imageService.url;
    }
    this.educacionS.update(id, this.educacion).subscribe(
      data=> {  
        this.router.navigate(['']);
      }, err=>{
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    )
  }

    uploadImage($event:any) {
      const id = this.activatedRoute.snapshot.params['id'];
      const name= "educacion_" + id;
      this.imageService.uploadImage($event, name);
  }


}
