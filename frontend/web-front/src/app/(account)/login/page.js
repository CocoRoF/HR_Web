import "@/assets/login/login.scss"

import LoginPage from "@/components/account/Login";
import Header from "@/components/account/Header";

export default function Login() {
    // html structure
    return (
        <>
            <Header />
            <main id="main" role="main">
                <LoginPage />
            </main>
        </>
    );
}