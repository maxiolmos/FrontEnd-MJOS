import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/experiencia.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})

export class EditExperienciaComponent implements OnInit{

  experiencia: Experiencia = null;


  constructor(
    private sExperiencia: SExperienciaService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService
    ){}
  

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data=>{
        this.experiencia = data;
      }, err=>{
        alert("Error al modificar la experiencia")
        this.router.navigate(['']);
      }
    ) 
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.imageService.url != "") {
      this.experiencia.img = this.imageService.url;
    }
    this.sExperiencia.update(id,this.experiencia).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=> {
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
    this.imageService.clearUrl()
  }

  uploadImage($event:any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name= "experiencia_" + id;
    this.imageService.uploadImage($event, name);
  }

}
