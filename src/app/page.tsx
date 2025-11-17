"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Coffee, HandShake, Heart, Mail, MessageCircle, Package, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Black Coffee"
          button={{ text: "Order Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Freshly Roasted Coffee"
          description="Experience the perfect blend of premium coffee beans, expertly roasted to perfection every morning"
          tag="Premium Quality"
          tagIcon={Coffee}
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "View Menu", href: "products" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394159196-v57c434b.jpg"
          imageAlt="Freshly roasted coffee beans"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="We are passionate about bringing you the finest coffee experience, from bean to cup"
          tag="About Us"
          tagIcon={Heart}
          textboxLayout="default"
          bulletPoints={[
            {
              title: "Premium Beans",
              description: "Sourced from the world's finest coffee regions",
              icon: Zap
            },
            {
              title: "Expert Roasting",
              description: "Roasted daily using traditional methods",
              icon: Award
            },
            {
              title: "Perfect Brewing",
              description: "Crafted by skilled baristas with passion",
              icon: Star
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394162095-j002pgll.jpg"
          imageAlt="Professional barista preparing coffee"
          imagePosition="right"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Coffee Selection"
          description="Discover our most popular coffee drinks, carefully crafted for coffee lovers"
          tag="Best Sellers"
          tagIcon={Coffee}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "espresso",
              name: "Premium Espresso",
              price: "$4.50",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394159885-7of9rgcq.jpg",
              imageAlt: "Premium espresso coffee",
              initialQuantity: 1
            },
            {
              id: "latte",
              name: "Classic Latte",
              price: "$5.25",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394160590-bgrxlbok.jpg",
              imageAlt: "Classic latte with milk foam",
              initialQuantity: 1
            },
            {
              id: "mocha",
              name: "Chocolate Mocha",
              price: "$5.75",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394161347-86v4wcsi.jpg",
              imageAlt: "Chocolate mocha coffee drink",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Coffee Subscription Plans"
          description="Choose the perfect plan for your coffee needs"
          tag="Subscriptions"
          tagIcon={Package}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "casual",
              price: "$19.99/mo",
              name: "Casual Drinker",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: ["2 bags per month", "Free shipping", "Cancel anytime"]
            },
            {
              id: "coffee-lover",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$34.99/mo",
              name: "Coffee Lover",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: ["4 bags per month", "Free shipping", "Premium blends", "Cancel anytime"]
            },
            {
              id: "connoisseur",
              price: "$49.99/mo",
              name: "Connoisseur",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "about" }
              ],
              features: ["6 bags per month", "Free shipping", "Exclusive blends", "Priority support", "Cancel anytime"]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Coffee Shop Excellence"
          description="Numbers that showcase our commitment to quality coffee and customer satisfaction"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          metrics={[
            {
              id: "customers",
              icon: Users,
              title: "Happy Customers",
              value: "5,000+"
            },
            {
              id: "cups",
              icon: Coffee,
              title: "Cups Served Daily",
              value: "1,200+"
            },
            {
              id: "experience",
              icon: Award,
              title: "Years Experience",
              value: "15+"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from our valued coffee lovers"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Coffee Enthusiast",
              testimonial: "The best coffee in town! Their espresso is perfectly balanced and the atmosphere is so welcoming.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394162884-9ntaukxb.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Mike Rodriguez",
              role: "Regular Customer",
              testimonial: "I've been coming here for 3 years. The quality is consistent and the staff knows exactly how I like my coffee.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394163609-dp47mi2o.jpg",
              imageAlt: "Mike Rodriguez"
            },
            {
              id: "3",
              name: "Emily Chen",
              role: "Local Business Owner",
              testimonial: "Their subscription service is amazing. Fresh coffee delivered right to my office every week!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394164483-2anf3cs7.jpg",
              imageAlt: "Emily Chen"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Coffee Connoisseur",
              testimonial: "Finally found a place that understands coffee. Their single-origin beans are exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394165263-5n8z0jz8.jpg",
              imageAlt: "David Thompson"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Coffee Partners"
          description="We work with premium coffee suppliers and local businesses"
          tag="Partners"
          tagIcon={HandShake}
          textboxLayout="default"
          logos={["/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp"]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact Us"
          title="Stay Connected"
          description="Subscribe to our newsletter for the latest coffee updates, exclusive offers, and brewing tips delivered to your inbox"
          tagIcon={Mail}
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive coffee updates and can unsubscribe at any time."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/uploaded-1763394159196-v57c434b.jpg"
          imageAlt="Coffee shop contact"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Black Coffee"
          columns={[
            {
              items: [
                { label: "Menu", href: "products" },
                { label: "About", href: "about" },
                { label: "Subscriptions", href: "pricing" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Reviews", href: "testimonials" },
                { label: "Blog", href: "https://blog.blackcoffee.com" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "https://blackcoffee.com/privacy" },
                { label: "Terms of Service", href: "https://blackcoffee.com/terms" },
                { label: "Support", href: "https://blackcoffee.com/support" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}