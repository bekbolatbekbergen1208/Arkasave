'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="shell page-section"><div className="panel empty" role="alert"><h1>Бетті жүктеу мүмкін болмады</h1><p className="muted">Қайта жүктеп көріңіз.</p><button className="btn" onClick={reset}>Қайталау</button></div></main>}
