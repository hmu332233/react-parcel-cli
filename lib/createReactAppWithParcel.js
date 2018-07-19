const fs = require('fs-extra');

module.exports = ({ projectName, projectType, path }) => {
  projectType = (projectType === 'basic' ? 'basic' : 'redux');
  console.log(`${path}/${projectName}`);
  fs.copySync(`${__dirname}/${projectType}`, `${path}/${projectName}`);
}