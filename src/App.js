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
<<<<<<< HEAD
            <Route path="/About" element={<About/>} />
            <Route path="/createItem" element={<CreateContainer />} />
=======
            {user &&
              user.email ===
                ("shreyansh1029@gmail.com" ||
                  "chetan.verma_cs19@gla.ac.in") && (
                <Route path="/createItem" element={<CreateContainer />}></Route>
              )}
            {user && <Route path="/checkout" element={<CheckoutContainer />} />}
            <Route path="/*" element={<ErrorPage />} />
>>>>>>> dfe7efc3f9b4cc35e1d24679acfa11e272869ca2
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
