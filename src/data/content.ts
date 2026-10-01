export interface Story {
  id: string
  title: string
  excerpt: string
  category: 'politics' | 'community' | 'investigation' | 'maritime'
  date: string
  readTime: string
  featured?: boolean
  /** Open note shown when a card is expanded. */
  body?: string[]
  /** Still being reported, not a finished piece. */
  reporting?: boolean
}

export interface PublicMeeting {
  id: string
  body: string
  schedule: string
  location: string
  nextDate: string
  time: string
  agenda: string[]
  coverage: string
  /** Replaces the default "Next: {date}" line when the meeting isn't upcoming. */
  when?: string
}

export interface InvestigationFile {
  id: string
  title: string
  status: 'active' | 'published' | 'ongoing'
  summary: string
  documents: { name: string; type: string; date: string }[]
  link?: string
}

export const stories: Story[] = [
  {
    id: 'sec-timber',
    title: 'Timber, Back on the Table',
    excerpt:
      'Wednesday’s agenda at Southeast Conference had a session called Timber Opportunities. The conference’s own business survey says timber leaders are among the most likely to call conditions poor. I’m following both.',
    category: 'community',
    date: 'Oct 2026',
    readTime: 'On the beat',
    featured: true,
    reporting: true,
    body: [
      'The 68th Southeast Conference met in Ketchikan, Sept. 29 through Oct. 1, at the Ted Ferry Civic Center. Wednesday morning moved from natural-resource goals into a block titled Timber Opportunities.',
      'I don’t have a finished story out of that room yet. What I do have is the survey Southeast Conference publishes with Rain Coast Data. In 2026, timber businesses were among the sectors most likely to describe the current climate as poor, and among those more likely to expect the next year to get worse. The same survey lists timber among the sectors most likely to plan new jobs. Supply is the complaint that keeps coming up in the written comments: federal timber sales, what’s left of old growth, and whether the mills can plan a year ahead.',
      'That’s the fall and winter assignment. What was actually put on the table Wednesday, which sales are real, and what any of it changes for work around Ketchikan.',
    ],
  },
  {
    id: 'sec-mining',
    title: 'Mining Updates from the Summit',
    excerpt:
      'Mining still has one of the strongest outlooks in the region, and it had its own Wednesday session. I’ll keep this open through winter: what’s operating, what’s proposed, and what the island is being asked to live with.',
    category: 'community',
    date: 'Oct 2026',
    readTime: 'On the beat',
    featured: true,
    reporting: true,
    body: [
      'Mining Updates sat on Wednesday’s agenda, in the same morning as timber. The business-climate survey prepared for this conference still puts mining at the top of the pile.',
      'In 2026, 89 percent of mining leaders reported a positive outlook, including a third who expect the year to be better. That’s down from 2025, when every mining respondent was positive. High metal prices are the reason they give. The complaints are the ones the rest of town already knows: housing, childcare, skilled labor, permitting, and whether communities understand what the mines put into the tax base — and what they take when they close.',
      'No mining business in the survey said it plans to cut jobs. Eleven percent said they plan to add some. I’m going to stay with the gap between that optimism and the projects people in Ketchikan are actually being asked to host.',
    ],
  },
  {
    id: 'sec-investment',
    title: 'New Investment in Alaska',
    excerpt:
      '“Partnering for Private Investments” was on Wednesday’s schedule. This fall I’m sorting which projects are funded, which are still a pitch, and who in Southeast is supposed to see the money.',
    category: 'politics',
    date: 'Oct 2026',
    readTime: 'On the beat',
    featured: true,
    reporting: true,
    body: [
      'Between the congressional visits and the mariculture cluster, Wednesday’s agenda had a session called Partnering for Private Investments. Sen. Lisa Murkowski and Sen. Dan Sullivan were both on Tuesday’s program. Rep. Nick Begich was on Wednesday’s.',
      'A session title is not a deal. I’m not going to list projects I didn’t hear committed in the room. Through the fall I’ll be matching what was pitched at Ted Ferry against what’s actually financed — state money, federal money, and private capital — and who in Southeast is supposed to benefit when the press release is over.',
    ],
  },
  {
    id: 'sec-election',
    title: 'The Election, Heard in Ketchikan',
    excerpt:
      'Southeast Conference opened with a forum for the top primary winners. Three of the four showed up. Ferries, fish, and tourism took most of the hour. I’m staying with the race through the fall debates.',
    category: 'politics',
    date: 'Oct 2026',
    readTime: 'On the beat',
    featured: true,
    reporting: true,
    body: [
      'Tuesday’s keynote at Ted Ferry was a gubernatorial forum. Treg Taylor, Dave Bronson, and Jonathan Kreiss-Tomkins took questions. Bernadette Wilson did not. Her campaign said she had a schedule conflict; the agenda had suggested she might appear Wednesday instead.',
      'The Alaska Marine Highway took a lot of the hour. Taylor and Bronson both backed the ferry system’s long-range plan to add boats and port calls. Kreiss-Tomkins argued the system has been neglected and that its leadership should sit further from the governor, closer to how the university board works. Fisheries came next — bycatch and trawling from Bronson, marketing and mislabeled fish from Taylor, a similar bycatch point from Kreiss-Tomkins. All three said they support tourism, and they split on whether the state should build more docks and housing or stay out of the industry’s way.',
      'Tlingit & Haida President Richard Peterson used the opening session to talk about the election too, and about voting. There’s another debate Oct. 8. I’ll keep listening for what changes once the candidates leave Ketchikan.',
    ],
  },
  {
    id: 'sec-mariculture',
    title: 'Mariculture After the Cluster Panel',
    excerpt:
      'Shellfish, seaweed, and the Alaska Mariculture Cluster all had a turn on Wednesday. The cluster’s main grant window just closed. I’ll follow what it leaves on the water here.',
    category: 'maritime',
    date: 'Oct 2026',
    readTime: 'On the beat',
    featured: true,
    reporting: true,
    body: [
      'Wednesday’s program ran from Fisheries & Mariculture into an Alaska Mariculture Cluster panel. Southeast Conference has been the lead on that cluster since a $49 million federal economic-development grant in 2022. The stated aim was to grow shellfish and seaweed toward a $100 million industry. The main project window ran from Oct. 1, 2022, through Sept. 30, 2026. Some work can carry into May 2027.',
      'Ketchikan already has a piece of it. OceansAlaska hosted a three-day hatchery workshop here at the end of March, twelve people, from growing the algae that feed the seed through to putting it on a farm.',
      'The business survey lumps seafood, commercial fishing, maritime, and mariculture together. That combined outlook ticked up — 49 percent positive this year, from 45 percent last year — while more of those businesses expect to cut jobs than to add them. I’m going to keep mariculture separate from that pile, and watch what is still growing around Ketchikan after the grant clock runs out.',
    ],
  },
  {
    id: 'peacehealth',
    title: 'PeaceHealth in Ketchikan: A Community Dossier',
    excerpt: 'An ongoing investigation into healthcare access, administration, and community impact on the island.',
    category: 'investigation',
    date: '2025',
    readTime: '15 min',
  },
  {
    id: 'borough-budget',
    title: 'Where the Borough Budget Actually Goes',
    excerpt: 'Breaking down Ketchikan Gateway Borough spending — what residents see and what they don\'t.',
    category: 'politics',
    date: '2025',
    readTime: '8 min',
  },
  {
    id: 'cruise-season',
    title: 'Cruise Season Economics: Who Wins, Who Waits',
    excerpt: 'The summer influx reshapes downtown every year. A look at the numbers behind the ships.',
    category: 'community',
    date: '2024',
    readTime: '6 min',
  },
  {
    id: 'harbor-expansion',
    title: 'Harbor Expansion and the Working Waterfront',
    excerpt: 'Fishermen, tour operators, and the city weigh in on the future of Ketchikan\'s docks.',
    category: 'maritime',
    date: '2024',
    readTime: '7 min',
  },
  {
    id: 'school-board',
    title: 'School Board Decisions That Shape a Generation',
    excerpt: 'From staffing to curriculum, the choices made in those Tuesday meetings echo for years.',
    category: 'politics',
    date: '2024',
    readTime: '5 min',
  },
  {
    id: 'north-end',
    title: 'Life on the North End',
    excerpt: 'Beyond downtown — the neighborhoods, the weddings, and the people who make Ketchikan home.',
    category: 'community',
    date: '2024',
    readTime: '4 min',
  },
]

export const publicMeetings: PublicMeeting[] = [
  {
    id: 'southeast-conference',
    body: 'Southeast Conference',
    schedule: '68th annual meeting',
    location: 'Ted Ferry Civic Center',
    nextDate: 'Sep 29 – Oct 1, 2026',
    when: 'Sep 29 – Oct 1, 2026',
    time: 'Daytime sessions',
    agenda: [
      'Timber opportunities',
      'Mining updates',
      'Partnering for private investment',
      'Gubernatorial forum',
      'Fisheries and the Alaska Mariculture Cluster',
    ],
    coverage:
      'This is the room I’m working from for the fall and winter. Timber, mining, new investment, the election, and mariculture — I’ll keep following each one after the summit wraps.',
  },
  {
    id: 'borough-assembly',
    body: 'Borough Assembly',
    schedule: '1st & 3rd Monday',
    location: 'Borough Assembly Chambers',
    nextDate: 'Jun 16, 2025',
    time: '7:00 PM',
    agenda: ['FY26 budget work session', 'Harbor fee schedule', 'Public comment period'],
    coverage: 'I attend most assembly meetings and publish notes on major votes and budget items.',
  },
  {
    id: 'school-board',
    body: 'School Board',
    schedule: '2nd Wednesday monthly',
    location: 'Ketchikan School District Office',
    nextDate: 'Jun 11, 2025',
    time: '6:00 PM',
    agenda: ['Superintendent report', 'Staffing update', 'Facilities planning'],
    coverage: 'Regular coverage of board decisions on staffing, curriculum, and district spending.',
  },
  {
    id: 'city-council',
    body: 'City Council',
    schedule: '1st & 3rd Thursday',
    location: 'City Hall Council Chambers',
    nextDate: 'Jun 19, 2025',
    time: '7:00 PM',
    agenda: ['Downtown infrastructure', 'Cruise ship berthing', 'Municipal code amendments'],
    coverage: 'Coverage focused on downtown development and city-level policy.',
  },
  {
    id: 'planning',
    body: 'Planning Commission',
    schedule: '2nd Tuesday monthly',
    location: 'Borough Planning Office',
    nextDate: 'Jun 10, 2025',
    time: '7:00 PM',
    agenda: ['Rezoning applications', 'Comprehensive plan update', 'Conditional use permits'],
    coverage: 'I track land use decisions that affect neighborhoods and development.',
  },
]

export const investigations: InvestigationFile[] = [
  {
    id: 'peacehealth',
    title: 'PeaceHealth Ketchikan',
    status: 'published',
    summary: 'Public records, meeting minutes, and community accounts compiled into a living dossier on healthcare administration and access on the island.',
    link: 'https://drive.google.com',
    documents: [
      { name: 'Hospital board minutes (2023–2025)', type: 'Public record', date: 'Mar 2025' },
      { name: 'Community impact statements', type: 'Interviews', date: 'Feb 2025' },
      { name: 'FOIA response — staffing levels', type: 'FOIA', date: 'Jan 2025' },
      { name: 'Borough healthcare funding records', type: 'Public record', date: 'Dec 2024' },
    ],
  },
]

export const headlineTicker = [
  'Timber, back on the table',
  'Mining updates from the Ketchikan summit',
  'New investment in Alaska',
  'The election, heard in Ketchikan',
  'Mariculture after the cluster panel',
]

export const DOSSIER_LINK = 'https://drive.google.com'
