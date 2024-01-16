
import "./style.css"

interface RootProps {
    title: string,
    description: string
}

function Root({ title, description }: RootProps) {
    return (
        <div className="ui-welcome">
            <div className="ui-welcome-left">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export {
    Root
}