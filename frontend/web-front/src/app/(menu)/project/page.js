// import Components
import Header from "@/components/default/Default_Header";
import Footer from "@/components/default/Default_Footer"
import Skip from "@/components/default/Default_Skip";
import App from "@/components/common/App";
import { AuthProvider } from "@/context/AuthContext";

export default function Project() {
    // html structure
    return (
        <AuthProvider>
            <Skip />
            <Header />
            <main id="main" role="main">
                <App />
            </main>
            <Footer />
        </AuthProvider>
    );
}