import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Employee{
    id: number;
    firstName : string;
    lastName : string;
    contact : number;
    email : string;
    dob: Date;
    address: string;
    formCustomerGroup: FormGroup;

    constructor() {
        var _builder = new FormBuilder;

        this.formCustomerGroup = _builder.group({});
        
        var validation_firstName = []
        validation_firstName.push(Validators.required);
        validation_firstName.push(Validators.pattern("^[A-Z][a-zA-Z]{3,}$"));
        this.formCustomerGroup.addControl("EmployeeFirstName", new FormControl('', Validators.compose(validation_firstName)))
        
        var validation_lastName = []
        validation_lastName.push(Validators.required);
        validation_lastName.push(Validators.pattern("^[A-Z][a-zA-Z]{4,}$"));
        this.formCustomerGroup.addControl("EmployeeLastName", new FormControl('', Validators.compose(validation_lastName)))
        
        
        var validation_contact = []
        validation_contact.push(Validators.required);
        validation_contact.push(Validators.pattern("^[0-9]{10,10}$"));
        this.formCustomerGroup.addControl("EmployeeContact", new FormControl('', Validators.compose(validation_contact)))
        //^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
        
        var validation_email = []
        validation_email.push(Validators.required);
        validation_email.push(Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"));
        this.formCustomerGroup.addControl("EmployeeEmail", new FormControl('', Validators.compose(validation_email)))
        
        this.formCustomerGroup.addControl("EmployeeDob", new FormControl('', Validators.required))
        
        this.formCustomerGroup.addControl("EmployeeAddress", new FormControl('', Validators.required))
    }
}