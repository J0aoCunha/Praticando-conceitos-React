import { DetailedHTMLProps, InputHTMLAttributes } from "react"
import styles from "./Input.module.css"

export function Input({
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input
      className={styles.container}
      placeholder="Digite uma task"
      {...props}
    />
  )
}
