import { FC } from 'react'
import { iTodo } from '../../../store/todoStore'
import styles from './DateSection.module.scss'

interface DateSectionProp {
  data: iTodo
}

const option: any = {
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
}

const DateSection: FC<DateSectionProp> = ({ data }) => {
  return (
    <div className={styles.dateContainer}>
      <div>{data.startDate?.toLocaleString('en-US', option)}</div>
      <div>{data.endDate?.toLocaleString('en-US', option)}</div>
    </div>
  )
}

export default DateSection
