- This project was created for the Thomson Reuters Medal Count Widget coding challenge.
- This project was bootstraped with create-react-app
- The grid medals data is received by calling - https://s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json
- The flags are received by calling - https://s3-us-west-2.amazonaws.com/reuters.medals-widget/flags.png
- To run the project clone the repository then:

  - Development(to run a local dev server): npm run start,
  - Production (to build for production): npm run build

- The embeddable version of this application is at this repo https://github.com/Jzucca/tr-medal-count-widget. Some note's for the Thomson Reuters developers, I had to eject out of using the create-react-app configuration and edit the webpack.config.prod.js file. If you go to line 116 of the webpack.config.prod.js file inside the config directory you will see all javascript files get outputted to static/js/bundle.js, CSS follow suit, on line 459. Also, I had to add lines 126-128 to be able to bundle this project as a UMD module that can be exported.
- The next and final significant change is in the index.js file at the root of the src directory. I had to add the following code to export the root of the application:

export const initialize = (medal, selector) => {
const container = document.getElementById(selector)
? document.getElementById(selector)
: document.getElementById("root");
ReactDOM.render(<App medal={medal} />, container);
};

- Lastly, we initialize the widget index.html file on line 20
