import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../../features/about/About";
import BasketPage from "../../features/basket/BasketPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import Contact from "../../features/contact/Contact";
import Home from "../../features/home/Home";
import agent from "../api/agent";
import NotFound from "../api/errors/NotFound"; 
import { useStoreContext } from "../context/StoreContext";
import { getCookie } from "../util/util";
import Header from "./Header";
import LoadingComponent from "./LoadingComponents";

function App() {
  /* We are now using our getcookie function to get the basket from the browser on page load.
    Using the useEffect hook we are now able to get the basket from the browser on page load
    by using our getCookie function to check whether the basket cookie is set. if it is set, 
    we use our centralised axios agent to get the basket from the server.
  */
   const {setBasket} = useStoreContext();
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     const buyerId = getCookie("buyerId");
     if(buyerId) {
       agent.Basket.get()
       .then(basket => setBasket(basket))
       .catch(err => console.log(err))
       .finally(() => setLoading(false));
     }else{
        setLoading(false);
     }
   } , [setBasket]);

   // This is how we implement dark mode in our application.
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({

    palette: {
      mode: paletteType,
      
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  
if(loading) return <LoadingComponent message='Initialising the app...'/>
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route exact path='/catalog' component={Catalog}/>
          <Route path='/catalog/:id' component={ProductDetails}/>
          <Route path='/basket' component={BasketPage}/>
          <Route path='/checkout' component={CheckoutPage}/>
          <Route component={NotFound}/>
        </Switch>
      </Container> 
    </ThemeProvider>
  );
}

export default App;
