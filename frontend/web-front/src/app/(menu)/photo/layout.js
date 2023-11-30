import "@/assets/photo/style.scss"

export const metadata = {
  title: "HR Photo",
  description: "All about Photo",
  keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

export default function PhotoLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
}
