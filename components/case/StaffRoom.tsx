import {
  Block,
  CaseHeader,
  CaseNav,
  Chips,
  PullQuote,
  RoleCards,
  Shot,
} from "@/components/case/Primitives";
import profiles from "@/public/images/staffroom-profiles.png";
import reader from "@/public/images/staffroom-reader.png";
import ambassador from "@/public/images/staffroom-ambassador.png";

export default function StaffRoom() {
  return (
    <section id="staff-room" className="scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <CaseHeader
          index="01"
          kicker="The Staff Room · Product & Engineering"
          title="Fixing trust first, then redesigning how everyone participates."
          deck="The Staff Room is a Glassdoor-style review platform for teachers in India. I joined as a Product & Engineering intern, found a trust problem hiding inside the access flow, helped ship the fix to production — and now work there as a Founding Member of Product & Engineering."
          tags={[
            "Product & Engineering internship → Founding Member",
            "SQL · PostgreSQL (Neon DB)",
            "Shipped to production",
          ]}
          outcome="Found the fraud pattern through direct outreach with 50+ users. Shipped a view-only browsing experience to production, decoupling access from contribution across the live platform. The fix removed the structural incentive that was driving fake reviews in the first place."
        />

        <Shot
          src={profiles}
          alt="The Staff Room casual browser and teacher profile wireframes"
          caption="Casual browser and teacher profiles after the redesign — two paths through one platform."
        />

        <div className="mt-20 space-y-16 md:space-y-20">
          <Block
            num="01"
            label="The problem"
            title="People were submitting fake reviews just to get in."
          >
            <p className="text-muted">
              During my Product &amp; Engineering internship at The Staff Room
              — a Glassdoor-style review platform for teachers in India — I ran
              outreach with 50+ users. Browsing access was gated behind
              contributing a review, and people without a genuine experience to
              share were submitting fake or low-effort reviews solely to unlock
              access.
            </p>
            <p className="font-display text-xl">
              The mechanism meant to build trust in the platform was quietly
              poisoning it.
            </p>
            <Chips
              items={[
                "Access gated behind contribution",
                "50+ user outreach conversations",
                "Fake / low-effort submissions",
                "Review credibility at risk",
              ]}
            />
          </Block>

          <PullQuote label="The trade-off">
            How do you let people browse freely without undermining review
            credibility?
          </PullQuote>

          <Block
            num="02"
            label="What shipped"
            title="Browse first. Contribute when it’s real."
          >
            <p className="text-muted">
              I helped design and ship a view-only browsing experience to
              production, decoupling browsing from contribution. Casual browsers can now
              explore schools and reviews without submitting anything — so the
              reviews that do arrive come from people with a genuine experience
              to share.
            </p>
          </Block>

          <Block
            num="03"
            label="The broader redesign"
            title="One platform. Three different roles."
          >
            <p className="text-muted">
              With the trust fix in place, the redesign gave each user a clearer
              path. The Casual browser, Teacher/Contributor, and Ambassador experiences
              are downstream of decoupling access from contribution — not the
              headline themselves.
            </p>
          </Block>

          <RoleCards
            items={[
              {
                index: "01",
                title: "Casual browser profile",
                body: "For people who want to explore. Search schools, browse reviews, and learn from existing community knowledge without being forced to contribute.",
              },
              {
                index: "02",
                title: "Teacher profile",
                body: "For people with real experiences to share. A dedicated profile makes school context, contributions, and activity easier to understand.",
              },
              {
                index: "03",
                title: "Ambassador program",
                body: "For engaged members who can help grow the community through referral links, invitations, activity, and participation.",
              },
            ]}
          />

          <Block
            num="04"
            label="Casual browser profile"
            title="Discovery without forced contribution."
          >
            <p className="text-muted">
              The Casual browser profile separates browsing from reviewing so people can
              make more informed decisions using existing community knowledge.
            </p>
          </Block>

          <Shot
            src={reader}
            alt="The Staff Room casual browser, guest hub, and school profile wireframes"
            caption="Casual browser, guest hub, and school profile — designed for discovery without forced contribution."
          />

          <Block
            num="05"
            label="Ambassador program"
            title="Turn engaged users into community growth loops."
          >
            <p className="text-muted">
              Ambassadors receive a unique referral link, track successful
              invitations, and help bring more relevant contributors into the
              platform.
            </p>
          </Block>

          <Shot
            src={ambassador}
            alt="The Staff Room ambassador profile and invite history wireframes"
            caption="Ambassador profile and invite history — a referral loop built around community participation."
          />

          <Block
            num="06"
            label="Technical involvement"
            title="Close enough to engineering to check the data myself."
          >
            <p className="text-muted">
              I worked directly in SQL against our PostgreSQL database (Neon
              DB): auditing review records to size the fake-review problem, and
              writing the geographic filtering logic for Delhi-NCR. Product
              decisions were made with the query results open next to the
              wireframes, not handed over a wall.
            </p>
            <Chips
              items={[
                "SQL",
                "PostgreSQL",
                "Neon DB",
                "Review record audits",
                "Delhi-NCR geo filtering",
              ]}
            />
          </Block>

          <Block
            num="07"
            label="Current work"
            title="Now a Founding Member of Product & Engineering."
          >
            <p className="text-muted">
              I run phase planning, set market saturation goals, and lead the
              campus ambassador program — taking the same trust-first thinking
              from one shipped feature into how the whole product grows.
            </p>
          </Block>

          <PullQuote label="Key takeaway">
            Trust problems are often disguised as access problems. The real fix
            is usually decoupling the two.
          </PullQuote>
        </div>

        <CaseNav next={{ href: "/work/bharatlens", label: "BharatLens" }} />
      </div>
    </section>
  );
}
