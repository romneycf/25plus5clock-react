import React from "react";
import styles from "./labelbtn.module.css";

export interface LabelbtnPropsInterface 
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Labelbtn({
    children,
    className,
    ...rest
}: LabelbtnPropsInterface) {
    return(
        <button {...rest} className={styles.button + " " + className}>
        {children}
        </button>
    );
}