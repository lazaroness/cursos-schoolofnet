function prompt(question, callback) {
  var stdin  = process.stdin;
  var stdout = process.stdout;

  stdin.resume();
  stdout.write(question);

  stdin.once('data', function(data) {
    callback(data.toString().trim());
  });
}

prompt('What is your name? ', function(data) {
  process.stdout.write(data+"\n");
//  console.log("Olá "+data);
  process.exit();
});

process.on('exit', function() {
  process.stdout.write('Bye Bye!!\n');
//  console.log('Bye Bye!!');
});
