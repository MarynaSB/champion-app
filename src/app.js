function contact() {
    let name = prompt("What is your name?");
    let age = prompt("How old is your child?");
    if (age === "8" || age === "9") {
      let phoneNumber = prompt("Leave your phone number, please");
      let email = prompt("Leave your email address, please");
      alert(`Thank you, ${name}, we'll contact you. Have a good day!`);
    } else {
      alert(
        `Sorry, ${name}, we only accept children born in 2013. You can search for a team for children of your son's year of birth. Have a good day!`
      );
    }
  }
  let signUpButton = document.querySelector("button");
  signUpButton.addEventListener("click", contact);