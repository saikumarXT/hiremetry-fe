function Content() {
  return (
    <div className="px-10 py-16 space-y-32 bg-gray-50">
      <section className="grid grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Crack Interviews with{" "}
            <span className="text-blue-600">AI Power</span>
          </h1>
          <p className="text-lg text-gray-600">
            Practice real-time technical interviews powered by multiple AI
            models. Get personalized questions, instant feedback, and improve
            faster than ever.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Start Practice
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Watch Demo
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="AI Interview"
          className="rounded-xl shadow-lg"
        />
      </section>

      <section className="text-center space-y-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Why Choose Hiremetry?
        </h2>

        <div className="grid grid-cols-3 gap-10">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">AI Mock Interviews</h3>
            <p className="text-gray-600">
              Simulate real interviews using advanced AI like OpenAI and Gemini.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
            <p className="text-gray-600">
              Get real-time evaluation and suggestions to improve your answers.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Role-Based Questions</h3>
            <p className="text-gray-600">
              Practice tailored questions for your job role and experience
              level.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
          alt="How it works"
          className="rounded-xl shadow-lg"
        />

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>

          <div className="space-y-4 text-gray-700">
            <p>1. Choose your role (Frontend, Backend, DSA)</p>
            <p>2. Start AI-powered mock interview</p>
            <p>3. Answer questions in real-time</p>
            <p>4. Get instant feedback & score</p>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Try Now
          </button>
        </div>
      </section>

      <section className="text-center bg-blue-600 text-white py-16 rounded-xl">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Ace Your Interviews?
        </h2>
        <p className="mb-6 text-lg">
          Join thousands of students preparing smarter with AI.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started Free
        </button>
      </section>
    </div>
  );
}

export default Content;
