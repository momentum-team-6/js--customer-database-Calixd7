const customercontainer = document.getElementById('customerDirectory')

for (let customer of customers) {
    let customerdisplay = document.createElement('div') 
    customercontainer.appendChild(customerdisplay)

    let picture = document.createElement('img') 
    customerdisplay.appendChild(picture)
    picture.src = customer.picture.thumbnail

let name = customer.name.first + ' ' + customer.name.last     
    let customername = document.createElement("h2")
    customerdisplay.appendChild(customername)
    customername.innerText = name

    let email = customer.email
    let customeremail = document.createElement('p')
    customerdisplay.appendChild(customeremail)
    customeremail.innerText = email

    let address = customer.location.street + '\n' + customer.location.city + ', ' + 
    customer.location.state + ' ' + customer.location.postcode
    let customeraddress = document.createElement('p')
    customerdisplay.appendChild(customeraddress)
    customeraddress.innerText = address
