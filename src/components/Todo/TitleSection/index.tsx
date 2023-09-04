import { observer } from 'mobx-react-lite'
import React, { FC } from 'react'
import todoStore, { iTodo } from '../../../store/todoStore'
import styles from './TitleSection.module.scss'

interface TitleSectionProp {
  data: iTodo
}

const TitleSection: FC<TitleSectionProp> = observer(({ data }) => {
  const titleHideStatus = data.titleHide ? styles.short : styles.full

  //all that manipulation only for correct text and checkbox position
  return (
    <section
      className={`${styles.titleSection} ${titleHideStatus}`}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        if (e.target instanceof HTMLElement && e.target.tagName !== 'INPUT')
          todoStore.toggleTitleHidden(data)
      }}
    >
      <input
        type='checkbox'
        checked={data.completed}
        onChange={() => {
          todoStore.toggleTodo(data)
        }}
      />
      {data.title}
    </section>
  )
})

export default TitleSection
