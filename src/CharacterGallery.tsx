import React from 'react';
import CharacterCard from "./CharacterCard";
import characterCard from "./CharacterCard";
import {CharacterModel} from "./CharacterModel";

function CharacterGallery(props: {gallery:CharacterModel[]}) {
 return (
     <>
         {
             props.gallery.map(character => <CharacterCard characterProps={character} key={character.id}/>)
         }
         </>
 )
}

export default CharacterGallery;