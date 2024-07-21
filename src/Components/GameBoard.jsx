import Card from './Card.jsx'

function GameBoard({ handleScore }) {
    // Update handleScore and return to App --> Header (maybe from Card)

    return (
        <div className="game-board">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default GameBoard