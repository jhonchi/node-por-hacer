
const fs = require('fs');
const lista = require('../db/data.json');
let listadoporhacer = []; //esto es un arreglo

let guardarDB = ()=>{

    let data = JSON.stringify(listadoporhacer);

    fs.writeFile('db/data.json',data,(err)=>{

        if (err) throw new Error('no se pudo grabar en bd',err);

    });

}

const cargarDB = ()=>{
    try {
        listadoporhacer = require('../db/data.json')
    }catch (e) {
        listadoporhacer = [];

    }


}



const crear = (descripcion)=>{

    cargarDB();
// creamos un objeto para incluir dentro del arreglo
    let porhacer = {
        descripcion,
        completado: false
    };
listadoporhacer.push(porhacer);
//listadoporhacer.push(guardarDB());
    guardarDB();

return porhacer;

}

const getlistado = ()=>{
    cargarDB();
    return listadoporhacer;
}

const actualiz = (descripcion, completado = true)=>{
    cargarDB();
    let index = listadoporhacer.findIndex(taria=> taria.descripcion === descripcion)
    if (index >=0){

        listadoporhacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return  false;

    }
}
const borrar = (descripcion)=>{

    cargarDB();
    let nuevolistado = listadoporhacer.filter(taria=> taria.descripcion !== descripcion)
    if (nuevolistado.length === listadoporhacer.length){

        return false;
    }else{
        listadoporhacer=nuevolistado;
        guardarDB();
        return  true;

    }


}


module.exports = {
    crear,
    getlistado,
    actualiz,
    borrar
}
