import React, { ReactNode } from "react";
import styles from "./box.module.css";

export default function Box( { children }: { children: ReactNode}) {
    return <div className={styles.container}>{children}</div>
}