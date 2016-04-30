// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by theme.js.
import { name as packageName } from "meteor/theme";

// Write your tests here!
// Here is an example.
Tinytest.add('theme - example', function (test) {
  test.equal(packageName, "theme");
});
