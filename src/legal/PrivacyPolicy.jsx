import LegalPage, { Clause, Points, ContactClause } from './LegalPage';

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <>
          <p>
            Italy Education Consultants (“we”, “us”, “our”) provides guidance to students in India
            who are planning to pursue higher education in Italy. This policy explains what
            information we collect through this website, why we collect it, and what you can ask us
            to do with it.
          </p>
          <p>
            By using this website or submitting an enquiry through it, you agree to the practices
            described below.
          </p>
        </>
      }
    >
      <Clause heading="1. Information You Give Us">
        <p>
          The only information we collect directly from you is what you choose to enter into the
          profile assessment form on this website. That form asks for:
        </p>
        <Points
          items={[
            'Your full name',
            'Your phone number',
            'Your email address',
            'Your current qualification',
            'Your preferred course or field of study',
            'Your preferred intake',
          ]}
        />
        <p>
          If you contact us by telephone instead, we will hold whatever details you share during
          that conversation so that we can advise you properly.
        </p>
        <p>
          Please do not send us copies of passports, academic certificates, financial documents or
          other sensitive paperwork through this website. If documents are needed at a later stage
          of your application, we will tell you how to share them securely.
        </p>
      </Clause>

      <Clause heading="2. How We Use Your Information">
        <p>We use the information you provide only in order to:</p>
        <Points
          items={[
            'Respond to your enquiry and contact you about your study plans for Italy',
            'Assess your profile and discuss university, course and intake options that may suit you',
            'Explain application requirements, documentation, scholarship opportunities and student visa processes relevant to your situation',
            'Keep a record of our correspondence with you so that our guidance stays consistent over time',
          ]}
        />
        <p>
          We do not sell your personal information, and we do not share it with third parties for
          their own marketing purposes.
        </p>
      </Clause>

      <Clause heading="3. How We Communicate With You">
        <p>
          When you submit an enquiry, you are asking us to contact you. We may respond by telephone,
          by email or by message, using the contact details you gave us.
        </p>
        <p>
          If you no longer wish to hear from us, tell us and we will stop contacting you about your
          enquiry.
        </p>
      </Clause>

      <Clause heading="4. Sharing Information With Universities and Authorities">
        <p>
          If you decide to proceed with an application, some of your information will need to be
          shared with the universities you apply to, and with the bodies involved in pre-enrolment,
          scholarship or student visa processes. This only happens in connection with an application
          you have asked us to support, and those organisations handle your information under their
          own policies and the rules that apply to them.
        </p>
      </Clause>

      <Clause heading="5. Cookies, Analytics and Third-Party Services">
        <p>
          This website does not set advertising or tracking cookies of its own, and we do not
          operate a login or user account system.
        </p>
        <p>
          The site does load a small number of third-party services in order to function and look
          the way it does:
        </p>
        <Points
          items={[
            'Google Fonts, which serves the typefaces used across the site',
            'Google Maps, which powers the embedded map on the contact section',
            'Links out to our Google Business Profile and our Instagram page',
          ]}
        />
        <p>
          These services are operated by third parties who may collect technical information such as
          your IP address or browser type, and may set their own cookies, in accordance with their
          own privacy policies. Our website host may also keep standard server logs for security and
          reliability purposes.
        </p>
        <p>
          If analytics or advertising tools are added to this website in future, this policy will be
          updated to say so.
        </p>
      </Clause>

      <Clause heading="6. Keeping Your Information Secure">
        <p>
          We take reasonable steps to protect the information you share with us and limit access to
          the people who need it in order to help you. Please note, however, that no method of
          transmitting information over the internet is completely secure, so we cannot guarantee
          absolute security.
        </p>
      </Clause>

      <Clause heading="7. How Long We Keep It">
        <p>
          We keep your enquiry details for as long as is reasonably needed to advise you and to
          maintain a record of the guidance we have provided. If you ask us to delete your details
          and there is no ongoing application or legal reason to retain them, we will do so.
        </p>
      </Clause>

      <Clause heading="8. Your Rights">
        <p>You may contact us at any time to:</p>
        <Points
          items={[
            'Ask what personal information we hold about you',
            'Ask us to correct information that is inaccurate or out of date',
            'Ask us to delete your information, where we are not required to keep it',
            'Ask us to stop contacting you',
          ]}
        />
        <p>
          We will respond to reasonable requests within a reasonable period. We may need to confirm
          your identity before acting on a request.
        </p>
      </Clause>

      <Clause heading="9. Children and Young Applicants">
        <p>
          Our services are aimed at students planning higher education. If you are under 18, please
          involve a parent or guardian when you share your details with us or make decisions about
          studying abroad.
        </p>
      </Clause>

      <Clause heading="10. External Links">
        <p>
          This website links to external sites, including university websites, our Instagram page
          and our Google Business Profile. We do not control those websites and are not responsible
          for their content or their privacy practices. We encourage you to read the privacy policy
          of any website you visit from here.
        </p>
      </Clause>

      <Clause heading="11. Changes to This Policy">
        <p>
          We may update this policy from time to time to reflect changes to our services or to this
          website. The date at the top of this page shows when it was last revised. Please check
          back occasionally.
        </p>
      </Clause>

      <ContactClause heading="12. Contact Us" />
    </LegalPage>
  );
}
