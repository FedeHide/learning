import PropTypes from 'prop-types'
import { Square } from './Square'

export function WinnerModal ({winner, resetGame}) {
    if (winner === null) return null
    const winnerText = winner === false ? 'Tie' : `Winner:`

    return (
        <section className="winner">
            <div className="text">
            <h2>{winnerText}</h2>

            <header className="win">
                {winner && <Square>{winner}</Square>}
            </header>

            <footer>
                <button onClick={resetGame}>Reset game</button>
            </footer>
            </div>
        </section>
    )
}

WinnerModal.propTypes = {
    winner: PropTypes.string,
    resetGame: PropTypes.func,
}