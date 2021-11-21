import * as React from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [{ title: "some title", image: "some image" }],
      }),
  })
) as jest.Mock;

const user = {
  displayName: "Test Name",
  email: "test@test.com",
  uid: "12345uid",
};
jest.mock("firebase/compat", () => ({
  initializeApp: jest.fn().mockReturnValue({
    currentUser: user,
  }),
}));

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(() => Promise.resolve(user)),
}));
