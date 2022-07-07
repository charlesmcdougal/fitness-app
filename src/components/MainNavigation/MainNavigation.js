// HOOKS
import { Link } from "react-router-dom";

// LAYOUT COMPONENTS
import Header from "../Layout/Header";

// UI COMPONENTS
import Button from "../UI/Button";

const MainNavigation = () => {
  return (
    <main className="polkadot-bg default-border flex-centered flex-column full-height">
      <Header />
      <Link to="/Create-routine">
        <Button className="accent-bg-1 block minor-rotate-cw">
          New Routine
        </Button>
      </Link>
      <Button className="accent-bg-2 block minor-rotate-ccw">
        Choose Routine
      </Button>
      <Button className="accent-bg-3 block minor-rotate-cw">
        Manage Calendar
      </Button>
      <Button className="accent-bg-4 block minor-rotate-ccw">
        Find a Routine
      </Button>
    </main>
  );
};

export default MainNavigation;
