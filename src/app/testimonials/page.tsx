'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Member since 2022",
      rating: 5,
      image: "/images/Fitness studio images/pexels-pixabay-416717.jpg",
      text: "Fitness Studio has completely transformed my life. The trainers are incredibly knowledgeable and supportive. I've lost 30 pounds and gained so much confidence. The community here is amazing!",
      achievement: "Lost 30 lbs in 6 months"
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Member since 2021",
      rating: 5,
      image: "/images/Fitness studio images/pexels-ivan-samkov-4162451.jpg",
      text: "The variety of classes keeps me motivated. From HIIT to yoga, there's something for every mood and fitness level. The facility is always clean and the equipment is top-notch.",
      achievement: "Completed 5 marathons"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Member since 2023",
      rating: 5,
      image: "/images/Fitness studio images/pexels-willpicturethis-1954524.jpg",
      text: "As a busy mom, finding time for fitness was challenging. Fitness Studio's flexible scheduling and amazing childcare made it possible. I've never felt better!",
      achievement: "First marathon at 35"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Member since 2020",
      rating: 5,
      image: "/images/Fitness studio images/pexels-willpicturethis-1954524.jpg",
      text: "The personal training sessions have been life-changing. My trainer helped me recover from an injury and get stronger than ever. The nutrition guidance was invaluable.",
      achievement: "Bench press PR: 315 lbs"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Member since 2022",
      rating: 5,
      image: "/images/Fitness studio images/pexels-ivan-samkov-4162451.jpg",
      text: "What I love most about Fitness Studio is the genuine care everyone shows. It's not just a gym, it's a community that supports your goals and celebrates your progress.",
      achievement: "Lost 50 lbs, kept it off"
    },
    {
      id: 6,
      name: "Alex Martinez",
      role: "Member since 2023",
      rating: 5,
      image: "/images/Fitness studio images/pexels-pixabay-416717.jpg",
      text: "The group classes are incredibly motivating. Everyone pushes each other to do better. I've made great friends and improved my fitness level dramatically.",
      achievement: "10K run in under 45 minutes"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Fitness studio images/pexels-thelazyartist-2247179.jpg"
            alt="Testimonials background"
            fill
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-in-up">
              What Our Members Say
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Don&apos;t just take our word for it. Hear from our community of fitness enthusiasts
              who have transformed their lives with Fitness Studio.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      fill
                      sizes="(max-width: 768px) 96px, 128px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentSlide].rating)}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
                    &ldquo;{testimonials[currentSlide].text}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900">{testimonials[currentSlide].name}</h4>
                    <p className="text-accent font-medium">{testimonials[currentSlide].role}</p>
                  </div>

                  {/* Achievement Badge */}
                  <div className="inline-block bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {testimonials[currentSlide].achievement}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-accent scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in-up">
              <div className="text-4xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-600">Happy Members</div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 fade-in-up">
              More Success Stories
            </h2>
            <p className="text-lg text-gray-600 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Real results from real people who committed to their fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic mb-3">&ldquo;{testimonial.text.substring(0, 100)}&hellip;&rdquo;</p>
                <div className="text-accent text-sm font-medium">{testimonial.achievement}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 fade-in-up">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg mb-8 text-red-100 fade-in-up" style={{ animationDelay: '0.2s' }}>
            Join our community and start your transformation today. Your success story could be next!
          </p>
          <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="/signup"
              className="inline-block bg-white text-accent hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}





