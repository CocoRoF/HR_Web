import "@/assets/default_section.scss"

export const metadata = {
    title: "HR Web Account",
    description: "Account Management",
    keywords: ["HR Web", "Account"],
}

import Footer from "@/components/default/Default_Footer"
import Skip from "@/components/default/Default_Skip";
import { AuthProvider } from "@/context/AuthContext"

export default function AccountLayout({ children }) {
    return (
        <>
            <AuthProvider>
                <Skip />
                {children}
                <Footer />
            </AuthProvider>
        </>
    )
}