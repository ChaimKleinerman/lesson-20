import { books } from "../App";
import Main from "./Main";
// import { Props } from "./type";

export default function Container() {
    
  return (
    <div id="main">
      {books.map((book) => (
        <Main {...book}/>
      ))}
    </div>
  );
}
