/**
 * @PageName Privacy
 */
import { ShieldCheck, Mail, MapPin, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { BrandText } from '@/components/ui/Brand';
import { PERSONAL_DATA } from '@/constants/PERSONAL_DATA';

const policySections = [
	{
		title: 'Information We Collect',
		items: [
			'Contact details you submit via forms, including name, email, phone, and company.',
			'Project details and consultation requests you share with us.',
			'Basic usage analytics such as page views and referral sources.',
		],
	},
	{
		title: 'How We Use Information',
		items: [
			'Respond to inquiries and schedule consultations.',
			'Deliver requested services and support your engagement.',
			'Improve our website, services, and customer experience.',
		],
	},
	{
		title: 'Data Sharing & Disclosure',
		items: [
			'We do not sell your personal information.',
			'We may share information with trusted vendors under contract to deliver services.',
			'We may disclose data if required by law or to protect our rights.',
		],
	},
	{
		title: 'Data Retention & Security',
		items: [
			'We retain data only as long as needed for the purposes described.',
			'We use industry-standard safeguards to protect sensitive information.',
			'Access is limited to authorized personnel and audited vendors.',
		],
	},
	{
		title: 'Your Choices',
		items: [
			'Request access, correction, or deletion of your information.',
			'Opt out of non-essential communications at any time.',
			'Disable cookies through your browser settings if desired.',
		],
	},
];

export const Privacy = () => {
	return (
		<div>
			<section className="relative overflow-hidden bg-background/50 pt-24 pb-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl space-y-6">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
							<ShieldCheck className="w-5 h-5 text-primary" />
							<span className="text-sm text-primary">Privacy Policy</span>
						</div>

						<h1 className="text-5xl lg:text-6xl tracking-tight text-foreground">
							Protecting your data is part of the <BrandText /> promise
						</h1>

						<p className="text-xl text-muted-foreground leading-relaxed">
							This policy explains what we collect, how we use it, and the controls you have.
							We design our services to keep your information secure and confidential.
						</p>

						<div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
							<div className="inline-flex items-center gap-2">
								<Clock className="w-4 h-4 text-primary" />
								<span>Last updated: February 13, 2026</span>
							</div>
							<div className="inline-flex items-center gap-2">
								<MapPin className="w-4 h-4 text-primary" />
								<span>Indianapolis, IN</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-background">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-6">
						{policySections.map((section) => (
							<Card key={section.title} className="p-6">
								<h2 className="text-2xl mb-4 text-foreground">{section.title}</h2>
								<ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
									{section.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="py-20 bg-muted">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div className="space-y-4">
							<h2 className="text-3xl text-foreground">Questions or requests?</h2>
							<p className="text-muted-foreground">
								Contact our privacy team for access or deletion requests, or to learn more about
								our data practices.
							</p>
						</div>
						<Card className="p-6">
							<div className="flex items-start gap-4">
								<div className="p-3 bg-secondary rounded-full">
									<Mail className="w-6 h-6 text-primary" />
								</div>
								<div>
									<div className="text-lg text-foreground">Privacy Contact</div>
									<a href={`mailto:${PERSONAL_DATA.email}`} className="text-primary hover:underline">
										{PERSONAL_DATA.email}
									</a>
									<p className="text-sm text-muted-foreground mt-2">
										We respond within 2 business days.
									</p>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</section>
		</div>
	);
};