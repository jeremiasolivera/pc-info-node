import fs from "node:fs";
import os from "node:os";
import { detectorGPU } from "./gpu-detector.js";

const OS = os.version();
const CPU = os.cpus()[0]["model"];
const RAM = `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`;

async function getSystemInfo() {
    let GPU;

    try {
        GPU = await detectorGPU(os.platform());
    } catch (err) {
        GPU = "Sin GPU";
    }

    return GPU
}

const GPU = await getSystemInfo()

const infoPC = `Operating System: ${OS}, 
Memory: ${RAM}, 
CPU: ${CPU}, 
GPU: ${GPU}`

fs.writeFile('pc-info.txt', infoPC, error=>{
    if(error){
        return console.error(error)
    }

    return console.log(`La información de su PC se guardó en el fichero 'pc-info.txt'`)
    
})