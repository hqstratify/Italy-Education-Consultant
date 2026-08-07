import LegalPage, { Clause, Points, ContactClause } from './LegalPage';

export default function TermsConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro={
        <>
          <p>
            These terms apply to your use of the Italy Education Consultants website and to the
            guidance we provide through it. Please read them before submitting an enquiry.
          </p>
          <p>
            Italy Education Consultants is an education consultancy based in Rajouri Garden, New
            Delhi. We advise students in India who are planning to study in Italy.
          </p>
        </>
      }
    >
      <Clause heading="1. Acceptance of These Terms">
        <p>
          By browsing this website or submitting your details through the enquiry form, you confirm
          that you accept these terms. If you do not agree with them, please do not use the site or
          send us an enquiry.
        </p>
      </Clause>

      <Clause heading="2. Use of This Website">
        <p>
          You may use this website for your own personal, non-commercial purposes in connection with
          planning your education. You agree not to use it in any way that is unlawful, or that
          could damage the site, interfere with its operation, or misrepresent your identity when
          submitting an enquiry.
        </p>
      </Clause>

      <Clause heading="3. The Services We Provide">
        <p>
          Our role is advisory. Depending on what you need, we may help you with profile evaluation
          and counselling, university and course selection, preparing and organising university
          applications, understanding scholarship opportunities, preparing documentation for the
          Italy student visa process, and pre-departure planning.
        </p>
        <p>
          We assist you with the process. We do not make admission decisions, award scholarships or
          issue visas, and we are not an agent of any university, government body or consular
          office.
        </p>
      </Clause>

      <Clause heading="4. Accuracy of Information on This Website">
        <p>
          The information published on this website is provided for general guidance. University
          entry requirements, English-language requirements, tuition fees, scholarship criteria,
          intake dates, application deadlines and immigration rules are set by the relevant
          institutions and authorities in Italy, and they change from time to time.
        </p>
        <p>
          We take care to keep our content reasonable and current, but we cannot warrant that every
          detail is accurate or complete at the moment you read it. Always confirm requirements that
          matter to you against the official source before acting on them.
        </p>
      </Clause>

      <Clause heading="5. Admissions and Application Outcomes">
        <p>
          Admission decisions rest entirely with the universities and institutions you apply to.
          They apply their own criteria, and the outcome may depend on your academic record,
          competition for places, the completeness of your documentation and other factors outside
          our control.
        </p>
        <p>
          We do not guarantee admission to any university or programme, and nothing on this website
          should be read as such a guarantee.
        </p>
      </Clause>

      <Clause heading="6. Student Visa Matters">
        <p>
          Student visas are granted at the discretion of the relevant Italian consular and
          immigration authorities, in line with the rules in force at the time of your application.
          We can help you prepare and organise your documentation, but the decision is never ours.
        </p>
        <p>We do not guarantee that a visa will be issued, and we do not provide legal advice.</p>
      </Clause>

      <Clause heading="7. Scholarships and Costs">
        <p>
          Scholarships in Italy — including regional (DSU) scholarships, university scholarships and
          government-supported opportunities — are awarded by the institutions or authorities that
          offer them, based on their own criteria, their available funding and the applicant pool
          for that year.
        </p>
        <p>
          We help you understand which opportunities may be relevant to your profile and what they
          require. We do not guarantee that you will receive a scholarship, or the amount of any
          award. Any indication of costs or funding we discuss with you is an estimate, not a
          quotation from the institution concerned.
        </p>
      </Clause>

      <Clause heading="8. Your Responsibilities">
        <p>When you work with us, you agree to:</p>
        <Points
          items={[
            'Give us accurate and complete information about your academic history, qualifications and circumstances',
            'Provide documents that are genuine and correctly issued',
            'Meet the deadlines that apply to your applications, scholarship calls and visa appointments',
            'Read and check anything submitted in your name before it is sent',
            'Comply with the rules of the universities and authorities you are dealing with',
          ]}
        />
        <p>
          We cannot be held responsible for the consequences of inaccurate information, missing or
          invalid documents, or deadlines missed by you.
        </p>
      </Clause>

      <Clause heading="9. Intellectual Property">
        <p>
          The text, layout, design and branding of this website belong to Italy Education
          Consultants, except where stated otherwise. Photography used on the site is licensed from
          third parties and credited on our image credits page. You may not copy, reproduce or
          republish material from this website for commercial purposes without our permission.
        </p>
      </Clause>

      <Clause heading="10. Third-Party Websites and Services">
        <p>
          This website links to third-party websites, including university pages, Google Maps and
          our social media profiles. Those links are provided for convenience. We do not control
          those sites, do not endorse everything on them, and are not responsible for their content,
          accuracy or availability.
        </p>
      </Clause>

      <Clause heading="11. Limitation of Liability">
        <p>
          To the extent permitted by law, Italy Education Consultants is not liable for any indirect
          or consequential loss arising from your use of this website, or from decisions taken by
          universities, scholarship bodies, consular offices or immigration authorities.
        </p>
        <p>
          Nothing in these terms limits any liability that cannot be limited or excluded under
          applicable law.
        </p>
      </Clause>

      <Clause heading="12. Changes to the Website and Our Services">
        <p>
          We may update, change or remove content on this website, and may adjust the services we
          offer, at any time and without notice. We may also revise these terms; the date shown at
          the top of this page indicates when they were last updated. Continuing to use the site
          after a change means you accept the revised terms.
        </p>
      </Clause>

      <Clause heading="13. Governing Terms">
        <p>
          These terms are governed by the laws of India, and any dispute arising from them or from
          your use of this website will be subject to the jurisdiction of the courts of Delhi.
        </p>
      </Clause>

      <ContactClause heading="14. Contact Us" />
    </LegalPage>
  );
}
