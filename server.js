const cors = require('cors');
const translate = require('@vitalets/google-translate-api');

myt = async (eee) => { translate(
    // process.argv.slice(2).join(' '),  // "我說英語", 
    eee,
    { to: "en" })
// translate("Ich bin Student", { to: "en" })
  .then((res) => {
    // console.log(res.text);
    //=> 我說英語
    // console.log(res.from.language.iso);
    //=> en
    return res.text
  })
  .catch((err) => {
    // console.error(err);
    return err
  });
  
}

const express = require('express');
const app = express();

//     const ingredients = [
//     {
//         "id": "1",
//         "item": "Bacon"
//     },
//     {
//         "id": "2",
//         "item": "Eggs"
//     },
//     {
//         "id": "3",
//         "item": "Milk"
//     },
//     {
//         "id": "4",
//         "item": "Butter"
//     }
// ];





app.use(cors({
    // origin: 'https://www.section.io'
    // origin: ['https://www.section.io', 'https://www.google.com/']
    origin: '*',

}));
app.get('/', (req, res) => {
    return "hello"
})
app.get('/translation', (req, res) =>{
    translate(req.query.source_text)
    .then(
        resu => {
            res.send({
                text: resu.text,
            })
        }
    ).catch(
        err => {
            console.error(err);
        }
    )
});


// app.listen(6069);
port = process.env.PORT || 80

app.listen(port);
