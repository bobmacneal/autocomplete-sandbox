## autocomplete-sandbox

This is sandbox to test the features of the WAI-ARIA compliant [react-autocomplete](https://github.com/reactjs/react-autocomplete) (ComboBox) component.

This was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## instructions
`$ git clone git@github.com:bobmacneal/autocomplete-sandbox.git`

Clone the repository in a suitable folder.

`$ cd autocomplete-sandbox`

Change directory to local repository.

`$ npm install`

Installs node package dependencies.

`npm start`

Runs the app in the development mode. 

### demo

Open [http://localhost:3000](http://localhost:3000) to test in your browser.

Enter any letter in the `Search by name` input box. This will fetch a list of names. The list of names will be 
filtered as you enter additional characters. Selecting a name will invoke an alert.



![screenshot](https://raw.githubusercontent.com/bobmacneal/autocomplete-sandbox/master/screenshot.png)


`npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


### WebStorm Config

If you use [WebStorm](https://www.jetbrains.com/webstorm/) and [JetBrains IDE Support](https://chrome.google.com/webstore/detail/jetbrains-ide-support/hmhgeddbohgjknpmjagkdomcpobmllji) Chrome extension installed,
in the WebStorm menu `Run` select `Edit Configurations...`. Then click `+` and select `JavaScript Debug`. Paste `http://localhost:3000` into the URL field and save the configuration.

>Note: the URL may be different if you've made adjustments via the [HOST or PORT environment variables](#advanced-configuration).

Start your app by running `npm start`, then press `^D` on macOS or `F9` on Windows and Linux or click the green debug icon to start debugging in WebStorm.

The same way you can debug your application in IntelliJ IDEA Ultimate, PhpStorm, PyCharm Pro, and RubyMine. 

   