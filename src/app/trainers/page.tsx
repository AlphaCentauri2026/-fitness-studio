import Image from "next/image";
import Link from "next/link";

export default function Trainers() {
  const trainers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Head Trainer & Fitness Director",
      bio: "Sarah has over 10 years of experience in fitness training and specializes in high-intensity workouts and strength training. She holds multiple certifications including NASM-CPT and FMS.",
      specialties: ["HIIT", "Strength Training", "Nutrition"],
      image: "/images/Fitness studio images/pexels-olly-917732.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "Personal Trainer & Yoga Instructor",
      bio: "Mike combines traditional yoga practices with modern fitness techniques. His holistic approach focuses on both physical strength and mental wellness for complete transformation.",
      specialties: ["Yoga", "Mindfulness", "Flexibility"],
      image: "/images/Fitness studio images/woman-2260736_1280.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "Group Fitness Coordinator",
      bio: "Emma brings energy and enthusiasm to every group class. Her background in dance and sports performance helps create engaging, motivating workouts for all fitness levels.",
      specialties: ["Group Fitness", "Dance Cardio", "Motivation"],
      image: "/images/Fitness studio images/pexels-tima-miroshnichenko-5327509.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Strength & Conditioning Coach",
      bio: "David specializes in athletic performance and injury prevention. His evidence-based training methods help athletes and fitness enthusiasts reach peak physical condition.",
      specialties: ["Sports Performance", "Injury Prevention", "Olympic Lifting"],
      image: "/images/Fitness studio images/weight-lifting-1284616_1280.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Nutrition Specialist & Wellness Coach",
      bio: "Lisa combines her background in nutrition science with practical fitness coaching. She helps members understand the connection between diet, exercise, and overall wellness.",
      specialties: ["Nutrition", "Wellness Coaching", "Weight Management"],
      image: "/images/Fitness studio images/pexels-olly-3757941.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 6,
      name: "Alex Martinez",
      title: "Functional Movement Specialist",
      bio: "Alex focuses on functional movement patterns that translate to everyday life. His training emphasizes proper form, mobility, and functional strength for real-world applications.",
      specialties: ["Functional Training", "Mobility", "Corrective Exercise"],
      image: "/images/Fitness studio images/abs-1850926_1280.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Fitness studio images/abs-1850926_1280.jpg"
            alt="Trainers background"
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-in-up">
              Meet Our Trainers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Our certified trainers are passionate about helping you achieve your fitness goals.
              Each brings unique expertise and a commitment to your success.
            </p>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div
                key={trainer.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                  <p className="text-accent font-medium mb-3">{trainer.title}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{trainer.bio}</p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, specialtyIndex) => (
                        <span
                          key={specialtyIndex}
                          className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-accent hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 transform hover:scale-105">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in-up">
              <div className="text-4xl font-bold text-accent mb-2">6</div>
              <div className="text-gray-600">Expert Trainers</div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 fade-in-up">
            Ready to Work with Our Trainers?
          </h2>
          <p className="text-lg mb-8 text-red-100 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Get personalized training and expert guidance to achieve your fitness goals faster.
          </p>
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/contact"
              className="inline-block bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}





