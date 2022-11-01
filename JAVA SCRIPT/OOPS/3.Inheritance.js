class employee {
    constructor(surname, child) {
        let name = "Dheeraj";
        console.log("Hello I am Parent " + name + " " + surname + child);
    }
}

class employeesChild extends employee {
    constructor(surname) {
        let child = "Anasvar";
        super(surname, child);
        console.log("Hello I am child " + " " + surname);
    }
}
let child = new employeesChild("kumar");
