import { Switch, Route } from "react-router-dom";
import Confraternization from "../components/confraternization";
import Drinks from "../components/drinks";
import Graduation from "../components/gratuation";
import Wedding from "../components/wedding";

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Drinks />
      </Route>
      <Route path="/wedding">
        <Wedding />
      </Route>
      <Route path="/confraternization">
        <Confraternization />
      </Route>
      <Route path="/graduation">
        <Graduation />
      </Route>
    </Switch>
  );
};
export default Pages;
