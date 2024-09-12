import { z } from "zod"

// TODO: Define the schema for the todo object

export const todoSchema = z.object({
  title: z.string().min(1, "The title is required"),
  description: z.string().min(1, "The description is required")
})

export type TodoSchema = z.infer<typeof todoSchema>