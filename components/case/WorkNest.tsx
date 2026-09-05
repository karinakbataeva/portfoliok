import {
  Block,
  CaseHeader,
  CaseNav,
  Chips,
  DecisionList,
  MeasureList,
  PullQuote,
  RoleCards,
  Shot,
} from "@/components/case/Primitives";
import home from "@/public/images/worknest-home.png";
import focus from "@/public/images/worknest-focus.png";
import brk from "@/public/images/worknest-break.png";
import history from "@/public/images/worknest-history.png";

export default function WorkNest() {
  return (
    <section id="worknest" className="scroll-mt-24 py-24 md:py-32">
      <div className="shell">
        <CaseHeader
          index="03"
          kicker="WorkNest · Product design & build"
          title="A productivity system for scattered browser-based work."
          deck="A browser extension that gives browser-based work a home — workspaces, tabs, notes, and focus sessions in one place — designed and built end to end."
          tags={[
            "React · TypeScript · Vite",
            "Tailwind CSS · Manifest V3",
            "Independent product exploration",
          ]}
          outcome="An independent build, from product framing through implementation, not yet tested with real users."
        />

        <Shot
          src={home}
          alt="WorkNest dashboard preview"
          caption="The WorkNest home brings focus, workspaces, notes, and open tabs into one place."
        />

        <div className="mt-20 space-y-16 md:space-y-20">
          <Block
            num="01"
            label="The problem"
            title="The browser is where work happens. It just isn’t designed to organize the work."
          >
            <p className="text-muted">
              Digital work becomes fragmented when tabs, tasks, notes, and focus
              exist across disconnected tools and spaces. People move between
              projects, lose important pages, and struggle to return to the
              context they had before.
            </p>
            <Chips
              items={[
                "Too many tabs",
                "Simultaneous projects",
                "Notes disconnected from the work",
                "Difficulty returning to context",
                "Trouble staying focused",
              ]}
            />
          </Block>

          <PullQuote label="The product question">
            How might we make it easier to organize, return to, and focus on the
            work happening inside the browser?
          </PullQuote>

          <Block
            num="02"
            label="Designing the system"
            title="Context over collection."
          >
            <p className="text-muted">
              WorkNest is not simply a place to save more tabs. It is a
              structure for giving browser-based work a home, then making that
              home easy to revisit.
            </p>
          </Block>

          <RoleCards
            items={[
              {
                index: "01",
                title: "Workspaces",
                body: "Group related work, so a project has a single place to live rather than being spread across windows.",
              },
              {
                index: "02",
                title: "Tabs & notes",
                body: "Keep pages in context and capture thinking next to the work it belongs to, not in a separate app.",
              },
              {
                index: "03",
                title: "Focus & history",
                body: "Enter focus intentionally, and keep a lightweight record of activity to return to.",
              },
            ]}
          />

          <Block
            num="03"
            label="Focusing on the work"
            title="A connected flow from setup to break."
          >
            <p className="text-muted">
              Focus sessions live inside the same environment as the work. The
              transition from choosing a duration, to active focus, to a break
              makes the behavior feel intentional without forcing a separate
              tool.
            </p>
            <Chips
              items={[
                "Set up · choose durations",
                "Focus · stay with the work",
                "Break · transition gently",
              ]}
            />
          </Block>

          <Shot
            src={focus}
            alt="WorkNest active focus session with remaining time"
            caption="An active focus session, running in the same place as the work itself."
          />

          <Shot
            src={brk}
            alt="WorkNest break state after a completed focus session"
            caption="The break state closes the loop instead of dropping the user back into noise."
          />

          <Block
            num="04"
            label="Organizing context"
            title="Instead of “Where did I put that tab?” the workspace answers “What was I working on?”"
          >
            <p className="text-muted">
              PM and Design are not just folders. They are mental models for
              grouping tabs and notes around a context people can recognize and
              return to.
            </p>
          </Block>

          <Block
            num="05"
            label="Keeping track of activity"
            title="A small history creates another way back."
          >
            <p className="text-muted">
              The history view records meaningful actions such as saving and
              opening workspaces. It gives the product a lightweight memory
              without asking users to maintain one.
            </p>
          </Block>

          <Shot
            src={history}
            alt="WorkNest history showing saved and opened workspace activity"
            caption="History — saved and opened workspace activity, as a second route back into context."
          />

          <Block num="06" label="Product decisions" title="Four calls that shaped it." />

          <DecisionList
            items={[
              {
                title: "Context over collection",
                body: "Organize tabs around the work they belong to.",
              },
              {
                title: "Focus without leaving the workflow",
                body: "Keep focus sessions in the same environment as browser work.",
              },
              {
                title: "Workspaces as a mental model",
                body: "Use projects and areas of work as a natural structure.",
              },
              {
                title: "Visibility of active work",
                body: "Connect organization with the tabs a person is currently using.",
              },
            ]}
          />

          <Block
            num="07"
            label="Building WorkNest"
            title="From product idea to working extension."
          >
            <p className="text-muted">
              Being involved in implementation meant product decisions were made
              with both user experience and technical feasibility in mind. The
              system was shaped alongside the interface, not after it.
            </p>
            <Chips
              items={[
                "React",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "Chrome Manifest V3",
              ]}
            />
          </Block>

          <Block
            num="08"
            label="How I would measure success"
            title="Future product thinking, not invented metrics."
          >
            <p className="text-muted">
              If WorkNest were being scaled further, I would look at whether the
              system becomes part of a regular workflow.
            </p>
            <MeasureList
              items={[
                {
                  name: "Activation",
                  body: "Whether someone creates a first workspace and actually returns to it, rather than saving one set of tabs and forgetting it.",
                },
                {
                  name: "Workspace adoption",
                  body: "How many workspaces stay active, and whether they map to real projects instead of one catch-all bucket.",
                },
                {
                  name: "Focus engagement",
                  body: "Whether focus sessions get started from inside a workspace, and how often they run to completion.",
                },
                {
                  name: "Return behaviour",
                  body: "How quickly someone resumes a project after time away — reopening context instead of rebuilding it.",
                },
                {
                  name: "Retention",
                  body: "Whether WorkNest is still in use in week four, once the novelty of organizing has worn off.",
                },
              ]}
            />
          </Block>

          <Block
            num="09"
            label="What I learned"
            title="Building from scratch means making decisions before everything is known."
          >
            <p className="text-muted">
              Productivity is not always about adding more features. Sometimes
              it is about reducing the effort required to return to context.
              Designing and building together creates a tighter feedback loop
              between what would be ideal and what can actually be shipped.
            </p>
          </Block>

          <PullQuote label="In one line">
            The tools we use to do our work should make it easier to remember
            what we were doing — not harder.
          </PullQuote>
        </div>

        <CaseNav prev={{ href: "/work/bharatlens", label: "BharatLens" }} />
      </div>
    </section>
  );
}
