import React from "react";

const FAQ = () => {
  return (
    <section className="max-w-6xl mx-auto my-10 lg:my-20 px-4 lg:px-0">
      {/* SectionHeader */}
      <div className="text-center">
        {/* Title */}
        <h2 className="text-[#03373D] text-2xl lg:text-[40px] font-extrabold mt-10 mb-6">
          Frequently Asked Question (FAQ)
        </h2>
        {/* Description */}
        <p className="text-[#606060] w-[90%] lg:w-[65%] mx-auto mb-10">
          Enhance posture, mobility and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain and strengthen your body
          with ease!
        </p>
      </div>

      {/* FAQContainer */}
      <div className="max-w-5xl mx-auto my-10 space-y-4">
        {/* FAQ - 1 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            How does this posture corrector work?
          </div>
          <div className="collapse-content text-sm">
            A posture corrector works by providing support and gentle alignment
            to your shoulders, back and spine, encouraging you to maintain
            proper posture throughout the day. Here's how it typically
            functions: A posture corrector works by providing support and gentle
            alignment to your shoulders.
          </div>
        </div>

        {/* FAQ - 2 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Is it suitable for all ages and body types?
          </div>
          <div className="collapse-content text-sm">
            Yes, the posture corrector is designed to be adjustable and suitable
            for most body types and age groups. It comes with flexible straps
            that can be easily customized for a comfortable and secure fit.
            However, it's always recommended to consult a healthcare
            professional for specific medical conditions.
          </div>
        </div>

        {/* FAQ - 3 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it really help with back pain and posture improvement?
          </div>
          <div className="collapse-content text-sm">
            {" "}
            Yes, consistent use of a posture corrector can help reduce back pain
            caused by poor posture. By supporting proper spinal alignment, it
            reduces pressure on muscles and joints, leading to improved posture
            and long-term comfort.
          </div>
        </div>

        {/* FAQ - 4 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Does it have smart features like vibration alerts?
          </div>
          <div className="collapse-content text-sm">
            {" "}
            Some advanced posture correctors include smart features like
            vibration alerts that notify you when you start slouching. However,
            basic models focus on physical support and alignment without
            electronic features.
          </div>
        </div>

        {/* FAQ - 5 */}
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            How will I be notified when the product is back in stock?
          </div>
          <div className="collapse-content text-sm">
            You can subscribe to our notification system by entering your email
            on the product page. Once the item is back in stock, you'll receive
            an instant update so you don't miss out.
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="text-center">
        <button className="btn px-8 py-4 rounded-xl bg-[#CAEB66] hover:bg-transparent font-semibold border-2 border-[#CAEB66] hover:border-[#DADADA] hover:outline-none transition-all duration-300">
          See More FAQ's
        </button>
      </div>
    </section>
  );
};

export default FAQ;
