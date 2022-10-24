import { series } from "./data.js";
import { Serie } from "./Serie.js";
let seriesTable : HTMLElement = document.getElementById("series")!;
let informacion = series;
let average_temp : number = mostrar_INFo(informacion);
let parrafo : HTMLElement = document.getElementById("average")!;
parrafo.innerHTML = `Promedio de temporadas: ${average_temp}`
function mostrar_INFo(series : Serie[]): number{
    
    let average: number = 0;
    for (let index = 0; index < series.length; index ++){
        let tbodySeries = document.createElement("tbody");
        let serieActual = series[index];
        tbodySeries.innerHTML = `<tr><td>${index+1}</td><td>${serieActual.nombre}</td><td>${serieActual.canal}</td><td>${serieActual.num_temporadas}</td></tr>`
        seriesTable.appendChild(tbodySeries);
        average += serieActual.num_temporadas;
        
    }
    
    let resultado: number = (average / (series.length -1) )
    return Math.round(resultado);


}
