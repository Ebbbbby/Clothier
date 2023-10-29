import React from "react";
import { Dialog, DialogHeader, DialogBody, Button, DialogFooter } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { Tooltip } from "@material-tailwind/react";

const Cart = ({ openModal, setOpen }) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div>
      {cart.length > 0 ? (
        <>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Cart.</DialogHeader>
            <DialogBody
              divider
              className="flex flex-col justify-center item-start"
            >
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 py-4 ">
                      <div>
                        <img
                          src={item.img}
                          className="h-[125px] rounded-md"
                          alt={item.name}
                        />
                        <div className="flex flex-col items-start">
                          <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                            {item.name}
                          </h4>
                        </div>
                        <div className="max-w-xs">
                          <p className="text-black text-xs font-inter tracking-normal leading-none py-4">
                            {item.text}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-black text-sm font-inter tracking-normal leading-none py-4">
                          selected size:{" "}
                          <span className="ml-2">{item.size}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none py-4">
                          selected color:
                          <span
                            className="ml-2 rounded-full pr-2"
                            style={{ backgroundColor: item.color }}
                          >
                            {item.color}
                          </span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none py-4">
                          Amount: <span className="ml-2">{item.amount}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none py-4">
                          Single Item price:
                          <span className="ml-2">{item.price}</span>
                        </p>
                        <p className="text-black text-sm font-inter tracking-normal leading-none py-4">
                          Total Items Price:
                          <span className="ml-2">{item.totalPrice}</span>
                        </p>
                        <div className="pt-4">
                          <Tooltip
                            content="Amount from the cart"
                            placement="bottom"
                          >
                            <Button
                              size="sm"
                              color="red"
                              ripple={true}
                              variant="filled"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="flex justify-start items-center">
              <p className="text-black text-base font-inter tracking-normal leading-none py-4"> Total price of all products: <span className="ml-2">{totalPrice}</span></p>
            </DialogFooter>
          </Dialog>
        </>
      ) : (
        <>
          <Dialog
            className="border-0 outline-0"
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Shopping Cart.</DialogHeader>
            <DialogBody divider>
              <div>
                <h1 className="text-black text-xl font-inter font-bold tracking-normal leading-none py-4">
                  {" "}
                  Your bag is empyty
                </h1>
              </div>
              <p className="text-black text-base font-inter tracking-normal leading-none py-4">
                Add some products
              </p>
            </DialogBody>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default Cart;
