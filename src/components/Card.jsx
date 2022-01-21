import React,{useState} from 'react';

export default function Card(props) { 
  const [numero,setNumero] = useState(0)
  const aumentar = ()=>{
    setNumero(numero+1)
  }
  console.log(props)
  return <>
   <h2>Titulo{props.titulo}</h2>
    <h3>Mi contenido {props.numero}</h3>
    <h3>Numero:{numero}</h3>
    <button onClick={aumentar}>Aumentar</button>
    ,<button onClick={()=>{setNumero(numero-1)}}>Disminuir</button>
    {/* <> es un fragmento para no anidar el componete*/}
  </>;
}
