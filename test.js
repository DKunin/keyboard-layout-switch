import test from 'ava';
import kls from './';

test('тест => ntcn', t => {
    t.deepEqual(kls('тест'), 'ntcn');
});

test('Тест => Ntcn', t => {
    t.deepEqual(kls('Тест'), 'Ntcn');
});

test('ТЕСТ => NTCN', t => {
    t.deepEqual(kls('ТЕСТ'), 'NTCN');
});

test('щзхъ => op[]', t => {
    t.deepEqual(kls('щзхъ'), 'op[]');
});
