# PTL teams, scoring, and creator images

Repository reference prepared on 2026-10-07. This documents the current frontend configuration and behavior; no backend response or remote image availability was fetched. ?Package opening? here means the PTL milestone reward cards, not the gamification shop.

## 1. Team-selection JSON

The following is a documentation/export object, **not an actual API response or submission payload**. It contains all 16 configured Open 1 campaign-member mappings in display order. Creator names and keys come from the creator roster; backend team names and IDs are unknown. All null image values mean unavailable from the inspected configuration, not that the backend necessarily returns null.

The configured Open 1 campaign IDs are 68 for production and 8 otherwise. Campaign-member portraits are distinct from creator portraits. Both sets of aliases are preserved because campaign matching and milestone creator matching use different lists.

```json
{
  "campaign_ids": {
    "production": 68,
    "non_production": 8
  },
  "teams": [
    {
      "creator_key": "itskatchii",
      "creator_name": "itsKatchii",
      "creator_aliases": [
        "itskatchii",
        "katchii"
      ],
      "campaign_aliases": [
        "itskatchii"
      ],
      "display_order": 1,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Lumi",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/lumi.png"
      }
    },
    {
      "creator_key": "penta",
      "creator_name": "PENTA",
      "creator_aliases": [
        "penta"
      ],
      "campaign_aliases": [
        "penta"
      ],
      "display_order": 2,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Peter Kennedy",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/peter-kennedy.png"
      }
    },
    {
      "creator_key": "tminnzy",
      "creator_name": "Tminnzy",
      "creator_aliases": [
        "tminnzy",
        "tminzy"
      ],
      "campaign_aliases": [
        "tminzy",
        "tminnzy"
      ],
      "display_order": 3,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Paul Siljee",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/paul-siljee.png"
      }
    },
    {
      "creator_key": "pikabooirl",
      "creator_name": "Pikaboo IRL",
      "creator_aliases": [
        "pikabooirl",
        "pikaboo"
      ],
      "campaign_aliases": [
        "pikabooirl",
        "pikaboo"
      ],
      "display_order": 4,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Nick Sandora",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/nick-sandora.png"
      }
    },
    {
      "creator_key": "awake",
      "creator_name": "Awake",
      "creator_aliases": [
        "awake"
      ],
      "campaign_aliases": [
        "awake"
      ],
      "display_order": 5,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Kane Simons",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/kane-simons.png"
      }
    },
    {
      "creator_key": "nemo",
      "creator_name": "Nemo",
      "creator_aliases": [
        "nemo",
        "akanemsko"
      ],
      "campaign_aliases": [
        "nemo",
        "akanemsko"
      ],
      "display_order": 6,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "RIPS",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/rips.png"
      }
    },
    {
      "creator_key": "esfandtv",
      "creator_name": "EsfandTV",
      "creator_aliases": [
        "esfandtv",
        "esfand"
      ],
      "campaign_aliases": [
        "esfandtv",
        "esfand"
      ],
      "display_order": 7,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Tyler G",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/tyler-g.png"
      }
    },
    {
      "creator_key": "coopertv",
      "creator_name": "CooperTV",
      "creator_aliases": [
        "coopertv",
        "cooper"
      ],
      "campaign_aliases": [
        "coopertv",
        "cooper"
      ],
      "display_order": 8,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Jake Ricci",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/jake-ricci.png"
      }
    },
    {
      "creator_key": "nagzz",
      "creator_name": "Nagzz",
      "creator_aliases": [
        "nagzz"
      ],
      "campaign_aliases": [
        "nagzz"
      ],
      "display_order": 9,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "DMoney",
        "image_url": "/assets/images/ptl/campaign-members/Dmony.jpg"
      }
    },
    {
      "creator_key": "frodan",
      "creator_name": "Frodan",
      "creator_aliases": [
        "frodan",
        "frodantv",
        "joinfrodan"
      ],
      "campaign_aliases": [
        "frodan",
        "frodantv",
        "joinfrodan"
      ],
      "display_order": 10,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Max Anthony",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/max-heaney.png"
      }
    },
    {
      "creator_key": "varsitygaming",
      "creator_name": "VarsityGaming",
      "creator_aliases": [
        "varsitygaming",
        "varsity"
      ],
      "campaign_aliases": [
        "varsity",
        "varsitygaming"
      ],
      "display_order": 11,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Amas",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/amos.png"
      }
    },
    {
      "creator_key": "arteezy",
      "creator_name": "Arteezy",
      "creator_aliases": [
        "arteezy"
      ],
      "campaign_aliases": [
        "arteezy"
      ],
      "display_order": 12,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Claudia Rea",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/claudia-rea.png"
      }
    },
    {
      "creator_key": "thijs",
      "creator_name": "Thijs",
      "creator_aliases": [
        "thijs"
      ],
      "campaign_aliases": [
        "thijs"
      ],
      "display_order": 13,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Matt Miller",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/matt-miller.png"
      }
    },
    {
      "creator_key": "juliakins",
      "creator_name": "Juliakins",
      "creator_aliases": [
        "juliakins"
      ],
      "campaign_aliases": [
        "juliakins"
      ],
      "display_order": 14,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Maryam",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/maryam.png"
      }
    },
    {
      "creator_key": "syanne",
      "creator_name": "Syanne",
      "creator_aliases": [
        "syanne"
      ],
      "campaign_aliases": [
        "syanne"
      ],
      "display_order": 15,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "Rocket Scooter",
        "image_url": "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/rocket-scooter.png"
      }
    },
    {
      "creator_key": "qojqva",
      "creator_name": "Qojqva",
      "creator_aliases": [
        "qojqva"
      ],
      "campaign_aliases": [
        "doublelift",
        "dbl",
        "Qojqva",
        "qojqva"
      ],
      "display_order": 16,
      "team_id": null,
      "team_name": null,
      "creator_image_url": null,
      "creator_s3_url": null,
      "campaign_member": {
        "name": "JDUN",
        "image_url": "/assets/images/ptl/campaign-members/JDun.png"
      }
    }
  ]
}
```

### Runtime team and image selection

- The authenticated companies route is GET /api/journal/ptl/companies?campaign_id=68 (production) or campaign_id=8 otherwise. It enriches backend companies with the configured campaign member and display order.
- A supplied backend display order takes precedence for matching the campaign member. If it is invalid or does not match a configured member, the matcher returns no member rather than falling back to the team name. Without a supplied display order, matching normalizes the team name to lowercase alphanumeric characters, strips a leading ?team? and a trailing company/team/campaign suffix, and matches the campaign aliases above.
- Companies are sorted by resolved display order, retaining source order for ties. Unmatched companies without a valid order are assigned orders after the known range.
- For a revealed creator, the server picks unmask_image_url, then current_image_url, then team_image_url, using the first truthy value. It exposes that value as both current_image_url and team_image_url.
- For a masked creator, it uses mask_image_url for both visible image fields and omits team_name. The raw unmask_image_url is removed from browser responses in either case. Backend masking state and image URLs cannot be reconstructed from the static mapping.
- The selection UI uses current_image_url or team_image_url when revealed, and mask_image_url when masked. Missing or failed portrait images fall back to the Tradeify app icon.

Sources: [campaign mappings](../src/config/ptl-campaign-members.ts), [creator roster and alias lookup](../src/config/ptl-creator-schedule.ts), [companies route](../src/app/api/journal/ptl/companies/route.ts), [browser image sanitization](../src/lib/functions/ptlCompanyImage.ts), [selection UI](../src/modules/premier-league/Components/PTLCampaignSelection.tsx), [API types](../src/api/hooks/ptl/schema.ts).

## 2. Team score and milestone package-opening logic

### Score source and fallback

The waiting room selects the current creator from leaderboardData.you, falling back to the first leaderboard row whose is_you is true. It then computes the milestone score as follows:

```text
if creator_points is neither null nor undefined:
    points = creator_points + (team_points ?? 0)
else:
    points = currentCreator.points ?? 0
```

Zero creator_points is a valid explicit value and still adds team_points. When creator_points is absent, the frontend uses the aggregate points field; it does not add team_points again. If the creator is missing, calculations use zero while the UI shows loading or ?Your points are not available yet.? Initial loading is isLeaderboardLoading && !leaderboardData.

The frontend consumes the backend's scoring totals. This sum does not define how individual trades earn points, how supporters contribute to team_points, or how the backend reconciles scores. The creator points tooltip says final points will be reconciled with team points after the match ends; that statement is UI copy, not a reconciliation implementation.

### Selecting the creator's thresholds

The resolver tries the current creator's leaderboard username, then the matchup's ?you? username, then the fallback/profile username. It uses the first username that resolves to a configured creator. Matching lowercases and removes non-alphanumeric characters before checking the roster aliases. It never uses the opponent's username.

The four tiers are always ordered Lemonade Stand, Start Up, Corporation, Monopoly. All configured thresholds are:

| Creator | Lemonade Stand | Start Up | Corporation | Monopoly |
| --- | ---: | ---: | ---: | ---: |
| itsKatchii | 8562 | 12033 | 14115 | 18049 |
| PENTA | 4903 | 6890 | 8083 | 10335 |
| Tminnzy | 5824 | 8185 | 9601 | 12277 |
| Pikaboo IRL | 2361 | 3318 | 3892 | 4976 |
| Awake | 4355 | 6120 | 7180 | 9181 |
| Nemo | 11015 | 15480 | 18160 | 23221 |
| EsfandTV | 4407 | 6193 | 7265 | 9290 |
| CooperTV | 4340 | 6100 | 7155 | 9149 |
| Nagzz | 6083 | 8549 | 10028 | 12823 |
| Frodan | 6812 | 9573 | 11230 | 14360 |
| VarsityGaming | 6460 | 9079 | 10651 | 13619 |
| Arteezy | 2631 | 3697 | 4337 | 5546 |
| Thijs | 4007 | 5632 | 6606 | 8447 |
| Juliakins | 4544 | 6386 | 7491 | 9578 |
| Syanne | 5014 | 7046 | 8266 | 10569 |
| Qojqva | 4477 | 6292 | 7381 | 9438 |

If no candidate resolves to a creator, presentation-fixture thresholds are used: 3700, 4500, 5200, and 7800 respectively. These fallback values are not a universal tournament scoring rule.

### Reached states, progress, and examples

```text
tierReached = points >= tierThreshold
tierLocked = points < tierThreshold
nextTier = first tier with points < tierThreshold
allTiersReached = no nextTier exists
target = nextTier, or Monopoly when all tiers are reached
progressPoints = min(monopolyThreshold, max(0, points))
progressPercent = progressPoints / monopolyThreshold * 100
remainingPoints = max(0, target.threshold - points)
```

The progress bar measures progress toward Monopoly, not just toward the next tier. The ?to go? count measures the next unreached tier. At exact equality a tier is reached, so the target advances. Above Monopoly the bar stays at 100%, the remaining count is zero, and the heading becomes ?All tiers reached.? Negative points clamp the bar to zero; the displayed score and remaining-points calculation still use the original score.

Reached tiers show the unlocked image, glow, and ?Tier reached.? Unreached tiers show locked artwork and ?Tier not reached,? except Monopoly displays ?Banks all four tiers.? These are presentation states recomputed from current points, not persisted claims or a record that a tier was previously earned.

Examples using Nemo's thresholds:

| Inputs / total | Result |
| --- | --- |
| creator_points = 1000, team_points = 10015 | Total 11015; Lemonade Stand reached; Start Up next; 4465 points remaining; progress about 47.44%. |
| creator_points = 0, team_points = 11015 | Same total and tier state; zero creator points does not trigger fallback. |
| creator_points absent, points = 15480, team_points = 999 | Total 15480; team_points is not added; Start Up reached; Corporation next; 2680 remaining. |
| Total 23221 or greater | All four tiers reached; progress 100%; zero remaining. |
| Total -100 | All tiers locked; progress 0%; 11115 remaining to Lemonade Stand. |

Sources: [waiting-room calculations and rendering](../src/modules/premier-league/Components/PTLCreatorWaitingRoom.tsx), [threshold resolver](../src/modules/premier-league/lib/creatorMilestones.ts), [all creator thresholds](../src/config/ptl-creator-milestones.ts), [points tooltip](../src/modules/premier-league/lib/creatorLeague.ts).

### What opening a package actually does

Opening flips/expands a card to preview its reward list. A single activeMilestone index starts at null, so at most one card is open. Opening another card replaces the active index; toggling an already-open card closes it. A close event clears the index only if that card is still active.

- Mouse or pen pointer entry opens the card; leaving closes it. Touch pointer entry/leave does not trigger hover behavior.
- Keyboard focus opens the card unless the focus was caused by a pointer press. Clicking or tapping toggles it.
- Escape closes the card. Moving focus outside the card closes it; moving focus within it does not.
- The button exposes aria-expanded and aria-controls. The closed reward section is aria-hidden and inert.
- Locked cards can also be opened for preview. isLocked controls styling; it does not disable the trigger or guard these callbacks.

These callbacks only update local React state. They do not spend points, call a claim endpoint, draw a random reward, mint a coupon, persist an opening, or issue a reward.

### Preview rewards and actual issuance

The current preview labels are sourced from a file explicitly marked as temporary presentation fixtures, pending the company API contract, rather than tournament payout or scoring rules:

| Tier | Displayed reward labels |
| --- | --- |
| Lemonade Stand | 5% Off Account; 10% Off Account; $20 Merch Credit |
| Start Up | 30% Off Account; 35% Off Account; $50 Merch Credit |
| Corporation | 55% Off Account; 60% Off Account; 50k Growth Reset; 50k Select Reset |
| Monopoly | $100 Merch Credit; Free Eval; 100k Growth Reset; 100k Select Reset |

The waiting-room copy says every trader contributes to the company total during each Open, rewards are awarded after that Open ends, and Open 2 starts at zero. The card implementation does not perform the award or reset. The frontend also does not establish whether every listed reward is delivered, whether one is selected, any probability distribution, redemption rules, or backend eligibility. ?Banks all four tiers? is displayed copy, not proof of implemented cumulative delivery. Rank-based creator cash prizes are a separate feature from these milestone previews.

Sources: [card interactions](../src/modules/premier-league/Components/PTLCreatorMilestoneCard.tsx), [presentation rewards and fallback thresholds](../src/modules/premier-league/lib/creatorWaitingRoomFixture.ts), [award timing copy](../src/modules/premier-league/Components/PTLCreatorWaitingRoom.tsx), [separate rank rewards](../src/modules/premier-league/lib/creatorLeagueRewards.ts).

## 3. Creator image inventory and S3 availability

Despite its name, BUCKET_BASE_URL is https://d33zacp7h639z8.cloudfront.net, a **CloudFront URL**, not a direct S3 bucket URL. No bucket name or direct S3 origin should be inferred from it. The 14 remote campaign-member links below are configured CloudFront links; the other two paths are files served by this app. Creator portraits themselves are supplied by backend company, matchup, and leaderboard responses and remain unavailable in this repository-only export.

| Creator | Creator portrait / direct S3 URL | Campaign member | Known campaign-member image | Hosting |
| --- | --- | --- | --- | --- |
| itsKatchii | Unavailable / unavailable | Lumi | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/lumi.png) | CloudFront |
| PENTA | Unavailable / unavailable | Peter Kennedy | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/peter-kennedy.png) | CloudFront |
| Tminnzy | Unavailable / unavailable | Paul Siljee | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/paul-siljee.png) | CloudFront |
| Pikaboo IRL | Unavailable / unavailable | Nick Sandora | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/nick-sandora.png) | CloudFront |
| Awake | Unavailable / unavailable | Kane Simons | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/kane-simons.png) | CloudFront |
| Nemo | Unavailable / unavailable | RIPS | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/rips.png) | CloudFront |
| EsfandTV | Unavailable / unavailable | Tyler G | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/tyler-g.png) | CloudFront |
| CooperTV | Unavailable / unavailable | Jake Ricci | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/jake-ricci.png) | CloudFront |
| Nagzz | Unavailable / unavailable | DMoney | [Image](../public/assets/images/ptl/campaign-members/Dmony.jpg) (`/assets/images/ptl/campaign-members/Dmony.jpg`) | Local public asset |
| Frodan | Unavailable / unavailable | Max Anthony | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/max-heaney.png) | CloudFront |
| VarsityGaming | Unavailable / unavailable | Amas | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/amos.png) | CloudFront |
| Arteezy | Unavailable / unavailable | Claudia Rea | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/claudia-rea.png) | CloudFront |
| Thijs | Unavailable / unavailable | Matt Miller | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/matt-miller.png) | CloudFront |
| Juliakins | Unavailable / unavailable | Maryam | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/maryam.png) | CloudFront |
| Syanne | Unavailable / unavailable | Rocket Scooter | [Image](https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/rocket-scooter.png) | CloudFront |
| Qojqva | Unavailable / unavailable | JDUN | [Image](../public/assets/images/ptl/campaign-members/JDun.png) (`/assets/images/ptl/campaign-members/JDun.png`) | Local public asset |

The JSON in section 1 contains the full configured URLs and local paths. The local links in this table point to their public-directory files for repository browsing. Preserve the configured filename spelling: DMoney uses Dmony.jpg, JDUN uses JDun.png, Max Anthony uses max-heaney.png, and Amas uses amos.png.

In the creator waiting-room banner, the ?you? portrait prefers matchup.you.image_url, then leaderboardData.you.image_url. The opponent portrait uses matchup.opponent.image_url. Missing or failed images use the Tradeify app icon; that icon is not a creator portrait. These dynamic fields may contain CDN or other URLs, but their values were not fetched for this document.

Milestone art is separate from portrait imagery. Unlocked art uses https://d33zacp7h639z8.cloudfront.net/ptl/creator-waiting/ followed by lemonade.png, startup.png, corporation.png, or monopoly.png. Reward-back art uses lemonade-rewards.png, startup-rewards.png, corporation-rewards.png, or monopoly-rewards.png in the same directory. Locked art uses /assets/images/ptl/creator-waiting/ followed by lemonade-locked.webp, startup-locked.webp, corporation-locked.webp, or monopoly-locked.webp.

Sources: [asset base](../src/config/constants.ts), [PTL asset directories](../src/config/ptl-constants.ts), [campaign-member links](../src/config/ptl-campaign-members.ts), [portrait and milestone rendering](../src/modules/premier-league/Components/PTLCreatorWaitingRoom.tsx), [fallback icon](../src/json/assets/index.ts).
