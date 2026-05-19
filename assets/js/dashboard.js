let client=

JSON.parse(
localStorage.getItem(
'client'
)
)

document.getElementById(
'clientName'
).innerText=
client.name


fetch(
client.data
)

.then(
response=>response.json()
)

.then(data=>{

document.getElementById(
'sku'
).innerText=
data.totalSKU

document.getElementById(
'match'
).innerText=
data.matching

document.getElementById(
'exception'
).innerText=
data.exceptions

})
