import { PageLayout } from "components/PageLayout";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout hideSidebar={true}>
      <div className="container mx-auto p-6 max-w-5xl">
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p>Effective Date: 01.04.2023</p>
          </div>
          <div>
            <p>
              Kontext (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Kontext&quot;) is a site run by Web3
              LLC and is committed to protecting the privacy of our users (&quot;you&quot;
              or &quot;user&quot;) while using our website (the &quot;Service&quot;), which
              aggregates and displays public tweets from Twitter. This Privacy
              Policy explains our practices regarding the collection, use, and
              disclosure of information when you use our Service. By using the
              Service, you agree to the collection and use of information in
              accordance with this Privacy Policy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Information We Collect and Use
            </h3>
            <p>
              Since our Service only aggregates and displays publicly available
              tweets from Twitter, we do not collect or store any personal
              information from our users. However, we may collect non-personally
              identifiable information, such as your IP address, browser type,
              and device type, to improve the functionality and user experience
              of our Service.
            </p>
            <p>
              Our Service is hosted on vercel.com, and we are not responsible
              for the privacy practices of this third-party provider. We
              recommend that you review their privacy policy to understand how
              they handle your data.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Anonymized User Analytics</h3>
            <p>
              We use Vercel Analytics to collect anonymized user data to better
              understand how our users interact with our Service and to improve
              the functionality and user experience of our Service. This data
              may include information such as the number of visitors, the pages
              they visit, and the duration of their visits. Vercel Analytics
              does not collect any personally identifiable information.
            </p>
            <p>
              All the data is anonymous and we don’t track user details such as
              name, handle, email, wallet address and so on.
            </p>
            <p>
              We may change to another third-party analytics service provider.
              The Privacy Policy of Analytics subjects every provider. You
              should review everything before using the Site.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Your Rights and Choices</h3>
            <p>
              We may collect the following information about you when you use
              the Site:
            </p>
            <p>
              Cookies. We will only use strictly necessary cookies. These
              cookies are essential for you to browse the Site and use its
              features, including accessing secure areas of the Site.
            </p>
            <p>
              Do Not Track. Your browser settings may allow you to automatically
              transmit a “Do Not Track” signal to the online services you visit.
              Note, however, there is no industry consensus as to what Site and
              app operators should do with regard to these signals. Accordingly,
              unless and until the law is interpreted to require us to do so, we
              do not monitor or take action with respect to “Do Not Track”
              signals. For more information on “Do Not Track,” visit
              https://allaboutdnt.com.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Data Security</h3>
            <p>
              We implement and maintain reasonable administrative, physical, and
              technical security safeguards to help protect information about
              you from loss, theft, misuse, unauthorized access, disclosure,
              alteration, and destruction. Nevertheless, transmission via the
              internet is not completely secure and we cannot guarantee the
              security of information about you.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Links to Other Websites</h3>
            <p>
              Our Service may contain links to other websites that are not
              operated by us. If you click on a third-party link, you will be
              directed to that third party&apos;s website. We strongly advise you to
              review the Privacy Policy of every site you visit. We have no
              control over and assume no responsibility for the content, privacy
              policies, or practices of any third-party sites or services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Children&apos;s Privacy</h3>
            <p>
              Our Service is not directed at individuals under the age of 13,
              and we do not knowingly collect personally identifiable
              information from children under 13. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact us. If we become aware that
              we have collected personal information from children under 13
              without verification of parental consent, we will take steps to
              remove that information from our servers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              Changes to This Privacy Policy
            </h3>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Contact</h3>
            <p>
              If you have any questions or comments about this Privacy Policy,
              our data practices, or our compliance with applicable law, please
              contact us at privacy@kontext.app
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
