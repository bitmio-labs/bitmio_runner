/* eslint-disable no-template-curly-in-string */

const EXAMPLE_CONFIG = {
    id: 'FUNCTION_ID',
    input: [{ id: 'number1', type: 'number', example: 1 }, { id: 'number2', type: 'number', example: 1 }],
    output: [{ id: 'result', type: 'number', example: 2, value: '${calc_sum}' }],
    actions: [
        { id: 'calc_sum', function: 'sum', params: { a: '${number1}', b: '${number2}' } }
    ]
};

class FunctionRunner {
    constructor(config = EXAMPLE_CONFIG) {
        this.config = config;
    }

    run(input) {
        return 4;
    }
}

module.exports = {
    FunctionRunner
};
