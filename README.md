# Titlebot
Input a URL, and I grab the title and favicon.

## Tech
This application is built with a React frontend deployed via Netlify, and an Express backend deployed via Heroku. The database is Mongo, with the deployed version using Mongo Atlas.

## Setup
- Clone down the repo
- `cd` into both `api` and `client` and run `npm i`
- Make sure you have Mongo installed
- Open two command line tabs, `yarn start` or `npm start` in both `client` and `api` directories
- Input a URL (starting with ht<span>tps://</span>www ) into the search box, and click `save`

Note: If you'd like to use your own Mongo instance (rather than Atlas), please go to `/client/src/models/title.js` and uncomment the first line, then comment the second line.

## Known Issues
- Currently, the application requires `https://` at the start of the URL. Without it, the `fetch` on the backend treats the URL as a relative path, and the application crashes. I could add some logic to add `https://` to URL if it isn't added, but that presents other issues. I'll get hacking at that.

- When the search goes through, the whole window reloads. I did this on purpose to get the new entry to show, but I think I could use `useEffect` to refresh the `List` component without the whole page having to reload.

## Credits
Phil Welsh | phil.welsh.dev@gmail.com
