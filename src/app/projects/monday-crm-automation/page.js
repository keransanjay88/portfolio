import ProjectLayout from '../ProjectLayout';

export default function MondayCrmAutomationPage() {
    return (
        <ProjectLayout>
            <div className="max-w-3xl mx-auto py-16 px-4 text-white">
                <h1 className="text-4xl font-bold mb-8">Monday CRM Automation</h1>

                {/* Overview & Architecture */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Overview & Architecture</h2>
                    <p className="mb-2">An automated lead management system that streamlines the process of capturing and processing lead information from business cards and LinkedIn profiles.</p>
                    <p className="mb-2">Built using Monday.com and Zapier integrations to create a seamless workflow automation system for lead management and communication.</p>
                </section>

                {/* Technologies */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Technologies</h2>
                    <ul className="flex flex-wrap gap-2 mb-2">
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Monday.com</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Zapier</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Automation</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">CRM</li>
                    </ul>
                </section>


                {/* Key Features */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Key Features</h2>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-white/90">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Automated lead capture and data extraction</li>
                            <li>Smart data organization in structured workspace</li>
                            <li>Automated personalized email drafting</li>
                            <li>Reduced manual effort and response time</li>
                        </ul>
                    </div>
                </section>
            </div>
        </ProjectLayout>
    );
}
