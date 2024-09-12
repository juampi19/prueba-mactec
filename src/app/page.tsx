import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TodoDialog } from "./(sections)/todo.dialog"
import { getTodos } from "@/server/todo/todo.query"

const page = async () => {
  const todos = await getTodos()
  console.log(todos)
  return (
    <div className="max-w-screen-md mx-auto w-full p-6 space-y-4">
      <TodoDialog />
      {/* MAP TODOS */}
      {
        todos.map( (todo: any) => (
          <Card
            key={todo.title}
          >
            <CardHeader>
              <CardTitle>
                {todo.title}
              </CardTitle>
            </CardHeader>
            <CardDescription>
              {todo.description}
            </CardDescription>
          </Card>
        ) )
      }
    </div>
  )
}

export default page