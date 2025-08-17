function arraysEqual(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b)) return false;
    if (a.length !== b.length) return false;
    return a.every((val, idx) => val === b[idx]);
  }
  

export default function runCode({code, setOutput, testCases}){
    try{
        const match = code.match(/function\s+([a-zA-Z0-9_]+)/);
        console.log("match", match)
        if(!match){
            setOutput("Error: Please define a function");
            return;
        }

        const functionName = match[1]

        const func = new Function(`
            ${code}
            return ${functionName}
        `)
        const clonedTestcases = JSON.parse(JSON.stringify(testCases))

        const results = clonedTestcases.map(({input, expected, type}, idx) => {
            let result;
            if (type === "spread") {
                result = func()(...input); 
            } else {
                result = func()(input);
            }
            console.log("result", result)
            const passed = arraysEqual(result, expected)
            return `Test ${idx+1}: ${ passed ? 'Passed': 'Failed'} 
        (Input: ${input.join(", ")} Expected: ${JSON.stringify(expected)})\n`
        })

        setOutput(<pre className="pre-wrapper">{results.join('\n\n')}</pre>)
    } catch(err){
        setOutput("Error: " + err.message)
    }
    
}