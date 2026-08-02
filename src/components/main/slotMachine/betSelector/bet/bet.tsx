import styles from "@/components/main/slotMachine/betSelector/betSelector.module.scss";

interface BetProps {
    props: {
        id: number;
        bet: number;
    };
    isActive: boolean;
    onClick: () => void;
}

export default function Bet({ props, isActive, onClick }: BetProps) {
    return (
        <button id={props.id.toString()} onClick={onClick}  className={`bet-button ${isActive ? styles.active : ''}`}>
            {props.bet}
        </button>
    )
}
