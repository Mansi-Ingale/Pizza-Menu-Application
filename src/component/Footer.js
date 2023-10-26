import { Order } from "./Order";

export function Footer() {
    const hrs = new Date().getHours();
    const openHr = 12;
    const closeHR = 22;
    const isOpen = hrs >= openHr && hrs <= closeHR;
    return (
      <>
        <footer className="footer">
          {isOpen ? (
            <Order closeHrs={closeHR} />
          ) : (
            <p>
              We're Happy To Welcome You Between {openHr} and {closeHR}
            </p>
          )}
        </footer>
      </>
    );
  }