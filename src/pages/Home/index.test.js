import {sum} from './';

test('MySumFun',() => {
    const result = sum(3, 7)
    expect(result).toBe(10)
})