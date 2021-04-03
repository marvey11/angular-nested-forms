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

export interface UserSocialComponentValues {
    email: string;
    handle: string;
}

@Component({
    selector: "app-user-social",
    templateUrl: "./user-social.component.html",
    styleUrls: ["./user-social.component.css"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UserSocialComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => UserSocialComponent),
            multi: true
        }
    ]
})
export class UserSocialComponent implements ControlValueAccessor, OnInit {
    form!: FormGroup;
    userEmail!: FormControl;
    userHandle!: FormControl;

    constructor(private fb: FormBuilder) {}

    get value(): UserSocialComponentValues {
        return this.form.value;
    }

    ngOnInit(): void {
        this.userEmail = new FormControl("", [Validators.email, Validators.required]);
        this.userHandle = new FormControl("", [Validators.minLength(4), Validators.required]);
        this.form = this.fb.group({
            email: this.userEmail,
            handle: this.userHandle
        });
    }

    onTouched: any = () => {};

    registerOnChange(fn: (value: any) => void): void {
        this.form.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    writeValue(value: UserSocialComponentValues): void {
        if (value) {
            this.form.setValue(value, { emitEvent: false });
        }
    }

    validate(_: FormControl): ValidationErrors | null {
        return this.form.valid ? null : { userSocial: { valid: false } };
    }
}
