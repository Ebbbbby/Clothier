import { Tooltip, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/slices/cartSlice";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color ? product[0].color[0] : "";
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  const { id } = useParams();
  const dispatch = useDispatch();
  //   const newProd = product.find((prod) => prod.id ===parseInt(id));
  //   console.log(newProd)
  //   const {img, name} = newProd

  return (
    <div>
      {product
        .filter((prod) => prod.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center py-10">
              <div className="pl-4 grow[2]">
                <img
                  className="h-[850px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                ></img>
              </div>
              <div className="grow-[3]">
                <div className="max-w-lg pl-4">
                  <h5 className="text-2xl font-inter font-bold -tracking-normal leading-none pb-4">
                    {item.name}
                  </h5>
                  <p className="text-orange-200 font-inter text-xl font-bold tracking-normal leading-none pb-4">
                    {" "}
                    15% off
                  </p>
                  <p className="text-grey-600 font-inter text-xl font-bold tracking-normal leading-none pb-4">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {item.size ? (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a Size
                        </label>
                        <select
                          name="size"
                          id="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item.size.map((item, index) => {
                            return (
                              <option key={index} value={index}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a Size
                        </label>
                        <select
                          name="size"
                          id="size"
                          disabled={true}
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size?.map((item, index) => {
                            return (
                              <option key={index} value={index}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    )}
                  </div>
                  <div className="pb-4">
                    <label
                      htmlFor="color"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a color
                    </label>
                    <select
                      name="color"
                      id="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      {item.color.map((item, index) => {
                        return (
                          <option key={index} value={index}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div>
                    <Tooltip content="Add to cart" placement="bottom">
                      <Button
                        color="gray"
                        size="md"
                        variant="outlined"
                        ripple={true}
                        onClick={() =>
                          dispatch(
                            addToCart({
                             id:item.id,
                             name:item.name,
                              price: item.price,
                              size: size,
                              color: color,
                              amount: 1,
                              totalPrice:item.price,
                            })
                          )
                        }
                      >
                        Add to cart
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
