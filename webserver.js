var userName = "";
var userEmail = "";

function handleCredentialResponse(response) {
    const userInfo = jwt_decode(response.credential);
    // console.log("Encoded JWT ID token: " + decodeJwtResponse(response.credential));
    userName = userInfo.name;
    userEmail = userInfo.email;
    console.log('Name: ' + userInfo.name);
    console.log('Email: ' + userInfo.email);
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", type: "standard", shape: "circular" }  // customization attributes
    );

}

