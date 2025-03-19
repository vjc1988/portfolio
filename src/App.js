import "./App.css";

export default function App() {
  return (
    <div>
      <header className="Container">
        <h2>Hello, I'm</h2>
        <h1>Victoria Coombs</h1>
        <h2>
          Junior Front-End Software Developer based in Lancashire, United
          Kingdom
        </h2>
        <p>
          I like to craft solid and scalable frontend products with great user
          experiences
        </p>
        <a href="/" title="contact me">
          Contact Me
        </a>
      </header>
      <div>
        <h2>Featured Projects</h2>
      </div>
      <div>
        <footer>
          This website was coded by Victoria Coombs and is{" "}
          <a href="/" target="_blank">
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
  return null;
}
