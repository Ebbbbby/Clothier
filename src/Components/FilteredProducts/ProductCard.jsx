import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { singleProduct } from '../../features/slices/productSlice';
import { Link,useParams } from 'react-router-dom';

const ProductCard = ({ id, name, text, price, color, img }) => {
  const dispatch = useDispatch();
  const {type} = useParams()

  return (
    <Link to={`/singleProd/${type}/`+id}>
      <Card className="mt-6 w-96" onClick={()=>dispatch(singleProduct(id))}>
        <CardHeader color="blue-gray" className="relative h-96">
          <img src={img} alt="card" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">${price}</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {color?.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full me-4"
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>

          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard