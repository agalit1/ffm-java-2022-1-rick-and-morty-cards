import React from "react";
import {CharacterModel} from "./CharacterModel";

type characterProps = { characterProps: CharacterModel };

function CharacterCard(props: characterProps) {
    return <>
        <div className="CharacterCard">
            <h3>{props.characterProps.name}</h3>
            <img src={props.characterProps.image}/>
            <h4>{props.characterProps.origin.name}</h4>
        </div>
    </>
}

export default CharacterCard;
