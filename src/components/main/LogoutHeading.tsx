import { handleSubmitLogout } from "@/lib/appwrite";

const LogoutHeading = () => {
  handleSubmitLogout();
  return (
    <span className="flex flex-col gap-1 items-center">
      <span className="self-center text-3xl ">Logging out</span>
      <span className="self-center text-xl tracking-widest"></span> O P T I M A
      L G Y M
    </span>
  );
};

export default LogoutHeading;
