import ProjectLayout from '../ProjectLayout';

export default function ChatbotPage() {
    return (
        <ProjectLayout>
            <div className="max-w-3xl mx-auto py-16 px-4 text-white">
                <h1 className="text-4xl font-bold mb-8">Voice-Enabled AI Chatbot</h1>

                {/* Overview & Architecture */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Overview & Architecture</h2>
                    <p className="mb-2">A sophisticated voice-enabled chatbot powered by AI that provides an interactive and responsive voice assistance experience to users.</p>
                    <p className="mb-2">Built using modern web technologies including the Speech Recognition API for voice input, Natural Language Processing for understanding user intent, and JavaScript for dynamic response generation and UI updates.</p>
                </section>

                {/* Technologies */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Technologies</h2>
                    <ul className="flex flex-wrap gap-2 mb-2">
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">AI</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Speech Recognition</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Natural Language Processing</li>
                        <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">JavaScript</li>
                    </ul>
                </section>


                {/* Key Features */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-3 text-pink-400">Key Features</h2>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-white/90">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Voice-to-Text Conversion with real-time processing</li>
                            <li>Natural Language Processing for contextual understanding</li>
                            <li>Dynamic Response Generation based on keywords</li>
                            <li>URL Navigation capabilities</li>
                            <li>Interactive Voice Interface for natural conversation</li>
                        </ul>
                    </div>
                </section>
            </div>
        </ProjectLayout>
    );
}