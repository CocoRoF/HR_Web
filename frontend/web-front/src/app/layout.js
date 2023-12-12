import "@/assets/default_setting.scss"

export const metadata = {
    title: "HR Web",
    description: "All about HRJang",
    keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <link rel="icon" type="image/svg+xml" href="globe.svg" />
            <body>{children}</body>
        </html>
    )
}