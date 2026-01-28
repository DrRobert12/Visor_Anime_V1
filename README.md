# 🎌 AnimeFree Mobile
> *Tu portal de anime definitivo. Nativo, fluido y sin interrupciones.*

<div align="center">

[![Flutter](https://img.shields.io/badge/Flutter-3.0%2B-02569B?logo=flutter&style=for-the-badge)](https://flutter.dev)
[![Python](https://img.shields.io/badge/Backend-Python%20Flask-3776AB?logo=python&style=for-the-badge)](https://python.org)
[![Android](https://img.shields.io/badge/Platform-Android-3DDC84?logo=android&style=for-the-badge)](https://www.android.com)
[![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)

![GitHub release (latest by date)](https://img.shields.io/github/v/release/DrRobert12/AnimeFree?style=flat-square&color=brightgreen)
![GitHub all releases](https://img.shields.io/github/downloads/DrRobert12/AnimeFree/total?style=flat-square&color=blue)
![GitHub stars](https://img.shields.io/github/stars/DrRobert12/AnimeFree?style=flat-square&color=yellow)

</div>

---

## 🚀 ¿Qué es AnimeFree?

AnimeFree no es solo otro visor; es una **experiencia diseñada para amantes del anime** que valoran la calidad y la velocidad. Olvídate de las webs llenas de publicidad invasiva y reproductores lentos.

Esta aplicación nativa combina la potencia de **Flutter** en el frontend con la versatilidad de **Python** en el backend para ofrecerte streaming directo, gestión de historial y una interfaz oscura inmersiva ("Dark Mode") que cuida tus ojos durante esas maratones nocturnas.

### 🎯 Problema que Resuelve
- ❌ Sitios web lentos con anuncios invasivos
- ❌ Reproductores que se traban constantemente
- ❌ Pérdida del progreso de episodios vistos
- ❌ Interfaces anticuadas y poco intuitivas

### ✅ Solución AnimeFree
- ✨ App nativa Android ultra-rápida
- ✨ Reproductor optimizado con controles gestuales
- ✨ Historial persistente de episodios
- ✨ UI moderna inspirada en plataformas premium

---

## ✨ Características Premium

### 🎨 **Experiencia de Usuario**
- **Zero Ads Experience**: Navegación 100% limpia sin pop-ups molestos
- **Dark Mode Nativo**: Interfaz oscura que reduce la fatiga visual
- **Animaciones Fluidas**: 60fps constantes gracias al motor Skia de Flutter
- **Diseño Material**: Componentes modernos y familiares para usuarios Android

### 🎥 **Reproductor Avanzado**
- **Modo Landscape Forzado**: Inmersión total en pantalla completa
- **Controles Gestuales**: Ajusta brillo y volumen con deslizamientos
- **Multi-Servidor**: Cambio automático si un servidor falla
- **Sin Bloqueos**: Controles inteligentes que no interfieren con el video

### 📊 **Gestión Inteligente**
- **Historial Automático**: Marca episodios vistos con un toque
- **Búsqueda Instantánea**: Encuentra cualquier anime en segundos
- **Persistencia Local**: Tus datos se guardan en el dispositivo (SharedPreferences)
- **Indicadores Visuales**: Checkmarks (✓) para episodios completados

---

## 🧰 Stack Tecnológico

### **Frontend (Mobile)**
- **Framework**: Flutter 3.x
- **Lenguaje**: Dart
- **State Management**: Provider
- **HTTP Client**: http package
- **Storage**: shared_preferences
- **Video Player**: WebView con controles personalizados

### **Backend (API)**
- **Framework**: Flask (Python)
- **Web Scraping**: BeautifulSoup4 / animeflv library
- **Server**: Gunicorn (WSGI)
- **Hosting**: Render.com (Serverless)
- **CORS**: flask-cors

### **DevOps & CI/CD**
- **Version Control**: Git + GitHub
- **Automation**: GitHub Actions (Keep-Alive Cron)
- **Build**: Flutter Build APK
- **Distribution**: GitHub Releases

---

## 🏗️ Arquitectura del Sistema

```mermaid
graph TB
    subgraph "Cliente Android"
        A[📱 Flutter App<br/>AnimeFree Mobile]
        A1[Screens<br/>Home/Details/Player]
        A2[Services<br/>API Client & Storage]
        A3[Widgets<br/>Cards & Components]
        
        A --> A1
        A --> A2
        A --> A3
    end
    
    subgraph "Cloud Infrastructure"
        B[🌐 Render.com<br/>Web Service]
        C[⚙️ Gunicorn<br/>WSGI Server]
        D[🐍 Flask API<br/>wsgi.py]
        
        B --> C
        C --> D
    end
    
    subgraph "Backend Logic"
        E["📡 API Endpoints<br/>api.py"]
        E1["/api/buscar"]
        E2["/api/episodios"]
        E3["/api/enlaces"]
        
        D --> E
        E --> E1
        E --> E2
        E --> E3
    end
    
    subgraph "Data Source"
        F[🎬 AnimeFLV<br/>Web Scraping]
        F1[Búsqueda de Anime]
        F2[Lista de Episodios]
        F3[Enlaces de Streaming]
        
        E1 --> F1
        E2 --> F2
        E3 --> F3
        F1 --> F
        F2 --> F
        F3 --> F
    end
    
    subgraph "Automation"
        G[⏰ GitHub Actions<br/>Keep-Alive Cron]
        G --> B
    end
    
    subgraph "Local Storage"
        H[💾 SharedPreferences<br/>Episodios Vistos]
        A2 -.-> H
    end
    
    A2 -->|"HTTP REST"| D
    
    style A fill:#02569B,stroke:#fff,color:#fff
    style D fill:#3776AB,stroke:#fff,color:#fff
    style B fill:#46E3B7,stroke:#333,color:#333
    style F fill:#FF6B6B,stroke:#fff,color:#fff
    style G fill:#2088FF,stroke:#fff,color:#fff
    style H fill:#FFA500,stroke:#fff,color:#fff
```

### 🔄 Flujo de Datos
1. **Usuario busca anime** → App Flutter envía petición HTTP
2. **Backend procesa** → Flask API hace scraping de AnimeFLV
3. **Datos retornan** → JSON con resultados/episodios/enlaces
4. **App renderiza** → UI actualizada con información
5. **Reproducción** → WebView carga stream desde servidor externo
6. **Persistencia** → Estado guardado localmente en el dispositivo

---

## 📲 Descarga e Instalación

### Opción 1: APK Precompilado (Recomendado)
1. Ve a la pestaña **[Releases](../../releases)**
2. Descarga el archivo `app-release.apk` de la última versión
3. Transfiérelo a tu dispositivo Android
4. Habilita "Instalar desde fuentes desconocidas" en Configuración
5. Abre el APK y sigue las instrucciones

### Opción 2: Compilar desde Código
```bash
# Clona el repositorio
git clone https://github.com/DrRobert12/Visor_Anime_V1
cd AnimeFree/mobile

# Instala dependencias
flutter pub get

# Compila el APK
flutter build apk --release

# El APK estará en: build/app/outputs/flutter-apk/app-release.apk
```

---

## 🔮 Roadmap

### v2.0 (Próximamente)
- [ ] 🎯 Soporte para Chromecast
- [ ] ☁️ Sincronización en la nube (Firebase)
- [ ] 🔔 Notificaciones push de nuevos episodios
- [ ] 🌙 Modo offline (descarga de episodios)

### v2.5 (Futuro)
- [ ] 📱 Versión iOS (SwiftUI)
- [ ] 🎨 Temas personalizables
- [ ] 🗣️ Subtítulos multi-idioma
- [ ] 👥 Sistema de recomendaciones

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar AnimeFree:

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Sobre el Desarrollador

**RobertDev**

[![GitHub](https://img.shields.io/badge/GitHub-DrRobert12-181717?logo=github&style=flat-square)](https://github.com/DrRobert12)


---

<div align="center">

**Hecho con ojeras y mucho código**

*Disclaimer: Este proyecto es un ejercicio educativo de desarrollo mobile y web scraping.*  
*El contenido mostrado es propiedad de sus respectivos dueños.*

</div>

