import express, {Application, Request, Response} from 'express';

var app: Application = express();
const port: 3000 | 5000 = 3000;

app.get('/', (req: Request, res:Response):void => {
  res.send({msg:"Hello This is a sample mesage to be checking 2 "})
})

app.get('/test', (req: Request, res: Response): void=>{
  res.send(req.body)
})

app.listen(port, ():void => {
  console.log(`Example app listening on port ${port}`)
}) 