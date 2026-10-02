/** Seasonal status. Edit this when the beat changes. */
export const status = {
  flag: 'Reporting',
  lede: 'Covering the Southeast Conference in Ketchikan.',
  back: 'Sept. 29 – Oct. 1 at the Ted Ferry Civic Center — timber, mining, new investment, the election, and mariculture.',
}

export type ConferenceEvent = {
  id: string
  when: string
  title: string
  body: string
}

export const conferenceEvents: ConferenceEvent[] = [
  {
    id: 'election',
    when: 'Tuesday, Sept. 29',
    title: 'The election',
    body: 'The keynote was a gubernatorial forum. Treg Taylor, Dave Bronson, and Jonathan Kreiss-Tomkins took questions. Bernadette Wilson did not — her campaign said she had a schedule conflict. Ferries, fish, and tourism took most of the hour. Another debate was set for Oct. 8.',
  },
  {
    id: 'timber',
    when: 'Wednesday, Sept. 30',
    title: 'Timber',
    body: 'The morning moved from natural-resource goals into a session called Timber Opportunities. The business-climate survey Southeast Conference publishes with Rain Coast Data still has timber among the sectors most likely to call conditions poor, and among those more likely to expect a harder year. Supply is the complaint that keeps coming up: federal timber sales, and what’s left of old growth.',
  },
  {
    id: 'mining',
    when: 'Wednesday, Sept. 30',
    title: 'Mining',
    body: 'Mining Updates was on the same agenda. In that 2026 survey, 89 percent of mining leaders reported a positive outlook, including a third who expect a better year. That’s down from 2025, when every mining respondent was positive. High metal prices are the reason they give. Housing, skilled labor, and permitting are the complaints. No mining business in the survey said it plans to cut jobs.',
  },
  {
    id: 'investment',
    when: 'Wednesday, Sept. 30',
    title: 'New investment',
    body: 'Partnering for Private Investments sat between Rep. Nick Begich and the mariculture cluster. Sen. Lisa Murkowski and Sen. Dan Sullivan were both on Tuesday’s program. A session title is not a deal. I’m matching what was pitched at Ted Ferry against what’s actually financed, and who in Southeast is supposed to see it.',
  },
  {
    id: 'mariculture',
    when: 'Wednesday, Sept. 30',
    title: 'Mariculture',
    body: 'Fisheries & Mariculture ran into an Alaska Mariculture Cluster panel. Southeast Conference has led that cluster since a $49 million federal grant in 2022, aimed at growing shellfish and seaweed. The main project window ran through Sept. 30, 2026, with some work able to carry into May 2027. OceansAlaska already hosted a three-day hatchery workshop here in Ketchikan at the end of March.',
  },
]

export const INSTAGRAM_URL = 'https://instagram.com/realmitchelturner'
export const FACEBOOK_URL = 'https://facebook.com/realmitchelturner'
export const PHONE_DISPLAY = '+1 808 208 2842'
export const PHONE_TEL = 'tel:+18082082842'
