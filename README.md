This url shortener takes in a url and an optional slug and returns a shorter version of the url for the client.

I would still like to add some error handling to make sure the given url is actually a url before sending it to the server. I was expecting the server to send back a rerouted url but it does not seem to do so. I still need to add testing to the api but the database does not seem to responding correctly.

## Add .env file

before you start you'll need to add a .env file in the directory file. The file needs to contain the authorization token sent in the header to the server.

REACT_APP_TOKEN="your_token"

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
