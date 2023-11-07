import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { login } from "../../features/slices/authSlice";
const Login = () => {
  const initialState = {
    name: "",
    password: "",
    image: "",
  };
  const [values, setValue] = useState(initialState);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
      e.preventDefault();
    setValue({ ...values, [name]: value });
  };
  const dispatch = useDispatch()
  return (
    <div className="grid grid-cols-1 items-center justify-items-center h-screen">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name "
            size="lg"
            type="text"
            name="name"
            value={values.name}
            onChange={onChangeHandler}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            value={values.password}
            onChange={onChangeHandler}
          />
          <Input
            label="Image URL address"
            size="lg"
            type="text"
            name="image"
            value={values.image}
            onChange={onChangeHandler}
          />
          <div className="-ml-2.5"></div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth onClick={()=>  dispatch(login(values))} >
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            image is Optional
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
