import { PageLayout } from "components/PageLayout";

export default function TermsOfServicePage() {
  return (
    <PageLayout hideSidebar={true}>
      <div className="container mx-auto p-6 max-w-5xl">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p>Effective Date: 01.04.2023</p>
          <p>
            Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;)
            carefully before using the Kontext (&quot;Kontext&quot;, &quot;us&quot;, &quot;we&quot;, or &quot;our&quot;)
            website (the &quot;Service&quot;). Your access to and use of the Service is
            conditioned on your acceptance of and compliance with these Terms.
            These Terms apply to all visitors, users, and others who access or
            use the Service.
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these
            Terms. If you disagree with any part of the terms, you may not
            access the Service.
          </p>
          <div>
            <h3 className="font-semibold text-lg">Use of Service</h3>
            <p>
              Our Service aggregates and displays publicly available tweets from
              Twitter. You agree to use the Service only for lawful purposes and
              in a manner that does not infringe the rights of, restrict or
              inhibit anyone else&apos;s use and enjoyment of the Service.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Intellectual Property Rights
            </h3>
            <p>
              All content displayed on the Service, including but not limited to
              text, images, graphics, and logos, is the property of their
              respective owners. Kontext does not claim any ownership over the
              content displayed on the Service, which includes tweets and other
              media sourced from Twitter.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Content Disclaimer</h3>
            <p>
              Kontext is not responsible for the accuracy, completeness, or
              suitability of any information or content provided by Twitter or
              any other third-party services. The content displayed on the
              Service is for general information purposes only and should not be
              relied upon without conducting your own independent research.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Limitation of Liability</h3>
            <p>
              In no event shall Kontext, its directors, employees, partners,
              agents, suppliers, or affiliates, be liable for any indirect,
              incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from (i) your access to or use of or
              inability to access or use the Service; (ii) any conduct or
              content of any third party on the Service; (iii) any content
              obtained from the Service; and (iv) unauthorized access, use or
              alteration of your transmissions or content, whether based on
              warranty, contract, tort (including negligence) or any other legal
              theory, whether or not we have been informed of the possibility of
              such damage, and even if a remedy set forth herein is found to
              have failed its essential purpose.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Disclaimer</h3>
            <p>
              Your use of the Service is at your sole risk. The Service is
              provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is
              provided without warranties of any kind, whether express or
              implied, including, but not limited to, implied warranties of
              merchantability, fitness for a particular purpose,
              non-infringement, or course of performance.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Changes to Terms of Service
            </h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If a revision is material, we will try to
              provide at least 30 days&apos; notice prior to any new terms taking
              effect. What constitutes a material change will be determined at
              our sole discretion. By continuing to access or use our Service
              after those revisions become effective, you agree to be bound by
              the revised terms. If you do not agree to the new terms, you must
              stop using the Service.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Termination</h3>
            <p>
              We may terminate or suspend access to our Service immediately,
              without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms. All
              provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity,
              and limitations of liability.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Indemnification</h3>
            <p>
              You agree to defend, indemnify, and hold harmless Kontext, its
              officers, directors, employees, and agents, from and against any
              claims, liabilities, damages, losses, and expenses, including
              without limitation, reasonable attorney&apos;s fees and costs, arising
              out of or in any way connected with (i) your access to or use of
              the Service; (ii) your violation of these Terms of Service; or
              (iii) your violation of any third-party right, including without
              limitation any intellectual property right, publicity,
              confidentiality, property, or privacy right.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at
              terms@kontext.app
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
