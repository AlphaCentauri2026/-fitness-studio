import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access",
        "Community events"
      ],
      popular: false,
      buttonText: "Start Basic",
      buttonLink: "/signup"
    },
    {
      name: "Standard",
      price: "$59",
      period: "per month",
      description: "Ideal for regular gym-goers seeking more benefits",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "2 personal training sessions/month",
        "Nutrition consultation",
        "Priority booking",
        "Guest passes (2/month)"
      ],
      popular: true,
      buttonText: "Choose Standard",
      buttonLink: "/signup"
    },
    {
      name: "Premium",
      price: "$99",
      period: "per month",
      description: "Complete fitness experience with premium benefits",
      features: [
        "Everything in Standard",
        "Unlimited personal training",
        "Custom meal planning",
        "Recovery services",
        "VIP lounge access",
        "Unlimited guest passes",
        "Complimentary towel service"
      ],
      popular: false,
      buttonText: "Go Premium",
      buttonLink: "/signup"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/fitness/Dynamic_wideangle_photo_of_a_modern_fitness_2.jpg"
            alt="Pricing background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-in-up">
              Choose Your Plan
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Select the perfect membership plan that fits your fitness goals and lifestyle.
              All plans include access to our state-of-the-art facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl fade-in-up ${
                  tier.popular ? 'ring-2 ring-accent scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 rounded-bl-lg font-semibold text-sm">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-accent">{tier.price}</span>
                      <span className="text-gray-600 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-600">{tier.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <Link
                      href={tier.buttonLink}
                      className={`inline-block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        tier.popular
                          ? 'bg-accent text-white hover:bg-red-700'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {tier.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in-up">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Got questions? We&apos;ve got answers.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6 fade-in-up">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I freeze my membership?</h3>
              <p className="text-gray-600">Yes, you can freeze your membership for up to 3 months per year at no additional cost.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a contract?</h3>
              <p className="text-gray-600">All memberships are month-to-month with no long-term contracts. You can cancel anytime.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I bring a guest?</h3>
              <p className="text-gray-600">Guest privileges vary by membership tier. Standard and Premium members get guest passes.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your operating hours?</h3>
              <p className="text-gray-600">We&apos;re open 24/7 for members with premium access. Standard hours are 5 AM - 11 PM weekdays.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-red-100 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join thousands of members who have transformed their lives with Fitness Studio.
            Start your fitness journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/signup"
              className="bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Sign Up Now
            </Link>
            <Link
              href="/classes"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-accent text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              View Classes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}





