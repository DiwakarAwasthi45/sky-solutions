'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import {
  Award,
  Users,
  Laptop,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'

export default function page() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from('.hero-badge', {
        y: -30,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          '.hero-title',
          {
            y: 60,
            opacity: 0,
            duration: 1,
          },
          '-=0.2'
        )
        .from(
          '.hero-text',
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          '.hero-btn',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          '.hero-image',
          {
            x: 80,
            opacity: 0,
            duration: 1,
          },
          '-=0.8'
        )
        .from(
          '.stat-card',
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          '-=0.5'
        )

      gsap.to('.hero-image', {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: 'power1.inOut',
      })

      gsap.to('.blob1', {
        x: 40,
        y: 25,
        repeat: -1,
        yoyo: true,
        duration: 6,
      })

      gsap.to('.blob2', {
        x: -30,
        y: -30,
        repeat: -1,
        yoyo: true,
        duration: 7,
      })
    }, sectionRef)

    return () => ctx.revert()
     const counter = { value: 0 }

    gsap.to(counter, {
      value: 3000,
      duration: 2,
      ease: 'power2.out',
      snap: { value: 1 },
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = `${counter.value}+`
        }
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-[#1877AE] via-[#1B8FD2] to-[#0E5C89] py-24 lg:py-32"
    >
      {/* Background */}
      <div className="blob1 absolute -left-32 top-10 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
      <div className="blob2 absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 items-center">

          {/* Left */}
          <div>

            <div className="hero-badge inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
              About Sky Solutions
            </div>

            <h1 className="hero-title mt-6 text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-white">
              Empowering Students With
              <span className="block text-yellow-300">
                Modern IT Education
              </span>
            </h1>

            <p className="hero-text mt-8 max-w-xl text-lg leading-8 text-blue-100">
              Sky Solutions Computer Institute is dedicated to providing
              practical computer education, industry-focused training,
              and career guidance that helps students build successful
              futures in technology.
            </p>

            <button className="hero-btn mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#1877AE] shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
              Explore Courses
              <ArrowRight size={20} />
            </button>

          </div>

          {/* Right */}
          <div className="relative">

            <div className="hero-image overflow-hidden rounded-3xl shadow-2xl border border-white/20">

              <Image
                src="/about.jpg"
                alt="Sky Solutions"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />

            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-2xl">

              <h2 className="text-4xl counter font-black text-[#1877AE]">
                10+
              </h2>

              <p className="mt-1 text-gray-600">
                Years of Excellence
              </p>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="stat-card rounded-2xl bg-white p-8 shadow-xl text-center">
            <Users className="mx-auto text-[#1877AE]" size={40} />
            <h3 className="mt-4 text-4xl font-black">3000+</h3>
            <p className="text-gray-600 mt-2">Students Trained</p>
          </div>

          <div className="stat-card rounded-2xl bg-white p-8 shadow-xl text-center">
            <GraduationCap className="mx-auto text-[#1877AE]" size={40} />
            <h3 className="mt-4 text-4xl font-black">25+</h3>
            <p className="text-gray-600 mt-2">Professional Courses</p>
          </div>

          <div className="stat-card rounded-2xl bg-white p-8 shadow-xl text-center">
            <Laptop className="mx-auto text-[#1877AE]" size={40} />
            <h3 className="mt-4 text-4xl font-black">100%</h3>
            <p className="text-gray-600 mt-2">Practical Learning</p>
          </div>

          <div className="stat-card rounded-2xl bg-white p-8 shadow-xl text-center">
            <Award className="mx-auto text-[#1877AE]" size={40} />
            <h3 className="mt-4 text-4xl font-black">98%</h3>
            <p className="text-gray-600 mt-2">Student Satisfaction</p>
          </div>

        </div>

      </div>
    </section>
  )
}