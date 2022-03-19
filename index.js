var unirest = require("unirest")

//First request focus on the first 10 records in the newspapers resource
var req1 = unirest("GET","http://localhost:3000/newspapers?_limit=10");

//Second request focus on all the newspapers
var req2 = unirest("GET","http://localhost:3000/newspapers");

//Header of the first request
req1.headers({
//Question 03:The response can be cached if validated by the origin server,
// even if the response is non-cacheable
"cache-control": "no-cache",
})

//Header of the second request
req2.headers({
  "cache-control": "no-cache",
})

//Question 01: Show only the first 10 records 
req1.end(function (res) {
  if (res.error) throw new Error(res,error)
  console.log("\n\n")
  console.log("__________ Alos_act1 __________\n")
  console.log("\n\n")
  console.log(" Show only the first 10 records:\n")
  console.log(res.body)
})
//Question 02: Show only thr names of newspapers that started with the little M
req2.end(function (response) {
  console.log("\n\n")
  console.log(" The newspapers names that started with the little M:\n")
  console.log(response.body.filter((newspapers) => newspapers.name.startsWith("M")))
})