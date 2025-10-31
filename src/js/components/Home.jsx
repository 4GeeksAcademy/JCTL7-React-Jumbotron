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
    { id: 1, imageUrl: "https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg", title: "PAncho", description: "Lorem ipsum dolor sit amet...", buttonLabel: "Vamos!", buttonUrl: "#" },
    { id: 2, imageUrl: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg", title: "Almudena", description: "Consectetur adipiscing elit...", buttonLabel: "Adelante!", buttonUrl: "#" },
    { id: 3, imageUrl: "https://www.photopills.com/sites/default/files/articles/2021/2020-photopiller-del-ano.jpg", title: "Radamis", description: "Sed do eiusmod tempor...", buttonLabel: "Bora!", buttonUrl: "#" },
    { id: 4, imageUrl: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg", title: "Julio", description: "Ut labore et dolore magna aliqua...", buttonLabel: "Patri!", buttonUrl: "#" },
];

const Home = () => {
    return (
        <>
            <Navbar brand="Arranca!!" />
            
            <div className="container"> 
                <Jumbotron 
                    title="A Warm Welcome!"
                    text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat num..."
                    buttonLabel="Pulsame!"
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
