const guardarContacto = (localDataBase, contacto) => {
  localDataBase.setItem(contacto.id, JSON.stringify(contacto));
  window.location.href = "/";
};

const cargarContactos = (localDataBase, parentNode) => {
  let claves = Object.keys(localDataBase);

  for (clave of claves) {
    if (claves === 0) {
      console.log("No contacts");
    }
    let contacto = JSON.parse(localDataBase.getItem(clave));
    crearContacto(parentNode, contacto, localDataBase);
  }
};

const crearContacto = (parentNode, contacto, localDataBase) => {
  let divContacto = document.createElement("div");
  let nombreContacto = document.createElement("h3");
  let numeroContacto = document.createElement("p");
  let direccionContacto = document.createElement("p");
  let btnBorrar = document.createElement("span");

  nombreContacto.innerHTML = contacto.nombre;
  numeroContacto.innerHTML = contacto.numero;
  direccionContacto.innerHTML = contacto.direccion;
  btnBorrar.innerHTML = "delete_forever";

  divContacto.classList.add("tarea");
  btnBorrar.classList.add("material-icons", "icono");

  btnBorrar.onclick = () => {
    localDataBase.removeItem(contacto.id);
    window.location.href = "/";
  };

  divContacto.appendChild(nombreContacto);
  divContacto.appendChild(numeroContacto);
  divContacto.appendChild(direccionContacto);
  divContacto.appendChild(btnBorrar);

  parentNode.appendChild(divContacto);
};
