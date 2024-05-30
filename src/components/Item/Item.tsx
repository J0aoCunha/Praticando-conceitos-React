// icons
import { Trash } from "@phosphor-icons/react"

// interfaces
import { ITask } from "../../App"

// styles
import styles from "./Item.module.css"

interface ItemProps {
  data: ITask
  handleCheckboxChange: (id: number) => void
  handleDeleteTask: (id: number) => void
}

export function Item({
  data,
  handleCheckboxChange,
  handleDeleteTask,
}: ItemProps) {
  const deleteTask = () => {
    handleDeleteTask(data.id)
  }

  const chanceCheckbox = () => {
    handleCheckboxChange(data.id)
  }

  return (
    <div className={styles.item}>
      <div>
        <input
          id={`checkbox-${data.id}`}
          checked={data.isChecked}
          readOnly
          type="checkbox"
          onClick={chanceCheckbox}
        />
        <label htmlFor={`checkbox-${data.id}`}></label>

        <p>{data.text}</p>

        <button onClick={deleteTask}>
          <Trash size={16} />
        </button>
      </div>
    </div>
  )
}
