### Webpack DCN simulator
In this project you have two folders: cdns and apps. The cdns shall represent server, which delivering js files. The apps are suppost to use the files.

Each cdn and app can be excuted to run on an own port of localhost. The first cdn server is localhost:3000, the second localhost:3100, ... The app server start with localhost:4000. The js files of the cdns have to be included into an script file in the index.html of an app. Run an app/cdn by executing firstly executing "npm install", then "npm start" in its directory.
