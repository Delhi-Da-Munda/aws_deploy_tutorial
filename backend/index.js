const express = require('express')
const app = express()
const cors = require('cors')
const port = 5050

app.use(cors())

app.get('/', (req,res) => {
	const quoteArr = ["Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", "First, solve the problem. Then, write the code.", "Experience is the name everyone gives to their mistakes.", "In order to be irreplaceable, one must always be different", "Knowledge is power"]
	const randomNum = Math.floor(Math.random() * quoteArr.length)
	res.send(quoteArr[randomNum])
})

app.listen(port, () => console.log(`App listening on ${port}`))
