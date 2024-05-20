/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  CheckoutContainer,
  CreateContainer,
  ErrorPage,
  Header,
  MainContainer,
} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import About from "./components/About";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
          <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/about" element={<About/>} />
            {user &&
              user.email ===
                ("vs.thakur0001@gmail.com") && (
                <Route path="/createItem" element={<CreateContainer />}></Route>
              )}
            {user && <Route path="/checkout" element={<CheckoutContainer />} />}
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
