const { exec, execFile } = require('child_process');
const core = require('@actions/core');
const github = require('@actions/github');
var child_process = require('child_process');

try {

  exec(`git config user.name "NisargShah1410" &&  git config user.email "nisargshah01410@gmail.com" && git clone https://github.com/NisargShah1410/git_com.git && cd git_com && git log`,
  (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
          console.log(`exec error: ${error}`);
      }
  });

} catch (error) {
  core.setFailed(error.message);
}