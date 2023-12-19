import "@/assets/main/style.scss"
export const metadata = {
    title: "HR Web",
    description: "All about HRJang",
    keywords: ["AI", "Deep Learning", "Machine Learning", "Python", "Django", "React"],
}

export default function MainLayout({ children }) {
    return (
        <>
            {children}
        </>
    )
}