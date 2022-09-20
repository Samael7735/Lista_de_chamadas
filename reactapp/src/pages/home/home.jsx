import React, {useState} from 'react'
import './style.css'
import {Card} from '../../components/card'

export function App() {
  const [studantName, setStudantName] = useState();

  return (
    <div className="container">
      <h1>nome: {studantName}</h1>
      <input type="text"
       placeholder='Digite seu nome aqui'
       onChange={e => setStudantName(e.target.value)}
       />
      <button>Enviar</button>
      <Card name="Samuel" time="10:55:00"/>
      <Card name="Rafaella" time="10:35:00"/>
    </div>
  )
}
