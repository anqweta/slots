export default function Bet({ props, isActive, onClick }) {
    return (
        <button id={props.id} onClick={onClick}  className={`bet-button ${isActive ? 'active' : ''}`}>
            {props.bet}
        </button>
    )
}