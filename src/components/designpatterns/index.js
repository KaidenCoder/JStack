import {useState} from 'react';
import { designPatterns } from "../../constants/designPatterns"
import DesignPatternCard from "../reusable/designPatternCard"

export default function DesignPatterns(){
    const [currPatternData, setCurrPatternData] = useState({
        pattern: designPatterns['Creational'][0],
        header: 'Creational',
        open: {
            Creational: false,
            Structural: false,
            Behavioral: false,
        }
    })

    return (
        <>  
        <section className="design-pattern-page">
            <section className="sidebar">
                <DesignPatternCard 
                    designData={designPatterns.Creational} 
                    name={"Creational"} 
                    currPatternData={currPatternData}
                    setCurrPatternData={setCurrPatternData}/>
                <DesignPatternCard 
                    designData={designPatterns.Structural} 
                    name={"Structural"} 
                    currPatternData={currPatternData}
                    setCurrPatternData={setCurrPatternData}/>
                <DesignPatternCard 
                    designData={designPatterns.Behavioral} 
                    name={"Behavioral"} 
                    currPatternData={currPatternData}
                    setCurrPatternData={setCurrPatternData}/>
            </section>
            <section className="patterns">
                <h2 className="patterns-title">{currPatternData.header} Patterns</h2>
                <div className="patterns-list">
                    <article className="pattern-card">
                        <h3 className="pattern-name">{currPatternData.pattern.name}</h3>
                        <pre className="pattern-description">{currPatternData.pattern.description}</pre>
                        <pre className="pattern-code">
                        <code>{currPatternData.pattern.code}</code>
                        </pre>
                    </article>
                </div>
        </section>
         </section>
        </>
    )
}