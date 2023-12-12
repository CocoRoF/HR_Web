import "@/assets/blog/style.scss"

export const metadata = {
  title: "HR Blog",
  description: "All about Blog",
  keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

export default function BlogLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
