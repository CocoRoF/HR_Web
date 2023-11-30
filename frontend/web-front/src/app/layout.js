import "@/assets/default_setting.scss"
// import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="globe.svg" />
      {/* <AuthProvider> */}
        <body>{children}</body>
      {/* </AuthProvider> */}
    </html>
  )
}