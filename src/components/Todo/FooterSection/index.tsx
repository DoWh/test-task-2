import { FC } from 'react'
import { iTodo } from '../../../store/todoStore'
import styles from './FooterSection.module.scss'

interface FooterSectionProp {
  data: iTodo
}

const FooterSection: FC<FooterSectionProp> = ({ data }) => {
  return (
    <section className={styles.footer}>
      <div>{data.tags?.[0] ?? null}</div>
      <div>{data.tags?.[1] ?? null}</div>
      <img
        src='/img.png'
        width='24px'
        height='24px'
      />
    </section>
  )
}

export default FooterSection
