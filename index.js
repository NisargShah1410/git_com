const { exec, execFile } = require('child_process');
const core = require('@actions/core');
const github = require('@actions/github');
var child_process = require('child_process');

try {

  const github_handle = core.getInput('github_handle');
  let handle= github_handle;

  const github_mail = core.getInput('github_mail');
  let mail= github_mail;

  exec(`git config user.name "${handle}" &&  git config user.email "${mail}" && git clone https://github.com/NisargShah1410/git_com.git && cd git_com && git log`,
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