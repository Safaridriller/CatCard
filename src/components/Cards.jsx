import React from "react";
import Catcard from "./Catcard";
import DefuseCard from "./DefuseCard";
import BombCard from "./BombCard";
import ShuffleCard from "./ShuffleCard";
function Cards(props){
    if(props.name === "cat"){
        return <Catcard delCard = {props.delCard} count = {props.count} fordel = {props.fordel}></Catcard>
    }
    if(props.name === "defuse"){
        return <DefuseCard delCard = {props.delCard} count = {props.count} fordel = {props.fordel} defcount = {props.defcount}></DefuseCard>
    }
    if(props.name === "bomb"){
        return <BombCard end = {props.end} fordel = {props.fordel} count = {props.count}></BombCard>
    }
    else{
        return <ShuffleCard defcount = {props.defcount}arr = {props.arr} ccount = {props.ccount} todraw = {props.fordel} draw = {props.reshuffle} count = {props.count}></ShuffleCard>
    }
}
export default Cards;