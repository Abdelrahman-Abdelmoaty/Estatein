import { Star } from "@/components/SVGs";
import SectionLayout from "@/components/SectionLayout";
import Image from "next/image";
import profile1 from "@images/profiles/profile1.png";
import profile2 from "@images/profiles/profile2.png";
import Paragraph from "@/components/ui/Paragraph";

const Testimonials = () => {
  return (
    <SectionLayout
      key={3}
      heading="What Our Clients Say"
      paragraph="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
      linkLabel="View All Testimonials"
      href="#"
    >
      <div className="dt:gap[30px] grid gap-[20px] sm:grid-cols-2 lg:grid-cols-3 ">
        {TESTIMONIALS.slice(0, 3).map((t, idx) => (
          <Card key={idx} testimonial={t} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Testimonials;

type Testimonial = {
  title: string;
  desc: string;
  authorImg: string;
  authorName: string;
  authorAddress: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    title: "Exceptional Service!",
    desc: "Our experience with Estatein was outstanding. Their team&apos;s dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    authorImg: profile1.src,
    authorName: "Wade Warren",
    authorAddress: "USA, California",
  },
  {
    title: "Efficient and Reliable",
    desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn&apos;t be happier with the results.",
    authorImg: profile2.src,
    authorName: "Emelie Thomson",
    authorAddress: "USA, Florida",
  },
  {
    title: "Trusted Advisors",
    desc: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    authorImg: profile1.src,
    authorName: "John Mans",
    authorAddress: "USA, Nevada",
  },
];

const Card = ({
  testimonial: { title, desc, authorName, authorImg, authorAddress },
}: {
  testimonial: Testimonial;
}) => {
  return (
    <div className="flex flex-col justify-between gap-[30px] rounded-base border border-grey-15 p-[40px] odd:hidden sm:odd:flex dt:gap-[40px] dt:p-[50px]">
      <div className="flex items-center gap-2 dt:gap-2.5">
        <div className="rounded-full border border-grey-15 p-[9px] text-[#FFE500] dt:p-2.5">
          <Star className="h-4 w-4 dt:h-5 dt:w-5 " />
        </div>
        <div className="rounded-full border border-grey-15 p-[9px] text-[#FFE500] dt:p-2.5">
          <Star className="h-4 w-4 dt:h-5 dt:w-5 " />
        </div>
        <div className="rounded-full border border-grey-15 p-[9px] text-[#FFE500] dt:p-2.5">
          <Star className="h-4 w-4 dt:h-5 dt:w-5 " />
        </div>
        <div className="rounded-full border border-grey-15 p-[9px] text-[#FFE500] dt:p-2.5">
          <Star className="h-4 w-4 dt:h-5 dt:w-5 " />
        </div>
        <div className="rounded-full border border-grey-15 p-[9px] text-[#FFE500] dt:p-2.5">
          <Star className="h-4 w-4 dt:h-5 dt:w-5 " />
        </div>
      </div>
      <div>
        <p className="mb-[10px] text-[20px] font-semibold dt:mb-[14px] dt:text-[24px]">
          {title}
        </p>
        <p className="text-[16px] font-medium dt:text-[18px] ">{desc}</p>
      </div>
      <div className="flex gap-[10px] dt:gap-[12px]">
        <div className="relative h-[50px] w-[50px] rounded-full dt:h-[60px] dt:w-[60px]">
          <Image src={authorImg} alt={authorName} fill />
        </div>
        <div className="flex flex-col">
          <p className="text-[18px] font-medium dt:text-[20px]">{authorName}</p>
          <Paragraph>{authorAddress}</Paragraph>
        </div>
      </div>
    </div>
  );
};
