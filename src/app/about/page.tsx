import Image from "next/image";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Fitness studio images/pexels-scottwebb-136404.jpg"
            alt="About background"
            fill
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-in-up">
              About Fitness Studio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover our story, mission, and the passionate team behind your fitness transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl fade-in">
                <Image
                  src="/images/Fitness studio images/pexels-olly-917732.jpg"
                  alt="Fitness studio trainer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in-up">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed fade-in-up" style={{ animationDelay: '0.2s' }}>
                  At Fitness Studio, our mission is to empower individuals to achieve their fitness goals through
                  personalized training, expert guidance, and a supportive community. We believe that everyone
                  deserves access to high-quality fitness education and facilities that inspire and motivate.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
                  Our Training Philosophy
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed fade-in-up" style={{ animationDelay: '0.6s' }}>
                  We combine cutting-edge training methodologies with proven techniques to deliver results that last.
                  Our approach focuses on sustainable progress, proper form, and holistic wellness that encompasses
                  both physical and mental health.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg fade-in-up" style={{ animationDelay: '0.8s' }}>
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-gray-600">Happy Members</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg fade-in-up" style={{ animationDelay: '1s' }}>
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in-up">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              The principles that guide everything we do and shape our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-up">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our training programs and customer service.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                Building a supportive community where everyone can thrive and achieve their goals together.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Continuously evolving our methods and incorporating the latest fitness research and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 fade-in-up">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg mb-8 text-red-100 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the Fitness Studio difference. Start your journey towards a stronger, healthier you today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="/signup"
              className="bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Get Started
            </a>
            <a
              href="/classes"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-accent text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              View Classes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}





