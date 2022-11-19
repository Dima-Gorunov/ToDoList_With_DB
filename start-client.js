const args = ['start'];
const opts = { stdio: 'inherit', cwd: 'to_do_proj', shell: true };
require('child_process').spawn('npm', args, opts);