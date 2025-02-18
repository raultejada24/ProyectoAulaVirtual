const NUM_RESULTS = 3;

let loadMoreRequestsFrom1Q = 0;
let loadMoreRequestsFrom2Q = 0;

async function loadMore(period) {

  if (period === 1) {//En el caso de que se haya pulsado el botón de cargar más del primer cuatrimestre:

    const from = (loadMoreRequestsFrom1Q + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/subjects?from=${from}&to=${to}&period=${period}`);

    const newSubjects = await response.text();


    const subjectsDiv = document.getElementById("Period1");
    subjectsDiv.innerHTML += newSubjects;//Insertamos en el div cuyo id es Period1 las siguientes 3 asignaturas

    loadMoreRequestsFrom1Q++;
    if (newSubjects === "") {//Al hacer 3 peticiones ya no quedan asignaturas para mostrar
      const buttonLoadMore = document.getElementById("load-more-btn-1Q");
      buttonLoadMore.style.display = 'none';//Si ya no hay más asignaturas para mostrar escondemos el botón
    }
  }
  else {//En el caso de que se haya pulsado el botón de cargar más del segundo cuatrimestre

    const from = (loadMoreRequestsFrom2Q + 1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/subjects?from=${from}&to=${to}&period=${period}`);

    const newSubjects = await response.text();

    const subjectsDiv = document.getElementById("Period2");
    subjectsDiv.innerHTML += newSubjects;

    loadMoreRequestsFrom2Q++;
    if (newSubjects === "") {
      const buttonLoadMore = document.getElementById("load-more-btn-2Q");
      buttonLoadMore.style.display = 'none'; //Si ya no hay más asignaturas para mostrar escondemos el botón
    }
  }

};


async function submitNewSubject(event) {
  event.preventDefault();

  //Evitamos que la pagina se recargue el enviar el formulario.

  const form = document.getElementById("subjectForm");
  form.classList.add("was-validated");

  //Mira si la información del formulario es valida, se utiliza para verificar si todos los 
  //campos dentro de un formulario HTML cumplen con las restricciones de validación:
  if (form.checkValidity()) { 
    const formData = new FormData(event.target);          //Recogemos los datos del formulario.

    const response = await fetch('/subject/new', {        //Realizamos la petición al backend, enviando un objeto con:
      method: "POST",                                     //->Especificación de que se usa el metodo post
      body: formData                                      //->Datos recogidos del formulario
    });

    const result = await response.json();                 //Recogemos la respuesta generada por el servidor.

    const genericModalElement = document.getElementById('genericModal');   //El div principal del modal
    const modalElement = new bootstrap.Modal(genericModalElement);         //Se crea el modal a partir del div
    let modalContent = document.getElementById('modalContent');            //El texto del modal
    const modalConfirmButton = document.getElementById('modalActionBtn');  //El botón de aceptar del modal
    const modalLabel = document.getElementById('modalLabel');              //El título del modal

    //Se añade una apertura de lista no ordenada por si hay que mostrar errores.
    //Si no los hay, estará vacía.
    modalContent.innerHTML += '<ul>';

    //Si los datos del usuario no son válidos: (ver backend router.post('/subject/new',{...}))
    if (!result.valid) {
      modalLabel.innerHTML =
        `<h4 Alternative_text bi bi-exclamation-triangle-fill display-3" class = "text-danger text-center mt-4"> 
   ${result.message}   
    </h4>`;                           //Añadimos el titulo al modal*
      let errorArray = result.errArray; //Extraemos el array de errores de la respuesta

      //Borramos todo el contenido para que los errores no se repitan si el formulario se envia mal varias veces 
      //seguidas. 
      modalContent.innerHTML = '';

      for (error of errorArray) {         //Mostramos el array en el modal con un for-each, añadiendo un <li> por error   
        modalContent.innerHTML +=
          `
      <li class = "text-danger text-center mt-4"> ${error} </li>
      `;
      }
    }
    else {                   //Si el usuario introduce bien los datos:
      modalLabel.innerHTML =
        `<h4 class = "text-success text-center mt-4"> 
    ${result.message} 
    </h4>`;  //Se muestra el titulo del modal*
      modalContent.innerHTML = '<p class = "text-success"> Volverás a la página de inicio </p>';
      modalConfirmButton.addEventListener('click', () => { window.location = '/' });
      //Esta vez, si el botón se pulsa se volverá al index. En la otra parte del if no hace nada, entonces 
      //si se pulsa en ese caso se queda en el formulario para que el usuario lo rellene correctamente.
    }

    //*Si bien es cierto que se podría poner una sola vez fuera del if-else, lo pongo así para que pueda cambiar de 
    //color según los datos sean válidos o no.

    modalContent.innerHTML += '</ul>';  //Cerramos la lista que hemos abierto antes, hayamos metido algo o no.
    modalElement.show();                //Se muestra el modal.
  }
}

async function submitEditSubject(event) {
  event.preventDefault();

  const form = document.getElementById("editSubjectForm");
  form.classList.add("was-validated");

  if (form.checkValidity()) {
    const formData = new FormData(event.target);

    //Sacar el id de la URL actual
    let URL = window.location.href;
    const parts = URL.split('/'); //Divide el string en partes en un array, usando como criterio el caracter que se 
    let subjectID = parts[parts.length - 2];

    const response = await fetch('/subject/' + subjectID + '/edited', {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    const genericModalElement = document.getElementById('genericModal');
    const modalElement = new bootstrap.Modal(genericModalElement);
    const modalContent = document.getElementById('modalContent');
    const modalLabel = document.getElementById('modalLabel');
    const modalConfirmButton = document.getElementById('modalActionBtn');

    modalContent.innerHTML = '<ul>';

    if (!result.valid) {
      modalLabel.innerHTML = `<h4 class="text-danger text-center mt-4"><i class="bi bi-exclamation-triangle-fill"></i> ${result.message}</h4>`;
      modalContent.innerHTML = '';
      for (let error of result.errArray) {
        modalContent.innerHTML += `<li class="text-danger text-center mt-4">${error}</li>`;
      }
    } else {
      modalLabel.innerHTML = '<h4 class="text-success text-center mt-4">La asignatura se ha editado exitosamente</h4>';
      modalContent.innerHTML = `<p class="text-success">${result.message}</p>`;
      modalConfirmButton.addEventListener('click', () => {
      const subjectId = result.subjectID;
        if (subjectId) {
          window.location.href = `http://localhost:3000/detail/${subjectId}`;
        } else {
          console.error('No se encontró el ID de la asignatura');
        }
      });

    }

    modalContent.innerHTML += '</ul>';
    modalElement.show();
  }
}

async function submitNewDoubt(event) {
  event.preventDefault();

  const form = document.getElementById("doubtForm");
  form.classList.add("was-validated");

  if (form.checkValidity()) {

    let URL = window.location.href;
    let subjectID = URL.replace('http://localhost:3000/detail/', ''); //Extraer subject id de la asignatura actual

    const formData = new FormData(event.target);

    const response = await fetch('/doubt/' + subjectID + '/new/', {
      method: "POST",
      body: new URLSearchParams(formData),
    });

    const result = await response.json();
    
    const genericModalElement = document.getElementById('genericModal');   //El div principal del modal
    const modalElement = new bootstrap.Modal(genericModalElement);         //Se crea el modal a partir del div
    let modalContent = document.getElementById('modalContent');            //El texto del modal
    const modalLabel = document.getElementById('modalLabel');

    modalContent.innerHTML += '<ul>';
    if (result.valid) {
      modalLabel.innerHTML =
        `<h4 class = "text-success text-center mt-4"> 
    ${result.message} 
    </h4>`;
      modalContent.innerHTML = '<p class = "text-success"> Puedes verla en el foro de dudas de la asignatura. </p>';
    }
    else {
      modalLabel.innerHTML =
        `<h4 Alternative_text bi bi-exclamation-triangle-fill display-3" class = "text-danger text-center mt-4"> 
    ${result.message}   
    </h4>`;
      let errorArray = result.errArray;

      modalContent.innerHTML = '';

      for (error of errorArray) {
        modalContent.innerHTML +=
          `
         <li class = "text-danger text-center mt-4"> ${error} </li>
         `;
      }
    }
    modalContent.innerHTML += '</ul>';
    modalElement.show();
    event.target.reset(); //vaciar el formulario

   //Como estamos agregando una duda, dejamos de mostrar el mensaje de que ya no quedan dudas para esa asignatura
    
    let EmptyDoubtSectionMessageDiv= document.getElementById("EmptyDoubtSectionMessage");
    EmptyDoubtSectionMessageDiv.innerHTML=``;
    EmptyDoubtSectionMessageDiv.display="none";
    EmptyDoubtSectionMessageDiv.classList.remove("bi-exclamation-triangle-fill");
    
   
    //Agregar duda al HTML
    let doubtDiv=document.getElementById("doubts");

    let doubt=result.doubt;//Recogemos la duda para insertarla al HTML
    
    doubtDiv.innerHTML+=`
    <div id="doubt-${doubt.id}">
    <div class="doubt mb-3 comment">
    <h4><strong></strong>Nombre del Alumno:</strong>  ${doubt.Studentname}</h4>
    <p><strong>Fecha de Publicación:</strong> ${doubt.doubtdate}</p>
    <p><strong>Tema:</strong> ${doubt.topic}</p>
    <p><strong>Duda:</strong> ${doubt.doubtMessage}</p>
    <!-- Action Buttons -->
    <button class="btn btn-danger bi bi-trash" onclick="deleteDoubt(${doubt.id})"> Borrar</button>
    <button id="/editButton/${subjectID}/${doubt.id}"
    class="btn btn-warning bi bi-pencil-square Button_flex_detail"
    onclick="editDoubt(${subjectID},${doubt.id})"> Editar </button>
    </div>
    </div>`;
    

    //Como se ha introducido correctamente la duda, no mostramos errores en el formulario
    form.classList.remove("was-validated");
    //Si no se pone esta línea al enviar el formulario de dudas saldrán errores en el formulario por quedarse vacío
    //En el caso de que no se hayan introducido correctamente los valores, el formulario mostrará los errores
  }
}

async function validateSubject() {

  const subjectName = document.getElementById("subject").value;

  const divInput = document.getElementById("subject");
 
  const validityState = divInput.validity; //Esta constante contiene informacion sobre el input sobre si es válido o no

  const errorDiv = document.getElementById("ErrorSubject");

  const regExpression = /^2034\s-\s/;//expresion regular que sirve para comprobar que la asignatura empieza por "2034 - " (con espacios incluidos...)

  //En el caso de que el usuario haya escrito, este mensaje de error se ocultara y se mostrarán los otros
  let divNameSubjectError = document.getElementById("divNameSubjectError");
  divNameSubjectError.style.display = "none";

  
  if (validityState.valueMissing) {//mirar si el nombre esta vacio, si lo esta mostrar mensaje de que esta vacio, añadir al div del mensaje la clase

    //Mostrar campo input en rojo
    divInput.classList.remove("is-valid");
    divInput.classList.add("is-invalid");

    errorDiv.classList.add("invalid-feedback");//Añadimos esta clase al div del error para que reciba el color rojo...
    errorDiv.innerHTML = `<p>El nombre de la asignatura no puede ser vacío</p>`;


  }
  else if (!regExpression.test(subjectName)) { //comprobar expresión regular para la mayuscula
    
    //Si no cumple la expresion regular, mostrar cuadro del campo en rojo...
    divInput.classList.remove("is-valid");
    divInput.classList.add("is-invalid");

    //Mostrar mensaje de error en rojo:
    errorDiv.classList.add("invalid-feedback");
    errorDiv.innerHTML = `<p> El nombre de la asignatura debe empezar el codigo del grado ('2034 - ')</p>`;
     //se utiliza para establecer un mensaje de validación personalizado en un campo de entrada de formulario.
    
  }
  else {

    //Si no ocurre ninguno de esos casos preguntar al servidor si esta la asignatura en el conjunto

    //Esta ruta lo comprueba:
    const response = await fetch(`/checkSubjectName?name=${subjectName}`);
    
    const responseObject = await response.json();

    if (responseObject.check) {

      divInput.classList.remove("is-valid");
      divInput.classList.add("is-invalid");
      
      errorDiv.classList.add("invalid-feedback");
      errorDiv.innerHTML = `<p> El nombre de la asignatura ya existe</p>`;
    }
    else {  

      divInput.classList.remove("is-invalid");
      divInput.classList.add("is-valid");
    
      errorDiv.classList.add("valid-feedback");
      errorDiv.innerHTML = ``;//No mostramos mensaje ya que el valor introducido es correcto
      //En caso de que no este en el conjunto se muestra verde porque cumple los requisitos, con valid
    }
  }
  
}

async function deleteSubject(id){
  
  const response= await fetch(`/subject/${id}/delete`);//Hacemos una llamada a esta ruta para que elimine la asignatura con ese id


  const genericModalElement = document.getElementById('genericModal');   //El div principal del modal
  const modalElement = new bootstrap.Modal(genericModalElement);         //Se crea el modal a partir del div
  let modalContent = document.getElementById('modalContent');            //El texto del modal
  const modalConfirmButton = document.getElementById('modalActionBtn');  //El botón de aceptar del modal
  const modalLabel = document.getElementById('modalLabel');              //El título del modal

  if (response.ok) { //Si la respuesta es correcta, es decir, se ha borrado con éxito la asignatura entonces...
    modalLabel.innerHTML =
      `<h4 class = "text-success text-center mt-4"> Se ha borrado la asignatura con éxito
  </h4>`;
    modalContent.innerHTML = '<p class = "text-success"> Volverás a la pantalla de inicio </p>';
    modalConfirmButton.addEventListener('click', () => { window.location = '/' });
      //Configuramos en enlace destino del boton de manera que si se ha borrado correctamente la asignatura 
      // y el botón se pulsa se volverá al index habiendo eliminado la asignatura.
  }
  else {
    //Si no se ha podido borrar la asignatura entonces se muestra el mensaje de error en el modal y se mantiene en la 
    //pagina de detalle de la asignatura
    modalLabel.innerHTML =
      `<h4 Alternative_text bi bi-exclamation-triangle-fill display-3" class = "text-danger text-center mt-4"> 
  Ha ocurrido un error
  </h4>`;

  modalContent.innerHTML='<p class = "text-danger"> No se ha podido borrar la asignatura </p>'
    
  }

  //No es necesario añadir siempre un <ul> al modal, eso se hace en los de los errores para que saliera en 
  //forma de lista, como aquí solo se muestra un texto u otro, no es necesario

  modalElement.show(); //Se muestra el modal a través de esta línea 
}

async function deleteDoubt(doubtId){


  //Extraer subject id de la asignatura actual
  let URL = window.location.href;
  let subjectID = URL.replace('http://localhost:3000/detail/', '');

  //Llamamos a la ruta para que elimine la duda
  let response= await fetch(`/doubt/delete/${subjectID}/${doubtId}`);
  let result= await response.json();


  //Cogemos el div donde esta la duda 
  let doubtDiv= document.getElementById(`doubt-${doubtId}`);

  if (result.numOfRemainingDoubts===0){//Si no quedan dudas mostramos este mensaje
    let doubtErrorMessageDiv= document.getElementById("EmptyDoubtSectionMessage");
    doubtErrorMessageDiv.innerHTML=`<p class="bi bi-exclamation-triangle-fill text-danger text-center"> Actualmente no se han subido dudas sobre esta asignatura al foro </p>`;
    
    doubtDiv.remove();//Mejor usar remove que display none
  
  }
  else{//Si queda alguna duda entonces vaciamos el div de esa duda y no lo mostramos

    doubtDiv.remove();//Mejor usar remove que display none
  
  }

  
  const genericModalElement = document.getElementById('genericModal');   //El div principal del modal
  const modalElement = new bootstrap.Modal(genericModalElement);         //Se crea el modal a partir del div
  let modalContent = document.getElementById('modalContent');            //El texto del modal
  const modalLabel = document.getElementById('modalLabel');              //El título del modal

  //En este caso no he usado el botón de confirmar el modal, ya que sea cual sea el resultado el usuario se deberá
  //quedar en la página de detalle

  if (response.ok) { //Si la respuesta es correcta, es decir, se ha borrado con éxito la duda entonces...
    modalLabel.innerHTML =
      `<h4 class = "text-success text-center mt-4"> Se ha borrado la duda con éxito
  </h4>`;
    modalContent.innerHTML = '<p class = "text-success"> Ya no se mostrará la duda en la página de detalle de la asignatura </p>';
    
  }
  else {
    //Si no se ha podido borrar la duda entonces se muestra el mensaje de error en el modal y se mantiene en la 
    //pagina de detalle de la asignatura
    modalLabel.innerHTML =
      `<h4 Alternative_text bi bi-exclamation-triangle-fill display-3" class = "text-danger text-center mt-4"> 
  Ha ocurrido un error
  </h4>`;

  modalContent.innerHTML='<p class = "text-danger"> No se ha podido borrar la asignatura </p>'
    
  }

  //No es necesario añadir siempre un <ul> al modal, eso se hace en los de los errores para que saliera en 
  //forma de lista, como aquí solo se muestra un texto u otro, no es necesario

  modalElement.show(); //Se muestra el modal a través de esta línea 

}

async function editDoubt(subjectIde, idDoubt) {
  try {
    // Realizar la solicitud al router y obtener el JSON
    const response = await fetch(`/doubt/edit/${subjectIde}/${idDoubt}`);

    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      console.error(`Error al obtener los datos: ${response.statusText}`);
      return;
    }

    // Parsear la respuesta a JSON
    const data = await response.json();

    // Obtener el elemento con ID "doubt-${idDoubt}"
    let doubtDiv = document.getElementById(`doubt-${idDoubt}`);

    // Verificar que el elemento exista antes de modificar su contenido
    if (!doubtDiv) {
      console.error("Elemento con ID 'doubt' no encontrado");
      return;
    }

    // Guardar el contenido original del elemento
    const originalContent = doubtDiv.innerHTML;

    // Actualizar el contenido del elemento usando innerHTML y los datos del JSON
    doubtDiv.innerHTML = `
      <div class="subject_info_detail container mt-5 my-5">
        <h3 style="text-align: center;"><strong>Editar Duda</strong></h3>
        <!--Formulario de editar Dudas-->
        <form id="editDoubtForm" role="form" method="POST" enctype="multipart/form-data" class="needs-validation" novalidate>
          <input type="hidden"/>
          
          <div class="form-group mb-3">
              <label for="Studentname" class="form-label"><strong>Nombre del Alumno</strong></label>
              <input name="Studentname" type="text" class="form-control" id="Studentname" 
                  value="${data.doubtStudentname}" placeholder="Escribe tu nombre" minlength="2" maxlength="50" required>
              <div class="invalid-feedback">
                  Por favor escribe un nombre válido (entre 2 y 50 caracteres).
              </div>
          </div>

          <div class="form-group mb-3">
              <label for="doubtdate" class="form-label"><strong>Fecha de Publicación</strong></label>
              <input name="doubtdate" type="date" class="form-control" id="doubtdate" 
                  value="${data.doubtDate}" required>
              <div class="invalid-feedback">
                  Por favor selecciona la fecha de publicación.
              </div>
          </div>

          <div class="form-group mb-3">
              <label for="topic" class="form-label"><strong>Tema</strong></label>
              <select name="topic" class="form-select" id="topic" aria-label="Dropdown of options" required>
                  <option value="" selected disabled>Elige un tema...</option>
                  <option value="1" ${data.doubtTopic === "1" ? "selected" : ""}>Tema 1</option>
                  <option value="2" ${data.doubtTopic === "2" ? "selected" : ""}>Tema 2</option>
                  <option value="3" ${data.doubtTopic === "3" ? "selected" : ""}>Tema 3</option>
                  <option value="4" ${data.doubtTopic === "4" ? "selected" : ""}>Tema 4</option>
                  <option value="5" ${data.doubtTopic === "5" ? "selected" : ""}>Tema 5</option>
              </select>
              <div class="invalid-feedback">
                  Por favor selecciona un tema.
              </div>
          </div>

          <div class="form-group mb-3">
              <label for="doubtMessage" class="form-label"><strong>Duda del Alumno</strong></label>
              <textarea name="doubtMessage" class="form-control" id="doubtMessage" rows="3"
                  placeholder="Escribe aquí tu duda" minlength="2" maxlength="1000" required>${data.doubtMessage}</textarea>
              <div id="divNameSubjectError" class="invalid-feedback">
                  Por favor escribe una descripción válida de la duda (entre 2 y 1000 caracteres).
              </div>
          </div>

          <div class="container container_flexbox">
              <button type="submit" class="btn btn-success bi bi-save" style="margin-right: 10px;"> Guardar cambios</button>
              <a href="#" class="btn btn-danger bi" id="cancelEditButton">Cancelar</a>
          </div>
        </form>
      </div>
    `;

    // Seleccionar el formulario recién creado y asociar el evento
    const editDoubtForm = document.getElementById("editDoubtForm");
    editDoubtForm.addEventListener("submit", (event) => submitEditDoubt(event, idDoubt));

    // Añadir evento al botón de cancelar para restaurar el contenido original
    const cancelButton = document.getElementById("cancelEditButton");
    cancelButton.addEventListener("click", (event) => {
      event.preventDefault(); // Previene la navegación inmediata
      doubtDiv.innerHTML = originalContent; // Restaura el contenido original
    });
  } catch (error) {
    console.error("Error al editar la duda:", error);
  }
}

async function submitEditDoubt(event, doubtID) {
  event.preventDefault();

  const form = document.getElementById("editDoubtForm");
  form.classList.add("was-validated");

  if (form.checkValidity()) {
      const formData = new FormData(event.target);

      const URL = window.location.href;
      const parts = URL.split('/');
      const subjectID = parts[parts.length - 1];

      const response = await fetch(`/doubt/edited/${subjectID}/${doubtID}`, {
        method: "POST",
        body: new URLSearchParams(formData), //Indicamos que el formulario no lleva ficheros
      });

      const result = await response.json();
      const genericModalElement = document.getElementById('genericModal');
      const modalElement = new bootstrap.Modal(genericModalElement);
      const modalContent = document.getElementById('modalContent');
      const modalLabel = document.getElementById('modalLabel');
      const modalConfirmButton = document.getElementById('modalActionBtn');

      modalContent.innerHTML = '<ul>';
      if (!result.valid) {
        modalLabel.innerHTML = `<h4 class="text-danger text-center mt-4"><i class="bi bi-exclamation-triangle-fill"></i> ${result.message}</h4>`;
        modalContent.innerHTML = '';
        for (let error of result.errArray) {
          modalContent.innerHTML += `<li class="text-danger text-center mt-4">${error}</li>`;
        }
      } else {
        modalLabel.innerHTML = '<h4 class="text-success text-center mt-4">La asignatura se ha editado exitosamente</h4>';
        modalContent.innerHTML = `<p class="text-success">${result.message}</p>`;
        modalConfirmButton.addEventListener('click', () => {
        const subjectID = result.subject_id;
          if (subjectID) {
            window.location.href = `http://localhost:3000/detail/${subjectID}`;
          } else {
            console.error('No se encontró el ID de la asignatura');
          }
        });
  
      }
  
      modalContent.innerHTML += '</ul>';
      modalElement.show();
  } else {
      console.warn("El formulario no es válido.");
  }

}
