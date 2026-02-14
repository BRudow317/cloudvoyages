/**
 * @PageName Careers
 */
import {
	ArrowRight,
	Briefcase,
	HeartHandshake,
	LineChart,
	MapPin,
	Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BrandText } from '@/components/ui/Brand';
import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';
import { PERSONAL_DATA } from '@/constants/PERSONAL_DATA';

const highlights = [
	{
		title: 'Work that matters',
		description: 'Help companies modernize critical systems without downtime.',
		icon: LineChart,
	},
	{
		title: 'People-first team',
		description: 'We value empathy, clarity, and collaboration in every engagement.',
		icon: HeartHandshake,
	},
	{
		title: 'Continuous growth',
		description: 'Mentorship, certifications, and hands-on experience with modern cloud stacks.',
		icon: Sparkles,
	},
];

const benefits = [
	'Flexible schedules and remote-friendly options',
	'Competitive compensation and growth pathways',
	'Learning budget for certifications and training',
	'Collaborative delivery teams and clear ownership',
];

const hiringSteps = [
	'Intro call with our recruiting team',
	'Technical and collaboration interview',
	'Paid project discussion or case review',
	'Offer and onboarding plan',
];

const openRoles: Array<{ title: string; location: string; type: string }> = [];

export const Careers = () => {
	return (
		<div>
			<section className="relative overflow-hidden bg-background/50 pt-24 pb-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-10 items-center">
						<div className="space-y-8">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
								<Briefcase className="w-5 h-5 text-primary" />
								<span className="text-sm text-primary">Careers at Cloud Voyages</span>
							</div>

							<h1 className="text-5xl lg:text-6xl tracking-tight text-foreground">
								Build the future of cloud migration with <BrandText />
							</h1>

							<p className="text-xl text-muted-foreground leading-relaxed">
								Join a team of cloud operators, architects, and strategists who deliver zero-downtime
								outcomes for growing businesses. We are looking for curious, kind professionals who
								take ownership and ship quality.
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" asChild>
									<a href={`mailto:${PERSONAL_DATA.email}?subject=Careers%20at%20Cloud%20Voyages`}>
										Email Us About Roles
										<ArrowRight className="ml-2 w-5 h-5" />
									</a>
								</Button>
								<Button size="lg" variant="outline" asChild>
									<a href="#open-roles">View Open Roles</a>
								</Button>
							</div>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-tr from-sky-400 to-indigo-400 rounded-2xl blur-3xl opacity-20" />
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
								alt="Cloud Voyages team collaboration"
								className="relative rounded-2xl shadow-2xl w-full object-cover h-[420px]"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-muted">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl mb-4 text-foreground">Why you will thrive here</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							We pair high-impact work with a supportive team culture. Your growth fuels our clients' success.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{highlights.map((item) => (
							<Card key={item.title} className="p-6">
								<div className="inline-flex p-3 bg-secondary rounded-full mb-4">
									<item.icon className="w-6 h-6 text-primary" />
								</div>
								<h3 className="text-xl mb-2 text-foreground">{item.title}</h3>
								<p className="text-sm text-muted-foreground">{item.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-4xl mb-4 text-foreground">Benefits that support you</h2>
							<p className="text-lg text-muted-foreground mb-6">
								We keep our team focused by making sure the essentials are covered.
							</p>
							<ul className="space-y-3 text-muted-foreground list-disc pl-5">
								{benefits.map((benefit) => (
									<li key={benefit}>{benefit}</li>
								))}
							</ul>
						</div>

						<Card className="p-6">
							<h3 className="text-2xl mb-4 text-foreground">How we hire</h3>
							<ol className="space-y-3 text-muted-foreground list-decimal pl-5">
								{hiringSteps.map((step) => (
									<li key={step}>{step}</li>
								))}
							</ol>
							<div className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
								<MapPin className="w-5 h-5 text-primary" />
								<span>Remote-friendly with a hub in Indianapolis, IN.</span>
							</div>
						</Card>
					</div>
				</div>
			</section>

			<section id="open-roles" className="py-20 bg-background/50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl mb-4 text-foreground">Open roles</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							We are growing carefully. Check back soon, or send us your resume for future openings.
						</p>
					</div>

					{openRoles.length === 0 ? (
						<Card className="p-8 text-center">
							<div className="text-lg text-foreground">No roles posted right now.</div>
							<p className="text-sm text-muted-foreground mt-2">
								Email us your resume and a short note about what you want to build.
							</p>
							<Button size="lg" className="mt-6" asChild>
								<a href={`mailto:${PERSONAL_DATA.email}?subject=Future%20Roles%20at%20Cloud%20Voyages`}>
									Send Resume
								</a>
							</Button>
						</Card>
					) : (
						<div className="grid md:grid-cols-2 gap-6">
							{openRoles.map((role) => (
								<Card key={role.title} className="p-6">
									<div className="text-xl text-foreground">{role.title}</div>
									<div className="text-sm text-muted-foreground mt-2">
										{role.location} · {role.type}
									</div>
								</Card>
							))}
						</div>
					)}
				</div>
			</section>
		</div>
	);
};