# Manuel Aragón — Sitio personal bilingüe

Esta es una web estática con HTML, CSS y JavaScript. No necesita instalar programas ni pagar por un servidor para probarla.

## 1. Ver la página

Descomprime el ZIP y abre `index.html` haciendo doble clic. Prueba el selector ES / EN y los enlaces del menú. Para verla en tu celular, publícala primero.

## 2. Personalizar

- `index.html`: estructura de la página, nombre, datos de contacto y enlaces.
- `styles.css`: colores, tamaños, diseño móvil.
- `script.js`: textos en inglés y español.
- `favicon.svg`: ícono MA de la pestaña.

**IMPORTANTE:** `hello@manuel-aragon.com` es un correo de ejemplo que todavía NO está configurado. Antes de publicar, reemplázalo en `index.html` por un correo que realmente tengas, y elimina o cambia la nota de aviso en ambas versiones (`index.html` y `script.js`). Para conservar tu privacidad, puedes utilizar un correo exclusivamente profesional. No publiques tu número telefónico personal, domicilio, colegio ni horarios.

Los proyectos son ilustrativos y están indicados como «Próximamente». No son proyectos realizados.

## 3. Publicar en Cloudflare Pages (opción simple)

1. Crea una cuenta en https://dash.cloudflare.com/.
2. Abre **Workers & Pages** y crea una aplicación de **Pages** usando **Direct Upload / Upload assets** (los nombres exactos de la interfaz pueden variar).
3. Sube la carpeta descomprimida `manuel-aragon-web` (con `index.html` directamente dentro) o arrastra sus archivos según lo solicite la interfaz.
4. Elige un nombre de proyecto, por ejemplo `manuel-aragon` si está libre, y despliega.
5. Comprueba la dirección temporal `*.pages.dev` que Cloudflare te mostrará.

Más adelante puedes migrar a una estrategia basada en repositorio para desplegar cambios mediante Git. **No se puede convertir el mismo proyecto de Direct Upload a Git integration**, por lo que, si decides usar Git desde el comienzo, crea un proyecto nuevo con Git integration en vez de Direct Upload.

Guía oficial: https://developers.cloudflare.com/pages/get-started/direct-upload/

## 4. Conectar manuel-aragon.com comprado en GoDaddy

Para utilizar el dominio raíz `manuel-aragon.com` con Cloudflare Pages, Cloudflare exige que el dominio esté incorporado como zona DNS a Cloudflare. No basta con crear un CNAME en el DNS externo de GoDaddy.

1. En Cloudflare, selecciona **Add a domain / Add site**, agrega `manuel-aragon.com` y elige el plan gratuito si está disponible para ti.
2. Revisa cuidadosamente los registros DNS que Cloudflare haya importado, especialmente registros de correo (MX, TXT, SPF, DKIM), si utilizas correo con el dominio. NO borres esos registros.
3. Cloudflare proporcionará **dos nameservers concretos** para tu cuenta. Cópialos tal cual. No uses nombres de servidores ficticios.
4. En GoDaddy, entra a tu cartera de dominios → `manuel-aragon.com` → ajustes DNS / **Nameservers** → cambia a nameservers personalizados y escribe los dos de Cloudflare. La propagación puede demorar.
5. Cuando Cloudflare confirme que el dominio está activo, entra a tu proyecto **Workers & Pages → Custom domains → Set up a custom domain** y agrega `manuel-aragon.com`.
6. Sigue la configuración de DNS y certificado HTTPS que Cloudflare indique. Puedes añadir `www.manuel-aragon.com` como dominio adicional y configurar una redirección si así lo deseas.

**Cuidado:** Si ya utilizas correo con este dominio o algún otro servicio DNS, cambiar nameservers sin copiar los registros correctos puede interrumpirlo. No cambies nada antes de revisarlo.

Guías oficiales:
- https://developers.cloudflare.com/pages/configuration/custom-domains/
- https://developers.cloudflare.com/fundamentals/manage-domains/add-site/
- https://www.godaddy.com/help/manage-dns-records-680

## 5. Mejoras futuras

- Tus primeros proyectos reales con resultados y metodología.
- Un blog bilingüe.
- Enlaces profesionales cuando quieras hacerlos públicos.
- Un pequeño formulario de contacto con protección contra spam si lo necesitas.

Este sitio es únicamente informativo, no ofrece asesoría financiera ni procesa datos personales.
