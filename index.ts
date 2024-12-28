import { Request, Response } from "express"

import express from "express"
const app = express()
app.use(express.json())
const port = 3000

interface SignupPayload {
  email: string,
  password: string
}

function isSignupPayload(payload: SignupPayload): payload is SignupPayload {
  return payload?.email !== undefined
}

app.get("/", (req, res) => {
  res.send("Hello world!")
})

app.post("/signup", (req: Request, res: Response) => {
  const body = req.body
  console.log(body)
  if (!isSignupPayload(body)) {
    res.sendStatus(422)
    return
  }

  res.json({token: "Generated token", email: body.email, password: body.password})
})
 
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})