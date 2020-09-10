

const opt = {
     descripcion:{
         demand: true,
         alias: 'd'
     }
}
const opt2 = {
    descripcion:{
        demand: true,
        alias: 'd'
    },
    completado:{
        alias: 'c',
        default: true
    }
}



const argv = require('yargs')
    .command('crear','crear un por hacer',opt)
    .command('actualizar', 'actualizar nueva tarea por hacer',opt2)
    .command('borrar','borrar una tarea',opt)
    .help()
    .argv;

module.exports={
argv
}