import { useState } from "react"

// components
import { HeaderList } from "./components/HeaderList/HeaderList.tsx"
import { Item } from "./components/Item/Item"
import { Button } from "./components/Button/Button"
import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input"

//icons
import { PlusCircle } from "@phosphor-icons/react"

//styles
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

  const handleDeleteTask = (id: number) => {
    setTask(task.filter((task) => task.id !== id))
  }

  return (
    <main>
      <Header />
      <section className={styles.container}>
        <div className={styles.taskInfoContainer}>
          <Input onChange={handleTaskValue} value={inputValue} required />
          <Button onClick={handleCreateTask}>
            Criar
            <PlusCircle size={20} weight="bold" />
          </Button>
        </div>
        <div className={styles.tasksList}>
          <HeaderList
            completedTasks={completedTasks}
            createdTasks={task.length}
          />
          {task.map((task) => (
            <Item
              handleDeleteTask={handleDeleteTask}
              key={task.id}
              data={task}
              handleCheckboxChange={handleCheckboxChange}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
