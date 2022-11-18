export default {
  defualt:`query{
      default
    }`
  ,Granja:{
    getGranja:`query($granja: GranjaInput){
      getGranja(granja: $granja){
         id,
         nombre,
         activa,
         fechaAdd
      }
     }`
    , addUser:`mutation($user: UserInput!){
      addUser(user: $user) {
        id,
        nombre,
        apePat,
        apeMat,
        telefono,
        email,
        pasword
      }
    }`
    , updateUser:`mutation($updatUserId: ID!, $user: UserInput){
      updatUser(id: $updatUserId,user: $user) {
        id,
        nombre,
        apePat,
        apeMat,
        telefono,
        email,
        pasword
      }
    }`
  }
  ,Admin:{
    getAdmin:`query($admin: AdminInput){
      getAdmin(admin: $admin) {
        id,
        idGranja,
        nombre,
        apellido,
        usuario,
        password
      }
     }` 
  }
}