import { Settings } from "lucide-react";
import Link from "next/link";
import UserMembership from "../UserMembership";
import UserStats from "../UserStats";
import { User } from "./Dashboard";

const UserSection = ({
  user,
  setOpenSettings,
}: {
  user: User;
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex flex-col flex-1 relative lg:px-4 lg:py-0 lg:justify-between overflow-hidden py-4 rounded-md text-zinc-200 items-center  ">
      <div className="flex absolute top-0  gap-2 left-0 w-full justify-between ">
        <Link
          className=" p-2  rounded-md tracking-widest bg-gradient-to-r from-blue-900 to-indigo-600 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500"
          href={"/"}
        >
          Back Home
        </Link>
        <button
          onClick={() => setOpenSettings((prev) => !prev)}
          className="flex gap-1 items-center cursor-pointer"
        >
          <Settings className=" hover:-rotate-45 transition-all duration-200"></Settings>
        </button>
      </div>
      <UserStats user={user} />
      <UserMembership user={user} />
    </div>
  );
};

export default UserSection;
