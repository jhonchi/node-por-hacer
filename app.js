//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porhacer = require('./por-hacer/por-hacer');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion)
        console.log(tarea);
        //(argv.descripcion);
       // console.log('crear por hacer');
        break;
    case 'listar':
       let listado = porhacer.getlistado();
       for(let tar of listado){
           console.log('=====por hacer===='.green);
           console.log(tar.descripcion);
           console.log('estado:',tar.completado);
           console.log('=================='.green);
       }
        break;
    case 'actualizar':
        let actualizado = porhacer.actualiz(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porhacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('el comando no es reconocido');

}