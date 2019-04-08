// import * as async from 'async';
// import { start } from 'repl';
import * as fs from 'fs';
const exec = require('child_process').exec;

async function run(){

    await exec('npm init -y') && console.log('npm init -y Done!'),
    await exec('touch tsconfig.json')  && console.log('touch tsconfig.json Done!'),
    await exec('echo \'node_modules\n.env\' > .gitignore')  && console.log('.gitignore Done!'),

    await exec('npm install ts-node typescript @types/node') && console.log('npm install ts-node typescript @types/node Done!'),
    // await exec('sudo npm install javascript-build-essentials') && console.log('sudo npm install build-essential Done!') ,
    await exec('npm install') && console.log('npm install Done!')
    
    }; 

run();

// const fs = require('fs');


const tsconfig = { 
    
            "compilerOptions": { 
            "target": "es2017",
            "module": "commonjs",
            "alwaysStrict": true,
            "noUnusedLocals": true,
            "noUnusedParameters": true,
            "noImplicitAny": true,
            "strictNullChecks": true,
            "preserveConstEnums": true,
            "noFallthroughCasesInSwitch":true,
            "noImplicitThis":true,
            "noImplicitReturns":true,
            "sourceMap": true,
            "noEmitOnError": true,
            "outDir": "./build"
        },
        "compileOnSave": true, 
        "exclude": [
            "node_modules"
        ]
    };
const tsconfigjson = JSON.stringify(tsconfig);

// write to a new file named tsconfig.json
fs.writeFile('tsconfig.json', tsconfigjson, (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('tsconfig saved!');
});
