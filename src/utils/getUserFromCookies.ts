import { cookies } from "next/headers";

const getUserFromCookies = async () => {
  const cookie = await cookies();
  const session = cookie.get("sessionSecret");
  const user = session?.value ? JSON.parse(session?.value) : null;

  return user;
};

export default getUserFromCookies;
