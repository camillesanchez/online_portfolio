# Camille Sanchez Portfolio Website

Website domain: camillesanchez.fr (domain purchase automatic renewal)

## Code React App in development mode

To run the app in development mode use: `yarn start`. It will open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Upload last draft on Github:

To add a connection between desktop and [github](https://docs.github.com/en/free-pro-team@latest/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line):
`git remote add [insert remote repository URL]`

To check what has been changed since last draft/ on which branch we are: 
`git status`

To add all new elements: 
`git add .`

To add only specific elements:
`git add [file path]`

To clear staging area:
`git reset`

To commit those changes to the stagin area:
`git commit -m "name of the changes done since last time"`

To push it to github:
`git push`

## Create a build of portfolio

Once website is ready for deployment, use `yarn build` to build the app for production to the `build` folder. Your app is ready to be deployed!

## Open FileZilla and Upload Build to Deploy on OVHcloud

Upload all files from build:
- connect to ovh by inserting hostname, username, password and port number (info in email)
- go to build folder in left window - select all files in build folder and drag them into the www folder in the right window (which represents ovh)
- check that www.camillesanchez.fr functions properly

## [Website Diagram](https://github.com/camillesanchez/online_portfolio/blob/dev_branch/src/wiki_docs_and_images/portfolio_diagram.png)