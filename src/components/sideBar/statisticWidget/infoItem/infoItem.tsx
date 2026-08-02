import styles from "./infoItem.module.scss";

interface InfoItemProps {
  props: {
    title: string;
    number: number | string | number[] | string[];
  };
}

export default function InfoItem({ props }: InfoItemProps) {
  return (
    <div className={styles["item-info"]}>
      <span>{props.title}</span>
      <span className={styles["span-count"]}>{props.number}</span>
    </div>
  );
}
