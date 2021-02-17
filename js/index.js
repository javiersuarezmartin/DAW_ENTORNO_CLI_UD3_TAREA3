function dia_semana() {

    var fecha = document.getElementById("fecha").value;

    if (fecha != "") {
        // Obtenemos los valores de la cadena de fecha separados en un array.
        var array_fecha = fecha.split("-");

        // Separamos los valores de la fecha en variables.
        var d = array_fecha[2];
        var m = array_fecha[1];
        var a = array_fecha[0];

        // Calculamos los coeficientes para obtener el día de la semana.

        // Siglo = ( 1700-1799 = +5; 1800-1899 = +3; 1900-1999 = +1; 2000-2099 = 0; 2100-2199 = -2; 2200-2299 = -4 )

        switch (a.substring(0, 2)) {
            case "17":
                var z = 5;
                break;
            case "18":
                var z = 3;
                break;
            case "19":
                var z = 1;
                break;
            case "20":
                var z = 0;
                break;
            case "21":
                var z = -2;
                break;
            case "22":
                var z = -4;
                break;
        };

        // Año = Tomamos los 2 últimos dígitos del año y le sumamos 1/4 del mismo despreciando los decimales.

        var aux_y = parseInt(a.substring(4, 2), 10);
        var y = Math.floor(aux_y / 4) + aux_y; // Uso de Math

        // Comprobamos si es año bisiesto. Si el año es bisiesto y el mes es ENE o FEB (X = -1) en cualquier otro caso (X = 0) 

        if (bisiesto(a) && (parseInt(m, 10) === 1 || parseInt(m, 10) === 2)) {
            var x = -1;
        } else {
            var x = 0;
        };

        // Mes = ( ENE=6; FEB=2; MAR=2; ABR=5; MAY=0; JUN=3; JUL=5; AGO=1; SEP=4; OCT=6; NOV=2; DIC=4 )

        var aux_w = [6, 2, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
        var w = aux_w[(parseInt(m, 10)) - 1];

        // Dia = d

        var v = parseInt(d, 10);

        // ALGORITMO DE CÁLCULO DE DÍA DE SEMANA = (Z+Y+X+W+V) % 7;
        // Resultado = ( LUN=1; MAR=2; MIE=3; JUE=4; VIE=5; SAB=6; DOM=0 )

        var resultado = (z + y + x + w + v) % 7;

        // Imprimimos el resultado.

        array_nombre_dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        alert("El día " + d + " / " + m + " / " + a + " es " + array_nombre_dia[resultado]);
    } else {
        alert("Debe seleccionar una fecha válida");
    };
};

// Función que comprueba si el año es bisiesto.

function bisiesto(a) {
    var bisiesto = false;
    if (a.substring(4, 2) === "00") {
        if (a % 400 === 0) {
            bisiesto = true;
        };
    } else {
        if (a % 4 === 0) {
            bisiesto = true;
        };
    };
    return (bisiesto);
};
