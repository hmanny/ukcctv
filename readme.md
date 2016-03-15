# Gulp Lunchbox

To get started is relatively simple. At the moment we are testing the new scaffold without Slush while we try to remove errors that team members are experiencing. To get started —

1. `git clone git@bitbucket.org:visualdecree/gulp-lunchbox.git` (into your project dir)
2. rename the folder from gulp-lunchbox to <project-name>
3. change the project name in the package.json (this is because gulp will name the js files based on the name in the package.json)
4. install all the required depancies listed in the package.json `npm install`
5. run `gulp setup` — this ensures package name is applied to css/js and links to files in the index.html
6. run `gulp` and get coding!


## Issues

Please report issues here. Errors encountered while installing are generally to do with Gyp. From the looks of things it's a widely reported issue that is not to do with the scaffold we're making but rather one of the dependancies. 