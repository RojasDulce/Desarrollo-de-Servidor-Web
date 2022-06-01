//Index.js Va a contener todo el servidor

const express = require("express");
const Service = require("./src/service");
//const data = require('./MOCK_DATA.json');
//Generar una aplicacion de express
const app = express();

const PORT = 3000;
//recibir datos
app.use(express.json());
//A partir de aqui express podrá realizar peticiones
//estas rutas se les llama endpoints
app.get("/", (req, res) => {
  res.json({
    message: "Lista de usuarios",
    body: Service.getUsers(),
  });
});

app.get("/:id", (req, res) => {
  let {
    params: { id },
  } = req;
  let user = Service.getUser(id);

  res.json({
    //template string
    message: `Usuario ${id}`,
    //obtiene solo el id
    //body: Service.getUser(),
    //obtiene el usuario completo ocn sus datos
    body:user,
  });
});

app.put('/:id',(req,res)=>{
    let {
        params: {id}
    } = req;
    let user = Service.putUser(id);
    res.json({
        message: `Se ha modificado el usuario: ${id}`,
        body: user,
    });
});

app.delete('/id:',(req,res)=>{
let{
    params:{id}
}=req;
let user=Service.deleteUser(id);
res.json({
    message:`Se ha eliminado el usuario:${id}`,
    body:user,
})
});

//Para crear un nuevo recurso en el servidor usamos posts
app.post("/", (req, res) => {
  let { body: newUser } = req;
  let user = Service.createUser(newUser);
  //Responder al cliente
  res.status(201).json({
    message: "Usuario creado",
    body: user,
  });
});
//Levantar peticiones con listen
//Listen recibe un puerto y un clb que nos dice cuando recibe peticiones
app.listen(PORT, () => {
  //localhost dice que se está ejecutando n nuestro mismo computador
  console.log(`Servidor escuchando en http://localhost:${PORT}/`);
});
