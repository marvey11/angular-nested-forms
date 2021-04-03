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

export interface UserNameComponentValues {
    firstName: string;
    lastName: string;
}

@Component({
    selector: "app-user-name",
    templateUrl: "./user-name.component.html",
    styleUrls: ["./user-name.component.css"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UserNameComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => UserNameComponent),
            multi: true
        }
    ]
})
export class UserNameComponent implements ControlValueAccessor, OnInit {
    form!: FormGroup;
    firstName!: FormControl;
    lastName!: FormControl;

    constructor(private fb: FormBuilder) {}

    get value(): UserNameComponentValues {
        return this.form.value;
    }

    ngOnInit(): void {
        this.firstName = new FormControl("", {
            validators: [Validators.minLength(3), Validators.required],
            updateOn: "blur"
        });
        this.lastName = new FormControl("", { validators: [Validators.minLength(3), Validators.required] });

        this.form = this.fb.group({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    onTouched: any = () => {};

    registerOnChange(fn: (value: any) => void): void {
        this.form.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    writeValue(value: UserNameComponentValues): void {
        if (value) {
            this.form.setValue(value, { emitEvent: false });
        }
    }

    validate(_: FormControl): ValidationErrors | null {
        return this.form.valid ? null : { n: { valid: false } };
    }
}
