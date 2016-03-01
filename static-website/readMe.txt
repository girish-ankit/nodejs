#1>. Install express generator 

  npm install express-generator -g

#2>. Create project structure:

 express -e <project name> 

 Note: after executing this command it will give you more command to run

  create : myProject
 create : myProject/package.json
 create : myProject/app.js
 create : myProject/public
 create : myProject/public/images
 create : myProject/views
 create : myProject/views/index.ejs
 create : myProject/views/error.ejs
 create : myProject/public/stylesheets
 create : myProject/public/stylesheets/style.css
 create : myProject/routes
 create : myProject/routes/index.js
 create : myProject/routes/users.js
 create : myProject/bin
 create : myProject/bin/www

 install dependencies:
   > cd myProject && npm install

 run the app:
   > SET DEBUG=myProject:* & npm start
   > SET DEBUG=myProject:* & ./bin/www

 create : myProject/public/javascripts

 #3> Port number is defined in file : /bin/www

 #4>. Data is stored in file having name: data.json

 #5>. To start node server: goto 'C:\wamp\node\static-website\myProject' folder and run command 'npm start'