# APM Investor CRM PWA

Demo Mobile First en HTML, CSS3 y JavaScript. Incluye Landing Page, Backoffice con datos simulados, PWA offline, esquema MySQL y ejemplos PHP/PDO para Hostinger.

## Probar
Abrir `index.html` en navegador o publicar en GitHub Pages.

## Producción segura
- Usar Hostinger/MySQL solo desde backend PHP; GitHub Pages es estático y no debe contener credenciales.
- Renombrar `api/config.example.php` a `config.php` en Hostinger.
- Importar `sql/schema.sql` en phpMyAdmin.
- Usar HTTPS, `password_hash`, `password_verify`, PDO preparado, sesiones con cookies seguras, CSRF token y validación de permisos por endpoint.

## Demo
- Landing: `index.html`
- Backoffice: `backoffice.html`
- Perfiles simulados: SuperAdmin, Admin, Analista, Cliente.
