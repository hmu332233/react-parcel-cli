var execSync = require('child_process').execSync ;

module.exports = function ({ projectName, projectType, path }) {
  projectType = (projectType === 'basic' ? 'basic' : 'redux');
  path = path.slice(-1) === '/' ? path.substring(0, path.length - 1) : path ;

  var src = `${__dirname}/${projectType}`;
  var dist = `${path}/${projectName}`;

  console.log(dist);

  execSync(`mkdir -p ${dist}`);
  execSync(`cp -r ${src}/* ${dist}`);
  execSync(`cd ${dist}; npm install`, { stdio: 'inherit', shell: true });
}