import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" })); // json form me data accept krna par limit hai 16kb wrna server srash thode karvana hai
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // now URL ka bhi apna encoding hoti hai jo hum url bar pe dalte hain
//  uska to space
// ka hota hai %20 to waise hi iska mtlb hai bhai bas url encoding acccpet krlena (extended means objects ke and objects and limit to pta hai)
app.use(express.static("public")); // now kai baar files images aai to hum usko apne server me store krna chhate hain to public folder
//  me store kr skte hain
app.use(cookieParser());
// iss cookie parser ka kaam hai ki apne server se me user ke browser ki cookies access kr pau and uss cookies ko set kr pau
// mtlb uski cookies pe CRUD operation kr pau

//export default app;
// or
export { app };
