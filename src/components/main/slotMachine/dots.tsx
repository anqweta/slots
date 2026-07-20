interface DotsProps {
    props: {
        class: string;
    };
}

export default function Dots({ props }: DotsProps) {
    return (
        <span className={"dots " + props.class}></span>
    );
}
