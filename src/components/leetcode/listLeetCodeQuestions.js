import { Link } from "react-router-dom";
import { useContext } from "react";
import { leetCodeQuestions } from "../../constants/leetcodeQuestions";
import { QuestionContext } from "../../context/context";

export default function ListLeetCodeQuestions(){

    const {setQuestionData} = useContext(QuestionContext)

    return (
        <main className="leetcodeMain">
            {leetCodeQuestions.map((data, idx) => {
                const slug = data.questionName.toLowerCase().replace(/\s+/g, "")
                return (
                <div className="listQuestion">
                    <div>{idx+1}. {data.questionName} <a href={data.link} target="blank">link</a> <span className={`difficulty ${data.difficulty.toLowerCase()}`}>
    {data.difficulty}
  </span></div>
                    <Link className="editor-link" onClick={() => setQuestionData(data)} to={`/JStack/editor/${slug}`} state={{data}}>Local Code Editor</Link>
                </div>
            )})}
        </main>
    )
}