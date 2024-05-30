// generics
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

//styles
import styles from "./Button.module.css"

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  )
}
