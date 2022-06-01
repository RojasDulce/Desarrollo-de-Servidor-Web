//Aqui vamos a trabajar con el CRUD 
const data= require('./MOCK_DATA.json');
//desarrollar modulos dentro de node
module.exports={
    getUsers: ()=> data,
    getUser:(id)=>{
let identificador=Number(id);
let user=data.filter((person)=>person.id===identificador)[0];
return user;
    },
    createUser:(dataUser)=>{
        let newUser={
            id: data.length + 1,
            ...dataUser,
        };

        data.push(newUser);
        return newUser;
    },
    putUser:(id)=>{
        let identificador=Number(id);
        let user =data.find((person) =>person.id===identificador);
        if (user){
            let putUser={
                message:'El usuario ha sido modificado',
                id:identificador,
                ...dataUser,
            }
            console.log('Actualizado');
            return putUser;
        }
    },
    deleteUser:(id)=>{
        let identificador=Number(id);
        let user=data.find((person)=>person.id===identificador);
        if(user){
            data.splice(user,1)
            return 'El usuario se elimino'
        }else{
            return 'Usuario no encontrado'
        }
    }
};