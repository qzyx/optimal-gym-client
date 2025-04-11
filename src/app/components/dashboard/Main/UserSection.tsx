import Link from "next/link";
import UserMembership from "../UserMembership";
import UserStats from "../UserStats";
import { User } from "./Dashboard";

const UserSection = ({ user }: { user: User }) => {
  return (
    <div className="lg:w-1/4">
      <div className="flex flex-col flex-1 relative lg:px-4 py-4 rounded-md text-zinc-200 items-center gap-5 ">
        <Link
          className="absolute top-0 text-white p-2 left-0 rounded-md tracking-widest bg-gradient-to-r from-blue-900 to-indigo-600 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-500"
          href={"/"}
        >
          Back Home
        </Link>
        <UserStats user={user} />
        <UserMembership user={user} />
      </div>
    </div>
  );
};

export default UserSection;
