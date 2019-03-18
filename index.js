
let formData = {
  "firstName": "Byron",
  "registryMessage": "Poodle"
};
 
let configObj = {
  method: "POST",
headers: {
      "Content-Type": "application/json",
     "Accept" : "application/json"
  },
  body: JSON.stringify(formData)
}

const registerSelf = () => {
 return  fetch("http://guestbook.example.com/register" , configObj)
  .then(function(response) {
    return response.json();
  })
  .then(json => {
     return json.message;
  })
}

const errorSelf = () => {
 return  fetch("http://guestbook.example.com/register-error" , configObj)
  .then(function(response) {
    return response.json();
  })
  .then(json => {
     return json.message;
  }).catch(error => {
    return ":(";
  })
}


