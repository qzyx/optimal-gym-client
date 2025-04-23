/* eslint-disable @typescript-eslint/no-use-before-define */

import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { handleSubmitRegister } from "../../lib/appwrite";
import Loading from "../UI/Loading";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<boolean | unknown | string>(false);
  const [loading, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);

  return (
    <form
      onSubmit={(e) =>
        handleSubmitRegister(e, setLoading, setError, name, email, password)
      }
      className="flex flex-col gap-2"
    >
      <div className="flex flex-col w-full">
        <label htmlFor="email">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="focus:outline-none border font-mono border-black p-2 rounded-md w-full"
        ></input>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
          placeholder="examplemail@gmail.com"
          className="focus:outline-none border font-mono border-black p-2 rounded-md w-full"
        ></input>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="password">Password</label>
        <span className="flex items-center justify-between border-black border rounded-md w-full ">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={visiblePassword ? "text" : "password"}
            name="password"
            required
            placeholder="********"
            className="focus:outline-none font-mono p-2 w-full"
          ></input>
          <button
            className="cursor-pointer"
            onClick={() => setVisiblePassword(!visiblePassword)}
            type="button"
          >
            {visiblePassword ? (
              <EyeOff className="mr-2" />
            ) : (
              <Eye className="mr-2"></Eye>
            )}
          </button>
        </span>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="password">Re-enter Password</label>
        <span className="flex items-center justify-between border-black border rounded-md w-full ">
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type={visibleConfirmPassword ? "text" : "password"}
            name="password"
            required
            placeholder="********"
            className="focus:outline-none font-mono p-2 w-full"
          ></input>
          <button
            className="cursor-pointer"
            onClick={() => setVisibleConfirmPassword(!visibleConfirmPassword)}
            type="button"
          >
            {visibleConfirmPassword ? (
              <EyeOff className="mr-2" />
            ) : (
              <Eye className="mr-2"></Eye>
            )}
          </button>
        </span>
      </div>
      {typeof error === "string" ? (
        <span className="text-red-500 text-center">{error}</span>
      ) : (
        typeof error !== "string" &&
        typeof error !== "boolean" && (
          <span className="text-red-500 text-center">
            Something went wrong please try again
          </span>
        )
      )}
      <button
        disabled={loading}
        type="submit"
        className="text-white cursor-pointer hover:scale-102 bg-black rounded-xl py-4 hover:bg-white hover:tracking-widest hover:text-black transition-all duration-200 border border-black"
      >
        <Loading loading={loading}>REGISTER</Loading>
      </button>
      <div className="flex flex-col items-center w-full">
        <span className="text-gray-700">Already have an account?</span>
        <Link
          href={"/login"}
          className="text-black relative cursor-pointer after:content-[''] after:h-[2px] after:absolute after:bottom-0 after:left-[50%] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out after:translate-x-[-50%]"
          type="button"
        >
          LOG IN
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
