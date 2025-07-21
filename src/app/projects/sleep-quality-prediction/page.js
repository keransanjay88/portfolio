import ProjectLayout from '../ProjectLayout';

export default function SleepQualityPredictionPage() {
  return (
    <ProjectLayout>
      <div className="max-w-3xl mx-auto py-16 px-4 text-white">
        <h1 className="text-4xl font-bold mb-8">Sleep Quality Prediction</h1>

        {/* Overview & Architecture */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">Overview & Architecture</h2>
          <p className="mb-2">Machine learning model using Support Vector Machine (SVM) to predict sleep quality in osteoporosis patients for personalized healthcare.</p>
          <p className="mb-2">The architecture includes data preprocessing, feature engineering, and SVM model training and evaluation for accurate predictions.</p>
        </section>

        {/* Technologies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">Technologies</h2>
          <ul className="flex flex-wrap gap-2 mb-2">
            <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Python</li>
            <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Machine Learning</li>
            <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">SVM</li>
            <li className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20">Data Analysis</li>
          </ul>
        </section>

        {/* Key Features */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-pink-400">Key Features</h2>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-white/90">
            <ul className="list-disc list-inside space-y-2">
              <li>Advanced data preprocessing and feature engineering</li>
              <li>SVM-based machine learning model implementation</li>
              <li>Accurate sleep quality prediction system</li>
              <li>Personalized healthcare recommendations</li>
              <li>Comprehensive data analysis and visualization</li>
            </ul>
          </div>
        </section>
      </div>
    </ProjectLayout>
  );
}
