import "@/assets/login/register.scss"

import Register from "@/components/account/Register";
import Header from "@/components/account/Header";

export default function CreateAccount() {
    // html structure
    return (
        <>
            <Header />
            <main id="main" role="main">
                <Register />
            </main>
        </>
    );
}