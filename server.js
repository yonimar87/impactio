const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()

app.options('*', cors())
app.use(cors())

const port = 4000

app.get('/api/members', (req, res) => {
    let rawdata = fs.readFileSync('members.json')
    let members = JSON.parse(rawdata)

    members = members.map((member) => {
        member = {
            'id': member.id,
            'firstName': member.firstName,
            'lastName': member.lastName,
            'dateJoined': new Date(member.dateJoined),
        }
        return member
    }).sort(function(a, b){return a.dateJoined - b.dateJoined})
    res.json(members)
})

app.get('/api/member/:id', (req,res) => {
    let rawdata = fs.readFileSync('members.json');
    let members = JSON.parse(rawdata);
    let singleMember = members.find(members => JSON.stringify(members.id) === req.params.id)

    // for (let i = 0; i < members.length; i++) {
    //     if (JSON.stringify(members[i].id) === req.params.id) {
    //         console.log(members[i].id)
    //         console.log(req.params.id)
    //         singleMember = members[i]
    //         break
    //     };
    // }
    res.send(singleMember)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
