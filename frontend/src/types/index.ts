

//Type for my StudyGroup
export type StudyGroup = {
    name: string
    description: string
    id?: any
}

//React hook form type to add a new classroom
export type FormFields = {
    name: string
    description: string
    user_id_or_study_class_id: string
}

export type StudySet = {
    name: string
    description: string
    id?: number
}