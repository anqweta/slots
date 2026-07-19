import "./infoItem.css";
export default function InfoItem({ props }) {
  return (
    <div className="item-info">
      <span>{props.title}</span>
      <span className="span-count">{props.number}</span>
    </div>
  );
}
