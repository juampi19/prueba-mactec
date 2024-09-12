"use server"

// TODO: Implement getTodos
import fs from "fs/promises"
import p from "path"





export const getTodos = async () => {

  try {
    const todosFetch = (await fs.readFile(p.resolve("src/data/todos.json"), "utf-8")).toString()
    const todos = JSON.parse(todosFetch)
    return todos
  } catch (error) {
    console.log(error)
    return []
  }

}