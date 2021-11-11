let mysql= require("mysql2")
let connection = mysql.createConnection
(
    {
        host : "localhost",
        user: "root",
        password: "12345678",
        database:"CODENOTCH"
    }
);

connection.connect(function(error)
{
    if (error)
        console.log(error);
    else 
        console.log("Conexion correcta")
});


// let sql = "DROP TABLE AntiguosAlumnos";
// connection.query(sql,function(error,resultado)
// {
//     if (error)
//         throw error;
//     else 
//         console.log("Tabla eliminada")
// });

// let sql = "INSERT INTO ASIGNATURA_PROFESORES (id_asignatura, id_profesor, id_grupo) VALUES (0,2,3)"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Dato insertado")
//         console.log(resultado)
// })

// let sql = "INSERT INTO NOTAS (id_estudiantes, id_asignatura, fecha,nota) VALUES ?";
// let values = 
// [
//     [2, 0, "2017-10-02",8],
//     [2, 1, "2017-09-10",4],
//     [4, 0, "2010-08-7",5],
//     [4, 1, "2010-06-7",2]
// ]
// connection.query(sql, [values], function(err,resultado) {
//     if (err) throw err;
//     else
//     {
//     console.log("Datos insertados");
//     console.log(resultado)
//     }
   
// });
// let sql = "INSERT INTO ESTUDIANTES (apellido1, apellido2, id_grupo) VALUES ?";
// let values = 
// [
//     ["Lopez", "Garrido",3],
//     ["Badia", "Boye",3],
//     ["Iniesta", "Badia",4],
//     ["Garcia", "Suarez",2]
// ]
// connection.query(sql, [values], function(err,resultado) {
//     if (err) throw err;
//     else
//     {
//     console.log("Datos insertados");
//     console.log(resultado)
//     }
   
// });

// let sql = "UPDATE NOTAS SET nota = 0"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Dato actualizado")
//         console.log(resultado)
// })
// let sql = "SELECT apellido1,apellido2 FROM ESTUDIANTES "
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Seleccion realizada")
//         console.log(resultado)
        
// })
// let sql = "SELECT apellido1,apellido2 FROM PROFESORES "
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Seleccion realizada")
//         console.log(resultado)
        
// })


let sql = "DELETE FROM NOTAS WHERE fecha<20111231"
connection.query(sql,function(error, resultado){
    if (error)
        console.log(error)
    else
        console.log("Dato borrado")
        console.log(resultado)
})
// let sql = "UPDATE NOTAS SET nota = 5 WHERE nota<5"
// connection.query(sql,function(error, resultado){
//     if (error)
//         console.log(error)
//     else
//         console.log("Dato actualizado")
//         console.log(resultado)
// })