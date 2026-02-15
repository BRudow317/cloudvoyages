/**
 * @PageName About
 */
import {
	ArrowRight,
	// BarChart3,
	// Handshake,
	// ShieldCheck,
	// Target,
	Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
// import Card from '@/components/ui/card/Card';
import UptimeValues from '@/components/sections/UptimeValues';
import { BrandText } from '@/components/ui/Brand';
import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';
import { ContactSection } from '@/components/sections/ContactSection';
import { useConsultationDialog } from '@/context/ConsultationDialogContext';
import { FoundedTimeline } from '@/components/sections/FoundedTimeline';


const stats = [
	{ value: '100+', label: 'Migrations delivered' },
	{ value: '99.9%', label: 'Uptime guarantee' },
	{ value: '98%', label: 'Client retention' },
];

export const About = () => {
	const { openDialog } = useConsultationDialog();

	return (
		<div>
			<section className="relative overflow-hidden bg-background/50 pt-24 pb-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-10 items-center">
						<div className="space-y-8">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
								<Users className="w-5 h-5 text-primary" />
								<span className="text-sm text-primary">About Cloud Voyages</span>
							</div>

							<h1 className="text-5xl lg:text-6xl tracking-tight text-foreground">
								We guide teams through their <BrandText /> with confidence
							</h1>

							<p className="text-xl text-primary leading-relaxed">
								Cloud Voyages is a team of senior cloud operators, architects, and migration specialists.
								We help organizations modernize without disruption, with a focus on resilience, security, and ROI.
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" onClick={openDialog}>
									Schedule Consultation
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
								<Button size="lg" variant="outline" asChild>
									<a href="#values">Our Values</a>
								</Button>
							</div>

							<div className="flex flex-col sm:flex-row gap-6 pt-4">
								{stats.map((stat) => (
									<div key={stat.label}>
										<div className="text-3xl text-primary">{stat.value}</div>
										<div className="text-sm text-primary">{stat.label}</div>
									</div>
								))}
							</div>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-blue-400 rounded-2xl blur-3xl opacity-20" />
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80"
								alt="Cloud operations team collaborating"
								className="relative rounded-2xl shadow-2xl w-full object-cover h-[420px]"
							/>
						</div>
					</div>
				</div>
			</section>

			<UptimeValues />

			<FoundedTimeline />

			<ContactSection />
		</div>
	);
};