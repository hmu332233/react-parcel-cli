const makeReactComponentSkeleton = require('./makeReactComponentSkeleton');

const program = require('commander');

program
  .command('create <type>')
  .description('svg파일을 Icon 컴포넌트로 변환시켜준다')
  .option('-p, --path [path]', 'path to be created.', './')
  .on('--help', () => {
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ mkcpnt -n Input');
    console.log('    $ mkcpnt -n Input -t function -p ./src/components');
    console.log('');
  })
  .action((target, options) => {
    console.log('make grm Icon component');
    console.log(target, options.path);
  });



program.parse(process.argv);