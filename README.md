# MERN Stack Post App (MongoDB) 

This application belongs to the set of tutorials made with [React Hooks](https://es.reactjs.org/docs/hooks-intro.html).

This project is Full Stack, so I am using technologies like [Nodejs](https://nodejs.org/en/), [Express](https://expressjs.com/es/guide/routing.html) and [Mongo](https://www.mongodb.com/try/download/community) database for the backend and [React](https://reactjs.org/) for the frontend.

It is a website where you can create posts with their title, description and an image. You can also delete and modify them.

![MERN Stack Post App (MongoDB)](https://i.ibb.co/BtrY0dz/home-mern.png)

![Form MERN Stack Post App (MongoDB)](https://i.ibb.co/x5wnM1H/form-mern.png)

To create this project I have used [Create React App](https://create-react-app.dev/).

Backend libraries like [Express](https://www.npmjs.com/package/express), [mongoose](https://mongoosejs.com/), [nodemon](https://www.npmjs.com/package/nodemon) and [morgan](https://www.npmjs.com/package/morgan). [Axios](https://axios-http.com/es/docs/intro) for the communication between frontend and backend. I have also used [Formik](https://formik.org/docs/overview) to develop forms in a more comfortable way. To upload images I used the [Cloudinary](https://cloudinary.com/) cloud and the npm modules [express-fileupload](https://www.npmjs.com/package/express-fileupload) and [fs-extra](https://www.npmjs.com/package/fs-extra). To style the web I have used libraries such as [TailwinCSS](https://tailwindcss.com/docs/guides/vite), [React Icons](https://react-icons.github.io/react-icons/) and [React Hot Toast](https://react-hot-toast.com/).

I also use [React Hooks](https://es.reactjs.org/docs/hooks-intro.html) like **useState**, **useEffect** and **useContext**.

## Quick start

To deploy this project, you should first install both the server and client node_modules packages. To do this, open two terminals separately. In one of them go to the main project folder and run: 

```bash
npm install
```

In the other terminal, go to the client directory and there run: `npm install` in the same way.

After installation make sure you have mongodb installed locally or via docker. You must also have a Cloudinary account and create a file called `.env` in the main directory of the project with the following environment variables:

    MONGODB_URI=<MongoDB Connection>
    PORT=<port>
    CLOUD_NAME=<Located in the cloudinary dashboard>
    API_KEY=<Located in the cloudinary dashboard>
    API_SECRET=<Located in the cloudinary dashboard>

Finally, in the terminal with the main path execute:

```bash
npm run dev
```

And in the terminal with the client route execute:

```bash
npm start
```

The latter should open a web browser tab with the address: http://localhost:3000/

## Compile build files

To compile the build files you need to go to client path and execute:

```bash
npm run build
```

This will create the static build files in a folder called build.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).








