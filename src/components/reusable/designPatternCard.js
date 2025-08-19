export default function DesignPatternCard(props){
    const {designData, name, currPatternData, setCurrPatternData} = props;

    function handleHeaderPattern(){
        setCurrPatternData((prev) => ({
            pattern: designData[0],
            header: name,
            open: {
                ...prev.open,
                [name]: !prev.open[name]
            }
        }))
    }

    function handleBodyPattern(idx){
        console.log("idx",idx)
        setCurrPatternData((prev) => ({
            ...prev,
            header: name,
            pattern: designData[idx]
        }))
    }

    return (
        <section className="sidebar-section">
            <h2 className="sidebar-title" 
                onClick={handleHeaderPattern}
                role="button"
                aria-expanded={currPatternData.open[name]}>
                {name} Patterns
            </h2>
            {currPatternData.open[name] &&
            <ul className="sidebar-list">
                {designData.map((data, idx) => (
                 <li onClick={() => handleBodyPattern(idx)} key={`${data.name}#${idx}`}
                    className={`sidebar-item ${currPatternData.pattern.name == data.name && 'pattern-active'}`}
                    role="button"
                    tabIndex={0}>
                    {data.name}
                </li>
                ))}
            </ul>
            }
        </section>
    )
}