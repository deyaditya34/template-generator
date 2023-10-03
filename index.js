function templateProcessing(template, replaceValues = {}) {
  let parsedTemplate = template;

  for (const property in replaceValues) {
    parsedTemplate = parsedTemplate.replace(`${property}`, `${replaceValues[property]}`);
  }
  
  return parsedTemplate;
}

let template = "Hi, This is name. I am from place. I love travelling in vehicle."

let replaceValues = {
  name: "Aditya",
  place: "Bokakhat",
  vehicle: "Bike"
}

console.log(templateProcessing(template, replaceValues))
