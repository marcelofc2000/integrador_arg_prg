function validar(){
  if (document.formul.nombre.value.length == 0) {
    alert("Por favor, escribí tu nombre")
    document.formul.nombre.focus()
    return 0;
}
  if (document.formul.email.value.length == 0) {
    alert("Por favor, escribí tu mail")
    document.formul.email.focus()
    return 0;
}

if (document.formul.telefono.value.length == 0) {
  alert("Por favor, escribí tu teléfono")
  document.formul.telefono.focus()
  return 0;
}

  if (document.formul.mensaje.value.length == 0) {
    alert("Dejá un mensaje")
    document.formul.mensaje.focus()
    return 0;
}
  alert("Muchas gracias por tu mensaje.  Estaré respondiendo a la brevedad");
  document.formul.submit();
}