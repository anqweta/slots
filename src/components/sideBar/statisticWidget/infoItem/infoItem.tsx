import "./infoItem.css";

interface InfoItemProps {
  props: {
    title: string;
    number: number | string | number[] | string[];
  };
}

export default function InfoItem({ props }: InfoItemProps) {
  return (
    <div className="item-info">
      <span>{props.title}</span>
      <span className="span-count">{props.number}</span>
    </div>
  );
}
