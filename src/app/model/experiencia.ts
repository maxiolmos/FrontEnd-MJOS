export class Experiencia {
    id? : number;
    experiencia : string;
    empresa : string;
    tareas: string;
    periodo: string;
    img: string;

    constructor(experiencia: string, empresa: string, tareas: string, periodo: string, img: string){
        this.experiencia = experiencia;
        this.empresa = empresa;
        this.tareas = tareas;
        this.periodo = periodo;
        this.img = img;
    }
}
