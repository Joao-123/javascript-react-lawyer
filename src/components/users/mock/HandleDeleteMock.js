const handleDelete = (id) => {
  console.log(id);
  const message = "Esta segudo que desa realizar esta accion?"
  let result = window.confirm(message);
  if(result){
    alert("Eliminado exitosamente");
    window.location.reload();
  }
};

export default handleDelete;
