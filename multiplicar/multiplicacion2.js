const fs = require('fs');

let printConsole = (base , limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        let res = `${base} x ${i} = ${base * i}`;
        res = `${res} \n`
        console.log(res);
    }    
}

let crearArchivo = (base) => {
    return new Promise((resolve , reject) => {
        //let base = 7;

        for (let i = 1; i <= 10; i++) {
        let res = `${base} x ${i} = ${base * i}`;
        res = `${res} \n`

        fs.appendFileSync(`Tabla del ${base}.txt` , `${i}.- ${res}`  , (error) => {

        if(error){
            reject(error);
        }else{
            resolve(`Tabla del ${base}.txt`)
        }

        console.log('el archivo ejemplo.txt ha sido creado con exito');

    });
}

    });

}

module.exports = {
    crearArchivo,
    printConsole
}


