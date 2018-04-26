import * as express from "express";

export const hi = (req: express.Request, res: express.Response) => {
  res.send("Hello");
};

export const awesome = (req: express.Request, res: express.Response) => {
  res.send("Awesome");
};
