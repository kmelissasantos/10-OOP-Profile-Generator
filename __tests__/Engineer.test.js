const Engineer = require("../lib/Engineer");
test('checks github is a string', () => {
    let nellie = new Engineer ('Nellie', 27, 'nellie@gmail.com', 'nellie27');
    expect(nellie.github).toEqual(expect.any(String));
})

test('functionality', () => {
    let nellie = new Engineer ('Nellie', 27, 'nellie@gmail.com', 'nellie27');
    expect(nellie.getGithub()).toBe('nellie27');
    expect(nellie.getRole()).toBe('Engineer');
})