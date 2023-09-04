import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { iTodo } from '../../store/todoStore'
import DateSection from './DateSection'
import DescriptionSection from './DescriptionSection'
import FooterSection from './FooterSection'
import TitleSection from './TitleSection'
import styles from './Todo.module.scss'

interface TodoProp {
  data: iTodo
}

const Todo: FC<TodoProp> = observer(({ data }) => {
  return (
    <article className={styles.todo}>
      <TitleSection data={data} />
      <DateSection data={data} />
      <DescriptionSection data={data} />
      <FooterSection data={data} />
    </article>
  )
})

export default Todo
