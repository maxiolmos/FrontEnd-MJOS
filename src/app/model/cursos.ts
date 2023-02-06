export class Cursos {
    id?: number;
    curso: string;
    institucionCurso: string;
    fechaFinalizacion: string;
    estado: string;
    img: string;

    constructor(curso: string, institucionCurso: string, fechaFinalizacion: string, estado: string, img:string){
        this.curso = curso;
        this.institucionCurso = institucionCurso;
        this.fechaFinalizacion = fechaFinalizacion;
        this.estado = estado;
        this.img = img;
    }

}
