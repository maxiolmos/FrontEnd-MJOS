export class persona{
    id?: number;
    nombreCompleto: string;
    profesion1: string;
    profesion2: string;
    lugarResidencia: string;
    img: string;

    constructor(nombreCompleto: string, profesion1: string, profesion2: string, lugarResidencia: string, img: string){
        this.nombreCompleto = nombreCompleto;
        this.profesion1 = profesion1;
        this.profesion2 = profesion2;
        this.lugarResidencia = lugarResidencia;
        this.img = img;
    }

}