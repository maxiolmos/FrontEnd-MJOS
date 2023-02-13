import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})

export class EditHabilidadesComponent implements OnInit{
  
  habilidades: Habilidades = null;

  constructor (
    private habilidadesS: HabilidadesService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    public imageService: ImageService
    ) {};
  
  
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.habilidadesS.detail(id).subscribe(
      data=>{
        this.habilidades = data;
      }, err=>{
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    ) 
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.imageService.url != "") {
      this.habilidades.img = this.imageService.url;
    }
    this.habilidadesS.update(id, this.habilidades).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=> {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
    this.imageService.clearUrl()
  }

  uploadImage($event:any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name= "habilidades_" + id;
    this.imageService.uploadImage($event, name);
  }

}
