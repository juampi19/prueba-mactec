"use server"

import { TodoSchema } from "@/schemas/todo.schema"
// TODO: Implement addTodo
import { revalidatePath } from "next/cache"
import fs from "fs/promises"
import p from "path"

export const addTodo = async (todo: TodoSchema) => {
  try {
    const data = await fs.readFile(p.resolve("src/data/todos.json"), "utf-8")
    const todos = JSON.parse(data)
    
    //creamos el todo de los datos que llegan por parametros
    const nuevoTodo = {
      title: todo.title,
      description: todo.description
    }

    todos.push(nuevoTodo)

    //actualizamoss el archivo json
    await fs.writeFile(p.resolve("src/data/todos.json"), JSON.stringify(todos, null, 2), "utf-8")

    revalidatePath("/")

  } catch (error) {
    console.log(error)
  }
}
