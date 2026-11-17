## Ariel Eduardo Borbon Izaguirre 252116


¿por qué también valida el servidor?
porque las validaciones de angular son para UX para no estar haciendo peticiones solo para validar, pero se valida el backend para la integridad de los datos, que no importe cualquier cosa que haga el cliente, como bypassear el front con postman, los datos siempre tienen que llegar validados aun que eso signifique validar tambien en el backend

¿por qué httpResource para leer y HttpClient para crear, editar y eliminar?
httpResource es para leer ya que maneja estados de manera automatica, como cargando, error o el dato en si (con signals), mientras que HttpClient es mejor para crear, editar y eliminar ya que son acciones que ocurren despues de un algo (como un click en guardar)


¿qué pasa si se olvida el subscribe()?
si no te suscribes la peticion nunca se hace y el POST no se manda al back


¿a qué pieza de React corresponden las rutas hijas (children), el interceptor y el guardia?
- children: Estas corresponden a las rutas anidadas dentro del outlet
- interceptor: es parte de los interceptores de axios
- guardia: es un wrapper de proteccion (como un RutaProtegida), que revisa el estado antes de regresar el outlet


¿cuándo se ejecuta el guardia y por qué salir() tiene que navegar al login?
el guardia se ejecuta antes de cargar la ruta, salir debe ir al login porque borrar el token no cambia la URL, si no cambia, el usuario se quedaria viendo una pantalla protegida en la que sus clicks siguientes marcarian error



