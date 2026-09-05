import Reveal from "@/components/Reveal";
import {
  Block,
  CaseHeader,
  CaseNav,
  Chips,
  DecisionList,
  MeasureList,
  PullQuote,
  Shot,
  StatRow,
} from "@/components/case/Primitives";
import overview from "@/public/images/bharatlens-overview.png";
import comparison from "@/public/images/bharatlens-comparison.png";
import trust from "@/public/images/bharatlens-trust.png";
import insights from "@/public/images/bharatlens-insights.png";

const VIEWS = [
  "01 Overview",
  "02 Model comparison",
  "03 Trust analysis",
  "04 Insights",
  "05 Prompt-level analysis",
];

export default function BharatLens() {
  return (
    <section id="bharatlens" className="scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <CaseHeader
          index="02"
          kicker="BharatLens · Product design & build"
          title="An AI evaluation dashboard for finding patterns in model behaviour."
          deck="BharatLens turns complex AI image-model evaluation data into clear, explorable insights — comparisons across models, prompts, participants, and metrics, so people can move from raw results to meaningful patterns."
          tags={[
            "Product thinking · Dashboard UX",
            "Information architecture · Data visualization",
            "Interface design · Frontend implementation",
          ]}
          outcome="72 evaluations across 3 AI models and 8 participants. GPT Image 1 emerged as the clear leader, capturing 87.5% of all trust selections across every state-specific prompt tested."
        />

        <Shot
          src={overview}
          alt="BharatLens evaluation dashboard preview"
          caption="A readable overview of the evidence behind the evaluation."
        />

        <div className="mt-20 space-y-16 md:space-y-20">
          <Block
            num="01"
            label="The context"
            title="Evaluation data is only useful when people can find the pattern inside it."
          >
            <p className="text-muted">
              Different models perform differently depending on the prompt,
              cultural context, evaluation metric, and participant perception.
              Raw results make it difficult to understand which model performed
              best, where performance differed, what patterns emerged, and what
              influenced trust.
            </p>
          </Block>

          <PullQuote label="The product question">
            How might we turn a complex AI evaluation dataset into an interface
            where meaningful patterns become easy to find?
          </PullQuote>

          <Block num="02" label="The data" title="A compact evaluation, made legible." />

          <StatRow
            items={[
              { value: "03", label: "AI image models" },
              { value: "72", label: "Image evaluations" },
              { value: "08", label: "Participants" },
              { value: "05", label: "Evaluation metrics" },
            ]}
          />

          <Reveal>
            <Chips
              items={[
                "Trust",
                "Prompt adherence",
                "Educational clarity",
                "Cultural accuracy",
                "Classroom suitability",
              ]}
            />
          </Reveal>

          <Block
            num="03"
            label="The models"
            title="The challenge was not simply finding one overall winner."
          >
            <p className="text-muted">
              The evaluation compared GPT Image 1, Gemini 2.5 Flash Image, and
              Gemini 3.1 Flash Image Preview. The interface also needed to
              reveal how performance changed across prompts and evaluation
              dimensions.
            </p>
            <Chips
              items={[
                "GPT Image 1",
                "Gemini 2.5 Flash Image",
                "Gemini 3.1 Flash Image Preview",
              ]}
            />
          </Block>

          <Block
            num="04"
            label="Designing the system"
            title="Focused views for focused questions."
          >
            <p className="text-muted">
              Instead of putting every metric and chart into one overwhelming
              dashboard, BharatLens separates analytical questions into a
              sequence of views.
            </p>
            <Chips items={VIEWS} />
          </Block>

          <Block
            num="05"
            label="Model comparison"
            title="Move from raw data to relative performance."
          >
            <p className="text-muted">
              This view helps users compare models across evaluation metrics.
              The design favors clarity and comparison over displaying more
              charts.
            </p>
          </Block>

          <Shot
            src={comparison}
            alt="BharatLens model comparison dashboard with bar chart and trust distribution"
            caption="Model comparison — relative performance across every evaluation metric."
          />

          <Block
            num="06"
            label="Trust analysis"
            title="Trust deserved a dedicated analytical view."
          >
            <p className="text-muted">
              Average scores and participant trust can reveal different things.
              GPT Image 1 received 21 out of 24 trust selections — 87.5% of all
              trust selections.
            </p>
          </Block>

          <Shot
            src={trust}
            alt="BharatLens trust analysis showing prompt-level evaluation cards"
            caption="Trust analysis — prompt-level evaluation cards separating scores from trust."
          />

          <Block
            num="07"
            label="Insights"
            title="Translate evaluation into readable observations."
          >
            <ul className="space-y-3 text-muted">
              <li>GPT Image 1 ranked first across all three state-specific prompts.</li>
              <li>GPT Image 1 received 87.5% of all per-state trust selections.</li>
              <li>Rajasthan showed the largest performance gap between models.</li>
              <li>
                Gemini 2.5 Flash Image performed comparatively better on the
                Nagaland prompt.
              </li>
              <li>
                Gemini 3.1 Flash Image Preview was repeatedly described as
                generic and lacking cultural specificity.
              </li>
            </ul>
          </Block>

          <Shot
            src={insights}
            alt="BharatLens insights dashboard showing key findings and aggregate experiment context"
            caption="Insights — findings written out, so users are not left to interpret every chart alone."
          />

          <Block
            num="08"
            label="Prompt-level analysis"
            title="Move from “which model?” to “where did performance differ?”"
          >
            <p className="text-muted">
              Aggregate results can hide important differences. Prompt-level
              analysis makes Assam, Rajasthan, and Nagaland explorable as
              distinct cultural contexts.
            </p>
          </Block>

          <Block
            num="09"
            label="Design principles"
            title="Designing for questions, not just data."
          />

          <DecisionList
            items={[
              {
                title: "Start with the answer",
                body: "Surface high-level findings first.",
              },
              {
                title: "Separate analytical questions",
                body: "Give comparison, trust, insights, and prompts focused spaces.",
              },
              {
                title: "Make insights scannable",
                body: "Do not make users manually interpret every chart.",
              },
              {
                title: "Move from aggregate to specific",
                body: "Let users progressively explore individual contexts.",
              },
            ]}
          />

          <Block
            num="10"
            label="My role"
            title="From product framing to implementation."
          >
            <Chips
              items={[
                "Product thinking",
                "Information architecture",
                "Dashboard UX",
                "Data visualization",
                "Interface design",
                "Frontend implementation",
              ]}
            />
          </Block>

          <Block
            num="11"
            label="If the product evolved further"
            title="Measure the distance between evidence and understanding."
          >
            <MeasureList
              items={[
                {
                  name: "Time to insight",
                  body: "How long it takes someone opening the dashboard cold to name the top model and one caveat.",
                },
                {
                  name: "Analysis depth",
                  body: "Whether people move past the overview into comparison, trust, and prompt-level views.",
                },
                {
                  name: "Feature discovery",
                  body: "Whether prompt-level analysis gets found without anyone pointing to it.",
                },
                {
                  name: "Decision confidence",
                  body: "Whether a team can say which model to ship and defend why, using the dashboard alone.",
                },
                {
                  name: "Return usage",
                  body: "Whether the dashboard gets reopened when the next round of evaluations lands.",
                },
              ]}
            />
          </Block>

          <Block
            num="12"
            label="What I learned"
            title="Data visualization isn’t just about making charts easier to look at."
          >
            <p className="text-muted">
              The harder problem is deciding what question each visualization
              should help answer. Aggregate metrics can hide meaningful
              differences. A useful dashboard reduces the distance between data,
              pattern, and insight.
            </p>
          </Block>

          <PullQuote label="In one line">
            Good AI evaluation isn’t just about collecting scores. It’s about
            making the patterns behind those scores understandable.
          </PullQuote>
        </div>

        <CaseNav
          prev={{ href: "/work/the-staff-room", label: "The Staff Room" }}
          next={{ href: "/work/worknest", label: "WorkNest" }}
        />
      </div>
    </section>
  );
}
