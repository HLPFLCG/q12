import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Q12 Agency",
  description: "Q12 Agency's terms of service and usage agreements.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black py-20 px-4">
      <div className="container-main max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Terms of Service
        </h1>
        
        <div className="prose prose-invert prose-lg text-zinc-300">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Last Updated: January 2026</h2>
            <p className="mb-4">
              Welcome to Q12 Agency. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
            <p className="mb-4">
              Q12 Agency provides creative services including but not limited to UGC content creation, social media management, content strategy, and marketing consulting. Specific services, deliverables, and terms will be outlined in individual project agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
            <p className="mb-4">As a client, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Respond to communications in a timely manner</li>
              <li>Provide necessary assets and approvals</li>
              <li>Honor payment terms as outlined in agreements</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
            <p className="mb-4">
              Payment terms will be specified in each project agreement. Generally, we require a deposit before work begins, with remaining payments due upon completion of milestones. Late payments may incur fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content, designs, and materials created by Q12 Agency remain our property until full payment is received. Upon full payment, ownership rights transfer as outlined in the project agreement. Client retains ownership of their brand assets provided to us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Revisions and Changes</h2>
            <p className="mb-4">
              Each project includes a specified number of revisions. Additional revisions beyond this scope may incur additional charges. Major scope changes require written agreement and may adjust project timeline and costs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              Q12 Agency shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="mb-4">
              Either party may terminate the relationship with written notice. Upon termination, client is responsible for payment for all work completed. Q12 Agency reserves the right to terminate services for non-payment or breach of terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
            <p className="mb-4">
              Both parties agree to maintain confidentiality of proprietary information shared during the course of our relationship. This includes business strategies, client lists, and project details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms of Service are governed by the laws of New York, United States. Any disputes shall be resolved through arbitration in accordance with the rules of the American Arbitration Association.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="mb-4">
              Q12 Agency reserves the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact us at:
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