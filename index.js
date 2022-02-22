const { exec, execFile } = require('child_process');
const core = require('@actions/core');
const github = require('@actions/github');
var child_process = require('child_process');

try {

  const github_handle = core.getInput('github_handle');
  let handle= github_handle;

  const github_mail = core.getInput('github_mail');
  let mail= github_mail;

  const repository = core.getInput('repository');
  let repo= repository;

  exec(`git config user.name "${handle}" &&  git config user.email "${mail}" && git clone https://github.com/${handle}/${repo}.git && cd ${repo} && git log`,
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