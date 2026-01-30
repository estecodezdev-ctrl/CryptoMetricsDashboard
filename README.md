# Trading-View
Este proyecto es una aplicación web diseñada para el monitoreo de activos digitales en tiempo real. Se enfoca en la visualización de datos financieros complejos mediante una interfaz moderna, limpia y altamente profesional, utilizando herramientas de análisis técnico integradas. 

## Características:
* Visualización en Tiempo Real: Integración de widgets de TradingView para seguir la acción del precio al instante.
* Layout Profesional: Uso de cuadrículas organizadas para visualizar múltiples métricas simultáneamente.
* Interactividad: Efectos de escala y transiciones suaves para una experiencia de usuario (UX) fluida.

## Tecnologías Utilizadas:
### Frontend
* **React.js (Vite): Biblioteca principal para la creación de la interfaz.
* **TradingView Widgets: Componentes especializados para la renderización de gráficas profesionales.
* **CSS: Uso de CSS Grid para el posicionamiento de las métricas y Flexbox para la alineación de componentes.

## Estructura del Proyecto
```text
TradingViews     # Carpeta padre de la aplicación
├──FRONTEND      
      ├──TRADINGVIEW
              │   ├── src/                
              │   ├── main.jsx        - Archivo base que inicializa la aplicación de React.
              │   ├── App.jsx         - Archivo principal que contiene la lógica, los componentes de las gráficas y el manejo de estados.
              │   ├── App.css         - Estilos específicos del Dashboard: configuración del Grid, efectos hover y diseño de las tarjetas, tambien contiene un estilo global para toda la aplicacion web
              │  
              │
              │       
              └── package.json        # Dependencias del frontend (React, Vite, Widgets).

```
Cómo ejecutar el Proyecto
1. Instalación: Desde la terminal en la carpeta raíz del proyecto, instalamos las dependencias necesarias con el comando npm install.

2. Ejecutar el proyecto desde la terminal navegando entre las carpetas, desde la carpeta padre TradingViews viajamos hasta la carpeta TRADINGVIEW (cd frontend , cd TRADINGVIEW).
3. Una vez en esta carpeta inicilizamos el proyecto con el comando npm run dev. podremos observar esto:
4.<img width="1919" height="952" alt="image" src="https://github.com/user-attachments/assets/2aa97a7c-5567-4dd7-ba77-ac0cee9ff153" />

5.<img width="1913" height="954" alt="image" src="https://github.com/user-attachments/assets/3fd939c6-157e-4fa7-87f3-5221f3391fcb" />

Ademas, cada tabla es responsiva al momento de pasar el mouse se realizara la animacion de transform ;)
