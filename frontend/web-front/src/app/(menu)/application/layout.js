import "@/assets/application/style.scss"

export const metadata = {
  title: "HR Web Application",
  description: "Application",
  keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

export default function ApplicationLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="globe.svg" />
      <body>{children}</body>
    </html>
  )
}