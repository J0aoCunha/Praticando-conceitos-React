import { PlusCircle } from "@phosphor-icons/react"
import styles from "./app.module.css"
import { Button } from "./components/Button/Button"
import { Header } from "./components/Header/Header"
import { Input } from "./components/Input/Input"
import Item from "./components/Item/Item"
import HeaderList from "./components/Headerlist/HeaderList"

function App() {
  return (
    <main>
      <Header />
      <section className={styles.container}>
        <div>
          <form className={styles.taskInfoContainer}>
            <Input />
            <Button>
              Criar
              <PlusCircle size={20} color="#f2f2f2" weight="regular" />
            </Button>
          </form>
        </div>
        <div className={styles.tasksList}>
          <HeaderList />
          <Item />
        </div>
      </section>
    </main>
  )
}

export default App
