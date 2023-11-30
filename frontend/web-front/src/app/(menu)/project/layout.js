import "@/assets/project/style.scss"

export const metadata = {
  title: "HR Project",
  description: "All about Project",
  keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

export default function ProjectLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  )
}
