import execa from 'execa';
import test from 'ava';

test(async t => {
	const {stdout} = await execa('./cli.js', ['com.apple.Safari'], {cwd: __dirname});
	t.is(stdout, 'Safari');
});
