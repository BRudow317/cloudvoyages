/**
 * @PageName Internships
 */
import {
	ArrowRight,
	BookOpen,
	GraduationCap,
	Laptop,
	MapPin,
	Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card/Card';
import { BrandText } from '@/components/ui/Brand';
import { Section } from '@/components/sections/section';
import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';
import { PERSONAL_DATA } from '@/constants/PERSONAL_DATA';

const programHighlights = [
	{
		title: 'Mentor-led projects',
		description: 'Work alongside senior engineers on real client engagements.',
		icon: GraduationCap,
	},
	{
		title: 'Cloud-first toolkit',
		description: 'Hands-on experience with modern stacks, automation, and observability.',
		icon: Laptop,
	},
	{
		title: 'Portfolio-ready work',
		description: 'Ship outcomes you can confidently showcase in your career journey.',
		icon: Sparkles,
	},
];

const internBenefits = [
	'Paid internship with flexible hours',
	'Dedicated mentor and weekly feedback loops',
	'Certification prep and learning sessions',
	'Opportunity for full-time consideration',
];

const programSteps = [
	'Intro call and interest form review',
	'Technical conversation and growth goals',
	'Mini project or case discussion',
	'Offer and onboarding schedule',
];

const openInternships: Array<{ title: string; location: string; term: string }> = [];

export const Internships = () => {
	return (
		<div>
			<Section className="relative overflow-hidden" padding="hero">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-10 items-center">
						<div className="space-y-8">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
								<BookOpen className="w-5 h-5 text-primary" />
								<span className="text-sm text-primary">Internships at Cloud Voyages</span>
							</div>

							<h1 className="text-5xl lg:text-6xl tracking-tight text-foreground">
								Launch your cloud career with <BrandText />
							</h1>

							<p className="text-xl text-muted-foreground leading-relaxed">
								Our internship program is built for curious builders who want real-world cloud experience.
								You will collaborate with mentors, deliver client-ready outcomes, and grow fast.
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" asChild>
									<a href={`mailto:${PERSONAL_DATA.email}?subject=Internship%20Program`}>Apply for Internship
										<ArrowRight className="ml-2 w-5 h-5" />
									</a>
								</Button>
								<Button size="lg" variant="outline" asChild>
									<a href="#open-internships">View Openings</a>
								</Button>
							</div>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-sky-400 rounded-2xl blur-3xl opacity-20" />
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
								alt="Interns collaborating"
								className="relative rounded-2xl shadow-2xl w-full object-cover h-[420px]"
							/>
						</div>
					</div>
				</div>
			</Section>

			<Section variant="muted">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl mb-4 text-foreground">What you will experience</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Designed to balance learning and delivery, with support at every step.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{programHighlights.map((item) => (
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
			</Section>

			<Section variant="plain">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-4xl mb-4 text-foreground">Program benefits</h2>
							<p className="text-lg text-muted-foreground mb-6">
								We invest in your growth with hands-on guidance and clear milestones.
							</p>
							<ul className="space-y-3 text-muted-foreground list-disc pl-5">
								{internBenefits.map((benefit) => (
									<li key={benefit}>{benefit}</li>
								))}
							</ul>
						</div>

						<Card className="p-6">
							<h3 className="text-2xl mb-4 text-foreground">How we select interns</h3>
							<ol className="space-y-3 text-muted-foreground list-decimal pl-5">
								{programSteps.map((step) => (
									<li key={step}>{step}</li>
								))}
							</ol>
							<div className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
								<MapPin className="w-5 h-5 text-primary" />
								<span>Remote-first with collaborative time zones.</span>
							</div>
						</Card>
					</div>
				</div>
			</Section>

			<Section id="open-internships">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl mb-4 text-foreground">Open internships</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							We post internship roles seasonally. Check back soon or share your interest.
						</p>
					</div>

					{openInternships.length === 0 ? (
						<Card className="p-8 text-center">
							<div className="text-lg text-foreground">No internships posted yet.</div>
							<p className="text-sm text-muted-foreground mt-2">
								Send us your resume and preferred term, and we will reach out when roles open.
							</p>
							<Button size="lg" className="mt-6" asChild>
								<a href={`mailto:${PERSONAL_DATA.email}?subject=Internship%20Interest`}>
									Share Interest
								</a>
							</Button>
						</Card>
					) : (
						<div className="grid md:grid-cols-2 gap-6">
							{openInternships.map((role) => (
								<Card key={role.title} className="p-6">
									<div className="text-xl text-foreground">{role.title}</div>
									<div className="text-sm text-muted-foreground mt-2">
										{role.location} · {role.term}
									</div>
								</Card>
							))}
						</div>
					)}
				</div>
			</Section>
		</div>
	);
};