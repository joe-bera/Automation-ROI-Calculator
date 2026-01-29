# AI Automation ROI Calculator

A high-converting lead magnet calculator for [AI Biz Automate](https://aibizautomate.com) that demonstrates the cost of manual work vs. AI automation.

## Features

- **Interactive ROI Calculator** - Real-time calculations with animated numbers
- **"Sticker Shock" Display** - Shows true cost of manual work with dramatic visuals
- **Comparison Chart** - Visual manual vs. AI cost comparison
- **Lead Capture** - Email gate with webhook integration
- **Mobile Responsive** - Works on all devices
- **Dark Mode** - Modern, professional aesthetic

## Live Demo

[https://calculator.aibizautomate.com](https://calculator.aibizautomate.com)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS + shadcn/ui |
| Animations | Framer Motion |
| Charts | Recharts |
| Forms | React Hook Form + Zod |
| Deployment | Vercel |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/joe-bera/Automation-ROI-Calculator.git
cd Automation-ROI-Calculator

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the calculator.

## Environment Variables

Create a `.env.local` file with:

```env
# Lead Webhook (n8n or Make.com)
LEAD_WEBHOOK_URL=https://your-n8n-instance.com/webhook/roi-calculator
WEBHOOK_SECRET=your-webhook-secret-for-validation

# Analytics (optional)
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/leads/          # Lead capture API endpoint
│   ├── page.tsx            # Main calculator page
│   └── globals.css         # Global styles
├── components/
│   ├── calculator/         # Calculator UI components
│   │   ├── Calculator.tsx  # Main container
│   │   ├── InputPanel.tsx  # Left column inputs
│   │   ├── ResultsPanel.tsx # Right column results
│   │   └── ...             # Individual components
│   ├── lead-capture/       # Lead form components
│   │   ├── LeadCaptureForm.tsx
│   │   └── SuccessState.tsx
│   ├── animations/         # Framer Motion components
│   └── ui/                 # shadcn/ui components
├── data/
│   ├── tasks.ts            # 15 automation task definitions
│   └── industries.ts       # 6 industry presets
├── hooks/
│   ├── useCalculator.ts    # Calculator state management
│   └── useUTMParams.ts     # UTM parameter tracking
├── lib/
│   ├── calculations.ts     # ROI calculation engine
│   └── validations.ts      # Zod schemas
└── types/
    ├── calculator.ts       # Calculator types
    └── lead.ts             # Lead submission types
```

## Webhook Integration

The calculator sends lead data to your configured webhook URL.

### Payload Example

```json
{
  "formData": {
    "email": "john@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "company": "Acme Inc"
  },
  "calculatorInputs": {
    "industryId": "law",
    "hourlyRate": 275,
    "selectedTaskId": "email-triage",
    "hoursPerWeek": 10,
    "teamSize": 1
  },
  "calculatorResults": {
    "annualManualCost": 143000,
    "annualAiCost": 1188,
    "annualSavings": 141812,
    "roiPercentage": 11937,
    "paybackPeriodDays": 3,
    "hoursReclaimed": 390
  },
  "metadata": {
    "submittedAt": "2024-01-25T12:00:00.000Z",
    "utmSource": "google",
    "utmMedium": "cpc",
    "utmCampaign": "roi-calculator"
  }
}
```

### n8n Workflow Setup

1. Create a new workflow in n8n
2. Add a Webhook node as trigger
3. Copy the webhook URL to your `.env.local`
4. Add nodes to:
   - Send email notification
   - Add to CRM (HubSpot, Pipedrive, etc.)
   - Send to Google Sheets for tracking
   - Trigger welcome email sequence

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   - `LEAD_WEBHOOK_URL`
   - `WEBHOOK_SECRET`
4. Deploy

```bash
npm run build
```

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |
| `npm run test:coverage` | Run tests with coverage |

## ROI Calculation Formula

```
Manual Cost = Hourly Rate × Hours/Week × Team Size × 52 weeks
AI Cost = Monthly Agent Cost × Team Size × 12 months
Annual Savings = Manual Cost - AI Cost
ROI % = (Savings / AI Cost) × 100
Payback Period = AI Annual Cost / Daily Savings
Hours Reclaimed = Hours/Week × Automation Efficiency × Team Size × 52
```

## Industry Presets

| Industry | Default Rate | Common Tasks |
|----------|-------------|--------------|
| Law Firm | $275/hr | Email triage, compliance, billing |
| Real Estate | $110/hr | Follow-ups, scheduling, CRM |
| Insurance | $75/hr | Data entry, claims, onboarding |
| Medical Practice | $150/hr | Scheduling, records, billing |
| Accounting | $200/hr | Data entry, reports, expenses |
| General Business | $65/hr | Email, scheduling, support |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

**AI Biz Automate**

- Website: [aibizautomate.com](https://aibizautomate.com)
- GitHub: [@joe-bera](https://github.com/joe-bera)

---

Built with [Next.js](https://nextjs.org) and [Vercel](https://vercel.com)
