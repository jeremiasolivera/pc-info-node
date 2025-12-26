import {exec} from "node:child_process";

export async function detectorGPU(os) {
    let path;
    
    switch (os) {
        case 'win32':
            path = "wmic path win32_VideoController get name"
            break;
        case 'linux':
            path = "lspci | grep -i vga"
            break;
        case 'darwin':
            path = "system_profiler SPDisplaysDataType"
            break;
        default:
            console.error("No tenemos soporte para tu sistema operativo")
            break;
    }
    
    return new Promise((resolve, reject)=>{
        exec(
            path,
            (err,stdout)=>{
                if (err) return reject(err);
                resolve(stdout.slice(4).trim())
            }
        )
    })

    

}
