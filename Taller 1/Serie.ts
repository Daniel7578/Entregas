export class Serie {
    public id: number;
    public nombre: string;
    public canal: string;
    public num_temporadas: number;
    public descripcion: string;
    public linkPag: string;
    public imagen: string;
    constructor(id: number, nombre: string, canal: string, num_temporadas: number, descripcion: string, linkPag: string,imagen : string){
        this.id= id;
        this.nombre = nombre;
        this.canal = canal;
        this.num_temporadas = num_temporadas;
        this.descripcion = descripcion;
        this.linkPag = linkPag;
        this.imagen = imagen;
    }
}
