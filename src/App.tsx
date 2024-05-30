import { HeaderList } from "./components/HeaderList/HeaderList"
import { Item } from "./components/Item/Item"
import { Button } from "./components/Button/Button"
import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input"
import { PlusCircle } from "@phosphor-icons/react"
import { useState } from "react"

import styles from "./app.module.css"

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [task, setTask] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState("")

  const handleTaskValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleCreateTask = () => {
    if (!inputValue) return

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isChecked: false,
    }

    setTask([...task, newTask])

    setInputValue("")
  }

  const handleCheckboxChange = (id: number) => {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    )
  }

  const completedTasks = task.filter((task) => task.isChecked).length

  return (
    <main>
      <Header />
      <section className={styles.container}>
        <div className={styles.taskInfoContainer}>
          <Input onChange={handleTaskValue} value={inputValue} />
          <Button onClick={handleCreateTask}>
            Criar
            <PlusCircle size={20} weight="regular" />
          </Button>
        </div>
        <div className={styles.tasksList}>
          <HeaderList
            completedTasks={completedTasks}
            createdTasks={task.length}
          />
          {task.map((task) => (
            <Item
              key={task.id}
              data={task}
              handleCheckboxChange={() => handleCheckboxChange(task.id)}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
