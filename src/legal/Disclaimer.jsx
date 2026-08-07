import LegalPage, { Clause, Points, ContactClause } from './LegalPage';

export default function Disclaimer() {
  return (
    <LegalPage
      title="Disclaimer"
      intro={
        <>
          <p>
            Italy Education Consultants provides counselling and application support to students in
            India who are planning to study in Italy. This page sets out the limits of what the
            information on this website means, and what our guidance can and cannot do.
          </p>
        </>
      }
    >
      <Clause heading="1. General Information Only">
        <p>
          Everything published on this website — including material about universities, courses,
          intakes, eligibility, English-language requirements, tuition costs, scholarships,
          documentation and student visas — is provided for general informational and counselling
          purposes.
        </p>
        <p>
          It is not legal, financial or immigration advice, and it is not a substitute for the
          official information published by the university, authority or consular office concerned.
        </p>
      </Clause>

      <Clause heading="2. Admission Decisions">
        <p>
          Admission is decided solely by the university or institution you apply to. We can help you
          build a realistic shortlist, prepare your documentation and meet stated requirements, but
          we have no influence over the outcome.
        </p>
        <p>
          We do not claim, promise or guarantee admission to any university or programme.
        </p>
      </Clause>

      <Clause heading="3. Visa Decisions">
        <p>
          Student visa decisions are made by the relevant Italian government departments, embassy or
          consular offices and immigration authorities, under the rules in force at the time of your
          application.
        </p>
        <p>
          Our support is limited to helping you understand and prepare the documentation involved.
          We do not guarantee that a visa will be granted, and we cannot influence or expedite a
          decision.
        </p>
      </Clause>

      <Clause heading="4. Scholarships and Financial Support">
        <p>
          Regional (DSU), university and government-supported scholarships are awarded by the bodies
          that offer them, according to their own published criteria, the documentation submitted
          and the funding available in a given year.
        </p>
        <p>
          Any reference on this website to potential benefits — such as tuition support,
          accommodation, meals or living allowances — describes what certain schemes may include. It
          is not an offer, an entitlement or a guarantee that you will receive any award.
        </p>
      </Clause>

      <Clause heading="5. No Guaranteed Outcomes">
        <p>
          We do not offer guaranteed admission, guaranteed visas, guaranteed scholarships or
          guaranteed financial aid. If anyone suggests otherwise on our behalf, that statement is
          not authorised by us.
        </p>
      </Clause>

      <Clause heading="6. Information Can Change">
        <p>The following are set by third parties and change regularly:</p>
        <Points
          items={[
            'University entry requirements and English-language requirements',
            'Tuition fees and income-linked fee calculations',
            'Scholarship criteria, benefits and annual calls',
            'Application, pre-enrolment and scholarship deadlines',
            'Immigration rules, visa requirements and consular procedures',
            'Course availability and language of instruction',
          ]}
        />
        <p>
          Details published here may become out of date between updates. Please verify anything that
          affects your decision directly with the relevant university, authority or official source
          before you rely on it.
        </p>
      </Clause>

      <Clause heading="7. Statistics and Figures">
        <p>
          Any figures shown on this website relating to students assisted, university connections,
          years of experience or reported visa success reflect the business’s own records. They
          describe past activity and are not a prediction or assurance of any individual outcome.
        </p>
      </Clause>

      <Clause heading="8. Student Feedback">
        <p>
          Student comments shown on this website describe individual experiences of working with us.
          Experiences differ from student to student, and they should not be taken as an indication
          of the result you will achieve.
        </p>
      </Clause>

      <Clause heading="9. No Institutional Affiliation">
        <p>
          Photographs of university buildings and Italian cities on this website illustrate the
          setting of higher education in Italy. They do not indicate any partnership, affiliation,
          sponsorship or endorsement by the institutions shown, and none is claimed. University
          names, where mentioned, are used descriptively only.
        </p>
      </Clause>

      <Clause heading="10. External Links">
        <p>
          This website links to third-party websites and resources that are outside our control. We
          are not responsible for their content, accuracy, availability or practices, and a link
          does not amount to an endorsement.
        </p>
      </Clause>

      <Clause heading="11. Your Own Judgement">
        <p>
          Decisions about where and what to study, and about the financial commitment involved, are
          yours. We encourage you to check official sources, consider your circumstances carefully
          and, where a matter is legal or financial in nature, seek qualified independent advice.
        </p>
      </Clause>

      <ContactClause heading="12. Contact Us" />
    </LegalPage>
  );
}
