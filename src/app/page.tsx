import { Calculator } from '@/components/calculator/Calculator';
import { ArrowRight, CheckCircle2, TrendingUp, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <Zap className="h-4 w-4" />
              Free ROI Calculator
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-50">
              How Much Is{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Manual Work
              </span>{' '}
              Really Costing You?
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
              Calculate your ROI from AI automation in 60 seconds. See the real
              cost of repetitive tasks and how much you could save.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <Calculator />
      </section>

      {/* Value Props */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="space-y-3 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <CheckCircle2 className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200">
              Instant Analysis
            </h3>
            <p className="text-sm text-slate-400">
              Get real-time ROI calculations as you adjust inputs. No signup
              required.
            </p>
          </div>

          <div className="space-y-3 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <TrendingUp className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200">
              Industry-Specific
            </h3>
            <p className="text-sm text-slate-400">
              Calculations based on real market rates for your industry and
              role.
            </p>
          </div>

          <div className="space-y-3 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Zap className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold text-slate-200">
              Actionable Insights
            </h3>
            <p className="text-sm text-slate-400">
              See exactly how much time and money AI automation could save your
              team.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-800 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50">
              Ready to Automate Your Workflow?
            </h2>
            <p className="text-lg text-slate-400">
              Let&apos;s discuss how AI can transform your business operations
              and deliver measurable ROI.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors cursor-pointer">
              Schedule a Consultation
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-slate-500">
          <p>&copy; 2024 AI Biz Automate. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
