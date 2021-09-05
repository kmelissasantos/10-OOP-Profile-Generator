const Intern = require("../lib/Intern");
test('checks github is a string', () => {
    let nellie = new Intern ('nellie', 27, 'nellie@gmail.com', 'CorgiAcademy');
    expect(nellie.school).toEqual(expect.any(String));
})

test('functionality', () => {
    let nellie = new Intern ('Nellie', 27, 'nellie@gmail.com', 'CorgiAcademy');
    expect(nellie.getSchool()).toBe('CorgiAcademy');
    expect(nellie.getRole()).toBe('Intern');
})