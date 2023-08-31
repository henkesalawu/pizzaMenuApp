import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

function App() {
    return (
         <div className="container">
         <Header />
         <Menu />
         <Footer />
         </div>
    );
}

function Header() {
    //first {} to enter js mode, second {} to create object style
    //style inside compoment is ok/ in js we wld do in css
    //const style = {color: "red", fontSize: "48px", textTransform: "uppercase"}
   // return <h1 style={style}>Fast React Pizza Co.</h1>;
    //for bigger apps include xternal css file; add class names to jsx elements
    //need to import css file at begining of file
    //add class name to the element we want ti to be applied to
    return (
        <header className="header">
        <h1>Fast React Pizza Co.</h1>
        </header>);
}
// use map to create new array which contains 6pizzas
//only wantt o render list if there r pizzas,

//react fragment <></> does not create any new element - jst wrap seerate eleent
//sometimes need to add key to react frag , like for list
//<React.Fragment key="dfs"></React.Fragment>

function Menu () {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
    return (
    <main className="menu">
    <h2>Our menu</h2>


    {numPizzas > 0 ? (
      <>
      <p>Authenitc Italian cusisine. 
    6 creative dishes to choose from. 
    All from our stone oven, all organic all delcious.
    </p>

    <ul className="pizzas">
    {pizzas.map((pizza) => (
      <Pizza pizzaObj={pizza} key={pizza.name}/>
    ))}
    </ul> 
    </>
    ) : (<p>We're still working on our menu. Please come back later</p> )}
    </main>
    );
}

function Footer() {
    const hour = new Date().getHours()
    const openHour = 10;
    const closeHour = 20;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

   // if(hour >= openHour && hour <= closeHour) alert("We're currently open!") 
  //  else alert("Sorry we're closed");
  //conditional rendering , first value truthy then second part executed
  //{isOpen && <p>Open</p>}

   return <footer className="footer">
   {isOpen ? <Order closeHour={closeHour} openHour={openHour}/> : 
   (<p>
   We're closed. Happy to welcome you between {openHour}:00 and {closeHour}:00 ! 
   </p>)}
   </footer>
   //we could do like this:
   // return React.createElement('footer', null, "We're currently open!");
}

function Order({closeHour, openHour}) {
  return (
  <div className="order">
  <p>We're open from {openHour}:00 until {closeHour}:00. Come visit us or order online.</p>
 <button className="btn">Order</button>
 </div>
  );
}
// destructuring props - dont need to write props always, we can destruct the directly 
//when passing in using {}
function Pizza({pizzaObj}) {
  const isSoldOut = pizzaObj.soldOut;

    return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}` }>
    <img src={pizzaObj.photoName} alt={pizzaObj.name} />
    <div>
    <h3>{pizzaObj.name}</h3>
    <p>{pizzaObj.ingredients}</p>
    <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
    <span>{pizzaObj.soldOut}</span>
    </div>
    </li>
    );
}

//create root element so App can be rendered inside root element in html file
//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);

//we can activate strict mode by wraping app in strict mode - good to activate it

//React before v18
//React.render(<App />);
//and in import react dom -> import ReactDom from "react-dom";