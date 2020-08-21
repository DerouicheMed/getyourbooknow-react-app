import React from "react";
import "./policy-page.css";

const PolicyPage = ({ indicator }) => {
  if (indicator === "about")
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>About</h1>
              <p>
                GetYourBookNow is a small project created by a software engineer
                student to get familiarized with web technologies in a
                production envirenment. GetYourBookNow provides you with a list
                a ebooks to download using paypal's secure api for payment.
              </p>
              <p>
                This project is for educational purposes only. We do not, in any
                shape or form, own any of the ebooks listed in this website.
              </p>
              <p>
                You can help the creator by purchasing ebooks or by donating{" "}
                <a href="https://www.paypal.com/paypalme/derouichemed">here</a>.
                If you are interested in work collaboration you can contact the
                creator at this email address derouiche.mo7amed@gmail.com or
                through his website{" "}
                <a href="www.derouichemohamed.tk">www.derouichemohamed.tk</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  else if (indicator === "privacy")
    return (
      <section id="policy">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-5">PRIVACY STATEMENT</h1>
              <h4> WHAT DO WE DO WITH YOUR INFORMATION?</h4>
              <p>
                When you purchase something from our store, as part of the
                buying and selling process, we <b>do not</b> collect your
                personal information such as your name, address and email
                address. When you browse our store, we <b>do not</b> receive
                your computer’s internet protocol (IP) address.
              </p>
              <h4>DISCLOSURE</h4>
              <p>
                We <b>will not</b> disclose your personal information even if we
                are required by law because we <b>do not</b> collect your
                information.
              </p>
              <h4>THIRD-PARTY SERVICES</h4>
              <p>
                In general, the third-party providers used by us will only
                collect, use and disclose your information to the extent
                necessary to allow them to perform the services they provide to
                us. However, certain third-party service providers, such as
                payment gateways and other payment transaction processors, have
                their own privacy policies in respect to the information we are
                required to provide to them for your purchase-related
                transactions. For these providers, we recommend that you read
                their privacy policies so you can understand the manner in which
                your personal information will be handled by these providers. In
                particular, remember that certain providers may be located in or
                have facilities that are located a different jurisdiction than
                either you or us. So if you elect to proceed with a transaction
                that involves the services of a third-party service provider,
                then your information may become subject to the laws of the
                jurisdiction(s) in which that service provider or its facilities
                are located. As an example, if you are located in Canada and
                your transaction is processed by a payment gateway located in
                the United States, then your personal information used in
                completing that transaction may be subject to disclosure under
                United States legislation, including the Patriot Act. Once you
                leave our store’s website or are redirected to a third-party
                website or application, you are no longer governed by this
                Privacy Policy or our website’s Terms of Service. Links When you
                click on links on our store, they may direct you away from our
                site. We are not responsible for the privacy practices of other
                sites and encourage you to read their privacy statements.
              </p>
              <h4>SECURITY</h4>
              <p>
                You will be using paypal's secure system to pay for your
                transactions. We do not receive any information from paypal
                about you.
              </p>
              <h4>AGE OF CONSENT</h4>
              <p>
                By using this site, you represent that you are at least the age
                of majority in your state or province of residence, or that you
                are the age of majority in your state or province of residence
                and you have given us your consent to allow any of your minor
                dependents to use this site.
              </p>
              <h4>CHANGES TO THIS PRIVACY POLICY</h4>
              <p>
                We reserve the right to modify this privacy policy at any time,
                so please review it frequently. Changes and clarifications will
                take effect immediately upon their posting on the website. If we
                make material changes to this policy, we will notify you here
                that it has been updated, so that you are aware of what
                information we collect, how we use it, and under what
                circumstances, if any, we use and/or disclose it. If our store
                is acquired or merged with another company, your information may
                be transferred to the new owners so that we may continue to sell
                products to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  else if (indicator === "terms")
    return (
      <section id="terms">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-5">TERMS OF USE</h1>
              <p>
                Please read the following terms and conditions (“Terms and
                Conditions”) carefully before using any GetYourBookNow web site
                (“Sites”). By accessing or using Sites, you agree to the
                following Terms and Conditions which shall constitute a legally
                binding agreement between you and GetYourBookNow. You should
                review these terms and conditions regularly as they may change
                at any time at our sole discretion. If you do not agree to any
                term or condition, you should not access or otherwise use the
                Sites.
              </p>
              <h4>We Provide Our Sites For Your Convenience Only</h4>
              <p>
                By merely providing access to our Sites, we do not warrant or
                represent that :
              </p>
              <ul>
                <li>The content is accurate or complete</li>
                <li>The content is up-to-date or current</li>
                <li>We have a duty to update any content</li>
                <li>
                  The content is free from technical inaccuracies or
                  typographical errors
                </li>
                <li>The content is free from changes caused by third party</li>
                <li>
                  Your access to our Sites will be free from interruptions,
                  errors, computer viruses or other harmful components
                </li>
              </ul>
              <p>
                We do not assume any liability for these matters. In other
                words, you use our Sites at your own risk.
              </p>
              <h4>
                We Do Not Have Responsibility for Links to Third Party Content
              </h4>
              <p>
                We may provide hyperlinks or pointers to other web sites
                maintained by third parties or may provide third party content
                on our sites by framing or other methods. The links to third
                party web sites are provided for your convenience and
                information only. The content in any linked web site is not
                under our control so we are not responsible for the content,
                including any further links in a third party site. If you decide
                to access any of the third party site linked to from our web
                Sites, you do this entirely at your own risk. It is up to you to
                take precautions to ensure that the third party you link to for
                your use is free of computer viruses, worms, trojan horses and
                other items of a destructive nature.
              </p>
              <h4>
                If We Provide a Link, We Do Not Necessarily Endorse a Third
                Party
              </h4>
              <p>
                We reserve the right to terminate a link to a third party web
                site at any time. The fact that we provide a link to a third
                party web site does not mean that we endorse, adopt, authorize
                or sponsor that web site. It also does not mean that we are
                affiliated with the third party web site’s owners or sponsors.
              </p>
              <h4>
                If a Third Party Links to Our Sites, It is Not an Endorsement
              </h4>
              <p>
                If a third party links to our Sites, it is not necessarily an
                indication of an endorsement, adoption, authorization,
                sponsorship, affiliation, joint venture or partnership by or
                with us. In most cases, we are not aware that a third party has
                linked to our Sites.
              </p>
              <h4>
                By Providing Content, We Do Not Allow You to Use Our Trademarks
              </h4>
              <p>
                he trademarks, service marks and logos used and displayed on our
                Sites are our registered and unregistered trademarks. Nothing on
                our Sites should be construed as granting, by implication,
                estoppel, or otherwise, any license or right to use any
                trademark, without our written permission. We aggressively
                enforce our intellectual property rights. Our names or our logos
                may not be used in any way, including in advertising or
                publicity pertaining to distribution of materials on our Sites,
                without prior written permission. You may not use any metatags
                or any other “hidden text” utilizing our names or trademarks
                without the prior express written consent of HCCP. You are not
                authorized to use our logo as a hyperlink to our Sites unless
                you obtain our written permission in advance.
              </p>
              <h4>You Must Obey Local Laws in Accessing Our Sites</h4>
              <p>
                This Site is controlled by us from our offices within the United
                States of America. We make no representation that content or
                materials on the Site are appropriate or available for use in
                other jurisdictions. Access to our Site content or materials
                from jurisdictions where such access is illegal is prohibited.
                If you choose to access this Site from other jurisdictions, you
                do so on your own initiative and are responsible for compliance
                with applicable local laws. We are not responsible for any
                violations of law. You may not use or export the materials on
                this Site in violation of U.S. export laws and regulations.
              </p>
              <h4>You are Bound by Changes in these Terms and Conditions</h4>
              <p>
                We may at any time revise these Terms and Conditions by updating
                this page. By using our Sites, you agree to be bound by any such
                revisions and should therefore periodically visit this page to
                determine the then current terms and conditions to which you are
                bound. Certain provisions of these Terms and Conditions may be
                superseded by other legal notices or terms located on parts of
                our Sites.
              </p>
              <h4>You Agree to Indemnify Us for Using Our Sites</h4>
              <p>
                You hereby jointly and severally agree to indemnify, defend and
                hold us and our subsidiaries and affiliates, and any of our or
                their respective officers, directors, owners, agents, employees,
                information providers, licensors and licensees (collectively,
                the “Indemnified Parties”) harmless from and against any and all
                liability and costs, including, without limitation, attorneys’
                fees and costs incurred by the Indemnified Parties in connection
                with any claim arising out of your use of our Sites or any
                breach by you of these Terms and Conditions, or the purchase by
                you of securities, including any liabilities associated with a
                violation of federal or state securities laws. If the indemnity
                provided in this paragraph is not available or is insufficient
                to hold harmless the Indemnified Parties for any reason, you
                agree to contribute to the aggregate losses, claims and
                liabilities to which the Indemnified Parties may be subject in
                such proportion as appropriate to reflect the relative fault by
                you and the Indemnified Parties with respect to the activity
                giving rise to the indemnity claim. You will cooperate as fully
                as reasonably required in the defense of any claim. We reserve
                the right, at our own expense, to assume the exclusive defense
                and control of any matter otherwise subject to indemnification
                by you and you will not in any event settle any such matter
                without our written consent.
              </p>
              <h4>How This Agreement May Be Terminated</h4>
              <p>
                These Terms and Conditions may be terminated by either party
                without notice at any time for any reason; provided that you may
                no longer use our Sites after you have terminated this
                agreement.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  else return <></>;
};

export default PolicyPage;
