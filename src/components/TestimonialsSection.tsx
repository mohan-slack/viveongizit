import React from 'react';
import {Carousel, TestimonialCard, iTestimonial} from "@/components/ui/retro-testimonial";

const TestimonialsSection: React.FC = () => {
  // HUX Smart Ring testimonials data
  const testimonialData = {
    ids: [
      "hux-user-001",
      "hux-user-002", 
      "hux-user-003",
      "hux-user-004",
      "hux-user-005",
      "hux-user-006",
    ],
    details: {
      "hux-user-001": {
        id: "hux-user-001",
        description: "The HUX Smart Ring has completely transformed my health monitoring. The glucose tracking is incredibly accurate, and I love how discreet it is. It's like having a personal health assistant on my finger.",
        profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
        name: "Sarah Chen",
        designation: "Health & Wellness Coach",
      },
      "hux-user-002": {
        id: "hux-user-002", 
        description: "As a fitness enthusiast, the HUX Ring's body fat monitoring and sleep tracking have been game-changers. The data insights help me optimize my training and recovery like never before.",
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
        name: "Marcus Johnson",
        designation: "Professional Athlete",
      },
      "hux-user-003": {
        id: "hux-user-003",
        description: "The NFC payment feature is incredibly convenient, but what really impressed me is the emotion and stress monitoring. It helps me manage my mental health proactively.",
        profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", 
        name: "Dr. Emily Rodriguez",
        designation: "Clinical Psychologist",
      },
      "hux-user-004": {
        id: "hux-user-004",
        description: "The smart touch controls make managing my daily tasks effortless. Being able to control my devices with simple gestures while having continuous health monitoring is revolutionary.",
        profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
        name: "David Kim",
        designation: "Tech Executive",
      },
      "hux-user-005": {
        id: "hux-user-005",
        description: "The calling and vibration alerts keep me connected without being intrusive. Plus, the body temperature monitoring helped me catch an illness early. This ring is truly the future of wearable tech.",
        profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
        name: "Lisa Thompson", 
        designation: "Business Executive",
      },
      "hux-user-006": {
        id: "hux-user-006",
        description: "The sleep management insights from my HUX Ring have improved my sleep quality dramatically. The comprehensive health tracking in such a sleek design is unmatched in the market.",
        profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
        name: "Michael Zhang",
        designation: "Software Engineer",
      },
    }
  };

  // Create testimonial cards
  const cards = testimonialData.ids.map((cardId: string, index: number) => {
    const details = testimonialData.details as {[key: string]: iTestimonial & {id: string}};
    return (
      <TestimonialCard
        key={cardId}
        testimonial={details[cardId]}
        index={index}
        backgroundImage="https://images.unsplash.com/photo-1528458965990-428de4b1cb0d?q=80&w=3129&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    );
  });

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Users Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how HUX Smart Rings are transforming lives with cutting-edge health monitoring and smart technology
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;