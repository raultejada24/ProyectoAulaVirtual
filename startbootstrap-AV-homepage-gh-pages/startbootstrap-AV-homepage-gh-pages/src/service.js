// ENTIDAD SECUNDARIA: DUDAS

// Le metemos un campo que sea subjectID con el que sabemos a que asignatura pertenece.
// Habría que hacer un getDoubtsBySubject para quedarnos con las dudas que queremos de una 
//determinada asignatura y así mostrar solo esas. Pero no sé del todo como hacer eso. 

// Se pasa como parametro de en el render que redirige a la pagina de detail.

export class Doubt {
    constructor(name, date, topic, doubt) {
        this.Studentname = name; // Nombre del estudiante que plantea la duda.
        this.doubtdate = date; // Fecha en la que se planteó la duda.
        this.topic = topic; // Tema relacionado con la duda.
        this.doubtMessage = doubt; // Mensaje de la duda.
    }
}

// Función para añadir una duda a una asignatura específica.
export function addDoubt(subject, doubt) {
    let doubtId = subject.doubtsId; // Obtener el siguiente ID para la duda.
    subject.doubtsId++; // Incrementar el contador de IDs.
    doubt.id = doubtId.toString(); // Asignar el ID generado a la duda.
    subject.doubts.set(doubt.id, doubt); // Añadir la duda al mapa de dudas de la asignatura.
}

// Función para eliminar una duda de una asignatura utilizando su ID.
export function deleteDoubt(subject, doubtId) {
    subject.doubts.delete(doubtId); // Eliminar la duda del mapa.
}

// Función para obtener todas las dudas de una asignatura específica por su ID.
export function getDoubtsBySubject(idSubject){
    let subject=subjects.get(idSubject);
    return Array.from(subject.doubts.values()); 
    /*Hay que pasar los valores del mapa a un array que no contenga también los id. 
    Si no se hace así, y se hace con [...subject.doubts] el array que la funcion devuelve es algo como
    [[0,Doubt{(datos de la duda 1)}],[1,Doubt{(datos de la duda 2)}],[3,Doubt{(datos de la duda 3)}]].
    Por eso mustache no era capaz de acceder a las dudas, porque el array debe ser solo de los objetos que se muestran
    */
}

// Función para actualizar una duda existente en una asignatura.
export function updateDoubt(updatedDoubt, subject, idDoubt) {
    let doubt = subject.doubts.get(idDoubt); // Obtener la duda por su ID.

    if (!doubt) {
        throw new Error(`Duda con id ${uptadedDoubt.id} no encontrada`);
    }

    // Actualizar los valores de la duda con los datos proporcionados, manteniendo los originales si no se modifican.
    doubt.Studentname = updatedDoubt.Studentname || doubt.Studentname;
    doubt.doubtdate = updatedDoubt.doubtdate || doubt.doubtdate;
    doubt.topic = updatedDoubt.topic || doubt.topic;
    doubt.doubtMessage = updatedDoubt.doubtMessage || doubt.doubtMessage;

    return doubt; // Devolver la duda actualizada.
}

// ENTIDAD PRINCIPAL: ASIGNATURA

// La clase Subject representa una asignatura, incluyendo su nombre, descripción, créditos, profesor, periodo, imagen y un mapa de dudas asociadas.
export class Subject {
    constructor(name, desc, credits, teacher, period, image) {
        this.name = name; // Nombre de la asignatura.
        this.desc = desc; // Descripción de la asignatura.
        this.credits = credits; // Número de créditos.
        this.teacher = teacher; // Profesor encargado de la asignatura.
        this.period = period; // Periodo lectivo de la asignatura.
        this.imageFilename = image; // Nombre del archivo de la imagen asociada.
        this.doubts = new Map(); // Mapa para almacenar las dudas relacionadas con la asignatura.
        this.doubtsId = 0; // Contador para generar IDs únicos para las dudas.
    }
}

// Mapa global para almacenar todas las asignaturas por su ID.
let subjects = new Map();

// Contador global para generar IDs únicos para las asignaturas.
let nextSubjectId = 0;

// Función para añadir una nueva asignatura al mapa global.
export function addSubject(subject) {
    let subjectId = nextSubjectId++; // Generar el siguiente ID para la asignatura.
    subject.id = subjectId.toString(); // Asignar el ID generado.
    subjects.set(subject.id, subject); // Añadir la asignatura al mapa.
}

// Función para eliminar una asignatura del mapa global utilizando su ID.
export function deleteSubject(id) {
    subjects.delete(id); // Eliminar la asignatura del mapa.
}

// Función para obtener todas las asignaturas en un array.
export function getSubjects() {
    return [...subjects.values()]; // Devolver los valores del mapa como un array.
}

// Función para obtener asignaturas filtradas por un periodo específico.
export function getSubjectsByPeriod(period) {
    let subjects = getSubjects(); // Obtener todas las asignaturas.
    return subjects.filter((subject) => subject.period === period); 
    // Filtrar las asignaturas que coincidan con el periodo proporcionado.
}

// Función para obtener una asignatura específica por su ID.
export function getSubject(id) {
    return subjects.get(id); // Devolver la asignatura correspondiente al ID.
}

// Función para obtener el nombre del archivo de la imagen asociada a una asignatura.
export function getSubjectImage(id) {
    let subject = subjects.get(id); // Obtener la asignatura por su ID.
    return subject.imageFilename; // Devolver el nombre del archivo de la imagen.
}

// Función para actualizar una asignatura existente.
export function updateSubject(updatedSubject) {
    // Buscar la asignatura en el mapa utilizando su id
    let subject = subjects.get(updatedSubject.id);

    // Actualiza cada campo solo si updatedSubject.<campo> tiene un valor "truthy" (no es undefined, null, "", 0)
    subject.name = updatedSubject.name || subject.name; 
    subject.desc = updatedSubject.desc || subject.desc;
    subject.credits = updatedSubject.credits || subject.credits;
    subject.teacher = updatedSubject.teacher || subject.teacher;
    subject.period = updatedSubject.period || subject.period;
    subject.imageFilename = updatedSubject.imageFilename || subject.imageFilename;

    // Retornar la asignatura actualizada
    return subject;
}
