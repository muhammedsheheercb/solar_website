"use client";

import { useState } from "react";
import { PageHero } from "@/components/sections";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    bill: "Under ₹5,000",
    notes: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission flow
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };
  return (
    <main>
      <PageHero 
        eyebrow="Contact" 
        title="Let’s review your site and energy goals." 
        text="Send your details and our solar advisory team will help shape the next step." 
        image="https://images.unsplash.com/photo-1548613053-22087dd8edb8?auto=format&fit=crop&w=1600&q=80" 
      />
      
      <section className="container grid gap-12 py-24 lg:grid-cols-[1fr_.8fr] lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-display font-medium text-primary md:text-4xl">Send us a message</h2>
            <p className="mt-3 text-muted-foreground">Fill out the form below and our team will get back to you within 24 hours.</p>
          </div>
          
          {submitted ? (
            <div className="soft-card grid gap-4 p-8 md:p-10 text-center bg-accent/5 border-accent/30">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 text-accent">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-display font-medium text-primary">Thank you! Message Sent</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We have received your enquiry. Our solar advisory team will review your details and reach out within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="button-secondary mx-auto mt-4"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="soft-card grid gap-6 p-8 md:p-10">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-primary">
                  First Name *
                  <input
                    type="text"
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-primary">
                  Last Name *
                  <input
                    type="text"
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </label>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-primary">
                  Email Address *
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-primary">
                  Phone Number *
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 73382 68249"
                    className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-primary">
                  City / Location
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-primary">
                  Monthly electricity bill
                  <select
                    name="bill"
                    value={formData.bill}
                    onChange={handleChange}
                    className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  >
                    <option>Under ₹5,000</option>
                    <option>₹5,000 - ₹15,000</option>
                    <option>₹15,000 - ₹30,000</option>
                    <option>₹30,000+</option>
                  </select>
                </label>
              </div>
              
              <label className="grid gap-2 text-sm font-semibold text-primary">
                Project Notes (Optional)
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your property or energy needs..."
                  className="min-h-36 resize-y rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </label>
              
              <button
                type="submit"
                disabled={loading}
                className="button-primary group mt-2 w-full justify-center py-4 text-base md:w-auto disabled:opacity-60"
              >
                {loading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Submit Enquiry <ArrowRight size={18} className="button-arrow" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-8"
        >
          <div className="rounded-[3px] p-8 md:p-10 bg-primary text-white">
            <h3 className="text-2xl font-medium font-display mb-6">Contact Information</h3>
            
            <ul className="grid gap-6">
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-semibold">Head Office</p>
                  <p className="mt-1 leading-relaxed text-white/80">12 Clean Energy Park, <br />Bengaluru, Karnataka 560001</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="mt-1 text-white/80">hello@helioworks.example</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="mt-1 text-white/80">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-accent">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="mt-1 text-white/80">Mon - Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="soft-card relative overflow-hidden h-[300px] w-full p-0">
            {/* Using a nice abstract map-like image instead of a real map for a cleaner visual look */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
              alt="Map placeholder" 
              className="absolute inset-0 h-full w-full object-cover grayscale opacity-90"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
            <div className="absolute bottom-4 left-4 right-4 rounded-md bg-white/95 backdrop-blur-sm p-4 text-sm font-medium text-primary shadow-sm flex items-center gap-3">
               <MapPin size={18} className="text-accent" /> Serving clients across India
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
