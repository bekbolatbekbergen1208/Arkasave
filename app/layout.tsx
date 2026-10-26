import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'ArqaSafe — оқушының сабақ кезіндегі дұрыс отырысын бақылайтын ақылды жүйе', description: 'Бір датчикпен оқушының отыру қалпын бақылап, түзу отыруды еске салатын оқу прототипі.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="kk" suppressHydrationWarning><body>{children}</body></html>; }
