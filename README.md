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

## Medias Stored in a AWS S3 Storage

To add & delete medias from portfolio: 
- log into [AWS account](https://aws.amazon.com/)
- find services --> <b>S3 storage</b> 
- click on <b>camillesanchez-portfolio-stockage</b> "storage bucket" (please note that all materials posted in this bucket are set to PUBLIC)
- upload new media files (also called "Objects" on site) into files/
- add their object URL links to the ./utils/constants.js file such as `export const NAME = "OBJECT URL LINK"` 
- import it in the file you want using: `import { NAME } from "./utils/constants.js" `

## Create a build of portfolio

Once website is ready for deployment, use `yarn build` to build the app for production to the `build` folder. Your app is ready to be deployed!

Select all the files in the build folder (and un-select any unecessary files) and create a .zip from it.

## Website Deployment using OVHcloud:

To (re-)deploy portfolio:
- click on "camilln.cluster029.hosting.ovh.net" in the dashboard
- select the tag "FTP - SSH" & select "FTP Explorer" (a new window will open, log in)
- if re-deploy, click on folder "www", select all and delete.
- for both deploy and re-deploy, click on "upload"
- choose file (on the right side, under Archives) and drag on top of it "Archive.zip" just created above
- click on the check mark and wait for it to process
- for deployment, check if domain is SSL enabled in multisite tab in the dashboard
