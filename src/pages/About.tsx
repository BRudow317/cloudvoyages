/**
 * @PageName About
 */
import {
	ArrowRight,
	BarChart3,
	Handshake,
	ShieldCheck,
	Target,
	Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BrandText } from '@/components/ui/Brand';
import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';
import { ContactSection } from '@/sections/ContactSection';
import { useConsultationDialog } from '@/context/ConsultationDialogContext';

const values = [
	{
		title: 'Zero-downtime mindset',
		description:
			'We plan migrations like airline operations: redundant, verified, and ready for any scenario.',
		icon: ShieldCheck,
	},
	{
		title: 'Business-first planning',
		description:
			'Every technical decision maps to ROI, risk, and customer impact before we touch production.',
		icon: Target,
	},
	{
		title: 'Transparent collaboration',
		description:
			'Weekly milestones, clear documentation, and shared dashboards keep teams aligned.',
		icon: Handshake,
	},
];

const milestones = [
	{
		year: '2016',
		title: 'Founded by cloud operators',
		detail: 'Built on lessons from high-availability infrastructure for fast-growing teams.',
	},
	{
		year: '2019',
		title: 'First 100 production migrations',
		detail: 'Established repeatable playbooks for zero-downtime cutovers.',
	},
	{
		year: '2022',
		title: '24/7 migration operations',
		detail: 'Expanded our expert bench with always-on cloud reliability support.',
	},
	{
		year: 'Today',
		title: 'Trusted cloud partner',
		detail: 'We guide organizations through modernization, governance, and optimization.',
	},
];

const approach = [
	{
		title: 'Discovery and architecture',
		description:
			'We map critical dependencies, security requirements, and success metrics before any build.',
		icon: BarChart3,
	},
	{
		title: 'Precision migration',
		description:
			'Parallel environments, staged cutovers, and continuous validation keep systems live.',
		icon: ShieldCheck,
	},
	{
		title: 'Operational excellence',
		description:
			'Cost optimization, observability, and incident response stay active after launch.',
		icon: Users,
	},
];

const stats = [
	{ value: '500+', label: 'Migrations delivered' },
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
								We guide teams through their <BrandText /> journey with confidence
							</h1>

							<p className="text-xl text-muted-foreground leading-relaxed">
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
										<div className="text-sm text-muted-foreground">{stat.label}</div>
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

			<section id="values" className="py-20 bg-muted">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl mb-4 text-foreground">Values that protect your uptime</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							We operate with the same precision required to keep critical systems online.
							Our values guide every migration, modernization, and optimization engagement.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{values.map((value) => (
							<Card key={value.title} className="p-6">
								<div className="inline-flex p-3 bg-secondary rounded-full mb-4">
									<value.icon className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-xl mb-2 text-foreground">{value.title}</h3>
								<p className="text-sm text-muted-foreground">{value.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						<div className="space-y-8">
							<div>
								<h2 className="text-4xl mb-4 text-foreground">Built by operators, trusted by leaders</h2>
								<p className="text-lg text-muted-foreground">
									We started with a simple mission: remove the anxiety from cloud migration.
									Today, we partner with product, finance, and engineering leaders to deliver resilient outcomes.
								</p>
							</div>

							<div className="space-y-4">
								{milestones.map((milestone) => (
									<div key={milestone.year} className="flex gap-4">
										<div className="text-primary text-lg font-semibold w-16">{milestone.year}</div>
										<div>
											<h3 className="text-lg text-foreground">{milestone.title}</h3>
											<p className="text-sm text-muted-foreground">{milestone.detail}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="space-y-6">
							{approach.map((item) => (
								<Card key={item.title} className="p-6">
									<div className="flex items-start gap-4">
										<div className="p-2 bg-secondary rounded-lg">
											<item.icon className="w-6 h-6 text-primary" />
										</div>
										<div>
											<h3 className="text-xl mb-2 text-foreground">{item.title}</h3>
											<p className="text-sm text-muted-foreground">{item.description}</p>
										</div>
									</div>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			<ContactSection />
		</div>
	);
};