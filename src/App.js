import React from "react";
import Card from "./components/Card";

const numero = 1
const App = () =>{
  //se regresan elementos de jsx
  const listaAlumnoSimple=['ivan','daniel','carlos']
  //const listaAlumnos = [<p>ivan</p>,<p>esteban</p>,<p>carlos</p>]
  return (
    
    <div>
      <p id ='saludo'>Hola</p>
      <Card titulo ={`numero ${numero}`} numero ={numero}/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      {listaAlumnoSimple.map((alumno,index)=><p key={index}>{alumno}</p>)}
    </div>
  )
}

export default App