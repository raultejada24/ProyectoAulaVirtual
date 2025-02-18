import express from 'express';
import * as Service from './service.js';
import multer from 'multer';
import fs from 'node:fs/promises';


const UPLOADS_FOLDER = 'uploads';
const DEMO_FOLDER = 'demo';
const router=express.Router();

const upload = multer({ dest: UPLOADS_FOLDER });
//Copia de la carpeta demo images en la carpeta upload folder
fs.cp(DEMO_FOLDER, UPLOADS_FOLDER,{ recursive: true, force: true });


//SE AGREGAN LAS ASIGNATURAS CON SUS DUDAS POR DEFECTO:
//Cada ASIGNATURA posee estos atributos: 
//name(nombre),desc(descripción),credits(creditos),teacher(profesor),period(cuatrimestre),imageFilename(nombre de la foto de la asignatura)


let subject, doubt;

// BASES DE DATOS
subject = new Service.Subject(
    "2034 - BASES DE DATOS",
    "Introducción a las bases de datos y Oracle SQL con lola",
    "6 ECTS",
    "Andrés Iniesta",
    "Primer Cuatrimestre",
    "bases.jpg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Kylian Mbappé",
    "2024-10-01",
    "3",
    "¿Cómo se realiza la conexión a la base de datos?"
);
Service.addDoubt(subject, doubt);


// ARQUITECTURA E INGENIERÍA DE COMPUTADORES
subject = new Service.Subject(
    "2034 - ARQUITECTURA E INGENIERÍA DE COMPUTADORES",
    "Introducción a los principios fundamentales de la creación de sitios web, incluyendo HTML, CSS y JavaScript.",
    "6 ECTS",
    "Isi Palazón",
    "Primer Cuatrimestre",
    "arquitectura.jpeg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Pedro Sanchéz",
    "2024-09-25",
    "3",
    "¿Cuál es la diferencia entre arquitecturas?"
);
Service.addDoubt(subject, doubt);


// PROGRAMACIÓN ORIENTADA A OBJETOS
subject = new Service.Subject(
    "2034 - PROGRAMACIÓN ORIENTADA A OBJETOS",
    "Introducción a los principios fundamentales de la creación de sitios web, incluyendo HTML, CSS y JavaScript.",
    "6 ECTS",
    "Cristiano Ronaldo Dos Santos Aveiro",
    "Primer Cuatrimestre",
    "programacion.png"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Sergio Ramos",
    "2024-10-01",
    "3",
    "¿Qué es el polimorfismo en POO?"
);
Service.addDoubt(subject, doubt);


// FUNDAMENTOS DE LA WEB
subject = new Service.Subject(
    "2034 - FUNDAMENTOS DE LA WEB",
    "Introducción a los principios fundamentales de la creación de sitios web, incluyendo HTML, CSS y JavaScript.",
    "6 ECTS",
    "Fernando Alonso",
    "Primer Cuatrimestre",
    "fund-web.jpg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Jhay Cortez",
    "2024-10-10",
    "1",
    "¿Qué es JSON?"
);
Service.addDoubt(subject, doubt);



// IDIOMA MODERNO
subject = new Service.Subject(
    "2034 - IDIOMA MODERNO",
    "Amplia tu nivel de inglés, aprende a hablar y escribir en inglés para diferentes contextos.",
    "6 ECTS",
    "Phil Foden",
    "Primer Cuatrimestre",
    "Idioma_modern.jpg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Myke Towers",
    "2024-11-01",
    "4",
    "¿Alguien me explica el verbo TO BE?"
);
Service.addDoubt(subject, doubt);


//INTRODUCCION A LA PROGRAMACIÓN
subject = new Service.Subject(
    "2034 - INTRODUCCIÓN A LA PROGRAMACIÓN",
    "Aprende a programar desde cero en Pascal",
    "6 ECTS",
    "Oriol",
    "Primer Cuatrimestre",
    "IP.png"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Quevedo",
    "2024-06-06",
    "4",
    "¿Que es un array?"
);
Service.addDoubt(subject, doubt);

//FUNDAMENTOS FÍSICOS DE LA INFORMATICA
subject = new Service.Subject(
    "2034 - FUNDAMENTOS FÍSICOS DE LA INFORMATICA",
    "Aprende todo sobre transistores y tablas protoboard",
    "6 ECTS",
    "Pedro Porro",
    "Primer Cuatrimestre",
    "fisica.jpg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Maxwell Daiga",
    "2024-10-12",
    "7",
    "¿Que es un diodo?"
);
Service.addDoubt(subject, doubt);


// LOGICA
subject = new Service.Subject(
    "2034 - LÓGICA",
    "Conceptos básicos de lógica necesarios para la programación.",
    "6 ECTS",
    "Vinicius Junior",
    "Primer Cuatrimestre",
    "logica.jpeg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Pau Cubarsi",
    "2024-12-15",
    "2",
    "¿Como se hacen los Tableaux?"
);
Service.addDoubt(subject, doubt);


// MATEMATICA DISCRETA Y ÁLGEBRA
subject = new Service.Subject(
    "2034 - MATEMÁTICA DISCRETA Y ÁLGEBRA",
    "Conceptos matematicos necesarios para el diseño de algoritmos.",
    "6 ECTS",
    "David Jesus",
    "Primer Cuatrimestre",
    "mates.jpg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Lamine Yamal",
    "2024-01-09",
    "3",
    "¿Que es el teorema chino del resto?"
);
Service.addDoubt(subject, doubt);

//ESTADÍSTICA
subject = new Service.Subject(
    "2034 - ESTADÍSTICA",
    "Conceptos basicos de probabilidad y R",
    "6 ECTS",
    "Sonia",
    "Primer Cuatrimestre",
    "estadistica.jpg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Fermin López",
    "2024-12-18",
    "8",
    "¿Como puedo crear un archivo funcional en R?"
);
Service.addDoubt(subject, doubt);

// SEGUNDO CUATRIMESTRE

// REDES DE COMPUTADORES
subject = new Service.Subject(
    "2034 - REDES DE COMPUTADORES",
    "Redes es una comunicación de datos y la comunicación entre sistemas.",
    "6 ECTS",
    "Antonio Kroos",
    "Segundo Cuatrimestre",
    "redes.jpeg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Eladio Carrión",
    "2024-10-15",
    "2",
    "¿Qué es una dirección IP?"
);
Service.addDoubt(subject, doubt);



// MÉTODOS OPERATIVOS Y ESTADÍSTICOS DE GESTIÓN
subject = new Service.Subject(
    "2034 - MÉTODOS OPERATIVOS Y ESTADÍSTICOS DE GESTIÓN",
    "Aprenderás cómo aplicar técnicas de diseño y análisis para diseñar y desarrollar sistemas y aplicaciones.",
    "6 ECTS",
    "Santiago Abascal",
    "Segundo Cuatrimestre",
    "operativos.jpeg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Bad Bunny",
    "2024-09-20",
    "4",
    "¿Qué es la programación orientada a objetos?"
);
Service.addDoubt(subject, doubt);



// ANÁLISIS E INGENIERÍA DE REQUISITOS
subject = new Service.Subject(
    "2034 - ANÁLISIS E INGENIERÍA DE REQUISITOS",
    "Amplia contenido de la analítica y el diseño de sistemas y aplicaciones.",
    "6 ECTS",
    "Ed Sheeran",
    "Segundo Cuatrimestre",
    "requisitos.jpeg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Juan de Dios",
    "2024-10-05",
    "1",
    "¿Qué es una base de datos relacional?"
);
Service.addDoubt(subject, doubt);



// METODOLOGÍA DE LA PROGRAMACIÓN
subject = new Service.Subject(
    "2034 - METODOLOGÍA DE LA PROGRAMACIÓN",
    "Estudia cómo aplicar técnicas de diseño y análisis para diseñar y desarrollar sistemas y aplicaciones.",
    "6 ECTS",
    "Andrey Lunin",
    "Segundo Cuatrimestre",
    "metodologia.png"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Jesús Vallejo",
    "2024-11-05",
    "1",
    "¿Qué es un pseudocódigo?"
);
Service.addDoubt(subject, doubt);


// DISEÑO Y ANÁLISIS DE ALGORITMOS
subject = new Service.Subject(
    "2034 - DISEÑO Y ANÁLISIS DE ALGORITMOS",
    "Aquí vienes a aprender sobre el diseño y el análisis de algoritmos.",
    "6 ECTS",
    "Jose Luis Mato",
    "Segundo Cuatrimestre",
    "algoritmos.jpg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Elon Musk",
    "2024-11-10",
    "1",
    "¿Qué es un algoritmo de ordenación?"
);
Service.addDoubt(subject, doubt);

//ESTRUCTURAS DE DATOS
subject = new Service.Subject(
    "2034 - ESTRUCTURAS DE DATOS",
    "Introducción a las principales estructuras de datos utilizando PASCAL",
    "6 ECTS",
    "Jorge Naranjo",
    "Segundo Cuatrimestre",
    "ED.png"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Iker García",
    "2022-11-13",
    "1",
    "¿Cómo se implementa un pila?"
);
Service.addDoubt(subject,doubt);

//PPOS JURÍDIOCS 
subject = new Service.Subject(
    "2034 - PRINCIPIOS JURÍDICOS BÁSICOS, DEONTOLOGÍA PROFESIONAL E IGUALDAD",
    "Asignatura acerca de las limitaciones legales del desarrollo del software, así como la ética profesional de este campo.",
    "6 ECTS",
    "Jacinto Habded",
    "Segundo Cuatrimestre",
    "juridicos.jpeg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Isabel Díaz Ayuso",
    "2024-12-25",
    "6",
    "¿Qué es una licencia software libre?"
);
Service.addDoubt(subject,doubt);

//CÁLCULO
subject = new Service.Subject(
    "2034 - CÁLCULO",
    "Se aprenderá, entre otros conceptos matemáticos, a hacer límites, derivadas, e integrales de manera avanzada.",
    "6 ECTS",
    "Pablo Iglesias",
    "Segundo Cuatrimestre",
    "calculo.jpeg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Bill Gates",
    "2024-09-03",
    "3",
    "¿Cómo se realiza la integral del ejercicio 2?"
);
Service.addDoubt(subject,doubt);

//INFORMÁTICA Y SOCIEDAD
subject = new Service.Subject(
    "2034 - INFORMÁTICA Y SOCIEDAD",
    "Reflexión acerca de cómo la informática afecta a nuestra sociead, así como una introspección en la historia de la informática.",
    "6 ECTS",
    "Mariano Rajoy",
    "Segundo Cuatrimestre",
    "infoysocie.jpeg"
);
Service.addSubject(subject);
doubt = new Service.Doubt(
    "Ibai Llanos",
    "2024-10-01",
    "3",
    "¿Cómo afecta la IA a nuestra sociedad?"
);
Service.addDoubt(subject,doubt);

//Información a la informática
subject = new Service.Subject(
    "2034 - INTRODUCCIÓN A LA INFORMÁTICA",
    "Introducción a las bases de la informática: binario, camino de datos, ensamblador...",
    "6 ECTS",
    "Gerardo Reyes",
    "Segundo Cuatrimestre",
    "introinfo.jpg"
);
doubt = new Service.Doubt(
    "Marcos Hernández",
    "2024-10-01",
    "3",
    "¿Cómo se calcula en complemento a 2?"
);
Service.addDoubt(subject,doubt);
Service.addSubject(subject);
let namesSet = new Set(); //Este set contiene el nombre de todas las asignaturas para que no se repitan.


//A pesar de que no se muestren todas las asignaturas del mapa de primeras (hay que darle al botón de cargar mas)
//tiene sentido que se metan todas al conjunto para que el usuario no pueda agregar una asignatura que ya existe pero no está cargada...

//CARGAMOS TODAS LAS ASIGNATURAS DEL MAPA EN EL CONJUNTO:

for (let subject of Service.getSubjects()){
        namesSet.add(subject.name);
    }

//Tenemos que añadir las asignaturas demo. 
//Utilizamos un for-each para recorrer al mapa (pasado a array).

////////////////////////////////// ROUTERS //////////////////////////////////

router.get('/',(req,res)=>{
    //Añadimos todos los nombres cada vez que la pagina ppal se cargue, por si el usuario vuelve desde editar
    //asignatura hasta aquí, para que el nombre no se quede sin estar en el set.
    let subjects1Q=Service.getSubjectsByPeriod("Primer Cuatrimestre");//Sacamos las asignaturas del primer cuatrimestre
    let subjects2Q=Service.getSubjectsByPeriod("Segundo Cuatrimestre");

    //Cargar asignaturas de cada cuatrimestre por separado
    subjects1Q= subjects1Q.splice(0,3);
    subjects2Q=subjects2Q.splice(0,3);

    
    res.render('index', { //cargamos en /index.html la plantilla index.html con las asignaturas predeterminadas 
        
        subjectsPeriod1:subjects1Q,
        subjectsPeriod2:subjects2Q,//Mostramos a través de moustache las asignaturas predeterminadas de cada cuatrimestre
        tabName: 'Aula Virtual URJC'
    })
});

//Este router get muestra en esa url ('/subject/:id/image') la imagen de la asignatura correspondiente
router.get('/subject/:id/image', (req, res) => {

    let subject = Service.getSubject(req.params.id);

    res.download(UPLOADS_FOLDER + '/' + subject.imageFilename);

});

// Ruta para mostrar los detalles de una asignatura con sus dudas
router.get('/detail/:id', (req, res) => {
    const subjectId = req.params.id; // Obtenemos el ID de la asignatura desde la URL
    //Hallamos la asigantura en la que nos encontramos para poder extraer su mapa de dudas
    const subject = Service.getSubject(subjectId);  
    const subject_doubts = Service.getDoubtsBySubject(subjectId); //Se pasa el mapa a array

    //Normalmente no hará nada. Es por si acaso el usuario sale de la edicion de asignatura sin guardar los cambios:
    //el nombre de la asignatura no estaría reflejado en el set al haberse eliminado.
    namesSet.add(subject.name);

    res.render('detail', {
        subject: subject,    // Objeto asignatura del cual se muestran los datos y dudas
        subj_doubts: subject_doubts ,     //Array de dudas asociadas a la asignatura
        navName: " > Asignatura: " + subject.name,
        id: req.params.id,
        tabName: subject.name + ' | Aula Virtual URJC'
    });
});

// Router que crea la nueva duda a partir del formulario
router.post('/doubt/:id/new', (req, res) => {
    // Creamos un nuevo objeto Duda y lo añadimos al array
    let newDoubt = new Service.Doubt(
        req.body.studentName,     
        req.body.date,     
        req.body.topic,  
        req.body.doubtMessage
    );
    let doubtError = false;
    let doubtErrors = [];
    //Ahora las restricciones del formulario se controlan en el backend, no en el front(html maxlength, minlength)
    if(newDoubt.Studentname.length < 2){
        doubtError = true;
        switch (newDoubt.Studentname.length){
            case 0: doubtErrors.push('Debe especificarse el nombre del alumno'); break;
            case 1: doubtErrors.push('El nombre del alumno debe tener al menos 2 caracteres');
        }
    }
    else if(newDoubt.Studentname.length > 50){
        doubtError = true;
        doubtErrors.push('El nombre del alumno debe tener menos de 50 caracteres');
    }

    if (newDoubt.doubtdate.length === 0){
        doubtError = true;
        doubtErrors.push('Debe especificarse la fecha de la duda.');
    }

    if (!newDoubt.topic){
        doubtError = true;
        doubtErrors.push('Debe especificarse el tema al que la duda corresponde.');
    }
    if (newDoubt.doubtMessage.length < 2){
        doubtError = true;
        switch (newDoubt.doubtMessage.length){
            case 0: doubtErrors.push('Debe especificarse el mensaje de la duda.'); break;
            case 1: doubtErrors.push('El mensaje de la duda debe tener al menos 2 caracteres.');
        }
    }
    else if(newDoubt.doubtMessage.length > 1000){
        doubtError = true;
        doubtErrors.push('El mensaje de la duda debe tener menos de 1000 caracteres');
    }
    let response = {valid: !doubtError, message: ''};
    if(doubtError){
        response.message = 'Los datos de la duda no se han introducido correctamente';
        response.errArray = doubtErrors;
    }
    else{
        Service.addDoubt(Service.getSubject(req.params.id), newDoubt);  // Añadimos la duda al servicio o almacenamiento
        response.message = 'La duda se ha añadido correctamente.';
        response.doubt=newDoubt;
    }
    res.json(response);
});

//Router GET para mostrar el formulario de agregar nueva asignatira
router.get('/createNewSubject',(req,res)=>{
    res.render('new_elem',{ 
        navName: " > Crear nueva asignatura",
        tabName: 'Crear Asignatura | Aula Virtual URJC'
    });
});

// Router POST que recibe la información a partir del formulario de new_elem para crear la nueva asignatura
router.post('/subject/new', upload.single('image'), (req, res) => {

     //Variables para comprobar valores correctos de la asignatura
    let subjectError = false;
    let subjectErrors= [];
   //Comprobar que el campo de la imagen no este vacio
    let imageFilename;
    if(!req.file){ //En el caso de que no se haya subido un archivo
        imageFilename='';
        subjectError = true;
        subjectErrors.push('Debe especificarse la imagen de la asignatura');
   } 
   else {
    imageFilename = req.file.filename;
   }
   //Comprobar que el campo del cuatrimestre no este vacio
   let subjectPeriod;
   if (!req.body.period){
    subjectPeriod='';
    subjectError = true;
    subjectErrors.push('Debe especificarse el periodo de la asignatura');
   }
   else{
    subjectPeriod=req.body.period;
   
    if ((subjectPeriod !='Primer Cuatrimestre')&& (subjectPeriod !='Segundo Cuatrimestre')) {
    subjectError = true;
    subjectErrors.push('Debe introducirse un valor de cuatrimestre valido');
    } 
   }
  
    let newSubject= new Service.Subject(
        req.body.subject,     
        req.body.description,     
        req.body.credits + " ECTS",  // Le añadimos los créditos como string al número de créditos que haya ingresado.
        req.body.professor,
        req.body.period,
        imageFilename,
        
    )

    //Comprobar si es correcto el nombre de la asignatura: 

    let newSubjectName=newSubject.name; //Nombre de la asignatura
    
    
    let subject_num= Number (newSubjectName);

    if (newSubjectName.length===0){//Si no se ha introducido nada salta el error (Este if mira si el campo esta vacío)
        subjectError = true;
        subjectErrors.push('Debe especificarse el nombre de la asignatura');
    }
    //Si se ha podido realizar el casting anterior a numero del nombre de la asignatura (y el valor introducido no es vacío)
    //Entonces salta un error (No tiene sentido que una asignatura se llame 11234 por ej)
    //En el caso de que no se pueda hacer casting porque sea una cadena de caracteres de verdad (en vez de solo numeros), subject_num valdrá NaN
    else if(!Number.isNaN(subject_num)){ //Si esa variable no es NaN (es decir un numero), salta el error
        subjectError = true;
        subjectErrors.push('El nombre de la nueva asignatura debe tener caracteres válidos');
    }
    else if(newSubjectName.length < 2){
        subjectError = true;
        switch (newSubjectName.length){
            case 0: subjectErrors.push('Debe especificarse el nombre de la asignatura'); break;
            case 1: subjectErrors.push('El nombre de la asignatura debe tener al menos 2 caracteres');
        }
    }
    
    else if(newSubjectName.length > 90){
        subjectError = true;
        subjectErrors.push('El nombre de la nueva asignatura debe tener menos de 90 caracteres');
    }
    else if (namesSet.has(newSubjectName)){
        subjectError=true;
        subjectErrors.push('Ya existe una asignatura con el nombre: '+newSubjectName);
    }

    //Comprobar valores correctos del profesor

    let teacher_num= Number (newSubject.teacher);

    if (newSubject.teacher.length===0){//Si no se ha introducido nada salta el error (Este if mira si el campo esta vacío)
        subjectError = true;
        subjectErrors.push('Debe especificarse el nombre del profesor de la nueva asignatura');
    }

    //De igual manera que se hace con las asignaturas, con este casting comprobamos que lo que se ha introducido no sea un numero

    else if(!Number.isNaN(teacher_num)){
        subjectError = true;
        subjectErrors.push('El nombre del profesor debe tener caracteres válidos');
    }
    else if(newSubject.teacher.length < 3){
        subjectError = true;
        switch (newSubject.teacher.length){
            case 0: subjectErrors.push('Debe especificarse especificarse un profesor para esta asignatura'); break;
            case 1: 
            case 2: subjectErrors.push('El nombre del profesor de la nueva asignatura debe tener al menos 3 caracteres');
        }
    }
    else if(newSubject.teacher.length > 70){
        subjectError = true;
        subjectErrors.push('El nombre del profesor de la nueva asignatura debe tener menos de 70 caracteres');
    }
   

    //Comprobar valores correctos de los creditos

    let numCredits=Number (req.body.credits);
    //Pasamos el numCredits a numero para ver si se introdujo un número en este campo

    if (req.body.credits.length === 0){ //Comprueba si el campo está vacio o no
        subjectError = true;
        subjectErrors.push('Debe especificarse los creditos de la asignatura');
    }
    //En el caso de que lo que se introduzca para el valor de los creditos sea diferente de un numero, 
    //saltará el error y no se agrega la asignatura  al service
    else if (typeof numCredits!='number'){
        subjectError=true;
        subjectErrors.push('No se puede introducir un valor de creditos que no sea un numero');
    }
    else if ( req.body.credits<1){
        subjectError=true;
        subjectErrors.push('No se puede introducir un valor de creditos que sea menor de 1');
    }
    else if ( req.body.credits>30){
        subjectError=true;
        subjectErrors.push('No se puede introducir un valor de creditos que sea mayor de 30');
    }

    //Comprobar valores correctos de la descripción

    if (newSubject.desc.length === 0){
        subjectError = true;
        subjectErrors.push('Debe especificarse una descripción de la asignatura');
    }
    else if ( newSubject.desc.length>1000){
        subjectError=true;
        subjectErrors.push('No se puede introducir una descripción de mas de 1000 caracteres');
    }

    let response = {valid:  !subjectError, message: ' '};       //La respuesta que enviaremos en JSON 
    //Valid: Será true cuando no haya errores y false cuando los haya.

    //En caso de no haber ningun error:
    if(!subjectError){
        response.message = 'Asignatura añadida correctamente.'  //Mensaje de respuesta.
        Service.addSubject(newSubject);     //Añadimos la nueva asignatura 
        namesSet.add(newSubject.name);      //Añadimos al set el nombre que no queremos que se repita. 
    }
    //En caso de que haya habido un dato que no se ha introducido correctamente (ha habido un error):
    else{
        response.message = 'Los datos no se han introducido correctamente.';
        response.errArray = subjectErrors;
        //Si han habido errores, también debemos enviar el array de errores para que pueda ser mostrado.
        //Para ello aporchamos que en JS las propiedades que los objetos tienen pueden modificarse.
    }
    res.json(response); //Enviamos la repsuesta en formato JSON hacia el frontend.
});

// Ruta GET para mostrar el formulario de edición
router.get('/subject/:id/edit', (req, res) => {
    const { id } = req.params;
    const subject = Service.getSubject(id);  // Obtener la asignatura por ID
    let credits = subject.credits;
    let numOfCredits = credits.substring(0,1); //Saca el numero de creditos del String (sin el ECTS)

    numOfCredits=Number(numOfCredits); //Pasa a numero el String

    //Lo eliminamos para que, si el nombre no se cambia, no cuente como repetido.
    namesSet.delete(subject.name);

    res.render('edit_subject', { 
        subject ,
        numOfCredits, //Paso el numero de creditos de esta manera para que a la hora de editar salga igual que cuando agregamos una asignatura
        navName: " > Editar asignatura",
        optionOneSelected: subject.period === "Primer Cuatrimestre" ? "selected" : "",
        optionTwoSelected: subject.period === "Segundo Cuatrimestre" ? "selected" : "",
        tabName: 'Editar asignatura | Aula Virtual URJC'

    });  // Renderizamos la vista con los datos de la asignatura
});

// Ruta POST para guardar los cambios de la asignatura y mostrarlos tras haberla editado
router.post('/subject/:id/edited', upload.single('image'), async (req, res) => {
    const { id } = req.params;
    const { subject, description, credits, teacher, period } = req.body;
    let imageFilename = req.file ? req.file.filename : null; // Solo actualizar si hay nueva imagen

    /*Se deben detectar los posibles errores a la hora de editar asignaturas. Se detectan de manera muy similar a 
    la detección de erorres en la creación de asignaturas, aunque aquí se debe perimitir campos de imagen vacíos.
    En cuanto a los nombres repetidos, al entrar en el formulario se eliminan del set para que el nombre no se detecte
    a sí mismo como repetido en el caso de que el nombre no cambie. Debido a esto, es necesario añadirlo de nuevo al
    set, tanto si se envia el formulario de edición como si no se envía, por lo que en las páginas index y detail hay 
    namesSet.add() adicionales. Si el usuario manipulase las URL para ir desde la página de edición (con el nombre borrado)
    a otra página del sitio web, el nombre no quedaría en el set. Por motivos de simplicidad, sólo hemos tenido esto en
    cuenta para las páginas a las que el usuario puede acceder sin manipular la URL desde el navegador.
    */

    // Obtener la asignatura a editar
    const existingSubject = Service.getSubject(id);

     //Variables para comprobar valores correctos de la asignatura editada
     let EditedSubjectError = false;
     let EditedSubjectErrors= [];

    let subjectPeriod;
    if (req.body.period){
     subjectPeriod=req.body.period;
     if ((subjectPeriod !='Primer Cuatrimestre')&& (subjectPeriod !='Segundo Cuatrimestre')) {
        EditedSubjectError = true;
        EditedSubjectErrors.push('Debe introducirse un valor de cuatrimestre valido');
     } 
    }
   
     let editedSubject= new Service.Subject(
         req.body.subject,     
         req.body.description,     
         req.body.credits + " ECTS",  
         req.body.teacher,
         req.body.period,
         imageFilename,        
     )
 
     let editedSubjectName=editedSubject.name; 
     let subject_num= Number (editedSubjectName);

     if(namesSet.has(editedSubjectName)){
        EditedSubjectError = true;
        EditedSubjectErrors.push('Ya existe una asignatura con el nombre: '+ editedSubjectName);
     }
    namesSet.add(editedSubjectName);

     if(editedSubjectName.length < 2){
         EditedSubjectError = true;
         switch (editedSubjectName.length){
             case 0: EditedSubjectErrors.push('Debe especificarse el nombre de la asignatura'); break;
             case 1: EditedSubjectErrors.push('El nombre de la asignatura debe tener al menos 2 caracteres');
         }
     }
     else if(!Number.isNaN(subject_num)){ 
        EditedSubjectError = true;
        EditedSubjectErrors.push('El nombre de la asignatura debe tener caracteres validos');
     }
     
     else if(editedSubjectName.length > 90){
        EditedSubjectError = true;
        EditedSubjectErrors.push('El nombre de la nueva asignatura debe tener menos de 90 caracteres');
     }
 
     let teacher_num= Number (editedSubject.teacher);
 
     if(editedSubject.teacher.length < 3){
        EditedSubjectError = true;
         switch (editedSubject.teacher.length){
             case 0: EditedSubjectErrors.push('Debe especificarse especificarse un profesor para esta asignatura'); break;
             case 1: 
             case 2: EditedSubjectErrors.push('El nombre del profesor de la nueva asignatura debe tener al menos 3 caracteres');
         }
     }
     else if(!Number.isNaN(teacher_num)){
        EditedSubjectError = true;
        EditedSubjectErrors.push('El nombre del profesor debe tener caracteres validos');
     }
     else if(editedSubject.teacher.length > 70){
        EditedSubjectErrors = true;
        EditedSubjectErrors.push('El nombre del profesor de la nueva asignatura debe tener menos de 70 caracteres');
     }
 
     let numCredits=Number (req.body.credits);
 
     if (editedSubject.credits.length === 5){  //Si no se escribe nada el string resultante es de longitud 5
        EditedSubjectError = true;
        EditedSubjectErrors.push('Debe especificarse los creditos de la asignatura');
     }
     else if (typeof numCredits!='number'){
        EditedSubjectError=true;
        EditedSubjectErrors.push('No se puede introducir un valor de creditos que no sea un numero');
     }
     else if ( req.body.credits<1){
        EditedSubjectError=true;
        EditedSubjectErrors.push('No se puede introducir un valor de creditos que sea menor de 1');
     }
     else if ( req.body.credits>30){
        EditedSubjectError=true;
        EditedSubjectErrors.push('No se puede introducir un valor de creditos que sea mayor de 30');
     }
 
     //Comprobar valores correctos de la descripción
 
     if (editedSubject.desc.length === 0){
        EditedSubjectError = true;
        EditedSubjectErrors.push('Debe especificarse una descripción de la asignatura');
     }
     else if (editedSubject.desc.length>1000){
        EditedSubjectError=true;
        EditedSubjectErrors.push('No se puede introducir una descripción de mas de 1000 caracteres');
     }
     
     let response = {valid: false, message: '', subjectID: req.params.id};
     response.valid = (!EditedSubjectError);

     //En caso de no haber ningun error:
     if(!EditedSubjectError){
     // Actualizamos los valores de la asignatura
        existingSubject.name = subject || existingSubject.name;
        existingSubject.desc = description || existingSubject.desc;
        existingSubject.credits = credits || existingSubject.credits;
        existingSubject.teacher = teacher || existingSubject.teacher;
        existingSubject.period = period || existingSubject.period;
        existingSubject.credits+=" ETCS";
        //Pasa a String el numero de creditos y le sumamos ETCS a la cadena de caracteres
        
        //Pasamos la respuesta correspondiente:
        response.message = 'Volverás a la página de la asignatura.';

        if (imageFilename) {
            existingSubject.imageFilename = imageFilename; // Si se sube una nueva imagen
        }
     }
     //En caso de que haya habido un dato que no se ha introducido correctamente (ha habido un error):
     else{
        response.message = 'Los datos introducidos no son válidos para editar la asignatura.';
        response.errArray = EditedSubjectErrors;
    }
    res.json(response);
});

// Ruta GET para mostrar la informacion
router.get('/doubt/edit/:subject_id/:id', (req, res) => {
    const { subject_id,id } = req.params;
    const subject = Service.getSubject(subject_id);  //Conseguir asignatura por id

    const doubt=subject.doubts.get(id); //Conseguir datos de la duda a editar por el id de la duda
    
    const response ={
        subject_id: subject_id,
        doubtStudentname: doubt.Studentname,
        doubtDate: doubt.doubtdate,
        doubtTopic: doubt.topic,
        doubtMessage: doubt.doubtMessage 
    }
    res.json(response);
});

// Ruta POST para guardar los cambios de la duda tras haberla editado
router.post('/doubt/edited/:subject_id/:id', async (req, res) => {
    const { subject_id, id } = req.params; // Id de la asignatura que contiene la duda a editar, y id de la duda que queremos editar
    const { Studentname, doubtdate, topic, doubtMessage } = req.body; // Duda modificada
    const subject = Service.getSubject(subject_id);
    const doubt = subject.doubts.get(id); // Duda que queremos editar (la original)

    let editedDoubtError = false;
    let editedDoubtErrors = [];

    let editedDoubt= new Service.Doubt(
        req.body.Studentname,     
        req.body.doubtdate,     
        req.body.topic,  
        req.body.doubtMessage,      
    )

    if (editedDoubt.Studentname.length < 2) {
        editedDoubtError = true;
        switch (editedDoubt.Studentname.length) {
            case 0:
                editedDoubtErrors.push('Debe especificarse el nombre del alumno.');
                break;
            case 1:
                editedDoubtErrors.push('El nombre del alumno debe tener al menos 2 caracteres.');
        }
    } else if (editedDoubt.Studentname.length > 50) {
        editedDoubtError = true;
        editedDoubtErrors.push('El nombre del alumno debe tener menos de 50 caracteres');
    }

    if (editedDoubt.doubtdate.length === 0) {
        editedDoubtError = true;
        editedDoubtErrors.push('Debe especificarse la fecha de la duda.');
    }

    if (!editedDoubt.topic) {
        editedDoubtError = true;
        editedDoubtErrors.push('Debe especificarse el tema al que la duda corresponde.');
    }

    if (editedDoubt.doubtMessage.length < 2) {
        editedDoubtError = true;
        switch (editedDoubt.doubtMessage.length) {
            case 0:
                editedDoubtErrors.push('Debe especificarse el mensaje de la duda.');
                break;
            case 1:
                editedDoubtErrors.push('El mensaje de la duda debe tener al menos 2 caracteres.');
        }
    } else if (editedDoubt.doubtMessage.length > 1000) {
        editedDoubtError = true;
        editedDoubtErrors.push('El mensaje de la duda debe tener menos de 1000 caracteres');
    }

    let response = {valid: false, message: '',subject_id: req.params.subject_id, id:req.params.id};
    response.valid = (!editedDoubtError);

    if (!editedDoubtError) {
        // Actualizar valores de la duda en caso de que se editen
        doubt.Studentname = Studentname || doubt.Studentname;
        doubt.doubtdate = doubtdate || doubt.doubtdate;
        doubt.topic = topic || doubt.topic;
        doubt.doubtMessage = doubtMessage || doubt.doubtMessage;

        // Ahora en doubt tenemos los datos actualizados, ahora actualizamos
        // los datos de esta duda en el mapa de dudas de la respectiva asignatura
        Service.updateDoubt(doubt, subject, id);

        //Pasamos la respuesta correspondiente:
        response.message = 'Volverás a la página de la duda.';
    }   else{
            response.message = 'Los datos introducidos no son válidos para editar la duda.';
            response.errArray = editedDoubtErrors;
    }
    res.json(response);
});


router.get('/subject/:id/delete', (req, res) => {
    
    const id  = req.params.id
    const subject = Service.getSubject(id);         
    
    Service.deleteSubject(id);                      //Borrar asignatura del mapa por su id

    //Ahora tras haber eliminado la asignatura, eliminamos la foto de esta de la carpeta uploads
    if (subject) { 
        fs.unlink(UPLOADS_FOLDER +'/' + subject.imageFilename); 
    }

    //Es importante borrar el nombre de la asignatura del set para poder crearla de nuevo
    //y no se detecte como repetida 
    
    namesSet.delete(subject.name); 
    
res.json(subject);
});

router.get('/doubt/delete/:subject_id/:id/' ,(req, res) => {
    const {subject_id, id } = req.params;
    const subject = Service.getSubject(subject_id);
    const doubt= subject.doubts.get(id);
    
    //Eliminamos la duda del servicio
   
    Service.deleteDoubt(subject,id);
    let remainingDoubts=Service.getDoubtsBySubject(subject_id);

    let response={
        deletedDoubt:doubt,
        numOfRemainingDoubts:remainingDoubts.length
    }
    
   res.json(response);

});

//Este router sirve para devolver a la petición ajax los fragmentos de HTML correspondientes al darle
//al botón de cargar más
router.get("/subjects", (req, res) => {
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);
    const period=parseInt(req.query.period);

    if (period===1){//En el caso de que la asignatura sea del primer cuatrimestre:
        let subjects1Q=Service.getSubjectsByPeriod("Primer Cuatrimestre");
        subjects1Q= subjects1Q.slice(from,to);
        res.render("subjects", {//Renderizamos el html subjects y lo devolveremos al response de la petición ajax
            subjects: subjects1Q,
          });
    }
    else{
        let subjects2Q=Service.getSubjectsByPeriod("Segundo Cuatrimestre");
        subjects2Q= subjects2Q.slice(from,to);
        res.render("subjects", {
            subjects: subjects2Q,
          });
    }
  
    
  });


  router.get("/checkSubjectName", (req, res) => {
    const subjectName=req.query.name;
    let response = {};
    if(namesSet.has(subjectName)){
        response.check=true;
    }else{
        response.check=false;
    }
    
    res.json(response);
  });

export default router;
