import styles from "../about/page.module.css"
import Link from "next/link"

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <nav className={styles.nav}>
                <Link href="/" className={styles.link}>Home</Link>
            </nav>
            <main>{children}</main>
        </div>
    )
}
