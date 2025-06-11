import PropTypes from "prop-types";
import { NavBar } from "../components/navBar";
import Footer from "../components/footer";
import "./mainlayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <header>
        <NavBar />
      </header>
      <main>
        {children ? (
          children
        ) : (
          <div className="loading-message">No item to display</div>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node, // Changed to PropTypes.node as children can be null
};
