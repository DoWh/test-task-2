import { FC } from 'react'
import todoStore from '../../store/todoStore'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>Today</h1>
      <section>
        <img
          src='/add.png'
          height='20px'
          width='20px'
        />
        <div>{todoStore.todos.length}</div>
      </section>
    </header>
  )
}

export default Header
