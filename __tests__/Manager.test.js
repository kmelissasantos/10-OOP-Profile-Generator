const Manager = require("../lib/Manager");
test('checks github is a string', () => {
    let nellie = new Manager ('Nellie', 27, 'nellie@gmail.com', '727-727');
    expect(nellie.officeNumber).toEqual(expect.any(String));
})

test('functionality', () => {
    let nellie = new Manager ('Nellie', 27, 'nellie@gmail.com', '727-727');
    expect(nellie.getOfficeNumber()).toBe('727-727');
    expect(nellie.getRole()).toBe('Manager');
})