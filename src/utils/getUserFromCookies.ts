import { cookies } from "next/headers";

const getUserFromCookies = async () => {
  const cookie = await cookies();
  const session = cookie.get("sessionSecret");
  const user = JSON.parse(session?.value || "{}");

  return user;
};

export default getUserFromCookies;
