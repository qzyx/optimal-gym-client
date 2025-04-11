import { User } from "./Dashboard";
import UserMembership from "../UserMembership";
import UserStats from "../UserStats";

const UserSection = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col flex-1 lg:px-4 py-4 rounded-md text-zinc-200 items-center gap-5 ">
      <UserStats user={user} />
      <UserMembership user={user} />
    </div>
  );
};

export default UserSection;
