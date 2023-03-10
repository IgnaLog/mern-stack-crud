import express from "express";
import fileUpload from "express-fileupload";
import postsRoutes from "./routes/posts.routes.js";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// middlewares
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

// routes
app.use(postsRoutes);
app.use(express.static(path.join(__dirname, "../client/build")));

app.get('*',  (req, res) => {
  res.sendFile(join(__dirname, '../client/build/index.html'))
})

export default app;
