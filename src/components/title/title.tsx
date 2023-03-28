import React, { ReactNode } from "react";
import styles from "./title.module.css";

export default function Title( { children }: { children: ReactNode}) {
    return <h1 className={styles.title}>{children}</h1>
}