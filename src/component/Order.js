export function Order({ closeHrs }) {
    return (
      <>
        <div className="order">
          <p>We're Open until {closeHrs} Come Visit Us or Order Now!</p>
          <br />
          <button className="btn">ORDER</button>
        </div>
      </>
    );
  }