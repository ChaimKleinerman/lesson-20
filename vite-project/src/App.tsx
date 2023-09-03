import "./App.css";
import {Props} from "./components/type";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/container";
//questions: 

const Book1:Props = {
    title:"Book1",
    imgSrc:"https://img.freepik.com/free-vector/bike-guy-wattpad-book-cover_23-2149452163.jpg?size=626&ext=jpg",
    text:<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam debitis vitae non sint, molestiae placeat quaerat. Blanditiis iusto impedit deserunt esse corrupti odio deleniti nihil laboriosam! Perspiciatis voluptas temporibus fugiat?</p>
    
}

const Book2:Props = {
    title:"Book2",
    imgSrc:"https://media.istockphoto.com/id/1210701957/vector/abstract-minimal-geometric-circle-background-for-business-annual-report-book-cover-brochure.jpg?s=612x612&w=0&k=20&c=ZfeNQNhrDFK_tZZqANCvuAg0eAEwJclsUYTb8_80k-Q=",
    text:<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam debitis vitae non sint, molestiae placeat quaerat. Blanditiis iusto impedit deserunt esse corrupti odio deleniti nihil laboriosam! Perspiciatis voluptas temporibus fugiat?</p>
}

const Book3:Props = {
    title:"Book3",
    imgSrc:"https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg?size=626&ext=jpg",
    text:<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam debitis vitae non sint, molestiae placeat quaerat. Blanditiis iusto impedit deserunt esse corrupti odio deleniti nihil laboriosam! Perspiciatis voluptas temporibus fugiat?</p>
}

const books: Props[] = [Book1,Book2,Book3] 



function App() {
 
    return (
        <div id="container">
          <Header/>
          <Container
          />
          <div id = "footer">
          <Footer/>
          </div>
          

        </div>
    );
}

export  {App,books};
