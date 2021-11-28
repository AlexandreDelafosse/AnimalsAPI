To use this run:

npm install

////

First of all we need to create a new folder for the porject, then implante all of the rssources that we need for the
project (express / mongoose / bodyparser and nodemon).

We create a new repository in Github for the project

We create two files, one is a file ('nameofyoursubject'.js) with a schema to build the project, when the schema is
created we past all the parameters that we are going to use.

In the same file we are going to decalre a constant that we could use in every aspect of the project.

In the second file (index.js), we declare all the constant that are going to be obligatory for the functioning of the
CRUD.

We need to create an account on the site MONGODB to have a database. we set up all we need to link the API and the DataBase, then we click on the cutton connect to have a link that we are going to put in the index file zo we can create the connection between both files.

When we change the <password> and the DataBase name, the files and the DataBase are linked we can continue.

We start to implement the body parser to use the different https request.

Then we start to build the CRUD.

We start with the function get to recover all the data that we are going to implement, then we create the function for
the GET/ID to found one specific data using their ID.

In a second part we are going to create the function post to inject new datas in the database.

In a third part we are going to create the PUT function to update the datas that we can choose using there ID.

In a fourth part we are going to create the DELETE function to delete the datas that we can choose using there ID.