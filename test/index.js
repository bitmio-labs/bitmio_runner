const assert = require('assert');

const { FunctionRunner } = require('..');

const FUNCTION_1 = {
    id: 'mysum',
    input: [
        { id: 'number1', type: 'number', example: 1 },
        { id: 'number2', type: 'number', example: 1 }
    ],
    output: [
        { id: 'result', type: 'number', example: 2, value: '${calc_sum}' }
    ],
    actions: [
        { id: 'calc_sum', function: 'sum', params: { a: '${number1}', b: '${number2}' } }
    ]
};

describe('Function Runner', () => {
    it('should run a basic function', () => {
        const runner = new FunctionRunner(FUNCTION_1);

        const result = runner.run({number1: 2, number2: 3});

        assert.strictEqual(result, 5);
    })
});
