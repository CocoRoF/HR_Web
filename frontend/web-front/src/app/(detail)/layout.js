import "@/assets/default_section.scss";

export const metadata = {
    title: "HR Web Service",
    description: "AI Sevice By HR Jang",
    keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

import { AuthProvider } from "@/context/AuthContext";
import Footer from "@/components/default/Default_Footer"
import Skip from "@/components/default/Default_Skip";

export default function DetailLayout({ children }) {
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