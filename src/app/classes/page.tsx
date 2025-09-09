import Image from "next/image";
import Link from "next/link";

export default function Classes() {
  const classes = [
    {
      id: 1,
      title: "High-Intensity Training",
      description: "Push your limits with our intense HIIT workouts designed to burn maximum calories and build strength in minimal time.",
      image: "/images/fitness/Energetic_fitness_class_in_session_people_d_0.jpg",
      duration: "45 mins",
      level: "Intermediate to Advanced",
      schedule: "Mon, Wed, Fri - 6:00 AM & 7:00 PM",
      features: ["Cardio Blast", "Strength Training", "Core Work", "Flexibility"],
      color: "from-red-500 to-red-700"
    },
    {
      id: 2,
      title: "Yoga & Flexibility",
      description: "Find balance and peace with our yoga classes that combine traditional poses with modern flexibility techniques.",
      image: "/images/fitness/Calm_yoga_class_in_a_bright_studio_people_s_0.jpg",
      duration: "60 mins",
      level: "All Levels",
      schedule: "Tue, Thu, Sat - 8:00 AM & 6:00 PM",
      features: ["Mindfulness", "Deep Stretching", "Breathing Exercises", "Meditation"],
      color: "from-blue-500 to-blue-700"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fitness/Dynamic_wideangle_photo_of_a_modern_fitness_1.jpg"
            alt="Classes background"
            fill
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-in-up">
              Our Classes
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover the perfect class for your fitness goals. From high-intensity training to mindful yoga,
              we have something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {classes.map((classItem, index) => (
              <div
                key={classItem.id}
                className={`relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl ${
                  index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={classItem.image}
                      alt={classItem.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${classItem.color} opacity-40`}></div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 transform transition-transform duration-300 hover:scale-110">
                          {classItem.title}
                        </h2>
                        <p className="text-lg lg:text-xl max-w-md mx-auto px-4 transform transition-transform duration-300 hover:scale-105">
                          {classItem.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Duration</h3>
                          <p className="text-gray-600">{classItem.duration}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Level</h3>
                          <p className="text-gray-600">{classItem.level}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Schedule</h3>
                        <p className="text-gray-600">{classItem.schedule}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
                        <div className="flex flex-wrap gap-2">
                          {classItem.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <Link
                          href="/signup"
                          className="inline-block bg-accent hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                        >
                          Book This Class
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Classes Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in-up">
              More Classes Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              We&apos;re constantly expanding our class offerings to meet your fitness needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 fade-in-up">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CrossFit</h3>
              <p className="text-gray-600 mb-4">
                Functional fitness workouts that combine strength training, cardio, and gymnastics.
              </p>
              <span className="text-accent font-medium">Coming Soon</span>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pilates</h3>
              <p className="text-gray-600 mb-4">
                Core-strengthening exercises that improve posture, flexibility, and muscular balance.
              </p>
              <span className="text-accent font-medium">Coming Soon</span>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Boxing</h3>
              <p className="text-gray-600 mb-4">
                High-energy boxing classes that build cardiovascular fitness and coordination.
              </p>
              <span className="text-accent font-medium">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 fade-in-up">
            Ready to Transform Your Fitness?
          </h2>
          <p className="text-lg mb-8 text-red-100 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join our classes and experience the difference professional training can make.
          </p>
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/signup"
              className="inline-block bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}





