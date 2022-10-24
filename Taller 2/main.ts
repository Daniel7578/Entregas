import { series } from "./data.js";
import { Serie } from "./Serie.js";
let seriesTable : HTMLElement = document.getElementById("series")!;
let cardInfo : HTMLElement = document.getElementById("card_info")!;
let parrafo : HTMLElement = document.getElementById("average")!;

let informacion = series;
let average_temp : number = mostrar_INFo(informacion);
parrafo.innerHTML = `Promedio de temporadas: ${average_temp}`
function mostrar_INFo(series : Serie[]): number{
    
    let average: number = 0;
    for (let index = 0; index < series.length; index ++){
        let tbodySeries = document.createElement("tbody");
        let serieActual = series[index];
        tbodySeries.innerHTML = `<tr><td>${serieActual.id}</td><td id = "${serieActual.id}"> <a>${serieActual.nombre}</a> </td><td>${serieActual.canal}</td><td>${serieActual.num_temporadas}</td></tr>`
        seriesTable.appendChild(tbodySeries);
        average += serieActual.num_temporadas;


        document.getElementById(`${series[index].id}`)!.onclick = function() {
            let infocard: HTMLElement = document.getElementById("card_info")!;
            let imagenS: HTMLElement = document.getElementById("imgcard")!;
            let source:string = series[index].imagen;
            imagenS.setAttribute('src',source)
            infocard.removeChild(document.getElementById("body")!);
            let divtexto = document.createElement("div");
          divtexto.innerHTML = `<p class="card-text" id="text">${series[index].descripcion}</p>
          <a href="${series[index].linkPag}">${series[index].linkPag}</a>`;
          divtexto.setAttribute('class', 'card-body');
          divtexto.setAttribute('id','body');
          infocard.appendChild(divtexto);
      
          };
        
    }   
    let resultado: number = (average / (series.length -1) )
   
    return Math.round(resultado);
}


