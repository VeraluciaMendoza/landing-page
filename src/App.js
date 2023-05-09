import "./App.css";
import { Fragment } from "react";
import AppLayout from "./layouts";
import { Article } from "./components/Article";
import { GridCreations } from "./components/Grilla";


function App() {
  return (
    <Fragment>
      <AppLayout>
        <Article />
        <GridCreations/>
      </AppLayout>
    </Fragment>
  );
}

export default App;
