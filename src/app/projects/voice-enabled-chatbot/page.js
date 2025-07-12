import ProjectLayout from '../ProjectLayout';

export default function VoiceEnabledChatbotPage() {
  return (
    <ProjectLayout>
      <div className="max-w-3xl mx-auto py-16 px-4 text-white">
        <h1 className="text-4xl font-bold mb-8">Voice-Enabled Chatbot</h1>

        {/* Overview & Architecture */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">Overview & Architecture</h2>
          <p className="mb-2">An AI-powered voice assistant that converts speech to text, generates dynamic responses, and can open specific URLs for users.</p>
          <p className="mb-2">The architecture consists of a web UI using JavaScript and Web APIs for speech recognition, with backend AI API integration for generating responses and handling commands.</p>
        </section>

        {/* Technologies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">Technologies</h2>
          <ul className="flex flex-wrap gap-2 mb-2">
            <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">JavaScript</li>
            <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">AI API</li>
            <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Speech Recognition</li>
            <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Web APIs</li>
          </ul>
        </section>

        {/* Video Demo */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">Video Demo</h2>
          <div className="aspect-w-16 aspect-h-9 w-full max-w-2xl mb-2">
            {/* Replace the src with your actual video demo link */}
            <iframe
              src="https://www.youtube.com/embed/"
              title="Voice-Enabled Chatbot Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 rounded-lg border border-white/10"
            ></iframe>
          </div>
        </section>

        {/* Client Feedback */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">Client Feedback</h2>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-white/90">
            <p className="italic">"This voice assistant made my workflow so much easier! The voice-to-action feature is super intuitive."</p>
            <p className="mt-2 text-right text-white/60">- Client Name</p>
          </div>
        </section>
      </div>
    </ProjectLayout>
  );
}
