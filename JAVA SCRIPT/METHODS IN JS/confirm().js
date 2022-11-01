//================================ confirm() ====================================//

/*The confirm() method ==> it displays a dialog box with a message, an OK button, and a Cancel button. 
The confirm() method returns true if the user clicked "OK", otherwise false . */

let responce = confirm("are you sure, want to delte");
if (responce) {
  document.write("deleted");
} else {
  document.write("not deleted");
}
