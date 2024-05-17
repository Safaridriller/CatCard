import { useState } from "react";
import React from "react";
import Cards from "./Cards";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gameover from "./Gameover";
import Button from "react-bootstrap/Button";
function App(){
    var [drawlen,set] = useState(5);
    var [start,setstart] = useState(false);
    var [todraw,setarr] = useState([]);
    var [defuse,setcount] = useState(0);
    var [ended,setend] = useState(false);
    var [tohide,sethide] = useState(false);
    var temp = []
    var available_cards = ["cat","bomb","defuse","shuffle"]
    function draw(){
        for(let i = 0;i<5;i++){
            let cardindex = Math.floor(Math.random() * 4)
            temp.push(available_cards[cardindex])
        }
        setarr(temp)
        setstart(true)
        setend(false)
        sethide(true)
    }
    var content = todraw.map((card,index) => {
        return <Cards name = {card} delCard = {delCard} defcount = {setcount} end = {endgame} count = {index} fordel = {drawlen}
        reshuffle = {draw} arr = {setarr} ccount = {set} ></Cards>
    })
    function delCard(){
        set((prev) => {
            return prev - 1;
        })
        setarr(todraw.slice(0,drawlen-1));
    }
    function endgame(){
        if(defuse > 0){
            setcount((prev) => {
                return prev - 1
            })
            console.log("bomb defused");
            delCard();
        }
        else{
            setarr([]);
            set(-1);
            setend(true);
            setstart(false);
        }
    }
    if(drawlen === -1){
        content = <Gameover />
    }
    if(drawlen === 0){
        content = <h1>You won</h1>
        ended = true
        start = false
    }
    function replay(){
        setstart(true);
        setarr([]);
        set(5);
        setend(false)
        draw();
    }
    return<div> 
        <div style={start?{display : "flex",padding : "20px",marginTop : "100px"}:{display : "block",textAlign: "center",marginLeft : "50px"}}>
        {content}
        </div>
        <div style={{textAlign : "center"}}>
        <h1 hidden = {tohide} style={{margin : "50px"}}>Hello player<br></br>Press on the button to start the game</h1>
        <Button onClick={draw} hidden = {tohide} variant = "dark" size = "lg">DRAW CARDS</Button>
        <Button onClick={replay} hidden = {!ended} variant = "dark" size = "lg">PLAY AGAIN</Button>
        
        </div>
    
    </div>
}

export default App;