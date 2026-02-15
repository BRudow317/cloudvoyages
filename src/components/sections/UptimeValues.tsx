import Card from "@/components/ui/card/Card";
import { ShieldCheck, Target, Handshake } from "lucide-react";

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

const UptimeValues = () => {
    return (
<section id="values" className="py-20 bg-muted/50">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl mb-4 text-foreground">Values that protect your uptime</h2>
						<p className="text-xl text-primary max-w-3xl mx-auto">
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
								<p className="text-sm text-primary">{value.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>
    );
};

export default UptimeValues;