import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';


export const CharacterDetails = () =>{

const {id} = useParams()
const [character, setCharacter] = useState(null)

}