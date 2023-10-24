import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const {id} = useParams()
//   console.log(id)

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
              <div className="pl-44 grow[2]">
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
                    <div>
                      <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a Size
                      </label>
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {item.size.map((item, index)=>{
                            return <option key={index} value={index}>{item}</option>
                        })}

                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>

  );
}

export default SingleProduct