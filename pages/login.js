import React from "react";
import Link from "next/link";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Guest from "../layouts/Guest";

export default function Login() {
    return (
        <div>
            <form>
                <div className="mb-6">
                    <Label forInput="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="jhon@kudangkoding.com" />
                </div>
                <div className="mb-6">
                    <Label forInput="password">Password</Label>
                    <Input type="password" name="password" id="password" placeholder="Input your password" />
                </div>
                <div className="mb-5 flex justify-between">
                    <Checkbox
                        forInput="remember"
                        label="Remember Me"
                        name="remember"
                        id="remember"
                    />
                    <a href="#">Forgot password</a>
                </div>
                <div className="flex items-center justify-between">
                    <Button>Login</Button>
                    <span>
                        Do not have an account yet ? {" "}
                        <Link
                            href="/register"
                        >
                            <a
                                className="text-emerald-500 font-medium">
                                Register
                            </a>
                        </Link>
                    </span>
                </div>
            </form>
        </div>
    );
}

Login.getLayout = (page) => <Guest cardClassName="w-2/5" header="Login" title="Login" children={page} />;