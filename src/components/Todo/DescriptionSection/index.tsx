import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import todoStore, { iTodo } from '../../../store/todoStore'
import styles from './DescriptionSection.module.scss'

interface DescriptionSectionProp {
  data: iTodo
}

const DescriptionSection: FC<DescriptionSectionProp> = observer(({ data }) => {
  const ShowStatus = data.descriptionHide ? styles.short : styles.full

  return (
    <section>
      <div
        className={`${styles.description} ${ShowStatus}`}
        onClick={() => {
          todoStore.toggleDescriptionHide(data)
        }}
      >
        {data.description}
      </div>
    </section>
  )
})

export default DescriptionSection
