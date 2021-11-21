import * as React from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [{ title: "some title", image: "some image" }],
      }),
  })
) as jest.Mock;
