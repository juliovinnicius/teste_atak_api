import * as express from "express";
import Response from "../response/response";
const SerpApi = require('google-search-results-nodejs')

export default class SearchReource {
  public register(app: express.Application){
    this.search(app);
  }
  
  private search(app: express.Application){
    app.post("/search", async(req, res) => {
      const { text } = req.body;
      const teste = new SerpApi.GoogleSearch("37322e3d46900414105bbb37ec73fb6eccacb00ecf01d0a0f85033e633f243b8");
      try {
        teste.json({
          q: text, 
         }, (result: any) => {
          return res.status(200).send(Response.success(result["organic_results"], 200));
         });         
      } catch(error){
        return res.status(500).send(Response.error("Deu erro",  "server_error", null, 500))
      }
    });
  }
}
