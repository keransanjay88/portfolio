import ProjectLayout from '../ProjectLayout';

export default function PortfolioAuditorPage() {
    return (
        <ProjectLayout>
            <div className="max-w-3xl mx-auto py-16 px-4 text-white">
                <h1 className="text-4xl font-bold mb-8">Portfolio Auditor</h1>

                {/* Overview & Architecture */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Overview & Architecture</h2>
                    <p className="mb-2">A mutual fund portfolio analysis platform with multi-user access, offering detailed investment analysis, benchmark comparisons, and personalized review meetings.</p>
                    <p className="mb-2">Built with a microservices architecture using Next.js for the frontend and Node.js/Express.js for the backend, with MongoDB handling data persistence. Features separate modules for users, representatives, and administrators.</p>
                </section>

                {/* Technologies */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Technologies</h2>
                    <ul className="flex flex-wrap gap-2 mb-2">
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Next.js</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Node.js</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Express.js</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">MongoDB</li>
                    </ul>
                </section>



                {/* Client Feedback */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Key Features</h2>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-white/90">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Multiple service plans with secure user authentication</li>
                            <li>Benchmark comparison tools for portfolio performance</li>
                            <li>Administrative dashboard for user management</li>
                            <li>Representative portal for portfolio review</li>
                        </ul>
                    </div>
                </section>
            </div>
        </ProjectLayout>
    );
}
