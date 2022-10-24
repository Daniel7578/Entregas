import { series } from "./data.js";
var seriesTable = document.getElementById("series");
var informacion = series;
var average_temp = mostrar_INFo(informacion);
var parrafo = document.getElementById("average");
parrafo.innerHTML = "Promedio de temporadas: ".concat(average_temp);
function mostrar_INFo(series) {
    var average = 0;
    for (var index = 0; index < series.length; index++) {
        var tbodySeries = document.createElement("tbody");
        var serieActual = series[index];
        tbodySeries.innerHTML = "<tr><td>".concat(index + 1, "</td><td>").concat(serieActual.nombre, "</td><td>").concat(serieActual.canal, "</td><td>").concat(serieActual.num_temporadas, "</td></tr>");
        seriesTable.appendChild(tbodySeries);
        average += serieActual.num_temporadas;
    }
    var resultado = (average / (series.length - 1));
    return Math.round(resultado);
}
