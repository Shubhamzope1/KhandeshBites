import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import Header from './header';
import Footer from './footer';
import filteredrecipes from './filteredrecipes';
import recipes from './recipes';
import About from './about';
import Details from './details';
import PrivacyPolicy from './privacypolicy';
import ContactUs from './contactus';



 

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/filteredrecipes" component={filteredrecipes} />
        <Route path="/recipes" component={recipes} />
        <Route path="/about" component={About} />
        <Route path="/details" component={Details} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/contact" component={ContactUs} />

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
