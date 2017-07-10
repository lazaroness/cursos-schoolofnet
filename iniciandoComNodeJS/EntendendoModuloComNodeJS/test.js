var prompt = require('./dir/prompt.js'); // sem o .js tambem funciona

prompt('What is your name? ', function(data) {
  process.stdout.write(data+"\n");
  process.exit();
});

process.on('exit', function() {
  process.stdout.write('Bye Bye!!\n');
});

