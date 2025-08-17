import { createContext, useState } from "react";

export const QuestionContext = createContext()

export default function QuestionProvider({children}){
    const [questionData, setQuestionData] = useState(null)

    return (
        <QuestionContext.Provider value={{questionData, setQuestionData}}>
            {children}
        </QuestionContext.Provider>
    )
}