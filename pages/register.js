import Link from "next/link";
import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Select from "../components/Select";
import Guest from "../layouts/Guest";

export default function Register() {
    return (
        <div>
            <form>
                <div className="mb-6">
                    <Label forInput="name">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="Jhon Week" />
                </div>
                <div className="mb-6">
                    <Label forInput="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="jhon@kudangkoding.com" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-6">
                        <Label forInput="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Input your password" />
                    </div>
                    <div className="mb-6">
                        <Label forInput="password_confirmation">Confirm Password</Label>
                        <Input type="password" name="password_confirmation" id="password_confirmation" placeholder="Input your password" />
                    </div>
                </div>
                <div className="mb-6">
                    <Label forInput={"gender"}>Gender</Label>
                    <Select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Select>
                </div>
                <div className="mb-6 flex justify-between">
                    <Checkbox
                        forInput="acceptance"
                        label={"Aggree with Privacy and Terms"}
                        name="acceptance"
                        id="acceptance"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Button>Register</Button>
                    <span>
                        Already have account ? {" "}
                        <Link
                            href="/login"
                        >
                            <a
                                className="text-emerald-500 font-medium">
                                Login
                            </a>
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

Register.getLayout = (page) => <Guest cardClassName="w-2/5" header="Register" title="Register" children={page} />;