import React ,{useContext} from "react";
import Compc from "./Compc"
import {FirstName , LastName} from './App';

const Compb = () =>
{
     const fname = useContext(FirstName);
     const lname  =useContext(LastName);


    return (

      <h1>my name is {fname} {lname} </h1>
    )
        
}

export default Compb;