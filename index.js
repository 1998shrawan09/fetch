
var r = fetch('https://reqres.in/api/user')
var s = r.then(function (response) {
  return response.json()
})
s.then(function (a) {
displayData(a.data)
})
 function displayData(data) {
  var table = document.getElementById('table')
  for (var i = 0; i < data.length; i++) {
    var obj = data[i]
    var row = document.createElement('tr')
    var id = document.createElement('td')
    var name = document.createElement('td')
    var year = document.createElement('td')
    var color = document.createElement('td')
    var pantone_value = document.createElement('td')
    id.innerHTML = obj.id
    name.innerHTML = obj.name
    year.innerHTML = obj.year
    color.innerHTML = obj.color
    pantone_value.innerHTML = obj.pantone_value
    row.appendChild(id)
    row.appendChild(name)
    row.appendChild(year)
    row.appendChild(color)
    row.appendChild(pantone_value)
    table.appendChild(row)
  }
}
