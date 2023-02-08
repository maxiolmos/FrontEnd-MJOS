import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit{
  
  habilidades: Habilidades = null;

  constructor (private habilidadesS: HabilidadesService, private activatedRouter: ActivatedRoute, private router: Router){};
  
  
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
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
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesS.update(id, this.habilidades).subscribe(
      data=> {
        this.router.navigate(['']);
      }, err=> {
        alert("Error al modificar la habilidad");
        this.router.navigate(['']);
      }
    )
  }

}
