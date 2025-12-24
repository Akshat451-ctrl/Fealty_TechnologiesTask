import Hero from '../components/home/Hero.jsx'
import Services from '../components/home/Services.jsx'
import About from '../components/home/About.jsx'
import Process from '../components/home/Process.jsx'
import FAQ from '../components/home/FAQ.jsx'
import Newsletter from '../components/home/Newsletter.jsx'
import BlogPosts from '../components/home/BlogPosts.jsx'
import Stats from '../components/home/Stats.jsx'
import Contact from '../components/home/Contact.jsx'

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<About />
			<Process />
			<FAQ />
			<Newsletter />
			<BlogPosts />
			<Stats />
			<Contact />
		</>
	)
}
