# Detector de Hardware del PC (Node.js)

Este proyecto permite obtener información básica del sistema, incluyendo:

- Sistema operativo  
- Procesador  
- Memoria RAM  
- GPU (modelo detectado)

Está desarrollado en **Node.js** y utiliza comandos del sistema para detectar la GPU.

---

## Requisitos

Antes de ejecutar el programa, asegurate de tener instalado:

- **Node.js v16 o superior**
- Sistema operativo **Windows**  
  > Actualmente la detección de GPU utiliza `wmic`, disponible en Windows.

Podés verificar tu versión de Node con:

```bash
node -v
