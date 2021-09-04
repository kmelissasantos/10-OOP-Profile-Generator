const { test, expect } = require('@jest/globals');
const Emploee = require('../lib/Employee');

test('checks name, id, email', () => {
    let nellie = new Employee ('Nellie', 27, 'nellie@gmail.com');
    expect(nellie.name).toEqual(expect.any(String));

    expect(nellie.id).toEqual(expect.any(Number));

    expect(jeri.email).toEqual(expect.any(String));
})

test('testing getname, getid, getemail, getrole', () => {
    let nellie = new Employee ('Nellie', 27, 'nellie@gmail.com');
    expect(nellie.getName()).toBe ('Nellie');

    expect(nellie.getId()).toBe(27);

    expect(nellie.getEmail()).toBe('nellie@gmail.com');

    expect(nellie.getRole()).toBe('Employee');

})