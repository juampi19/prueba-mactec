"use client"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { todoSchema, TodoSchema } from "@/schemas/todo.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { addTodo } from "@/server/todo/todo.actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export const TodoForm = () => {
  const form = useForm<TodoSchema>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  const onSubmit = async (values: TodoSchema) => {

    console.log(values)
   

    try {
      await addTodo(values)
      toast.success("TODO guardado correctamente")
      form.reset()
    } catch (error) {
      toast.error("Ocurrió un error al guardar el TODO")
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título</FormLabel>
              <FormControl>
                <Input placeholder="Escribe el título" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Input placeholder="Escribe la descripción" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Agregar</Button>
      </form>
    </Form>
  )
}
