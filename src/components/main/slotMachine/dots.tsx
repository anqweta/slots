import styles from "./slotMachine.module.scss";

interface DotsProps {
    props: {
        class: string;
    };
}

export default function Dots({ props }: DotsProps) {
    return (
        <span className={`${styles.dots} ${props.class}`}></span>
    );
}
