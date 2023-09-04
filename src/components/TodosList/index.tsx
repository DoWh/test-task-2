import { observer } from 'mobx-react-lite'
import { FC, Suspense, useEffect, useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts'
import todoStore from '../../store/todoStore'
import Header from '../Header/intex'
import Todo from '../Todo'
import styles from './TodosList.module.scss'

const TodosList: FC = observer(() => {
  const loadingRef = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(loadingRef, {
    threshold: 1,
  })

  useEffect(() => {
    if (entry?.isIntersecting) {
      todoStore.loadMoreTodos()
    }
  }, [entry])

  function Loading() {
    return <h2>🌀 Loading...</h2>
  }

  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <main className={styles.todosList}>
        {todoStore.todos.map(item => (
          <Todo
            data={item}
            key={item.id}
          />
        ))}
        <div ref={loadingRef}></div>
      </main>
    </Suspense>
  )
})

export default TodosList
