
import React from 'react'
import { useParams } from 'react-router-dom';

export default function NewOwner() {
    // const parms = useParams();
    const {id}= useParams();
  return (
    // <div><h1>Add new Owner to this car with id : {parms.id}</h1></div>
    <div><h1>Add new Owner to this car with id : {id}</h1></div>
  )
}
