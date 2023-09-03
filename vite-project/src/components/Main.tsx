import { Props } from "./type";
//main function
export default function Main(props: Props) {
    return (
        <div id="main">
            <div id="book">
                <div id="h2">{props.title}</div>

                <img src={props.imgSrc} id="img"></img>

                <p id="p">{props.text}</p>
            </div>
        </div>
    );
}
