import test from 'ava';
import kls from './';

test('тест => ntcn', t => {
    t.is(kls('тест'), 'ntcn');
});

test('Тест => Ntcn', t => {
    t.is(kls('Тест'), 'Ntcn');
});

test('ТЕСТ => NTCN', t => {
    t.is(kls('ТЕСТ'), 'NTCN');
});

test('щзхъ => op[]', t => {
    t.is(kls('щзхъ'), 'op[]');
});
