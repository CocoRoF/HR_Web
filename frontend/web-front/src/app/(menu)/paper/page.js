// import Components
import Header from "@/components/default/Default_Header";
import Footer from "@/components/default/Default_Footer"
import Board from "@/components/paper/Board";
import Skip from "@/components/default/Default_Skip";
import { AuthProvider } from "@/context/AuthContext";

export default function Paper() {
    // html structure
    return (
        <AuthProvider>
            <Skip />
            <Header />
            <main id="main" role="main">
                <Board />
            </main>
            <Footer />
        </AuthProvider>
    );
}