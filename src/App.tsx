import Info from "./components/Info/Info";
import "./App.css";
import Button from "./components/Button/Button";
import Gentleman from "./components/Gentleman/Gentleman";
import { GentlemanProps } from "./types/interfaces";

const gentlemenList: GentlemanProps[] = [
  {
    id: 1,
    name: "Bertin Osborne",
    status: "Alive",
    profession: "Youtuber",
    twitter: "@osbourne",
    picture: "bertin.jpg",
    alternativeText: "Osbourne pointing at you",
    selected: true,
  },
  {
    id: 2,
    name: "The Farytale",
    status: "RIP",
    profession: "Influencer",
    twitter: "pending",
    picture: "fary.jpg",
    alternativeText: "The Fary pointing at you",
    selected: false,
  },
  {
    id: 3,
    name: "Julius Churchs",
    status: "Alive",
    profession: "Java developer",
    twitter: "@julius_churchs",
    picture: "julio.jpg",
    alternativeText: "Churchs pointing at you",
    selected: true,
  },
];

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
        <main className="main">
          <ul className="gentlemen">
            {gentlemenList.map((gentleman) => {
              return (
                <Gentleman
                  key={gentleman.id}
                  alternativeText={gentleman.alternativeText}
                  id={gentleman.id}
                  name={gentleman.name}
                  picture={gentleman.picture}
                  profession={gentleman.profession}
                  selected={gentleman.selected}
                  status={gentleman.status}
                  twitter={gentleman.twitter}
                />
              );
            })}
          </ul>
        </main>
      </div>
    </>
  );
};

export default App;
