"use client";

import React from "react";
import LoginBackground from "@/public/login-page-background.jpg";
import Logo from "@/public/Berufsvernetzen_Icon-removebg-preview.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Card,
  CardBody,
  Input,
  Link,
  Tab,
  Tabs,
} from "@nextui-org/react";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

function AuthPage({}: Props) {
  const [selected, setSelected] = React.useState<string | number>("login");

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    validationSchema:
      selected === "login"
        ? validationSchema.pick(["email", "password"])
        : validationSchema,
    onSubmit: (values) => {
      if (selected === "login") {
        fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success(data.message);
            router.push("/dashboard");
          })
          .catch((error) => {
            console.error(error);
            toast.error("An error occurred. Please try again later.");
          });
      } else if (selected === "sign-up") {
        fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((res) => res.json())
          .then((data) => {
            toast.success(data.message);
            router.push("/dashboard");
          })
          .catch((error) => {
            console.error(error);
            toast.error("An error occurred. Please try again later.");
          });
      }
    },
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="basis-1/3 bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col items-center justify-center gap-5">
      <Image src={Logo} alt="Login Background" width={200} height={200} />
       <motion.span
          initial={{ x: -500, opacity: 0.5 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
       className="flex flex-col items-center justify-center gap-1">
       <h1 className="text-white text-4xl font-bold text-center">
          Berufsvernetzen
        </h1>
        <p className="text-sm text-center font-semibold">
          Connect with your school and alumni. <br />
          Looking for a job? We got you covered.
        </p>
       </motion.span>
        <motion.div
          initial={{ y: 500, opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        className="max-w-md w-full mx-auto">
          <Card className="max-w-full h-fit">
            <CardBody className="overflow-hidden">
              <Tabs
                fullWidth
                size="lg"
                aria-label="Tabs form"
                selectedKey={selected}
                onSelectionChange={(key) => {
                  formik.resetForm();
                  setSelected(key);
                }}
              >
                <Tab key="login" title="Login">
                  <form
                    className="flex flex-col gap-4"
                    onSubmit={formik.handleSubmit}
                  >
                    <Input
                      isRequired
                      label="Email"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      errorMessage={formik.touched.email && formik.errors.email}
                    />
                    <Input
                      name="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      errorMessage={
                        formik.touched.password && formik.errors.password
                      }
                      isRequired
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                    />
                    <p className="text-center text-small">
                      Need to create an account?{" "}
                      <Link size="sm" onPress={() => setSelected("sign-up")}>
                        Sign up
                      </Link>
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button fullWidth color="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </form>
                </Tab>
                <Tab key="sign-up" title="Sign up">
                  <form
                    className="flex flex-col gap-4 h-full"
                    onSubmit={formik.handleSubmit}
                  >
                    <Input
                      isRequired
                      label="Name"
                      placeholder="Enter your name"
                      name="name"
                      id="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      errorMessage={formik.touched.name && formik.errors.name}
                    />
                    <Input
                      isRequired
                      label="Username"
                      placeholder="Enter your username"
                      type="text"
                      name="username"
                      id="username"
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      errorMessage={
                        formik.touched.username && formik.errors.username
                      }
                    />
                    <Input
                      isRequired
                      label="Email"
                      placeholder="Enter your email"
                      type="email"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      errorMessage={formik.touched.email && formik.errors.email}
                    />
                    <Input
                      isRequired
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      name="password"
                      id="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      errorMessage={
                        formik.touched.password && formik.errors.password
                      }
                    />
                    <p className="text-center text-small">
                      Already have an account?{" "}
                      <Link size="sm" onPress={() => setSelected("login")}>
                        Login
                      </Link>
                    </p>
                    <div className="flex gap-2 justify-end">
                      <Button fullWidth color="primary" type="submit">
                        Sign up
                      </Button>
                    </div>
                  </form>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        </motion.div>
      </div>
      <div className="hidden md:flex flex-1 bg-gradient-to-r from-blue-800 to-indigo-900 bg-cover bg-center relative">
        <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image
            src={LoginBackground}
            priority={true}
            alt="Login Background"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
