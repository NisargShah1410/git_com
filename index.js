const { exec, execFile } = require('child_process');
const core = require('@actions/core');
const github = require('@actions/github');
var child_process = require('child_process');

try {

  const github_handle = core.getInput('github_handle');
  let handle= github_handle;

  const repository = core.getInput('repository');
  let repo= repository;

  exec(`git clone https://github.com/${handle}/${repo}.git && cd ${repo} && git log --pretty=format:"%n %nCommited by:%an %nCommit comment:%s %nFiles changed:" --name-only`,
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