import { Request, Response } from "express"

import express from "express"
const app = express()
const port = 3000

interface SignupPayload {
  email: string,
  password: string
}

function isSignupPayload(payload: SignupPayload): payload is SignupPayload {
  return (payload as SignupPayload).email !== undefined
}

app.get("/", (req, res) => {
  res.send("Hello world!")
})

app.post("/signup", (req: Request, res: Response) => {
  const body = req.body
  if (!isSignupPayload(body)) {
    res.send(422)
  }

  res.json({token: "Generated token", email: body.email, password: body.password})
})
 
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})