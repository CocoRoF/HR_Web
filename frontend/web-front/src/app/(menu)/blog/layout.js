import "@/assets/blog/style.scss"

export const metadata = {
  title: "HR Blog",
  description: "All about Blog",
  keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

export default function BlogLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
}
