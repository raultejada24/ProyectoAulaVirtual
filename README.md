# 🎓 Aula Virtual

**Aula Virtual** es una página web para la **gestión de asignaturas** y la resolución de **dudas de los estudiantes**. Permite crear y listar asignaturas, y a los alumnos publicar sus dudas para que el profesor pueda resolverlas.

---

## 📑 Tabla de Contenidos

- [Características](#características)  
- [Modelo de Datos](#modelo-de-datos)  
- [FAQ](#faq)  

---

## 🏆 Características

- **CRUD de Asignaturas**: Crear, leer, actualizar y eliminar asignaturas.  
- **Listado de Dudas**: Los estudiantes pueden publicar dudas en cada asignatura.  
- **Interfaz Clara**: Vista por asignatura con su información y sección de dudas.  
- **Responsive**: Adaptada para escritorio y dispositivos móviles.

---

## 🗂️ Modelo de Datos

### Entidad Principal: Asignatura
- **nombre** (string)  
- **descripción** (string)  
- **créditos** (number)  
- **profesor** (string)  
- **imagen** (URL / fichero)

### Entidad Secundaria: Duda
- **alumno** (string)  
- **fechaPublicación** (Date)  
- **contenido** (string)  
- **asignaturaId** (referencia a Asignatura)

**Relación**:  
- Una **Asignatura** tiene muchas **Dudas**.  
- Un **estudiante** publica varias **Dudas**, cada una ligada a una Asignatura.

--

## ❓ FAQ

**¿Cómo crear una nueva asignatura?**  
En la sección “Asignaturas” haz clic en “Crear Asignatura” y rellena el formulario con nombre, descripción, créditos, profesor e imagen.

**¿Cómo publico una duda?**  
Dentro de la página de la asignatura, completa el formulario de “Publicar duda” con tu nombre y el contenido de la duda. Se guardará con la fecha actual.

**¿Puedo editar o eliminar dudas?**  
Solo el profesor (o rol administrador) puede marcar una duda como resuelta o eliminarla si procede.

**¿Cómo cambio el puerto de la aplicación?**  
Modifica la variable `PORT` en tu archivo `.env` antes de arrancar el servidor.
