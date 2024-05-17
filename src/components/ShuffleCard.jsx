import Card from "react-bootstrap/Card"
import { useState } from "react";
function ShuffleCard(props){
    var [imgurl,setimg] = useState("https://i.pinimg.com/736x/8b/87/4a/8b874ac3b63e483339cbdb05a15fb716.jpg");
    var [changed,setchange] = useState(true);
    function shuffle(){
        if(props.count === props.todraw - 1){
            setimg("https://t3.ftcdn.net/jpg/05/40/37/86/360_F_540378606_ghVvAH5dsq6LXLxjqgLJIf3DEHXczBiU.jpg");
            setchange(false)
            setTimeout(() => {
                props.arr([]);
                props.ccount(5);
                props.draw()
                props.defcount(0);
            }, 1000);
            console.log("called");
        }
    }
    return (<Card style={{ height: '350px',width : "18rem",margin : "10px"}} onClick={shuffle}>
        <Card.Body>

        <Card.Img variant="top" src={imgurl} sizes="100px" style={changed?{height : "300px"} : {}} />
        <Card.Title hidden = {changed}>Shuffle Card</Card.Title>
        <Card.Text hidden = {changed} >NEW DECK DRAWN</Card.Text>
        </Card.Body>
    </Card>)
}
export default ShuffleCard;