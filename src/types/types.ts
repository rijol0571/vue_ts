// src/types/types.ts
export interface Todo {
    id: number;        // Todo'ning noyob identifikatori
    title: string;     // Todo'ning sarlavhasi
    completed: boolean; // Todo bajarilganmi yoki yo'qmi
}

export interface TodoState {
    todos: Todo[];     // Todos ro'yxati
}
