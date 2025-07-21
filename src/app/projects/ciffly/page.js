import ProjectLayout from '../ProjectLayout';

export default function CifflyPage() {
    return (
        <ProjectLayout>
            <div className="max-w-3xl mx-auto py-16 px-4 text-white">
                <h1 className="text-4xl font-bold mb-8">Ciffly</h1>

                {/* Overview & Architecture */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Overview & Architecture</h2>
                    <p className="mb-2">A comprehensive website redesign focused on creating a fully responsive and modern user interface across all devices.</p>
                    <p className="mb-2">Implemented using Tailwind CSS and JavaScript, with emphasis on mobile-first design principles and modern web standards.</p>
                </section>

                {/* Technologies */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Technologies</h2>
                    <ul className="flex flex-wrap gap-2 mb-2">
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Tailwind CSS</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">JavaScript</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Responsive Design</li>
                    </ul>
                </section>


                {/* Key Features */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Key Features</h2>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-white/90">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Fully responsive design for all devices</li>
                            <li>Modern UI components with smooth transitions</li>
                            <li>Optimized typography and readability</li>
                            <li>Enhanced performance and loading times</li>
                        </ul>
                    </div>
                </section>
            </div>
        </ProjectLayout>
    );
}
