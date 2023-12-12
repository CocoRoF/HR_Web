import "@/assets/paper/style.scss"

export const metadata = {
  title: "HR Paper",
  description: "All about Paper",
  keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

export default function PaperLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
