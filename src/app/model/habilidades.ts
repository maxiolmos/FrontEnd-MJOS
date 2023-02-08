export class Habilidades {
    id?: number;
    grupo: string;
    nombre: string;
    categoria: string;
    nivel: string;
    img: string;


    constructor(grupo: string, nombre: string, categoria: string, nivel: string, img: string){
        this.grupo = grupo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.nivel = nivel;
        this.img = img;
    }

}
