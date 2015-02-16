This repo is a very simple setup to get up and running with Smartface Applications. 

It watches files and builds them into a single file that can be fed into a Smartface application.

You can use it with a project like [Vanilla App](https://github.com/serkanserttop/smf-vanilla-app) to develop mobile apps quickly without the compile cycle.

You should have installed Gulp and Bower globally and run `npm install` and `bower install`.

We did not provide any bower dependencies for this project, but it is provided as part of the development workflow.

There will be examples of projects that use bower dependencies, so have a look at those if you wish to see how you can integrate bower.

Then in two separate terminals, run `npm start` and `gulp watch`.

Whenever you save your changes under the `smf` folder, gulp will combine all the files into `dist/main.js` file.

Exit your app and re-enter again from your device.

Your app will be updated with the new file.