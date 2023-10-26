import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from '../../assets/images/clothes.jpg'
import { filteredProducts } from "../../features/slices/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useDispatch()
  return (
    <div className="bg-gray-200">
      <div className="flex items-center justify-center py-8">
        {buttons?.map((item, idx) => {
          return (
            <div key={idx} className="mr-4">
              <Link to = {"/filteredProducts/" + item }>
                <Button
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="hover:bg-green-300 duration-300 ease-in-out"
                  onClick={() => dispatch(filteredProducts(item))}
                >
                  {item}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="bg-green-300 p-2 w-[52%] mx-auto rounded-md">
        <h3 className="text-orange-900 text-center text-lg font-inter font-bold tracking-normal leading-none">
          SALES UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center item-center py-4">
        <img className="h-[700px] w-[70%] rounded-md shadow-lg shadow-gray-300" src={clothes} alt=""></img>
      </div>
    </div>
  );
};

export default NavigateButtons;
