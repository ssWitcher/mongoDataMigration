const addFormInput = () => {
    console.log("I was called");
    const formElement = document.getElementById("form");
    const divElement1 = document.createElement("div");
    divElement1.className = "form-group";
    const inputElement1 = document.createElement("input");
    inputElement1.type="text";
    inputElement1.className="form-control";
    inputElement1.id="username";
    inputElement1.placeholder="Username";
    const labelElement1 = document.createElement("label");
    labelElement1.htmlFor = "username";
    const textElement1 = document.createTextNode("Username");
    labelElement1.appendChild(textElement1);
    divElement1.appendChild(labelElement1);
    divElement1.appendChild(inputElement1);

    const divElement2 = document.createElement("div");
    divElement2.className = "form-group";
    const inputElement2 = document.createElement("input");
    inputElement2.type="password";
    inputElement2.className="form-control";
    inputElement2.id="password";
    inputElement2.placeholder="Password";
    const labelElement2 = document.createElement("label");
    labelElement2.htmlFor = "password";
    const textElement2 = document.createTextNode("Password");
    labelElement2.appendChild(textElement2);
    divElement2.appendChild(labelElement2);
    divElement2.appendChild(inputElement2);


    formElement.appendChild(divElement1);
    formElement.appendChild(divElement2)

}