import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import ProductGuide from "./pages/ProductGuide";

function App() {
    return (
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/product-guide" component={ProductGuide} />
            {/* Default route */}
            <Route path="/:rest*" component={Home} />
        </Switch>
    );
}

export default App;
