"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const reactSnippet = `import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => setCount((c) => c + 1)}>
      {'Count: '}{count}
    </button>
  )
}`

const nextServerAction = `"use server"

export async function createContact(formData: FormData) {
  const email = formData.get("email") as string
  // TODO: send email
  return { ok: true, email }
}`

export function CodeDemo() {
  return (
    <div className="relative">
      <div className="mx-auto w-full overflow-hidden rounded-2xl border bg-card">
        <div className="bg-gradient-to-r from-fuchsia-600 to-amber-500 p-[1px]">
          <div className="rounded-2xl bg-card p-6">
            <Tabs defaultValue="react">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <h3 className="text-lg font-semibold">Code preview</h3>
                <TabsList className="bg-background/60 backdrop-blur">
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="action">Server Action</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="react" className="mt-4">
                <pre className="overflow-x-auto rounded-lg border bg-muted/40 p-4 text-sm leading-relaxed">
                  <code>{reactSnippet}</code>
                </pre>
              </TabsContent>
              <TabsContent value="action" className="mt-4">
                <pre className="overflow-x-auto rounded-lg border bg-muted/40 p-4 text-sm leading-relaxed">
                  <code>{nextServerAction}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Inspired by the clean, colorful hero and code-first feel of the Vite homepage layout.
      </p>
    </div>
  )
}
