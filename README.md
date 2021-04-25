# Website for Ditch Day

This is a functional component style REACT app using Django REST API for the backend.

Currently deploying on Heroku
Site: https://averycorp.herokuapp.com

Admin: https://averycorp.herokuapp.com/admin/ \
Login info:\
username: admin\
password: password

Login for the site:
username: jassboi\
password: password

## Requirements

- Python3

## Getting started

1. Clone the project to your machine
2. Activate your virtual env (see Django setup Resource below) then\
   `pip install -r requirements.txt`
3. Navigate into the frontend directory
4. Install the dependencies\
   `npm install`

## Run the application

You will need two terminals pointed to the frontend and backend directories to start the servers for this application.

1. Run this command to start the backend server in the base directory: \
   `python manage.py runserver`
2. Run this command to start the frontend development server in the base directory (This will start the frontend on the adddress [localhost:3000](http://localhost:3000)): \
   `npm start`

## Development workflow

1. Create a new branch named [your_name]\_[task/feature_name]
2. Make changes and remember to lint
3. Push to your branch
4. Create PR to merge with `master`
5. Heroku automatically redeploys app when `master` branch is updated

Do not make a lot of small commits with garbo commit messages\
Use `git commit --amend` liberally

## Resources

- Django setup: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/development_environment
- Site from last year (ty Helena): https://github.com/helenawu1998/gph-site
- https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react/edit
- https://dev.to/mdrhmn/deploying-react-django-app-using-heroku-2gfa
- React Tutorial: https://reactjs.org/tutorial/tutorial.html
- React Docs: https://reactjs.org/docs/hello-world.html
- React Router (for link/page navigation): https://reactrouter.com/web/api/
- Material UI: https://material-ui.com
