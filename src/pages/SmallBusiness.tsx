/**
 * @PageName SmallBusiness
 */
import { ArrowRight, BadgeDollarSign, ShieldCheck, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card/Card';
import { BrandText } from '@/components/ui/Brand';
import { ImageWithFallback } from '@/components/Fallback/ImageWithFallback';
import { SmallBusinessSolution } from '@/components/sections/SmallBusinessSolution';
import { ContactSection } from '@/components/sections/ContactSection';
import { useConsultationDialog } from '@/context/ConsultationDialogContext';

export const SmallBusiness = () => {
	const { openDialog } = useConsultationDialog();

	return (
		<div>
			<section className="relative overflow-hidden bg-background/50 pt-24 pb-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-10 items-center">
						<div className="space-y-8">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
								<BadgeDollarSign className="w-5 h-5 text-primary" />
								<span className="text-sm text-primary">Small Business Cloud Services</span>
							</div>

							<h1 className="text-5xl lg:text-6xl tracking-tight text-foreground">
								Grow with a <BrandText /> website that pays for itself
							</h1>

							<p className="text-xl text-muted-foreground leading-relaxed">
								We build modern websites, lead capture systems, and cloud foundations that fit a small
								business budget. Launch quickly, look credible, and start converting visitors into customers.
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button size="lg" onClick={openDialog}>
									Schedule Free Consultation
									<ArrowRight className="ml-2 w-5 h-5" />
								</Button>
								<Button size="lg" variant="outline" asChild>
									<a href="#small-business">Explore Plans</a>
								</Button>
							</div>

							<div className="grid sm:grid-cols-3 gap-4 pt-2">
								<Card className="p-4">
									<div className="inline-flex p-2 bg-secondary rounded-full mb-3">
										<Timer className="w-5 h-5 text-primary" />
									</div>
									<div className="text-lg text-foreground">Launch fast</div>
									<p className="text-sm text-muted-foreground">Live in days, not months.</p>
								</Card>
								<Card className="p-4">
									<div className="inline-flex p-2 bg-secondary rounded-full mb-3">
										<ShieldCheck className="w-5 h-5 text-primary" />
									</div>
									<div className="text-lg text-foreground">Built to last</div>
									<p className="text-sm text-muted-foreground">99.9% uptime guarantee.</p>
								</Card>
								<Card className="p-4">
									<div className="inline-flex p-2 bg-secondary rounded-full mb-3">
										<BadgeDollarSign className="w-5 h-5 text-primary" />
									</div>
									<div className="text-lg text-foreground">Budget friendly</div>
									<p className="text-sm text-muted-foreground">Clear pricing with ROI focus.</p>
								</Card>
							</div>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-sky-400 rounded-2xl blur-3xl opacity-20" />
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
								alt="Small business team collaborating"
								className="relative rounded-2xl shadow-2xl w-full object-cover h-[420px]"
							/>
						</div>
					</div>
				</div>
			</section>
			<div id="small-business">
				<SmallBusinessSolution onGetStarted={openDialog} />
			</div>
			<div id="contact">
				<ContactSection />
			</div>
		</div>
	);
};