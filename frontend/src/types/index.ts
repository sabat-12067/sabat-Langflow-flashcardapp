

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
    user_id_or_study_class_id?: string
    id?: any
}

export type StudySet = {
    name: string
    description: string
    id?: number
    user_id_or_study_class_id?: string
}

export type Card = {
    front: string
    back: string
    flashcard_set_id: string
}
