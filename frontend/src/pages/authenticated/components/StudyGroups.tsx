import { FC } from 'react'
interface StudyGroupsProps {
  title: string
  description: string
}
const StudyGroups: FC<StudyGroupsProps> = ({
   title, description
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default StudyGroups