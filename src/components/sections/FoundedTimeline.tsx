import Card from '@/components/ui/card/Card';
import {
	// ArrowRight,
	// BarChart3,
	// Handshake,
	// ShieldCheck,
	// Target,
    BarChart3,
    ShieldCheck,
	Users,
} from 'lucide-react';


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


export const FoundedTimeline = () => {
    return (
<section className="py-20 bg-background/50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						<div className="space-y-8">
							<div>
								<h2 className="text-4xl mb-4 text-foreground">Built by operators, trusted by leaders</h2>
								<p className="text-lg text-primary">
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
											<p className="text-sm text-primary">{milestone.detail}</p>
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
											<p className="text-sm text-primary">{item.description}</p>
										</div>
									</div>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>
    );
};