import React from "react";
import { BrowserRouter, Route,useHistory } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookFinder from "./BookFinder";

const App=()=>{
  const history = useHistory();
  return (
    <BrowserRouter history={history}>
      <Route path="/:query?" exact={true} component={BookFinder} />
      <Route path="/book/:id" component={BookDetails}/>
    </BrowserRouter>
  );
}

export default App;
