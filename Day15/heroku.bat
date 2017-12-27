heroku login
heroku create 
REM in main directory (with package.json)
git remote add heroku heroku_repo_url
git commit -m ""
git push heroku master
heroku logs --tail
REM Mongo or any other local host will not connect, so remove/comment those lines and commit-push again
REM checkout PM2
REM Set Port enviroment variable (heroku doesn't give you access to port 80) PROCESS.ENV.variable_name

REM For mongo DON'T create mLab account
REM Use the mLab plugin and use the process.env.MONGO_URI

REM mongodump -d database_name -c collection_name to backup data
REM mongorestore to restore data