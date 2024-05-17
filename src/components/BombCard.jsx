import Card from "react-bootstrap/Card"
import React, { useState } from "react";

function BombCard(props){
    var [imgurl,setimg] = useState("https://i.pinimg.com/736x/8b/87/4a/8b874ac3b63e483339cbdb05a15fb716.jpg");
    var [changed,setchange] = useState(true);
    function bomb(){
        if(props.count === props.fordel - 1){
            setimg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlKg7l_HzHbWFaRFVhyusQ3n_8VFmlbdXD79rmQiUuA&s")
            setchange(false)
            setTimeout(() => {
                props.end();
            }, 1000);
            
        }
        
    }
    return (
        <Card style={{ height: '350px',width : "18rem",margin : "10px"}} onClick={bomb}>
        <Card.Body>
        
        <Card.Img variant="top" sizes = "50px" src={imgurl} style={changed?{height : "300px"} : {}}/>
        
        
        <Card.Title hidden = {changed}>Bomb Card</Card.Title>
        <Card.Text hidden = {changed}>TICK TICK BOOM</Card.Text>
        </Card.Body>
        </Card>)
}
export default BombCard