"use client";

import { PageHero } from "@/components/sections";
import { motion } from "motion/react";
import { MapPin, Mail, Phone, Clock, ArrowRight } from "lucide-react";

export default function ContactPage() {
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
          
          <form className="soft-card grid gap-6 p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-primary">
                First Name
                <input type="text" placeholder="John" className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-primary">
                Last Name
                <input type="text" placeholder="Doe" className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
              </label>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-primary">
                Email Address
                <input type="email" placeholder="john@example.com" className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-primary">
                Phone Number
                <input type="tel" placeholder="+1 (555) 000-0000" className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-primary">
                City / Location
                <input type="text" placeholder="Your city" className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-primary">
                Monthly electricity bill
                <select className="rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent">
                  <option>Under $100</option>
                  <option>$100 - $200</option>
                  <option>$200 - $300</option>
                  <option>$300+</option>
                </select>
              </label>
            </div>
            
            <label className="grid gap-2 text-sm font-semibold text-primary">
              Project Notes (Optional)
              <textarea placeholder="Tell us a bit about your property or energy needs..." className="min-h-36 resize-y rounded-md border border-border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent" />
            </label>
            
            <button className="button-primary group mt-2 w-full justify-center py-4 text-base md:w-auto" type="button">
              Submit Enquiry <ArrowRight size={18} className="button-arrow" />
            </button>
          </form>
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
