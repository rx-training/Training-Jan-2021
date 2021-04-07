console.log(`This processor architecture is ${process.arch}`);
//

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

  //

  console.log(`Current directory: ${process.cwd()}`);

  //


  const startUsage = process.cpuUsage();
  console.log(startUsage); 
  console.log(process.env);

  process.env.foo = 'bar';
console.log(process.env.foo);

delete process.env.foo;
console.log(process.env.foo);

//process.exit(1);


if (process.getuid) {
    console.log(`Current uid: ${process.getuid()}`);
  }


//   process.on('SIGHUP', () => {
//     console.log('Got SIGHUP signal.');
//   });
  
//   setTimeout(() => {
//     console.log('Exiting.');
//     process.exit(0);
//   }, 100);
  
//   process.kill(process.pid, 'SIGHUP');
