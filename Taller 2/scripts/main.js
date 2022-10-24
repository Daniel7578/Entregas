import { series } from "./data.js";
var seriesTable = document.getElementById("series");
var cardInfo = document.getElementById("card_info");
var parrafo = document.getElementById("average");
var informacion = series;
var average_temp = mostrar_INFo(informacion);
parrafo.innerHTML = "Promedio de temporadas: ".concat(average_temp);
function mostrar_INFo(series) {
    var average = 0;
    var _loop_1 = function (index) {
        var tbodySeries = document.createElement("tbody");
        var serieActual = series[index];
        tbodySeries.innerHTML = "<tr><td>".concat(serieActual.id, "</td><td id = \"").concat(serieActual.id, "\"> <a>").concat(serieActual.nombre, "</a> </td><td>").concat(serieActual.canal, "</td><td>").concat(serieActual.num_temporadas, "</td></tr>");
        seriesTable.appendChild(tbodySeries);
        average += serieActual.num_temporadas;
        document.getElementById("".concat(series[index].id)).onclick = function () {
            var infocard = document.getElementById("card_info");
            var imagenS = document.getElementById("imgcard");
            var source = series[index].imagen;
            imagenS.setAttribute('src', source);
            infocard.removeChild(document.getElementById("body"));
            var divtexto = document.createElement("div");
            divtexto.innerHTML = "<p class=\"card-text\" id=\"text\">".concat(series[index].descripcion, "</p>\n          <a href=\"").concat(series[index].linkPag, "\">").concat(series[index].linkPag, "</a>");
            divtexto.setAttribute('class', 'card-body');
            divtexto.setAttribute('id', 'body');
            infocard.appendChild(divtexto);
        };
    };
    for (var index = 0; index < series.length; index++) {
        _loop_1(index);
    }
    var resultado = (average / (series.length - 1));
    return Math.round(resultado);
}
