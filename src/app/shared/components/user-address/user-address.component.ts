import { Component, forwardRef, OnInit } from "@angular/core";
import {
    ControlValueAccessor,
    FormBuilder,
    FormControl,
    FormGroup,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validators
} from "@angular/forms";

export interface UserAddressComponentValues {
    street: string;
    zipCode: string;
    city: string;
}

@Component({
    selector: "app-user-address",
    templateUrl: "./user-address.component.html",
    styleUrls: ["./user-address.component.css"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UserAddressComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => UserAddressComponent),
            multi: true
        }
    ]
})
export class UserAddressComponent implements ControlValueAccessor, OnInit {
    form!: FormGroup;

    userStreet!: FormControl;
    userZip!: FormControl;
    userCity!: FormControl;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.userStreet = new FormControl("", { validators: [Validators.required] });
        this.userZip = new FormControl("", { validators: [Validators.required] });
        this.userCity = new FormControl("", { validators: [Validators.required] });

        this.form = this.fb.group({
            street: this.userStreet,
            zipCode: this.userZip,
            city: this.userCity
        });
    }

    onTouched: any = () => {};

    registerOnChange(fn: (value: any) => void): void {
        this.form.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    writeValue(value: UserAddressComponentValues): void {
        if (value) {
            this.form.setValue(value, { emitEvent: false });
        }
    }

    validate(_: FormControl): ValidationErrors | null {
        return this.form.valid ? null : { userAddress: { valid: false } };
    }
}
