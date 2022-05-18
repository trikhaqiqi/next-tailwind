import React from "react";
import Button from "../components/Button";
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
                    <div>
                        <input
                            className="accent-sky-400 mr-3"
                            type="checkbox"
                            name="remember"
                            id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <a href="#">Forgot password</a>
                </div>
                <Button>Login</Button>
            </form>
        </div>
    );
}

Login.getLayout = (page) => <Guest header="Login" title="Login" children={page} />;