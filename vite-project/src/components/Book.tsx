import {Props} from "./type"


export default function Book(props:Props) {
  return (
    <div id="book">
    <div id="h2">
    {props.title}
    </div>
    
    <img src={props.imgSrc} id="img"></img>

    
    <p id="p">{props.text}</p>
    </div>
  )
}

//rcf
