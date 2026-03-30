import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-sm mt-25 lg:mt-0">
        <h2 className="text-black text-4xl font-extrabold mt-0">
          Welcome Back
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
            <div className="mt-2">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-2">Login</button>
            <div className="mt-2">
              Don't have any account?{" "}
              <Link to="/register" className="link link-hover">
                Register
              </Link>
            </div>
            <SocialLogin />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Login;
