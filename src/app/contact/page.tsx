import { Metadata } from "next";
import { ContactForm } from "./contact-form-client";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with SabPataKaro",
  description: "Contact SabPataKaro for questions, feedback, or suggestions. We're here to help you with your financial and government services queries.",
  keywords: ["contact sabpatakaro", "finance queries", "government services questions"],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Have a question, suggestion, or feedback? We'd love to hear from you. 
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-3">
                  For general inquiries, suggestions, or feedback:
                </p>
                <a 
                  href="mailto:mailtosabpatakaro@gmail.com" 
                  className="text-primary font-medium hover:underline"
                >
                  mailtosabpatakaro@gmail.com
                </a>
              </div>

              {/* Response Time */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">Response Time</h3>
                <p className="text-muted-foreground">
                  We typically respond within 24-48 hours on business days. 
                  For urgent matters, please mention it in the subject line.
                </p>
              </div>

              {/* What We Can Help With */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2">What We Can Help With</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Questions about our guides and content</li>
                  <li>• Suggestions for new topics or improvements</li>
                  <li>• Reporting errors or outdated information</li>
                  <li>• Feedback about your experience</li>
                  <li>• Partnership or collaboration inquiries</li>
                </ul>
              </div>

              {/* Important Notice */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-semibold text-amber-800 mb-2">Important Notice</h3>
                <p className="text-muted-foreground text-sm">
                  SabPataKaro provides educational information only. We are not affiliated with 
                  any government agency. For official matters, please contact the relevant 
                  government department directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
