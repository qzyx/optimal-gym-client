import { getUserInfoFromDatabase } from "@/lib/appwrite";
import getUserFromCookies from "@/utils/getUserFromCookies";
import FirstDashboardPart from "./FirstDashboardPart";
import SecondDashboardPart from "./SecondDashboardPart";
import UserSection from "./UserSection";

const DashBoard = async () => {
  const user = await getUserFromCookies();
  const userInfoFromDatabase = await getUserInfoFromDatabase(user.userId);

  return (
    <>
      <div className="py-4 px-4 relative flex flex-col gap-10 overflow-hidden lg:gap-2 lg:flex-row lg:w-[95%] lg:h-[90vh] bg-neutral-900/80  text-white lg:rounded-md lg:shadow-lg">
        <UserSection user={userInfoFromDatabase} />
        <FirstDashboardPart user={userInfoFromDatabase} />
        <SecondDashboardPart user={userInfoFromDatabase} />
      </div>
    </>
  );
};

export default DashBoard;
