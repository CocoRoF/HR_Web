// import Components
import Header from "@/components/default/Default_Header";
import Footer from "@/components/default/Default_Footer"
import Skip from "@/components/default/Default_Skip";
import { AuthProvider } from "@/context/AuthContext";

export default function Blog() {
    // html structure
    return (
        <AuthProvider>
            <Skip />
            <Header />
            <main id="main" role="main">
            </main>
            <Footer />
        </AuthProvider>
    );
}