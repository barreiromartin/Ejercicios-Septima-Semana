function item(nombre, rango_min, rango_max) {

    var premio = function (nombre, rango_min, rango_max) {
        this.nombre = nombre;
        this.rango_min = rango_min;
        this.rango_max = rango_max;


        this.getNombre = function () {
            return this.nombre;
        }

        

        this.generadorPrecio = function () {
            this.precio = Math.floor((Math.random() * (this.rango_max - this.rango_min + 1)) + this.rango_min);
        }

        this.getRangoMin = function () {
            return this.rango_min;
        }

        this.getRangoMax = function () {
            return this.rango_max;
        }

        this.getPrecio = function () {
            return this.precio
        }
    }

    var item = new premio(nombre, rango_min, rango_max);

    return item;
}