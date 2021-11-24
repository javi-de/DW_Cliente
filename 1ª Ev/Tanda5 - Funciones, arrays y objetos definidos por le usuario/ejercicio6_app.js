class Producto_alimenticio{
    constructor(codigo, nombre, precio){
        this.codigo= codigo;
        this.nombre= nombre;
        this.precio= precio;
    }

    imprimeDatos(){
        console.log("Codigo: " + this.codigo);
        console.log("Nombre: " + this.nombre);
        console.log("Precio: " + this.precio);
        console.log("-----------------------");
    }

}

arrProductos= [
    objTomate= new Producto_alimenticio("001", "Tomate", 0.25),
    objCebolla= new Producto_alimenticio("002", "Cebolla", 0.10),
    objLechuga= new Producto_alimenticio("003", "Lechuga", 1)
]

for(let cont= 0; cont< arrProductos.length; cont++){
    arrProductos[cont].imprimeDatos();
}