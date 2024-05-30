import styles from "./HeaderList.module.css"

export default function HeaderList() {
  return (
    <header className={styles.container}>
      <aside>
        <p>
          Tarefas Criadas
          <span>7</span>
        </p>
      </aside>
      <aside>
        <p>
          concluídos
          <span>5 de 7</span>
        </p>
      </aside>
    </header>
  )
}
