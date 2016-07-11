### Webpack DCN simulator
In this project I want to simulate an CDN, which delivers an bundled JS file. The fake CDN is running on an local served node Server and can be found in the folder fakecdn

Then an "external" application, which runs on an own local served node Server aswell, shall include the Javascript file in its index and using all dependencies even in its own Javascript files. So webpack shall configure the external application that way, that it can even use "import" or "require" in its own Javscript files.

To run this project, go into the fakeCdn and the externalApp folder and execute "npm install". Then first run "npm start" in fakeCdn, second in externalApp.
