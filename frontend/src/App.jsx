import { useState } from "react";

import "./App.css";
import Header from "./components/common_components/Header";
import Footer from "./components/common_components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <>
        <Header />
        <main>
          <h1>Hello World!</h1>
        </main>
        <Footer />
      </>
    </>
  );
}

export default App;
