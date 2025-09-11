'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredClass: '',
    membershipType: 'standard'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const preferredClasses = [
    'High-Intensity Training',
    'Yoga & Flexibility',
    'Personal Training',
    'Group Fitness',
    'CrossFit',
    'Pilates'
  ];

  const membershipTypes = [
    { value: 'basic', label: 'Basic - $29/month', price: '$29' },
    { value: 'standard', label: 'Standard - $59/month', price: '$59' },
    { value: 'premium', label: 'Premium - $99/month', price: '$99' }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Preferred class validation
    if (!formData.preferredClass) {
      newErrors.preferredClass = 'Please select a preferred class';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Fitness Studio!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for signing up. We&apos;ve sent a confirmation email to {formData.email}.
            Our team will contact you shortly to complete your registration.
          </p>
          <Link
            href="/"
            className="inline-block bg-accent hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden shadow-2xl fade-in-left">
            <Image
              src="/images/Fitness studio images/fitness-465205_1280.jpg"
              alt="Fitness studio signup"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white max-w-md">
              <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
              <p className="text-gray-200">
                Start your fitness journey today and become part of a supportive community
                that motivates and inspires you to reach your goals.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 fade-in-right">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Sign Up Today</h1>
              <p className="text-gray-600">
                Fill out the form below to start your fitness journey with us.
                We&apos;ll get you set up with everything you need to succeed.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              {/* Preferred Class Field */}
              <div>
                <label htmlFor="preferredClass" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Class *
                </label>
                <select
                  id="preferredClass"
                  name="preferredClass"
                  value={formData.preferredClass}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-colors ${
                    errors.preferredClass ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select a class</option>
                  {preferredClasses.map((className) => (
                    <option key={className} value={className}>
                      {className}
                    </option>
                  ))}
                </select>
                {errors.preferredClass && (
                  <p className="mt-1 text-sm text-red-600">{errors.preferredClass}</p>
                )}
              </div>

              {/* Membership Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Membership Type
                </label>
                <div className="space-y-2">
                  {membershipTypes.map((type) => (
                    <label key={type.value} className="flex items-center">
                      <input
                        type="radio"
                        name="membershipType"
                        value={type.value}
                        checked={formData.membershipType === type.value}
                        onChange={handleInputChange}
                        className="text-accent focus:ring-accent"
                      />
                      <span className="ml-3 text-gray-700">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-accent hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  'Join Now'
                )}
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center">
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}





