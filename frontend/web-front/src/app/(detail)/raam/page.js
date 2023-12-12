// import Components
import "@/assets/detail/detail_raam.scss";
import Header from "@/components/default/Default_Header";
import DetailRaam from "@/components/detail/Detail_Raam";

export default function Raam() {
    // html structure
    return (
        <>
            <Header />
            <main id="main" role="main">
                <DetailRaam />
            </main>
        </>
    );
}