import { useContext, useState } from "react";
import { Editor } from "@monaco-editor/react";
import runCode from "../../utils/runCode";
import { QuestionContext } from "../../context/context";

const defaultCodeValue = `
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {

};
`

export default function CodeEditor(){
    const [code, setCode] = useState(defaultCodeValue)
    const [output, setOutput] = useState("")
    const {questionData} = useContext(QuestionContext)
    
    return (
        <section className="mainEditor">
            {questionData &&
            <><button onClick={() => runCode({code, setOutput, testCases: questionData.testCases})}>Run Code</button>
            <section className="coding-editor">
                <section className="questions">
                    <h2>Question: {questionData.questionName}</h2>
                    <pre className="pre-wrapper">{questionData.description}</pre>
                </section>
                <section className="editor">
                    <Editor 
                        height="60vh"
                        defaultLanguage="javascript"
                        defaultValue={questionData.defaultCodeValue}
                        theme="vs-dark"
                        onChange={(value) => setCode(value || "")}
                    />
                <section className="questions" >
                    Output: {output}
                </section>
                </section>
            </section>
            </>}
        </section>
    )
}