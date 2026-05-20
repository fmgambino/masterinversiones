# EL Master: Trading Club VIP - Backoffice PWA

Backoffice Mobile First listo para probar en local, GitHub Pages o Hostinger.

## Incluye
- PWA instalable con manifest y service worker.
- UI responsive mobile first.
- Header con tema claro/oscuro, pantalla completa, notificaciones, avatar editable y salir.
- Menú lateral colapsable al hacer clic en el logo.
- Perfiles: SuperAdmin, Empleados y Socios.
- Datos simulados: 60 socios, 65 operaciones, 24 retiros y auditoría.
- SweetAlert2 para alertas.
- Chart.js para gráficos.
- `js/auth.js` separado para conectar Supabase.

## Probar
Abrir `index.html` o servir con:

```bash
python -m http.server 8080
```

Luego ingresar a `http://localhost:8080`.

## Supabase
Editar `js/auth.js`:

```js
export const SUPABASE_URL = 'https://TU-PROYECTO.supabase.co';
export const SUPABASE_ANON_KEY = 'TU_SUPABASE_ANON_KEY';
```

## Producción
Para seguridad real, usar HTTPS, Supabase Auth, Row Level Security, políticas por perfil, funciones Edge para operaciones sensibles y no exponer claves privadas en frontend.
