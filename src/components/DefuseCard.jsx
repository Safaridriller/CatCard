import { useState } from "react";
import Card from "react-bootstrap/Card"
function DefuseCard(props){
    var [imgurl,setimg] = useState("https://i.pinimg.com/736x/8b/87/4a/8b874ac3b63e483339cbdb05a15fb716.jpg")
    var [changed,setchange] = useState(true);
    function defuse(){
        
        console.log(props.fordel,props.count);
        if(props.count === props.fordel - 1){
            setimg("https://image.spreadshirtmedia.net/image-server/v1/compositions/T56A2PA4115PT17X0Y17D16531833W24948H26988CxFFFFFF/views/1,width=550,height=550,appearanceId=2,backgroundColor=000000,noPt=true/defuse-kit-tote-bag.jpg")
            setchange(false)
            setTimeout(() => {
                props.delCard();
            }, 1000);
            
        }
        return props.defcount((prev) => {
            return prev + 1;
        })
    }
    return (<Card style={{ height: '350px',width : "18rem",margin : "10px"}} onClick={defuse}>
        <Card.Body>

        <Card.Img variant="top" size = "100px" src = {imgurl} style={changed?{height : "300px"} : {}}/>
        <Card.Title hidden = {changed}>Defuse Card</Card.Title>
        <Card.Text hidden = {changed}>NEXT BOMB WILL BE DEFUSED</Card.Text>
        </Card.Body>
    </Card>)
}
export default DefuseCard;
