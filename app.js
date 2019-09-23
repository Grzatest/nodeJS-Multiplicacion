//este programa sirve para aprender a multiplicar
const { crearArchivo  , printConsole} = require ('./multiplicar/multiplicacion2');
const argumentos = require('yargs')
    .command('listar' , 'imprime en consola la tabla de multiplicar',{
        base : {
            demand : true,
            alias: 'b'
        },
        limite : {
            alias : 'l', 
            default : 10
        }
    })
    .command('crearArchivo' , 'crea un archivo',{
        base : {
            demand : true,
            alias : 'b'
        }
    })

    .help()
    .argv;

let base = 19; 
let comando  = argumentos._[0];

switch (comando) {
    case 'listar':
        printConsole(argumentos.base , argumentos.limite);
        break;

    case 'crearArchivo':
        crearArchivo(argumentos.base , argumentos.limite);
        break;

    default:
        console.log('comando no reconocido');
        break;
}

// crearArchivo(base).then(respuesta => console.log(`Archivo creado : ${respuesta}`))
// .catch(error => console.log(error));
