import { Trash } from "@phosphor-icons/react"
import styles from "./Item.module.css"
import { ITask } from "../../App"

interface ItemProps {
  data: ITask
  handleCheckboxChange: () => void
}

export function Item({ data, handleCheckboxChange }: ItemProps) {
  return (
    <div className={styles.item}>
      <div>
        <input
          id={`checkbox-${data.id}`}
          checked={data.isChecked}
          readOnly
          type="checkbox"
          onClick={handleCheckboxChange}
        />
        <label htmlFor={`checkbox-${data.id}`}></label>

        <p>{data.text}</p>

        <button>
          <Trash size={16} />
        </button>
      </div>
    </div>
  )
}
