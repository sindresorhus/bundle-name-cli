import childProcess from 'child_process';
import test from 'ava';

test(t => {
	childProcess.execFile('./cli.js', ['com.apple.Safari'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), 'Safari');
		t.end();
	});
});
