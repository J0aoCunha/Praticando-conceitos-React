import { Trash } from "@phosphor-icons/react"
import styles from "./Item.module.css"

export default function Item() {
  return (
    <div className={styles.item}>
      <div>
        <input type="checkbox" />

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          mollitia optio nulla enim tempore
        </p>

        <button>
          <Trash size={16} />
        </button>
      </div>
    </div>
  )
}
