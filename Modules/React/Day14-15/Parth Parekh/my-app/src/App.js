import Form from "./Form";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import BudgetCalculator from "./BudgetCalculator";
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/assignment" component={Form}></Route>
                <Route path="/" exact component={BudgetCalculator}></Route>
            </Switch>
        </Router>
    );
}

export default App;
