import { getMyAuth } from "../Components/Search/Fetch/Firebase";

test("return user info", async () => {
  const user = getMyAuth();
  expect(user).toBeTruthy();
});
