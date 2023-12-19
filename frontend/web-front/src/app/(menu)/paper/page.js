// import Components
import Header from "@/components/default/Default_Header";
import Footer from "@/components/default/Default_Footer"
import Skip from "@/components/default/Default_Skip";

export default function Paper() {
    // html structure
    return (
        <>
            <Skip />
            <Header />
            <main id="main" role="main">
                <div style={{
                    position : "absolute",
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "4vh",
                    fontWeight: "700"}}
                >
                    Not Ready Now
                </div>
            </main>
            <Footer />
        </>
    );
}