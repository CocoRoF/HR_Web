"use client";
import Header from "@/components/default/Default_Header";
import "@/assets/detail/detail_custom_raam.scss";

// import Components
import DetailRaamCustom from "@/components/detail/Detail_RaamCustom";
import { userAuthorization } from "@/utils/userAuthorization";

export default function RaamCustom() {
    const isAuth = userAuthorization();
    if (!isAuth) {
        return (
            <>
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
                        Waiting Authorization.
                    </div>
                </main>
            </>
        )
    }

    // html structure
    return (
        <>
            <Header />
            <main id="main" role="main">
                <DetailRaamCustom />
            </main>
        </>
    );
}