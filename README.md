# Employee Finder

This application will be used to display all employees and their information in the company.
To make it run in local follow below commands
npm run start-server (runs express server on port 3001)
npm start (runs in browser on port 3000)

![image](https://user-images.githubusercontent.com/16698881/236365682-f269b210-11ea-4212-a793-e3a802c8298c.png)

![image](https://user-images.githubusercontent.com/16698881/236365105-8940c2a7-02fd-43b7-8130-f0497ec8736b.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start-server`

Runs express server on node in http://localhost:3001 and copies fake data generated through fake API to sample-data.json
Health check can be done through browser or postman tool
http://localhost:3001/employees
http://localhost:3001/company

same thing can be done indiviually through (reffer package.json)
npm run host
npm run setup

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

## Assumptions

The fake image path generated does not have images. Hence added few images in local to show the UI. The extra unwanted code need to be removed.

## Scope of improvements

Keeping time in mind the changes are restricted to the scope of the assignment.

Typescript -
used in order to increase type checking and modelling of data.

StoryBook -
moving common components will increase usability and options available on components for consuming teams.

Mobile first design (Responsive application) -
Achieved thorugh base framework like bootstrap and still there is a scope for getting different layouts for other supporting devices.

Accessibility - Used accessible elements and aria-tags. Not tested with screen readers and reports.

Unit testing components - Need to have seperate test file for each component, so that it will shifted easily and reused without bugs.

Snapshot testing - Need to add snapshots to compare version changes
E2E testing - To trace the flow and functionaly of the application

Localization -
Fake api is using localized content. static content in this application requires translation strings in the supported language files
