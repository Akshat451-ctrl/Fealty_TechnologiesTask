import Navbar from '../components/common/Navbar.jsx'
import Footer from '../components/common/Footer.jsx'

export default function MainLayout({ children }) {
	return (
		<div className="min-h-screen bg-slate-50 dark:bg-slate-950">
			<Navbar />
			<main className="isolate">{children}</main>
			<Footer />
		</div>
	)
}
