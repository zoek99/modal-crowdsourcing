fetch('./contexts/mandarin_context.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));