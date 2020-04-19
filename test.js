import execa from 'execa';
import test from 'ava';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['com.apple.Safari'], {cwd: __dirname});
	t.is(stdout, 'Safari');
});
