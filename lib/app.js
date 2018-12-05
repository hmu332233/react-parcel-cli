const createReactAppWithParcel = require('./createReactAppWithParcel');
const { prompt , Select  } = require('enquirer');

const program = require('commander');

program
  .command('new')
  .action(async () => {
    const question = [{
      type: 'input',
      name: 'projectName',
      message: 'Project name'
    }, {
      type: 'input',
      name: 'projectPath',
      initial: './',
      message: 'Project path' 
    }];

    const selectPrompt = new Select({
      name: 'projectType',
      message: 'Pick a project type',
      choices: ['basic', 'redux']
    });
    
    try {
      const { projectName, projectPath } = await prompt(question);
      const projectType = await selectPrompt.run();

      console.log('create react app with parcel');
      createReactAppWithParcel({
        projectName,
        projectType,
        path: projectPath
      });
    } catch (error) {
      // do not something..
    }
  });

program
  .command('create <name>')
  .description('create react app with parcel')
  .option('-t, --type [type]', '"basic" or "redux"', 'basic')
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
    });
  });

program.parse(process.argv);