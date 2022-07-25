import Info from "./components/Info/Info";
import "./App.css";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        <section className="controls">
          <Info />
          <Button />
        </section>
        <Gentleman />
      </div>
    </>
  );
};

export default App;
