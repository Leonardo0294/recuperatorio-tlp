# Pasos para instalar y ejecutar el proyecto creado para el examen
Instalaciones necesarias:
Dentro del directorio del proyecto ejecutar:
```bash
 Ejecuta `npm install` para instalar las dependencias.
```

>> ### Requiere de una base de datos MySQL.

Configura las variables de entorno en el archivo `.env`.

Variables de entorno:
```bash
PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_DIALECT=
SECRET_KEY=clave-secreta-de-desarrollo
```

Ejecutar el proyecto en modo desarrollo:
```bash
npm run dev
```

Ejecutar el proyecto en modo producción:
```bash
npm run start
```