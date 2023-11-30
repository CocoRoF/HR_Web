import "@/assets/award/style.scss"

export const metadata = {
  title: "HR Web Award",
  description: "Award",
  keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

export default function AwardLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="globe.svg" />
      <body>{children}</body>
    </html>
  )
}