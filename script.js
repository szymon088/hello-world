   var request = new XMLHttpRequest();
   request.open("GET", "dane.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);
   document.getElementById('par').innerHTML = my_JSON_object.name;
   console.log("New commit")


