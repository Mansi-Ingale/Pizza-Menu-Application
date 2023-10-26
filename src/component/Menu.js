import { Pizza } from "./Pizza";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 100,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 150,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 212,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 412,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 315,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 180,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];


export function Menu(props) {
    const pizzas = pizzaData;
    //const pizzas = [];
    const numPizaas = pizzas.length;
    return (
      <>
        <main className="menu">
          <h2>Our Menu</h2>
  
          {numPizaas > 0 ? (
            <>
              <p>
                Authentic Italian Cuisine, 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
              </p>
  
              <ul className="pizzas">
                {pizzas.map((pizza) => (
                  <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
              </ul>
            </>
          ) : (
            <p>We're Still Working On Our Menu . Please Come Back Later!!</p>
          )}

        </main>
      </>
    );
  }