import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Loading from "./UI/Loading";
import { Account, Client } from "node-appwrite";

const LoginForm = () => {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67f75ff80020d99d9d1f"); // Replace with your project ID

  const account = new Account(client);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<boolean | unknown | string>(false);
  const [loading, setLoading] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setLoading(true);
      if (!email || !password) {
        setError("Email and password are required");
        return;
      }
      if (password.length < 8) {
        setError("Password must be at least 8 characters long");
        return;
      }
      const session = await account.createEmailPasswordSession(email, password);
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ sessionId: session.$id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        setError("Invalid email or password");
        return;
      }
      console.log("Login successful");
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err);
      console.error("Error during login:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
      <div className="flex flex-col items-center w-full">
        <span className="text-gray-700">Forget Your Password?</span>
        <button
          className="text-black cursor-pointer relative  after:content-[''] after:h-[2px] after:absolute after:bottom-0 after:left-[50%] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out after:translate-x-[-50%]"
          type="button"
        >
          RESET NOW
        </button>
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
        type="submit"
        disabled={loading}
        className="text-white cursor-pointer hover:scale-102 bg-black rounded-xl py-4 hover:bg-white hover:tracking-widest hover:text-black transition-all duration-200 border border-black"
      >
        <Loading loading={loading}>LOG IN</Loading>
      </button>
      <div className="flex flex-col items-center w-full">
        <span className="text-gray-700">Don&apos;t have a account yet?</span>
        <Link
          href={"/register"}
          className="text-black cursor-pointer relative text-black relative cursor-pointer after:content-[''] after:h-[2px] after:absolute after:bottom-0 after:left-[50%] after:bg-black after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out after:translate-x-[-50%]"
          type="button"
        >
          REGISTER
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
