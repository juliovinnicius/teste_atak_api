import * as express from "express";
import SearchReource from "./search.resource";

const searchResource = new SearchReource();

export const register = (app: express.Application) => {
  searchResource.register(app)
}
