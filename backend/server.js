import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./src/db/connect.js";
import cookieParser from "cookie-parser";
import fs from "node:fs";
import errorHandler from "./src/helpers/errorsHandlers.js";


dotenv.config();
const port =process.env.PORT || 8000;

const app=express();

//Middle Ware
app.use(cors({
origin: process.env.CLIENT_URL,
credentials:true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
// error handler middleware

app.use(errorHandler);
//Routes
const routesFiles = fs.readdirSync("./src/routes");
routesFiles.forEach((file)=>{

    //dynamic import
    import(`./src/routes/${file}`).then((route)=>{
        app.use("/api/v1", route.default);
    }).catch((err)=>{
        console.log("Failed to import route", err.message);
    });
});
//console.log("routesFiles" , routesFiles);

//excution function 
const  server = async () => {
   try {
        await connect();

    app.listen(port, ()=>{ 
        console.log(`server is runnung on port ${port}`);
    })
   } catch (error) {
    console.log("Failed to connect server " , error.message);
    process.exit(1);
   }
}
server();