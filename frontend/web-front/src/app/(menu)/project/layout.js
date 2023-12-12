import "@/assets/project/style.scss"

export const metadata = {
  title: "HR Project",
  description: "All about Project",
  keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

export default function ProjectLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
