// styles
import styles from "./HeaderList.module.css"

interface HeaderListProps {
  createdTasks: number
  completedTasks: number
}

export default function HeaderList({
  completedTasks,
  createdTasks,
}: HeaderListProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>
          Tarefas Criadas
          <span>{createdTasks}</span>
        </p>
      </aside>
      <aside>
        <p>
          concluídos
          <span>
            {completedTasks} de {createdTasks}
          </span>
        </p>
      </aside>
    </header>
  )
}
