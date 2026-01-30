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
4. <img width="1902" height="947" alt="image" src="https://github.com/user-attachments/assets/04eb1836-a924-459b-b0dc-c6456bd885b5" />
5. <img width="1896" height="943" alt="image" src="https://github.com/user-attachments/assets/ff22c6c8-78ce-4207-97b4-bd30b3eb7847" />
Ademas, cada tabla es responsiva al momento de pasar el mouse se realizara la animacion de transform ;)
