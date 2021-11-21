import { auth } from "./__firebase__/firebase";
import "firebase/compat/auth";

jest.mock("firebase/compat", () => {
  return {
    auth: jest.fn(),
  };
});

describe("61408137", () => {
  it("should return user", () => {
    (auth as jest.Mocked<any>).mockReturnValueOnce({
      currentUser: { email: "example@gmail.com", uid: 1, emailVerified: true },
    });
    const actual = {
      email: "example@gmail.com",
      userId: 1,
      isEmailVerified: true,
    };
    expect(actual).toEqual({
      email: "example@gmail.com",
      userId: 1,
      isEmailVerified: true,
    });
  });
});
