import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Q12 Agency",
  description: "Q12 Agency's privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black py-20 px-4">
      <div className="container-main max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert prose-lg text-zinc-300">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Last Updated: January 2026</h2>
            <p className="mb-4">
              At Q12 Agency, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number)</li>
              <li>Company information (when provided)</li>
              <li>Project details and requirements</li>
              <li>Website usage data (cookies, analytics)</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and requests</li>
              <li>Provide services you've requested</li>
              <li>Improve our website and services</li>
              <li>Send you relevant communications (with your consent)</li>
              <li>Analyze website usage and trends</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Data Protection</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="mb-4">
              We may use third-party services to help operate our website and analyze usage. These services may have access to your information only to perform specific tasks on our behalf.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-indigo-400">
              <a href="mailto:hello@q12agency.com">hello@q12agency.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}