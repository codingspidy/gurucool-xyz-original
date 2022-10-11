import * as Sentry from '@sentry/nextjs';
const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
Sentry.init({
	dsn: SENTRY_DSN || 'https://29eea0c153944b6ea77f2d1546b2b34f@o1206889.ingest.sentry.io/6340390',
	tracesSampleRate: 1.0,
});
