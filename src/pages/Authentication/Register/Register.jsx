import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    // console.log(createUser);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="min-h-screen flex items-center justify-center mx-4 lg:mx-0">
      <div className="card w-full max-w-sm mt-25 lg:mt-0">
        <h2 className="text-black text-4xl font-extrabold mt-0">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="card-body px-0">
          <fieldset className="fieldset">
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
              })}
              className="input w-full"
              placeholder="Email"
            />
            {errors.email?.type === "pattern" && (
              <p className="text-red-500">Enter a valid email</p>
            )}
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input w-full"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">Password must be min 6 characters</p>
            )}
            <button className="btn btn-neutral mt-2">Register</button>
            <div className="mt-2">
              Already have an account?{" "}
              <Link to="/login" className="link link-hover">
                Login
              </Link>
            </div>
            <SocialLogin />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Register;
