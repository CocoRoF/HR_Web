// import Components
import Header from "@/components/default/Default_Header";
import Footer from "@/components/default/Default_Footer"
import Board from "@/components/common/Common_Board";
import Skip from "@/components/default/Default_Skip";

export default function Application() {
    // html structure
    return (
        <>
            <Skip />
            <Header />
            <main id="main" role="main">
                <Board />
            </main>
            <Footer />
        </>
    );
}