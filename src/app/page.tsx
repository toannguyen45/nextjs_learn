import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "antd";

export default function Home() {
  return (
    <div className={styles.page}>
      Hello world!
      <Button type="primary">Primary Button</Button>
    </div>
  );
}
