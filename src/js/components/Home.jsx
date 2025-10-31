import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
//const Home = () => {
//	return (
//		<div className="text-center">
          

//			<h1 className="text-center mt-5">Hello Rigo!</h1>
//			<p>
//				<img src={rigoImage} />
//			</p>
//			<a href="#" className="btn btn-success">
//				If you see this green button... bootstrap is working...
//			</a>
//			<p>
//				Made by{" "}
//				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
//				love!
//			</p>
//		</div>
//	);
//};
const cardData = [
    { id: 1, imageUrl: "...", title: "Card Title 1", description: "Lorem ipsum dolor sit amet...", buttonLabel: "Find Out More!", buttonUrl: "#" },
    { id: 2, imageUrl: "...", title: "Card Title 2", description: "Consectetur adipiscing elit...", buttonLabel: "Find Out More!", buttonUrl: "#" },
    { id: 3, imageUrl: "...", title: "Card Title 3", description: "Sed do eiusmod tempor...", buttonLabel: "Find Out More!", buttonUrl: "#" },
    { id: 4, imageUrl: "...", title: "Card Title 4", description: "Ut labore et dolore magna aliqua...", buttonLabel: "Find Out More!", buttonUrl: "#" },
];

const Home = () => {
    return (
        <>
            <Navbar brand="Start Bootstrap" />
            
            <div className="container"> 
                <Jumbotron 
                    title="A Warm Welcome!"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat num..."
                    buttonLabel="Call to action!"
                    buttonUrl="#"
                />
                <div className="row">
                    {cardData.map(card => (
                        <Card 
                            key={card.id}
                            imageUrl={card.imageUrl}
                            title={card.title}
                            description={card.description}
                            buttonLabel={card.buttonLabel}
                            buttonUrl={card.buttonUrl}
                        />
                    ))}
                </div>
            </div> 
            
            <Footer />
        </>
    );
};

export default Home;
