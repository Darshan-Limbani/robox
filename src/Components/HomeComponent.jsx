import React from 'react';
import { DefineAdSlot, DefineOutOfPageAdSlot } from "../utils/google-publisher-tag.jsx";
import new_btn from "../assets/btn_quiz.svg";
import { ROUTES } from "../utils/constants.js";
import spin_wheel from "../assets/spin_wheel.svg";
import win_Scratch from "../assets/win_Scratch.svg";
import lucky_scratch from "../assets/lucky_scratch.svg";
import how_to_win from "../assets/how_to_win.svg";
import reedem_btn from "../assets/reedem_btn.svg";
import daily_free_btn from "../assets/daily_free_btn.svg";
import { HOME_AD } from "../utils/AdConfig.json"
import { IconGridItem } from "./IconGridItem.jsx";

const HomeComponent = () => {
  
  const firstRow = [
    {
      imageSrc: new_btn,
      label: "Quiz Game",
      width: "90px",
      // href: ROUTES.DAILY_RBX_COUNTER,
      href: ROUTES.QUIZ,
    },
    {
      imageSrc: spin_wheel,
      label: "Spin Wheel",
      width: "90px",
      href: ROUTES.SPIN_WHEEL,
    },
    {
      imageSrc: win_Scratch,
      label: "Win Scratch",
      width: "90px",
      href: ROUTES.SCRATCH_CARD,
    }
  ];
  
  const secondRow = [
    {
      imageSrc: lucky_scratch,
      label: "Lucky Scratch",
      width: "90px",
      href: ROUTES.LUCKY_SCRATCH,
      // onClick: () => {
      //   navigate(ROUTES.LUCKY_SCRATCH);
      // }
    },
    {
      imageSrc: how_to_win,
      label: "How to Win",
      width: "90px",
      href: ROUTES.HOW_TO_WIN,
      // onClick: () => {
      //   navigate(ROUTES.HOW_TO_WIN);
      // }
    },
    {
      imageSrc: reedem_btn,
      label: "Redeem",
      width: "90px",
      href: ROUTES.REDEEM,
      // onClick: () => {
      //   navigate(ROUTES.REDEEM);
      // }
    }
  ];
  
  const thirdRow = [
    {
      imageSrc: daily_free_btn,
      label: "BC Robox Counter",
      width: "90px",
      href: `${ROUTES.COUNT}?title=BC%20Daily%20Rbx%20Counter`,
      // onClick: () => {
      //   navigate(ROUTES.LUCKY_SCRATCH);
      // }
    },
    {
      imageSrc: daily_free_btn,
      label: "TBC Robox Counter",
      width: "90px",
      href: `${ROUTES.COUNT}?title=TBC%20Daily%20Rbx%20Counter`,
      // onClick: () => {
      //   navigate(ROUTES.HOW_TO_WIN);
      // }
    },
    {
      imageSrc: daily_free_btn,
      label: "OBC Robox Counter",
      width: "90px",
      href: `${ROUTES.COUNT}?title=OBC%20Daily%20Rbx%20Counter`,
      // onClick: () => {
      //   navigate(ROUTES.REDEEM);
      // }
    }
  ];
  return (
    <>
      <DefineAdSlot size={HOME_AD.BANNER_SLOT_1.size} adUnit={HOME_AD.BANNER_SLOT_1.adUnit}/>
      <DefineOutOfPageAdSlot
        adUnit={HOME_AD.ANCHOR_SLOT_1.adUnit}
        format={HOME_AD.ANCHOR_SLOT_1.format}
        targeting={HOME_AD.ANCHOR_SLOT_1.targeting}
        key={HOME_AD.ANCHOR_SLOT_1.key}
      />
      <article className="px-px h-full text-sm text-center text-black max-w-[360px] self-center mt-5">
        <div className="w-full py-7 text-sm">
          <section className="flex gap-5 justify-center items-start w-full">
            {firstRow.map((item, index) => (
              <IconGridItem
                key={index}
                imageSrc={item.imageSrc}
                label={item.label}
                width={item.width}
                onClick={item.onClick}
                href={item.href}
              />
            ))}
          </section>
          <div className="mt-5">
            <section className="flex gap-5 justify-center items-start w-full">
              {secondRow.map((item, index) => (
                <IconGridItem
                  key={index}
                  imageSrc={item.imageSrc}
                  label={item.label}
                  width={item.width}
                  onClick={item.onClick}
                  href={item.href}
                />
              ))}
            </section>
          </div>
          <div className="mt-5">
            <section className="flex gap-5 justify-center items-start w-full">
              {thirdRow.map((item, index) => (
                <IconGridItem
                  key={index}
                  imageSrc={item.imageSrc}
                  label={item.label}
                  width={item.width}
                  onClick={item.onClick}
                  href={item.href}
                />
              ))}
            </section>
          </div>
        </div>
        <div className="intro-box">
          <section className="article-section">
            <article className={"gap-5"}>
              <h1 className={"text-2xl mb-5 font-bold"}>Navigating Loans and Insurance: Top Free Resources in the USA,
                Canada, and Australia</h1>
              <p className={"mb-2"}>Managing your finances can be overwhelming—especially when it comes to securing
                the
                right <strong>loan</strong> or choosing the perfect <strong>insurance plan</strong>. From
                understanding interest rates to evaluating policy coverage, the decisions you make today can shape
                your financial future.</p>
              
              <p className={"mb-2"}>Thankfully, in countries like the <strong>United
                States</strong>, <strong>Canada</strong>,
                and <strong>Australia</strong>, a wide range of <strong>free financial advisory services</strong> are
                helping individuals make smarter choices when it comes to <strong>borrowing money or protecting their
                  assets</strong>.</p>
              
              <p className={"mb-2"}>In this guide, we’ll explore the best ways to access these free services, and how
                they can benefit
                you—whether you're planning to buy a home, start a business, or insure your life, health, or
                property.</p>
              
              <h2 className={"text-xl font-bold "}>🏦 Understanding Loans: Smarter Borrowing Starts with Better
                Guidance</h2>
              
              <p className={"mb-2"}>Loans can be helpful, but without proper advice, they can lead to long-term debt
                traps. Free loan
                advisory services provide:</p>
              <ul className={"list-disc"}>
                <li>Personalized loan comparisons</li>
                <li>Help with application processes</li>
                <li>Guidance on improving credit score</li>
                <li>Interest rate and repayment planning</li>
              </ul>
              <DefineAdSlot size={HOME_AD.BANNER_SLOT_2.size} adUnit={HOME_AD.BANNER_SLOT_2.adUnit}/>
              <h3 className={"text-xl font-bold mt-5"}>🇺🇸 USA – Popular Loan Advisory Resources</h3>
              <ul className={"list-disc"}>
                <li>Bank of America: Offers personalized loan calculators and financial advisors.</li>
                <li>SoFi: Provides online loan consultations for personal, student, and home loans.</li>
                <li>NFCC (National Foundation for Credit Counseling): Non-profit help for debt management and loan
                  advice.
                </li>
              </ul>
              
              <h3 className={"text-xl font-bold mt-5"}>🇨🇦 Canada – Loan Guidance at No Cost</h3>
              <ul className={"list-disc"}>
                <li>RBC &amp; TD Bank: Offer personal loan and mortgage consultation.</li>
                <li>Credit Canada: Non-profit support to understand loan obligations and budgeting.</li>
                <li>BMO: Free financial advice for newcomers and first-time loan applicants.</li>
              </ul>
              <h3 className={"text-xl font-bold mt-5"}>🇦🇺 Australia – Helping Aussies Borrow Smarter</h3>
              <ul className={"list-disc"}>
                <li>NAB (National Australia Bank): Offers free loan reviews and borrowing calculators.</li>
                <li>Aussie Home Loans: Free home loan comparisons with expert advisors.</li>
                <li>MoneySmart by ASIC: Government-backed tools and tips to choose the right loan.</li>
              </ul>
              
              <h2 className={"text-xl font-bold mt-5"}>🛡️ Insurance Made Simple: Protecting What Matters Without the
                Guesswork</h2>
              
              <p>Choosing the right insurance policy—whether it’s for health, life, home, or travel—can be confusing.
                Free insurance advisory services make the process easier by offering:</p>
              <ul className={"list-disc"}>
                <li>Policy comparisons based on need</li>
                <li>Claims guidance and support</li>
                <li>Budget-friendly coverage suggestions</li>
                <li>Help with reading policy terms and conditions</li>
              </ul>
              
              <h3 className={"text-xl font-bold mt-5"}>🇺🇸 USA – Trusted Insurance Advisors</h3>
              <ul className={"list-disc"}>
                <li>Policygenius: Compares life, auto, and renters insurance with expert help.</li>
                <li>GEICO: Offers policy estimations and virtual insurance advisors.</li>
                <li>State Farm: In-person or online advice for auto, home, and life insurance.</li>
              </ul>
              
              <h3 className={"text-xl font-bold mt-5"}>🇨🇦 Canada – Insurance Support Services</h3>
              <ul className={"list-disc"}>
                <li>Manulife &amp; Sun Life: Provide free consultations with licensed agents.</li>
                <li>Canada Life: Offers digital advice for life and health insurance.</li>
                <li>Kanetix: Insurance comparison platform with advisory support.</li>
              </ul>
              <DefineAdSlot size={HOME_AD.BANNER_SLOT_3.size} adUnit={HOME_AD.BANNER_SLOT_3.adUnit}/>
              <h3 className={"text-xl font-bold mt-5"}>🇦🇺 Australia – Reliable and Free Insurance Advice</h3>
              <ul className={"list-disc"}>
                <li>iSelect: Free consultations on health, travel, car, and home insurance.</li>
                <li>Allianz Australia: Dedicated advisors available through online chat.</li>
                <li>CHOICE Australia: Independent consumer reviews and comparisons on insurance products.</li>
              </ul>
              
              <h2 className={"text-xl font-bold mt-5"}>🧠 Benefits of Using Free Advisory Services</h2>
              
              <p>Whether you’re looking to borrow money or get insured, using free guidance services can help you:</p>
              <ul className={"list-disc"}>
                <li>Avoid hidden fees or bad deals</li>
                <li>Understand your rights and responsibilities</li>
                <li>Choose a plan that matches your income and lifestyle</li>
                <li>Save time and avoid scams</li>
              </ul>
              
              <p>These services are offered by both <strong>private companies</strong> and <strong>non-profit
                organizations</strong>, and many are available <strong>online or over the phone</strong>—no need to
                visit a branch unless you prefer face-to-face advice.</p>
              
              <h2 className={"text-xl font-bold mt-5"}>✅ Quick Tips Before You Start</h2>
              <ul className={"list-disc"}>
                <li><strong>Know Your Needs</strong>: List what you want from a loan or insurance policy.</li>
                <li><strong>Compare Before You Commit</strong>: Use free comparison tools and expert opinions.</li>
                <li><strong>Check Advisor Credentials</strong>: Make sure you're getting help from licensed
                  professionals.
                </li>
                <li><strong>Ask Questions</strong>: Don’t hesitate to ask about fees, terms, or benefits.</li>
              </ul>
              
              <h2 className={"text-xl font-bold mt-5"}>📌 Final Thoughts</h2>
              <p>When it comes to <strong>loans and insurance</strong>, knowledge is your greatest asset. And the good
                news? You don’t have to pay for it. From Toronto to Sydney to New York, free advisory services are
                empowering everyday people to make smart, confident decisions about borrowing and coverage.</p>
              
              <p>So, before you sign a loan agreement or pay your next premium, take advantage of the <strong>free
                financial guidance</strong> available in your country. It could save you thousands—and give you peace
                of mind for years to come.</p>
            </article>
          </section>
        </div>
      </article>
    
    </>
  );
};

export default HomeComponent;