import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Header from "./Components/HeaderComponent/Header";
import Home from "./Components/Home/Home";
import CartProvider from "./Context/CartContext";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./Components/PageNotFound";
import Protected from "./Components/Protected/Protected";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Protected />}>
              <Route
                element={
                  <>
                    <Header />
                    <Outlet />
                    <Footer />
                  </>
                }
              >
                <Route path="/" element={<Home />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />

            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
