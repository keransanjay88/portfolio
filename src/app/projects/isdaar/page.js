import ProjectLayout from '../ProjectLayout';

export default function IsdaarPage() {
    return (
        <ProjectLayout>
            <div className="max-w-3xl mx-auto py-16 px-4 text-white">
                <h1 className="text-4xl font-bold mb-8">ISDAAR</h1>

                {/* Overview & Architecture */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Overview & Architecture</h2>
                    <p className="mb-2">A digital certification platform with modules for certificate creation, delivery, and verification, ensuring secure and efficient certificate handling.</p>
                    <p className="mb-2">Built using Next.js and Node.js with Express.js backend, utilizing MongoDB for data storage. Features QR-based verification and a public validation portal.</p>
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
                            <li>Automated certificate generation with dynamic content</li>
                            <li>QR-based verification system</li>
                            <li>Public portal for certificate validation</li>
                            <li>Structured access controls and recipient management</li>
                        </ul>
                    </div>
                </section>
            </div>
        </ProjectLayout>
    );
}
