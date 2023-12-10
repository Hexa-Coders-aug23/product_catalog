<h1 align="center">Nice Gadgets</h1>

<br />

In order to get started, clone the repository locally and run the following command:

```
npm install
```

You don't need to clone this repository every time, you only need to clone it once
​
You will work with your team in separate branches, named after the task you're working on
​
You must pull the current repository version and create your own branch immediately before beginning your task:


```
git pull
git checkout -b "<name of the branch according to your task>"
```

You should add all the changed files, commit them, push them to your newly created branch, and create pull requests once you have finished working on the task
​
```
git add
git commit -m "<name of the commit>"
git push origin "<name of your branch>"
```

As soon as a part of a task is fully completed, please commit it and name it properly

# �� Available Scripts
​
In the project directory, you can run:
​
<br />

## ⚡️ start
​
```
npm start
```
Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
​
<br />

## �� lint
​
```
npm run lint
```
​
<br />

## �� format
​
```
npm run format
```
​
<br />

## �� format + test
​
```
npm run fix-style
```
​
This command will be automatically run before each commit
​
<br />

## �� WARNING
​
Please, do not run any scripts other than the ones mentioned above.
​
<br />

# �� Project structure (in process)
​
This is the structure of the files in the project:
​
```sh
   │
   ├── public                  # public files (favicon, .htaccess, manifest, ...)
   ├── src
   │   ├── api
   │   ├── context
   │   ├── fonts
   │   ├── modules             # Pages, shared components constants and other resources
   │   │   └── shared
   │   │      └── components
   │   ├── styles
   │   ├── types
   │   ├── utils
   │   ├── App.module.scss
   │   ├── App.tsx
   │   ├── index.tsx
   │   └── Root.tsx            # React component with all the routes
   ├── .editorconfig
   ├── .eslintrc.js
   ├── .gitignore
   ├── .prettierrc
   ├── package-lock.json
   ├── package.json
   ├── README.md
   └── tsconfig.json
```
