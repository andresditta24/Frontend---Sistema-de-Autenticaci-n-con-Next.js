# 🔐 Frontend - Sistema de Autenticación con Next.js

Este repositorio contiene el código fuente del **frontend** de un sistema de autenticación con **Next.js**, que se conecta a un backend en **Express.js** para la validación de usuarios mediante **JWT**.

🔗 **Repositorio del Backend:** [Backend - Sistema de Autenticación](https://github.com/tuusuario/backend-repo)

## 🚀 Tecnologías Utilizadas
- **Next.js (App Router)**
- **React**
- **Tailwind CSS**
- **Fetch API** para consumo del backend
- **Autenticación con JWT**
- **Protección de rutas y redirección automática**

## 🔥 Características
✅ **Inicio de sesión y registro de usuarios**
✅ **Validación de token y autenticación con JWT**
✅ **Protección de rutas privadas**
✅ **Diseño moderno con Tailwind CSS**

## 🛠 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/andresditta24/frontend-repo.git
cd frontend-repo
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo **`.env.local`** en la raíz del proyecto y agrega la URL del backend:
```env
NEXT_PUBLIC_API_URL=http://localhost:1000
```

### 4️⃣ Ejecutar el proyecto
```sh
npm run dev
```
El frontend estará disponible en `http://localhost:3000`.
