import { designPatterns } from "../../constants/designPatterns"

export default function DesignPatterns(){

    return (
        <>
            <section className="patterns">
                <h2 className="patterns-title">Creational Patterns</h2>
                <div className="patterns-list">
                    {designPatterns.Creational.map((data, idx) => (
                    <article key={`${data.name}#${idx}`} className="pattern-card">
                        <h3 className="pattern-name">{data.name}</h3>
                        <pre className="pattern-description">{data.description}</pre>
                        <pre className="pattern-code">
                        <code>{data.code}</code>
                        </pre>
                    </article>
                    ))}
                </div>
            </section>
            <section className="patterns">
                <h2 className="patterns-title">Structural Patterns</h2>
                <div className="patterns-list">
                    {designPatterns.Structural.map((data, idx) => (
                    <article key={`${data.name}#${idx}`} className="pattern-card">
                        <h3 className="pattern-name">{data.name}</h3>
                        <pre className="pattern-description">{data.description}</pre>
                        <pre className="pattern-code">
                        <code>{data.code}</code>
                        </pre>
                    </article>
                    ))}
                </div>
            </section>
            <section className="patterns">
                <h2 className="patterns-title">Behavioral Patterns</h2>
                <div className="patterns-list">
                    {designPatterns.Behavioral.map((data, idx) => (
                    <article key={`${data.name}#${idx}`} className="pattern-card">
                        <h3 className="pattern-name">{data.name}</h3>
                        <pre className="pattern-description">{data.description}</pre>
                        <pre className="pattern-code">
                        <code>{data.code}</code>
                        </pre>
                    </article>
                    ))}
                </div>
            </section>
        </>
    )
}