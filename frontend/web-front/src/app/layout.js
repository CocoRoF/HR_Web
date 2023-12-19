"use client";
import "@/assets/default_setting.scss"
import { AuthProvider } from "@/context/AuthContext";
import { CookiesProvider } from "react-cookie";

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <link rel="icon" type="image/svg+xml" href="globe.svg" />
            <CookiesProvider>
                <body>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </body>
            </CookiesProvider>
        </html>
    )
}