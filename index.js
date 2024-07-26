const express = require("express")
const urlRoute = require("./routers/url")
const {connectToMongoDB} = require("./connect")
const URL = require("./models/url")



connectToMongoDB('mongodb://localhost:27017/short--url')
.then(()=>console.log("MongoDB Connected"));

const app = express()
const PORT = 8001;

app.use(express.json());
 
// app.get('/:shortId', async (req,res)=>{
//     const shortId = req.params.shortId
//     const entry = await URL.findOneAndUpdate({
//         shortId
//     },{
//         $push:{
//         visitHistory:{
//             timestamp:Date.now(),
//         },
//     },
//    }
//   );
//   res.redirect(entry.redirectURL);
// });

app.use("/url",urlRoute);

app.use("/url",urlRoute);

app.listen(PORT, () => console.log("Server Started at PORT:", PORT));
