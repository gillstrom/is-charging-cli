import execa from 'execa';
import test from 'ava';

test('show help output', async t => {
	t.regex(await execa.stdout('./cli.js', ['--help']), /Find out if a computer is charging/);
});

test('get result', async t => {
	t.regex(await execa.stdout('./cli.js'), /true|false/);
});
