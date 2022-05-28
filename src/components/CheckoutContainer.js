/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";
import EmptyCart from "../img/emptyCart.svg";

const CheckoutContainer = () => {
  const [{ cartItems, user }, dispatch] = useStateValue();

  const [flag, setFlag] = useState(1);

  const [tot, setTot] = useState(0);

  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTot(totalPrice);
  }, [tot, flag, cartItems]);

  //   const clearCart = () => {
  //     dispatch({
  //       type: actionType.SET_CARTITEMS,
  //       cartItems: [],
  //     });
  //   };

  localStorage.setItem("cartItems", JSON.stringify([cartItems]));
  return (
    <div className="w-full mt-[50px] bg-gray-600 h-screen flex flex-col items-center scrollbar-none rounded-lg">
      <div className="text-white font-semibold text-2xl">
        Please review the Items before proceed
      </div>
      <div className="w-full md:w-[600px] h-full md:h-42 -mb-[100px] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
        {/* cart Item  */}
        {cartItems && cartItems.length > 0 ? (
          <div className="w-full h-full rounded-t-[2rem] flex flex-col">
            {/* cart Item section */}
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-8 overflow-y-scroll scrollbar-none">
              {/* cart Item  */}
              {cartItems &&
                cartItems.map((item) => (
                  //   <CartItem
                  //     key={item.id}
                  //     item={item}
                  //     setFlag={setFlag}
                  //     flag={flag}
                  //   />
                  <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
                    <img
                      src={item?.imageURL}
                      className="w-20 h-20 max-w-[60px] rounded-full object-contain"
                      alt=""
                    />

                    {/* name section  */}
                    <div className="flex flex-col gap-2">
                      <p className="text-base text-gray-50">
                        {`${
                          item?.title?.length > 10
                            ? `${item?.title.slice(0, 10)}...`
                            : item?.title
                        }`}{" "}
                      </p>
                      <p className="text-sm block text-gray-300 font-semibold">
                        $ {parseFloat(item?.price) * item.qty}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* cart total section  */}
            <div className="w-full flex-1 flex flex-col items-center justify-evenly px-8 py-2 h-[50%]">
              <div className="w-full flex items-center justify-between bg-gray-700 rounded-[1rem] px-8 py-4 mb-1">
                <p className="text-gray-300 text-lg">Sub Total </p>
                {<p className="text-gray-300 text-lg">$ {tot}</p>}
              </div>
              <div className="w-full flex items-center justify-between bg-gray-700 rounded-[1rem] px-8 py-4 mt-1">
                <p className="text-gray-300 text-lg">Delivery </p>
                <p className="text-gray-300 text-lg">$ 2.5</p>
              </div>
              <div className="w-full flex items-center justify-between bg-gray-700 rounded-[1rem] px-8 py-4 mt-1">
                <p className="text-gray-300 text-lg">Other Taxes </p>
                <p className="text-gray-300 text-lg">$ {(tot * 9) / 100}</p>
              </div>
              <div className="w-full border-b border-orange-700 my-2"></div>
              <div className="w-full flex items-center justify-between bg-orange-500 rounded-md py-6 px-6">
                <p className="text-gray-200 text-lg font-semibold">Total </p>
                <p className="text-gray-200 text-lg font-semibold">
                  $ {tot + 2.5 + (tot * 9) / 100}
                </p>
              </div>
              {user ? (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="button"
                  className=" w-full md:left-0 text-white font-semibold text-lg bg-red-500 py-2 rounded-lg"
                >
                  Check Out
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="button"
                  className=" my-3 w-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-xl py-3 px-3 tracking-wide md:left-0 text-white font-semibold text-lg"
                >
                  Login to check out
                </motion.button>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <img src={EmptyCart} className="w-300" alt="" />
            <p className="text-xl text-textColor font-semibold">
              Add some items to your cart
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutContainer;
