import { getAuth } from "firebase/auth";
export const getMyAuth = () => {
  const user = getAuth();
  return user;
};
