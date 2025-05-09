type ResultProps = {
    winner: string | null
    cocaCola: number
    cocaColaZero: number
}

const Result = ({ winner, cocaCola, cocaColaZero }: ResultProps) => {
    return (
        <div className="result">
            <h3>Result</h3>
            <p>CocaCola: {cocaCola} votes</p>
            <p>CocaColaZero: {cocaColaZero} votes</p>
            <p className="winner">
                {winner === null ? "it's a draw!" : `The winner is: ${winner}`}
            </p>
            <p>Score-CocaCola: {cocaCola} & CocaColaZero: {cocaColaZero}</p>
        </div>
    )
}

export default Result