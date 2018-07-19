var createReactAppWithParcel = require('./createReactAppWithParcel');

var program = require('commander');

program
  .command('create <name>')
  .description('create react app with parcel')
  .option('-p, --type [type]', '"basic" or "redux"', 'basic')
  .option('-p, --path [path]', 'path to be created.', './')
  .on('--help', () => {
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ react-parcel-cli create my-app');
    console.log('    $ react-parcel-cli create my-app -p ./workspace -t redux');
    console.log('');
  })
  .action((name, options) => {
    console.log('create react app with parcel');
    createReactAppWithParcel({
      projectName: name,
      projectType: options.type,
      path: options.path
    })
  });

program.parse(process.argv);