/*-- part 1 --*/
const creatorMilestoneConfig = {
  tiers: ["lemonade stand", "start up", "corporation", "monopoly"],
  creator_thresholds: {
    itskatchii: [20120.7, 28277.55, 33170.25, 42415.15],
    penta: [11522.05, 16191.5, 18995.05, 24287.25],
    tminnzy: [13686.4, 19234.75, 22562.35, 28850.95],
    "pikaboo irl": [5548.35, 7797.3, 9146.2, 11693.6],
    awake: [10234.25, 14382, 16873, 21575.35],
    nemo: [25885.25, 36378, 42676, 54569.35],
    esfandtv: [10356.45, 14553.55, 17072.75, 21831.5],
    coopertv: [10199, 14335, 16814.25, 21500.15],
    nagzz: [14295.05, 20090.15, 23565.8, 30134.05],
    frodan: [16008.2, 22496.55, 26390.5, 33746],
    varsitygaming: [15181, 21335.65, 25029.85, 32004.65],
    arteezy: [6182.85, 8687.95, 10191.95, 13033.1],
    thijs: [9416.45, 13235.2, 15524.1, 19850.45],
    juliakins: [10678.4, 15007.1, 17603.85, 22508.3],
    syanne: [11782.9, 16558.1, 19425.1, 24837.15],
    qojqva: [10520.95, 14786.2, 17345.35, 22179.3],
  },
  fallback_thresholds: [8695, 10575, 12220, 18330],
};

const staticMatchData = {
  campaign_ids: {
    production: 68,
    non_production: 8,
  },
  teams: [
    {
      creator_key: "itskatchii",
      creator_name: "itsKatchii",
      creator_aliases: ["itskatchii", "katchii"],
      campaign_aliases: ["itskatchii"],
      display_order: 1,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Lumi",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/lumi.png",
      },
    },
    {
      creator_key: "penta",
      creator_name: "PENTA",
      creator_aliases: ["penta"],
      campaign_aliases: ["penta"],
      display_order: 2,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Peter Kennedy",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/peter-kennedy.png",
      },
    },
    {
      creator_key: "tminnzy",
      creator_name: "Tminnzy",
      creator_aliases: ["tminnzy", "tminzy"],
      campaign_aliases: ["tminzy", "tminnzy"],
      display_order: 3,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Paul Siljee",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/paul-siljee.png",
      },
    },
    {
      creator_key: "pikabooirl",
      creator_name: "Pikaboo IRL",
      creator_aliases: ["pikabooirl", "pikaboo"],
      campaign_aliases: ["pikabooirl", "pikaboo"],
      display_order: 4,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Nick Sandora",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/nick-sandora.png",
      },
    },
    {
      creator_key: "awake",
      creator_name: "Awake",
      creator_aliases: ["awake"],
      campaign_aliases: ["awake"],
      display_order: 5,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Kane Simons",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/kane-simons.png",
      },
    },
    {
      creator_key: "nemo",
      creator_name: "Nemo",
      creator_aliases: ["nemo", "akanemsko"],
      campaign_aliases: ["nemo", "akanemsko"],
      display_order: 6,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "RIPS",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/rips.png",
      },
    },
    {
      creator_key: "esfandtv",
      creator_name: "EsfandTV",
      creator_aliases: ["esfandtv", "esfand"],
      campaign_aliases: ["esfandtv", "esfand"],
      display_order: 7,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Tyler G",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/tyler-g.png",
      },
    },
    {
      creator_key: "coopertv",
      creator_name: "CooperTV",
      creator_aliases: ["coopertv", "cooper"],
      campaign_aliases: ["coopertv", "cooper"],
      display_order: 8,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Jake Ricci",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/jake-ricci.png",
      },
    },
    {
      creator_key: "nagzz",
      creator_name: "Nagzz",
      creator_aliases: ["nagzz"],
      campaign_aliases: ["nagzz"],
      display_order: 9,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "DMoney",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/Dmony.jpg",
      },
    },
    {
      creator_key: "frodan",
      creator_name: "Frodan",
      creator_aliases: ["frodan", "frodantv", "joinfrodan"],
      campaign_aliases: ["frodan", "frodantv", "joinfrodan"],
      display_order: 10,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Max Anthony",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/max-heaney.png",
      },
    },
    {
      creator_key: "varsitygaming",
      creator_name: "VarsityGaming",
      creator_aliases: ["varsitygaming", "varsity"],
      campaign_aliases: ["varsity", "varsitygaming"],
      display_order: 11,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Amas",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/amos.png",
      },
    },
    {
      creator_key: "arteezy",
      creator_name: "Arteezy",
      creator_aliases: ["arteezy"],
      campaign_aliases: ["arteezy"],
      display_order: 12,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Claudia Rea",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/claudia-rea.png",
      },
    },
    {
      creator_key: "thijs",
      creator_name: "Thijs",
      creator_aliases: ["thijs"],
      campaign_aliases: ["thijs"],
      display_order: 13,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Matt Miller",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/matt-miller.png",
      },
    },
    {
      creator_key: "juliakins",
      creator_name: "Juliakins",
      creator_aliases: ["juliakins"],
      campaign_aliases: ["juliakins"],
      display_order: 14,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Maryam",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/maryam.png",
      },
    },
    {
      creator_key: "syanne",
      creator_name: "Syanne",
      creator_aliases: ["syanne"],
      campaign_aliases: ["syanne"],
      display_order: 15,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "Rocket Scooter",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/rocket-scooter.png",
      },
    },
    {
      creator_key: "qojqva",
      creator_name: "Qojqva",
      creator_aliases: ["qojqva"],
      campaign_aliases: ["doublelift", "dbl", "Qojqva", "qojqva"],
      display_order: 16,
      team_id: null,
      team_name: null,
      creator_image_url: null,
      creator_s3_url: null,
      campaign_member: {
        name: "JDUN",
        image_url:
          "https://d33zacp7h639z8.cloudfront.net/ptl/campaign-members/JDun.png",
      },
    },
  ],
};
 
/*-- part2 --*/
const creatorsTableConfig = {
  popup: {
    developerMode: false,
    enabled: true,
    use_api: true,
    leagueName: "Creator League",
    fallbackImageUrl:
      "https://cdn.prod.website-files.com/6a981ac8d7b7736a6a02b0a1/6a9939ae5de5151dfcda15f5_6a84628529744886a578d5b9_icon.png",
  },
  user: "itskatchii",
  loaderDelayMs: 0,
  tableBodyId: "creators-table-body",
  refreshButtonId: "creators-table-refresh",
  images: {
    finaleSeat:
      "https://cdn.prod.website-files.com/6a981ac8d7b7736a6a02b0a1/6aab98ac2491b9ed14cfd02a_yell-star.svg",
  },
  locale: "en-US",
  currency: "USD",
  medals: {
    1: "https://cdn.prod.website-files.com/6a981ac8d7b7736a6a02b0a1/6aabece5aa1c4719edc25f46_1.png",
    2: "https://cdn.prod.website-files.com/6a981ac8d7b7736a6a02b0a1/6aabece43f2100adecbfb34b_2.png",
    3: "https://cdn.prod.website-files.com/6a981ac8d7b7736a6a02b0a1/6aabece56901d4d58ca5fb93_3.png",
  },
  messages: {
    loading: "Loading creators…",
    empty: "No creators available.",
    error: "Unable to load creators. Please refresh to try again.",
  },
  // Accepts a response object or an API URL such as "/api/leaderboard".
  api_endpoint:
    "https://api-f.tradeify.co/app/v1/journal/ptl/creator/leaderboard/public/",
  detailsEndpoint:
    "https://api-f.tradeify.co/app/v1/journal/ptl/creator/leaderboard/public/details/",
};

document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(
    document.querySelectorAll(".milestn-step-each-items"),
  );
  let resizeFrame;

  function sizeCards() {
    // Release the previous height so cards can shrink at responsive breakpoints.
    cards.forEach((card) => {
      card.style.height = "0px";
      const backContent = card.querySelector(".back-face-inner");
      if (backContent) backContent.style.height = "auto";
      card
        .querySelectorAll(
          ":scope > .milestn-flip-inner > .front-face, :scope > .milestn-flip-inner > .back-face",
        )
        .forEach((face) => {
          face.style.height = "auto";
        });
    });
    const heights = cards.map((card) =>
      Math.ceil(
        Math.max(
          card.querySelector(".front-face")?.offsetHeight || 0,
          card.querySelector(".back-face")?.offsetHeight || 0,
        ),
      ),
    );
    cards.forEach((card, index) => {
      const height = `${heights[index]}px`;
      card.style.height = height;
      const backContent = card.querySelector(".back-face-inner");
      if (backContent) backContent.style.height = "100%";
      card
        .querySelectorAll(
          ":scope > .milestn-flip-inner > .front-face, :scope > .milestn-flip-inner > .back-face",
        )
        .forEach((face) => {
          face.style.height = height;
        });
    });
  }

  function scheduleSize() {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(sizeCards);
  }

  cards.forEach((card) => {
    const front = card.querySelector(".front-face");
    const back = card.querySelector(".back-face");
    if (!front || !back) return;
    const title =
      card.querySelector(".milestn-step-txt-head")?.textContent.trim() ||
      "Milestone";
    card.tabIndex = 0;
    card.setAttribute("role", "button");

    function flip(flipped) {
      card.classList.toggle("is-flipped", flipped);
      card.setAttribute("aria-pressed", String(flipped));
      card.setAttribute(
        "aria-label",
        `${title}: show ${flipped ? "front" : "back"}`,
      );
      front.setAttribute("aria-hidden", String(flipped));
      back.setAttribute("aria-hidden", String(!flipped));
      front.inert = flipped;
      back.inert = !flipped;
    }

    flip(false);
    card.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") flip(true);
    });
    card.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") flip(false);
    });
    card.addEventListener("click", () =>
      flip(!card.classList.contains("is-flipped")),
    );
    card.addEventListener("keydown", (event) => {
      if (event.target !== card) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        flip(!card.classList.contains("is-flipped"));
      } else if (event.key === "Escape") {
        flip(false);
      }
    });
    card.addEventListener("focusout", (event) => {
      if (!card.contains(event.relatedTarget)) flip(false);
    });
    card.querySelectorAll("img").forEach((image) => {
      image.addEventListener("load", scheduleSize);
      image.addEventListener("error", scheduleSize);
    });
  });

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(scheduleSize);
    cards.forEach((card) => {
      const content = card.querySelector(".milestn-step-card");
      if (content) observer.observe(content);
      const backContent = card.querySelector(".bak-card-cc-wrp");
      if (backContent) observer.observe(backContent);
    });
  }
  window.addEventListener("resize", scheduleSize);
  window.addEventListener("load", scheduleSize);
  document.fonts?.ready.then(scheduleSize);
  sizeCards();
});

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById(creatorsTableConfig.tableBodyId);
  if (!tableBody) return;
  const refreshButton = document.getElementById(
    creatorsTableConfig.refreshButtonId,
  );
  let isLoading = false;

  const numbers = new Intl.NumberFormat(creatorsTableConfig.locale);
  const dollars = new Intl.NumberFormat(creatorsTableConfig.locale, {
    style: "currency",
    currency: creatorsTableConfig.currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });
  const medals = creatorsTableConfig.medals;

  function normalizeUsername(name) {
    return String(name ?? "")
      .trim()
      .replace(/^@/, "")
      .toLowerCase();
  }

  function getHighlightedUser() {
    if (creatorsTableConfig.developerMode) {
      return normalizeUsername(creatorsTableConfig.user);
    }

    // Use the last non-empty segment, e.g. /creators/Nagzz/ → Nagzz.
    const username =
      window.location.pathname.split("/").filter(Boolean).pop() || "";
    // A standalone preview has no creator slug. Keep production slugs authoritative.
    if (!username || /^index\.html?$/i.test(username) || window.location.protocol === "file:") {
      return normalizeUsername(creatorsTableConfig.user);
    }
    try {
      return normalizeUsername(decodeURIComponent(username));
    } catch {
      return normalizeUsername(username);
    }
  }

  const normalizeCreatorKey = (value) =>
    normalizeUsername(value).replace(/[^a-z0-9]/g, "");
  const requestedUser = getHighlightedUser();
  const activeTeam = staticMatchData.teams.find((team) =>
    [team.creator_key, team.creator_name, ...team.creator_aliases].some(
      (alias) => normalizeCreatorKey(alias) === normalizeCreatorKey(requestedUser),
    ),
  );
  const highlightedUser = normalizeUsername(activeTeam?.creator_name || requestedUser);

  function getCreatorName(creator) {
    return (
      creator.username ||
      creator.creator ||
      creator.full_name ||
      creator.display_handle ||
      "Coming Soon"
    );
  }

  function updateActiveProfile(creators) {
    const profile = document.querySelector(".milestn-head-top-col.first");
    if (!profile) return;

    const creator = creators.find(
      (item) =>
        highlightedUser &&
        normalizeCreatorKey(getCreatorName(item)) === normalizeCreatorKey(highlightedUser),
    );
    const name = profile.querySelector(".cc-usr-name>div");
    const image = profile.querySelector(".cc-img-prof");
    if (name)
      name.textContent = creator
        ? getCreatorName(creator)
        : "Creator unavailable";
    if (image) {
      const imageUrl = creator?.image_url || creator?.company?.image_url;
      image.alt = creator ? getCreatorName(creator) : "";
      image.hidden = !imageUrl;
      image.onerror = () => {
        image.hidden = true;
      };
      if (imageUrl) image.src = imageUrl;
      else image.removeAttribute("src");
    }
  }

  updateActiveProfile([]);

  const milestoneAnimations = Array.from(
    document.querySelectorAll(".milestn-step-main"),
    (section) => ({
      section,
      visible: false,
      frame: null,
      progress: 0,
      render: null,
      target: 0,
      start: 0,
      elapsed: 0,
      hasData: false,
    }),
  );

  function animateMilestones(state) {
    cancelAnimationFrame(state.frame);
    if (!state.visible || !state.render || !state.hasData) return;
    const start = state.start;
    const target = state.target;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const animationDurationMs = 3000;
    const staggerDelayMs = 280;
    const startedAt = performance.now() - state.elapsed;
    function tick(now) {
      state.elapsed = reducedMotion
        ? animationDurationMs
        : Math.min(animationDurationMs, now - startedAt);
      const elapsed = state.elapsed / animationDurationMs;
      const eased = 1 - Math.pow(1 - elapsed, 3);
      state.progress = start + (target - start) * eased;
      state.render(state.progress);
      const cards = state.section.querySelectorAll(".milestn-step-each-items");
      cards.forEach((card, index) => {
        const delay = index * staggerDelayMs;
        const duration = Math.max(
          1,
          animationDurationMs - (cards.length - 1) * staggerDelayMs,
        );
        const fraction = reducedMotion
          ? 1
          : Math.min(1, Math.max(0, (state.elapsed - delay) / duration));
        const reveal = 1 - Math.pow(1 - fraction, 3);
        card.style.opacity = reveal;
      });
      state.frame = elapsed < 1 ? requestAnimationFrame(tick) : null;
    }
    state.frame = requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window) {
    milestoneAnimations.forEach(({ section }) => {
      section.classList.add("milestone-stagger-ready");
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const state = milestoneAnimations.find(
            (item) => item.section === entry.target,
          );
          state.visible = entry.isIntersecting;
          if (state.visible) animateMilestones(state);
          else cancelAnimationFrame(state.frame);
        });
      },
      { threshold: 0.15 },
    );
    milestoneAnimations.forEach((state) => observer.observe(state.section));
  } else {
    milestoneAnimations.forEach((state) => {
      state.visible = true;
    });
  }

  function updateMilestoneProgress(creators) {
    const normalizeKey = (value) =>
      normalizeUsername(value).replace(/[^a-z0-9]/g, "");
    const userKey = normalizeKey(highlightedUser);
    const team = staticMatchData.teams.find(
      (item) =>
        userKey &&
        [item.creator_key, item.creator_name, ...item.creator_aliases].some(
          (alias) => normalizeKey(alias) === userKey,
        ),
    );
    const userKeys = new Set(
      [highlightedUser, team?.creator_name, ...(team?.creator_aliases || [])]
        .filter(Boolean)
        .map(normalizeKey),
    );
    const creator = creators.find((item) =>
      userKeys.has(normalizeKey(getCreatorName(item))),
    );
    const thresholdEntry = Object.entries(
      creatorMilestoneConfig.creator_thresholds,
    ).find(([name]) => userKeys.has(normalizeKey(name)));
    const thresholds =
      thresholdEntry?.[1] || creatorMilestoneConfig.fallback_thresholds;
    const toPoints = (value) =>
      Number.isFinite(Number(value)) ? Number(value) : 0;
    const totalPoints =
      toPoints(creator?.creator_points) + toPoints(creator?.team_points);
    const monopolyThreshold = thresholds[thresholds.length - 1];
    const progress = Math.min(
      100,
      Math.max(0, (totalPoints / monopolyThreshold) * 100),
    );
    const nextTierIndex = thresholds.findIndex(
      (threshold) => totalPoints < threshold,
    );
    const targetThreshold =
      nextTierIndex === -1 ? monopolyThreshold : thresholds[nextTierIndex];
    const remainingPoints = Math.max(0, targetThreshold - totalPoints);

    document
      .querySelectorAll(".milestn-step-txt-yell")
      .forEach((yell, index) => {
        const threshold =
          thresholds[index] ??
          creatorMilestoneConfig.fallback_thresholds[index] ??
          0;
        yell.textContent = `${numbers.format(threshold)} pts`;
      });

    document
      .querySelectorAll(".milestn-step-ftr-head-txt")
      .forEach((heading) => {
        heading.textContent = !creator
          ? "Milestones unavailable"
          : nextTierIndex === -1
            ? "All tiers reached"
            : `Next up: ${creatorMilestoneConfig.tiers[nextTierIndex]}`;
      });

    document.querySelectorAll(".milestn-step-count").forEach((count) => {
      count.textContent = creator
        ? `${numbers.format(totalPoints)} / ${numbers.format(targetThreshold)} company pts${remainingPoints > 0 ? ` · ${numbers.format(remainingPoints)} to go` : ""}`
        : "Your points are not available yet.";
    });

    milestoneAnimations.forEach((state) => {
      state.start = state.progress;
      state.elapsed = 0;
      state.hasData = Boolean(creator);
      state.target = progress;
      state.render = (displayedProgress) => {
        state.section
          .querySelectorAll(".milestn-step-prgs-count")
          .forEach((bar) => {
            bar.style.width = `${displayedProgress}%`;
          });
        state.section
          .querySelectorAll(".milestn-step-each-items")
          .forEach((item, index) => {
            const reached =
              Boolean(creator) &&
              totalPoints >= thresholds[index] &&
              displayedProgress >=
                (thresholds[index] / monopolyThreshold) * 100;
            item.classList.toggle("active", reached);
            item.classList.toggle("inactive", !reached);
            const status = item.querySelector(".milestn-step-txt-grn");
            if (status) status.textContent = reached ? "Tier reached" : "Not reached yet";
          });
      };
      state.render(state.progress);
      animateMilestones(state);
    });
  }

  updateMilestoneProgress([]);

  function updateOpponentProfile() {
    const profile = document.querySelector(".milestn-head-top-col.third");
    if (!profile) return;

    const normalizeKey = (value) =>
      normalizeUsername(value).replace(/[^a-z0-9]/g, "");
    const userKey = normalizeKey(highlightedUser);
    const team = staticMatchData.teams.find(
      (item) =>
        userKey &&
        [
          item.creator_key,
          item.creator_name,
          ...item.creator_aliases,
          ...item.campaign_aliases,
        ].some((alias) => normalizeKey(alias) === userKey),
    );
    const member = team?.campaign_member;
    const name = profile.querySelector(".cc-usr-name>div");
    const image = profile.querySelector(".cc-img-prof");
    if (name) name.textContent = member?.name || "Opponent unavailable";
    if (image) {
      image.alt = member?.name || "";
      image.hidden = !member?.image_url;
      image.onerror = () => {
        image.hidden = true;
      };
      if (member?.image_url) image.src = member.image_url;
      else image.removeAttribute("src");
    }
  }

  updateOpponentProfile();

  function element(className, text) {
    const node = document.createElement("div");
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  const rankTooltip = document.createElement("div");
  rankTooltip.id = "ptl-body-tooltip";
  rankTooltip.className = "ptl-body-tooltip";
  rankTooltip.setAttribute("role", "tooltip");
  rankTooltip.hidden = true;
  document.body.append(rankTooltip);
  let tooltipArrow = null;

  function hideRankTooltip() {
    tooltipArrow?.removeAttribute("aria-describedby");
    tooltipArrow = null;
    rankTooltip.hidden = true;
  }

  function showRankTooltip(arrow, message) {
    hideRankTooltip();
    tooltipArrow = arrow;
    arrow.setAttribute("aria-describedby", rankTooltip.id);
    rankTooltip.textContent = message;
    rankTooltip.hidden = false;
    const rect = arrow.getBoundingClientRect();
    const width = rankTooltip.offsetWidth;
    const left = Math.max(8, Math.min(rect.left + rect.width / 2 - width / 2, window.innerWidth - width - 8));
    const top = rect.bottom + 8;
    rankTooltip.style.left = `${left}px`;
    rankTooltip.style.top = `${top}px`;
  }

  window.addEventListener("scroll", hideRankTooltip, true);
  window.addEventListener("resize", hideRankTooltip);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hideRankTooltip();
  });

  function createRow(creator) {
    const rank = creator.rank ?? 0;
    const creatorName = getCreatorName(creator);
    const supportersCount =
      typeof creator.supporters === "number"
        ? numbers.format(creator.supporters)
        : creator.supporters || "0";
    const points =
      typeof creator.points === "number"
        ? numbers.format(creator.points)
        : (creator.points ?? 0);

    const record = creator.match_record || creator.matches || {};
    const won = record.won ?? record.wins ?? 0;
    const drawn = record.drawn ?? record.draws ?? 0;
    const lost = record.lost ?? record.losses ?? 0;
    const noShow = record.no_show ?? record.noShow ?? 0;
    let matchesText = `${won}W · ${drawn}D · ${lost}L`;
    if (noShow > 0) {
      matchesText += ` · ${noShow}NS`;
    }

    const pnl = Number(creator.total_pnl ?? creator.live_pnl ?? 0);
    const pnlFormatted = `${pnl > 0 ? "+" : ""}${dollars.format(pnl)}`;
    const isPnlPositive = pnl > 0 || creator.total_pnl_direction === "up";

    const reward = creator.reward || {};
    const isFinaleSeat =
      reward.finale_seat === true || reward.type === "finale_seat";
    const rawLabel =
      reward.label ||
      (typeof reward.amount === "number"
        ? `$${numbers.format(reward.amount)}`
        : "$0");
    const rewardLabel =
      isFinaleSeat && !rawLabel.toLowerCase().includes("finale")
        ? `${rawLabel} & Finale seat`
        : rawLabel;

    const row = element("creators-table-row");
    if (highlightedUser && normalizeCreatorKey(creatorName) === normalizeCreatorKey(highlightedUser)) {
      row.classList.add("_1st-prize");
    }
    if (rank >= 1 && rank <= 4) row.classList.add("runners-up");

    function cell(name, ...contents) {
      const column = element(`creators-table-col ${name}`);
      const box = element(
        `creators-table-box${name === "reward" ? " last" : ""}`,
      );
      box.append(...contents);
      column.append(box);
      row.append(column);
    }

    const rankLabel = element("creators-table-box-rank clr", rank);
    if (medals[rank]) {
      const medal = document.createElement("img");
      medal.src = medals[rank];
      medal.alt = "";
      medal.className = "creators-table-medal";
      medal.width = 24;
      medal.height = 24;
      rankLabel.prepend(medal);
    }
    const hasRankChange = [creator.previous_rank, creator.rank].every(
      (value) => value != null && String(value).trim() !== "" && Number.isFinite(Number(value)),
    );
    if (hasRankChange) {
      const change = Number(creator.previous_rank) - Number(creator.rank);
      const direction = change > 0 ? "up" : "down";
      const message = change === 0
        ? "Rank unchanged"
        : direction === "up"
          ? `Rank increased by +${numbers.format(Math.abs(change))}`
          : `Rank decreased by -${numbers.format(Math.abs(change))}`;
      const arrow = document.createElement("span");
      arrow.className = `ptl-rank-arr ${direction}`;
      arrow.innerHTML = direction === "up"
        ? '<svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><path d="M5 1.5L9 7.5H1L5 1.5Z"></path></svg>'
        : '<svg width="9" height="9" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true"><path d="M5 8.5L1 2.5H9L5 8.5Z"></path></svg>';
      arrow.setAttribute("role", "img");
      arrow.setAttribute("aria-label", `Rank ${direction}`);
      arrow.tabIndex = 0;
      arrow.addEventListener("mouseenter", () => showRankTooltip(arrow, message));
      arrow.addEventListener("mouseleave", hideRankTooltip);
      arrow.addEventListener("focus", () => showRankTooltip(arrow, message));
      arrow.addEventListener("blur", hideRankTooltip);
      rankLabel.append(arrow);
    }
    cell("rank", rankLabel);
    const creatorNameElement = element("creators-table-box-txt", creatorName);
    if (creatorsTableConfig.popup.enabled) {
      creatorNameElement.classList.add("creator-popup-trigger");
      creatorNameElement.setAttribute("role", "button");
      creatorNameElement.setAttribute("tabindex", "0");
      creatorNameElement.setAttribute("aria-haspopup", "dialog");
      const openDetails = () => window.PTLCreatorPopup.open(creator);
      creatorNameElement.addEventListener("click", openDetails);
      creatorNameElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openDetails();
        }
      });
    }
    cell(
      "creators",
      creatorNameElement,
      element("creators-table-box-count", `${supportersCount} supporters`),
    );
    cell(
      "points",
      element("creators-table-box-count bg-font", `${points} pts`),
    );
    cell("matches", element("creators-table-box-count bg-font", matchesText));
    cell(
      "live",
      element(
        `creators-table-box-count bg-font${pnl < 0 ? " negative" : isPnlPositive ? " active" : ""}`,
        pnlFormatted,
      ),
    );

    if (isFinaleSeat) {
      const tag = element("creators-table-tag");
      const icon = document.createElement("img");
      icon.loading = "lazy";
      icon.src = creatorsTableConfig.images.finaleSeat;
      icon.alt = "";
      icon.className = "creators-table-tag-ico";
      tag.append(icon, element("creators-table-tag-txt", rewardLabel));
      cell("reward", tag);
    } else {
      cell("reward", element("creators-table-box-count bg-font", rewardLabel));
    }

    return row;
  }

  async function loadCreators() {
    if (isLoading) return;
    hideRankTooltip();
    isLoading = true;
    if (refreshButton) refreshButton.disabled = true;
    tableBody.setAttribute("aria-busy", "true");
    const loader = element(
      "creators-table-box-count creators-table-loader",
      creatorsTableConfig.messages.loading,
    );
    loader.setAttribute("role", "status");
    tableBody.replaceChildren(loader);
    const loaderDelay = new Promise((resolve) => {
      setTimeout(
        resolve,
        Math.max(0, Number(creatorsTableConfig.loaderDelayMs) || 0),
      );
    });
    try {
      const source = creatorsTableConfig.api_endpoint;
      let result = source;
      if (typeof source === "string") {
        const response = await fetch(source, {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error(`Leaderboard request failed: ${response.status}`);
        }
        result = await response.json();
      }
      if (!result?.success || !Array.isArray(result.data?.leaderboard)) {
        throw new Error("Invalid leaderboard response");
      }

      const rows = result.data.leaderboard.map(createRow);
      await loaderDelay;
      updateActiveProfile(result.data.leaderboard);
      updateMilestoneProgress(result.data.leaderboard);
      document.querySelectorAll(".cc-img-wrapper-inner").forEach((wrapper) => {
        wrapper.style.opacity = "1";
      });
      tableBody.replaceChildren(...rows);
      if (!rows.length) {
        const message = element(
          "creators-table-box-count creators-table-error",
          creatorsTableConfig.messages.empty,
        );
        message.style.display = "flex";
        tableBody.append(message);
      }
    } catch (error) {
      await loaderDelay;
      console.error("Unable to load creators:", error);
      const message = element(
        "creators-table-box-count creators-table-error",
        creatorsTableConfig.messages.error,
      );
      message.setAttribute("role", "alert");
      message.style.display = "flex";
      tableBody.replaceChildren(message);
    } finally {
      tableBody.setAttribute("aria-busy", "false");
      isLoading = false;
      if (refreshButton) refreshButton.disabled = false;
    }
  }

  refreshButton?.addEventListener("click", loadCreators);
  loadCreators();
});


/* Creator details popup */
(() => {
const PTL_CONFIG = {
  get fallbackImageUrl() { return creatorsTableConfig.popup.fallbackImageUrl; },
  apis: { 2: {
    id: "creator_league_2",
    get name() { return creatorsTableConfig.popup.leagueName; },
    get use_api() { return creatorsTableConfig.popup.use_api; },
  } },
};
function isModalEnabledForTab() { return creatorsTableConfig.popup.enabled; }
/* PIECE 0 */
const TraderDetailModal = {
  popupSelector: ".pricing-popup-main:not(.creator-popup-main)",
  popupClass: "pricing-popup-main",
  generateMatchRows: function (matchHistory, leagueId) {
    if (
      !matchHistory ||
      !Array.isArray(matchHistory) ||
      matchHistory.length === 0
    ) {
      return "";
    }

    return matchHistory
      .map((m, idx) => {
        const matchNum =
          typeof m.match === "number"
            ? `M${m.match}`
            : m.match || `M${idx + 1}`;
        const oppName = m.opponent || "Opponent";
        const oppColor =
          m.color ||
          (idx === 0
            ? "blue"
            : idx === 1
              ? "purple"
              : idx === 2
                ? "pink"
                : idx === 3
                  ? "green"
                  : idx === 4
                    ? "yellow"
                    : "burgundy");

        let resultClass = "";
        let resultText = m.result_label || m.result || "Won";
        const resLower = String(m.result || "").toLowerCase();

        const isInProgress =
          resLower.includes("progress") || resLower === "in_progress";

        if (isInProgress) {
          resultClass = "";
          resultText = "• In progress";
        } else if (resLower === "won" || resLower === "win") {
          resultClass = "won";
          resultText = "Won";
        } else if (resLower === "lost" || resLower === "loss") {
          resultClass = "lost";
          resultText = "Lost";
        } else if (resLower === "draw" || resLower === "drawn") {
          resultClass = "drawn";
          resultText = "Draw";
        }

        const userBalRaw =
          m.user_final_balance !== undefined && m.user_final_balance !== null
            ? m.user_final_balance
            : m.user_balance !== undefined
              ? m.user_balance
              : 50000;
        const userBalNum =
          typeof userBalRaw === "number"
            ? userBalRaw
            : parseFloat(String(userBalRaw).replace(/[$,+]/g, "")) || 0;
        const userBalPositive = userBalNum >= 0;
        const userBal = `${userBalPositive ? "+" : "-"}$${Math.abs(
          userBalNum,
        ).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;

        const oppBalRaw =
          m.opponent_final_balance !== undefined &&
          m.opponent_final_balance !== null
            ? m.opponent_final_balance
            : m.opponent_balance !== undefined
              ? m.opponent_balance
              : 50000;
        const oppBalNum =
          typeof oppBalRaw === "number"
            ? oppBalRaw
            : parseFloat(String(oppBalRaw).replace(/[$,+]/g, "")) || 0;
        const oppBalPositive = oppBalNum >= 0;
        const oppBal = `${oppBalPositive ? "+" : "-"}$${Math.abs(
          oppBalNum,
        ).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`;
        const compareBalances = ["open1", "open2", "creator_league_2"].includes(leagueId);
        const userBalColor = compareBalances
          ? userBalNum === oppBalNum
            ? "#8b8582"
            : userBalNum < oppBalNum ? "#ef4444" : "#03dc5d"
          : userBalPositive ? "#03dc5d" : "#ef4444";
        const oppBalColor = compareBalances
          ? "#8b8582"
          : oppBalPositive ? "#8b8582" : "#ab623e";
        let ptsRaw =
          m.points !== undefined && m.points !== null
            ? m.points
            : m.pts !== undefined && m.pts !== null
              ? m.pts
              : 0;
        let ptsNum =
          typeof ptsRaw === "number"
            ? ptsRaw
            : parseFloat(String(ptsRaw).replace(/[^\d.-]/g, ""));
        if (isNaN(ptsNum)) ptsNum = 0;
        const ptsPositive = ptsNum >= 0;
        let pts;
        if (
          typeof ptsRaw === "string" &&
          (ptsRaw.toLowerCase().includes("pts") ||
            ptsRaw.toLowerCase().includes("pt"))
        ) {
          pts = ptsRaw;
        } else {
          pts = `${ptsPositive ? "+" : ""}${ptsNum} pts`;
        }

        return `
<div class="creators-table-row track-tb-row ${isInProgress ? "is-in-progress in-progress" : ""}">
<div class="creators-table-col match"><div class="creators-table-box track-table"><div class="creators-table-box-rank gray-col">${escapeHtml(matchNum)}</div></div></div>
<div class="creators-table-col opponent"><div class="creators-table-box track-table"><div class="oppnt-box"><div class="oppnt-crcl ${oppColor}"></div><div class="creators-table-box-count track-table">${escapeHtml(oppName)}</div></div></div></div>
<div class="creators-table-col result"><div class="creators-table-box track-table"><div class="in-progs ${resultClass}"><div class="in-progs-txt">${escapeHtml(resultText)}</div></div></div></div>
<div class="creators-table-col finals"><div class="creators-table-box track-table rgt"><div class="creators-table-box-count fnl-track-table"><span class="fnl-bal-left" style="color: ${userBalColor};">${escapeHtml(userBal)}</span> <span class="fnl-bal-left-mid">vs</span> <span class="fnl-bal-rgt" style="color: ${oppBalColor};">${escapeHtml(oppBal)}</span></div></div></div>
<div class="creators-table-col final-points"><div class="creators-table-box track-table rgt"><div class="creators-table-box-count points-track-table ${!ptsPositive ? "red" : ""}" style="${!ptsPositive ? "color: #ef4444;" : ""}">${escapeHtml(pts)}</div></div></div>
</div>
`;
      })
      .join("");
  },

  renderLoading: function () {
    return `
<div class="pricing-popup-wrp" style="min-width: 360px; max-width: 500px; margin: 0 auto;">
<div class="pricing-popup-top" style="display: flex; justify-content: flex-end; padding-bottom: 0;">
<div class="pricing-popup-top-rgt">
<div class="plt-close-btn" title="Close modal">
<img src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6aabe63ef90ae5b44195b877_cross-ico.svg" loading="lazy" alt="Close" class="plt-close-btn-ico">
</div>
</div>
</div>
<div class="pricing-popup-loading-state" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; margin: 0 auto; width: 100%; min-height: 240px; box-sizing: border-box;">
<div class="ptl-spinner" style="margin: 0 auto 16px;"></div>
<div class="loading-text" style="text-align: center; width: 100%;">Loading trader details...</div>
</div>
</div>
`;
  },

  renderError: function (message) {
    return `
<div class="pricing-popup-wrp" style="min-width: 360px; max-width: 500px; margin: 0 auto;">
<div class="pricing-popup-top" style="display: flex; justify-content: flex-end; padding-bottom: 0;">
<div class="pricing-popup-top-rgt">
<div class="plt-close-btn" title="Close modal">
<img src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6aabe63ef90ae5b44195b877_cross-ico.svg" loading="lazy" alt="Close" class="plt-close-btn-ico">
</div>
</div>
</div>
<div class="pricing-popup-error-state" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; margin: 0 auto; width: 100%; min-height: 240px; box-sizing: border-box;">
<div class="pricing-popup-error-title" style="text-align: center; width: 100%;">Failed to load trader details</div>
<div class="pricing-popup-error-desc" style="text-align: center; width: 100%;">${escapeHtml(message || "Unable to connect to leaderboard service.")}</div>
<button type="button" class="pricing-popup-retry-btn" style="margin: 6px auto 0;">Retry</button>
</div>
</div>
`;
  },

  render: function (data, tabIndex, fallbackItem, creator = false) {
    const apiConfig = PTL_CONFIG.apis[tabIndex] || {
      name: "Open 1",
    };

    const payload = data && typeof data === "object" ? data : {};
    const user = payload.user || payload.data || fallbackItem || {};
    const currentMatch = payload.current_match || {};
    const matchHistory = payload.match_history || [];

    const rawTraderName =
      user.username ||
      user.display_handle ||
      user.creator ||
      user.full_name ||
      user.trader_name ||
      user.name ||
      (fallbackItem &&
        (fallbackItem.display_handle ||
          fallbackItem.username ||
          fallbackItem.name)) ||
      "Trader";
    const traderName = rawTraderName ? String(rawTraderName).trim() : "Trader";
    const rankNum =
      user.rank !== undefined && user.rank !== null
        ? user.rank
        : fallbackItem &&
            fallbackItem.rank !== undefined &&
            fallbackItem.rank !== null
          ? fallbackItem.rank
          : 1;
    const leagueName = apiConfig.name || "Open 1";
    const countryName =
      user.country && user.country.name
        ? user.country.name
        : typeof user.country === "string"
          ? user.country
          : "";
    // Company belongs to the clicked leaderboard row, not the details response.
    const companySource = fallbackItem || {};
    const companyName = getCompanyName(companySource);
    const companyLogo = getProfileImageUrl(
      companySource.company?.image_url,
      companySource.company_image_url,
    );
    const isFinale =
      user.status === "finale" ||
      user.status === "in_finale_position" ||
      (user.status_label &&
        String(user.status_label).toLowerCase().includes("finale")) ||
      (creator
        ? user.reward?.finale_seat === true
        : typeof rankNum === "number" && rankNum <= 4);
    const creatorRank = Number(user.rank ?? fallbackItem?.rank);
    const showPopupTag =
      !creator ||
      (Number.isInteger(creatorRank) && creatorRank >= 1 && creatorRank < 9);
    const finaleTagText = creator
      ? `${creatorRank}${{ 1: "st", 2: "nd", 3: "rd" }[creatorRank] || "th"} place`
      : user.status_label ||
        (isFinale ? "In Finale position" : `${leagueName} Leaderboard`);

    // 5 Stat Cards
    const pointsVal =
      user.points !== undefined && user.points !== null
        ? user.points
        : fallbackItem && fallbackItem.points !== undefined
          ? fallbackItem.points
          : 0;
    const pointsNum =
      typeof pointsVal === "number"
        ? pointsVal
        : parseFloat(String(pointsVal).replace(/[^\d.-]/g, "")) || 0;
    const pointsPositive = pointsNum >= 0;
    const pointsDisplay =
      pointsVal == null
        ? "0 pts"
        : typeof pointsVal === "string" &&
            (pointsVal.includes("pts") || pointsVal.includes("pt"))
          ? pointsVal
          : `${pointsVal} pts`;
    const recordDisplay =
      user.record && user.record.display
        ? user.record.display
        : user.record_label ||
          (user.record &&
            `${user.record.wins || 0}W · ${user.record.draws || 0}D · ${user.record.losses || 0}L`) ||
          "-";

    const rawPnl =
      user.total_pnl !== undefined && user.total_pnl !== null
        ? user.total_pnl
        : fallbackItem && fallbackItem.total_pnl !== undefined
          ? fallbackItem.total_pnl
          : 0;
    const numericPnl =
      typeof rawPnl === "number"
        ? rawPnl
        : parseFloat(String(rawPnl).replace(/[$,+]/g, "")) || 0;
    const pnlPositive = numericPnl >= 0;
    const pnlFormatted = `${pnlPositive ? "+" : "-"}$${Math.abs(
      numericPnl,
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    const matchesPlayed =
      user.matches_played !== undefined && user.matches_played !== null
        ? user.matches_played
        : fallbackItem && fallbackItem.matches_played !== undefined
          ? fallbackItem.matches_played
          : 0;
    const totalMatches = user.total_matches || currentMatch.total_matches || 8;
    const remainingMatches = Math.max(0, totalMatches - matchesPlayed);

    // Live Match Data
    const curMatchNum =
      currentMatch.match_number ||
      (matchesPlayed + 1 > totalMatches ? totalMatches : matchesPlayed + 1) ||
      1;
    const curTotalMatches = currentMatch.total_matches || totalMatches || 8;

    const rawStatusLabel = currentMatch.status_label || "";
    const isLive = String(rawStatusLabel).trim().toLowerCase() === "live";
    const liveMatchHeaderHTML = isLive
      ? `
<div class="live-match-wrp grn_clr">
<div class="live-match-crcl"></div>
<div class="live-match-txt">LIVE NOW · MATCH ${curMatchNum}${creator ? "" : ` OF ${curTotalMatches}`}</div>
</div>
`
      : `
<div class="live-match-wrp">
<div class="live-match-txt">MATCH ${curMatchNum} OF ${curTotalMatches}</div>
</div>
`;

    function getFlag(code) {
      const raw = code && typeof code === "object" ? code.code : code;
      const normalized = typeof raw === "string" ? raw.trim().toLowerCase() : "";
      return /^[a-z]{2}$/.test(normalized)
        ? `https://flagcdn.com/${normalized}.svg`
        : PTL_CONFIG.fallbackImageUrl;
    }

    const matchUser = currentMatch.user || {};
    const matchOpponent = currentMatch.opponent || {};

    const youName = matchUser.username || traderName;
    const youFlag = getFlag(matchUser.country || user.country);
    const youCountryName =
      (matchUser.country && matchUser.country.name) ||
      countryName ||
      "United States";
    const youBalance =
      matchUser.balance !== undefined && matchUser.balance !== null
        ? Number(matchUser.balance)
        : 50000;
    const youBalancePositive = youBalance >= 0;
    const youBalanceText = `${youBalancePositive ? "+" : "-"}$${Math.abs(
      youBalance,
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
    const youPnl =
      matchUser.pnl !== undefined && matchUser.pnl !== null
        ? Number(matchUser.pnl)
        : 0;
    const youPnlPositive = youPnl >= 0;
    const youPnlText = `${youPnlPositive ? "+" : "-"}$${Math.abs(
      youPnl,
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    let youTradeBlockHTML = "";
    if (matchUser.trades !== null && matchUser.trades !== undefined) {
      const youTradesText =
        matchUser.trades === 0
          ? "No trade"
          : matchUser.trades === 1
            ? "1 trade"
            : `${matchUser.trades} trades`;
      youTradeBlockHTML = `
<div class="ptl-live-trade-card-graph-dvd"></div>
<div class="ptl-live-trade-card-graph-trade">
<div class="ptl-live-trade-card-graph-trade-txt">${escapeHtml(youTradesText)}</div>
</div>
`;
    }

    const oppName = matchOpponent.username || "Opponent";
    const oppFlag = getFlag(matchOpponent.country);
    const oppCountryName =
      (matchOpponent.country && matchOpponent.country.name) ||
      "Opponent Country";
    const oppBalance =
      matchOpponent.balance !== undefined && matchOpponent.balance !== null
        ? Number(matchOpponent.balance)
        : 50000;
    const oppBalancePositive = oppBalance >= 0;
    const oppBalanceText = `${oppBalancePositive ? "+" : "-"}$${Math.abs(
      oppBalance,
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
    const oppPnl =
      matchOpponent.pnl !== undefined && matchOpponent.pnl !== null
        ? Number(matchOpponent.pnl)
        : 0;
    const oppPnlPositive = oppPnl >= 0;
    const oppPnlText = `${oppPnlPositive ? "+" : "-"}$${Math.abs(
      oppPnl,
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

    let oppTradeBlockHTML = "";
    if (matchOpponent.trades !== null && matchOpponent.trades !== undefined) {
      const oppTradesText =
        matchOpponent.trades === 0
          ? "No trade"
          : matchOpponent.trades === 1
            ? "1 trade"
            : `${matchOpponent.trades} trades`;
      oppTradeBlockHTML = `
<div class="ptl-live-trade-card-graph-dvd"></div>
<div class="ptl-live-trade-card-graph-trade">
<div class="ptl-live-trade-card-graph-trade-txt">${escapeHtml(oppTradesText)}</div>
</div>
`;
    }

    const totalBalance = youBalance + oppBalance;
    const rawPercent =
      totalBalance > 0 ? (youBalance / totalBalance) * 100 : 50;
    const progressPercent = Math.min(97, Math.max(3, rawPercent)).toFixed(2);
    const pnlDiff = youPnl - oppPnl;
    const isAhead = pnlDiff >= 0;
    const leadAmount = Math.abs(pnlDiff);
    const isZeroLead = Math.round(leadAmount) === 0;
    const leadText = isAhead
      ? `Player is ahead by $${Math.round(leadAmount).toLocaleString("en-US")} ▲`
      : `Player is behind by $${Math.round(leadAmount).toLocaleString("en-US")} ▼`;
    const leadClass = isAhead ? "is-lead green" : "is-behind red";

    let leadBtnHTML = "";
    if (!isZeroLead) {
      leadBtnHTML = `
<div class="ptl-live-trade-btn w-inline-block ${leadClass}">
<div class="ptl-live-trade-btn-txt">${escapeHtml(leadText)}</div>
</div>
`;
    }

    const flagImgUrl = creator
      ? getProfileImageUrl(user.image_url, user.company?.image_url)
      : getFlag(user.country);
    const flagHtml = `<img src="${escapeHtml(flagImgUrl)}" data-ptl-image-fallback loading="lazy" sizes="100vw" alt="${escapeHtml(countryName)}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;

    const matchRowsHTML = this.generateMatchRows(matchHistory, apiConfig.id);

    return `
<div class="pricing-popup-wrp">
<div class="pricing-popup-top">
<div class="pricing-popup-top-left">
<div class="pricing-popup-top-left-wrp">
<div class="pricing-popup-top-pro">
${flagHtml}
</div>
<div class="pricing-popup-top-left-cont">
<div class="pricing-popup-top-left-head">
  <div class="pricing-popup-top-left-cont-txt">${escapeHtml(traderName)}</div>
  ${
    showPopupTag
      ? `<div class="creators-table-tag popup-tag${apiConfig.id === "open1" && isEliminated(user) ? " eleminated" : ""}">
    <img loading="lazy" src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6aabc95eb50f16dab6ba9304_yell-star.svg" alt="" class="creators-table-tag-ico">
    <div class="creators-table-tag-txt">${escapeHtml(finaleTagText)}</div>
  </div>`
      : ""
  }
</div>
<div class="pricing-popup-top-left-head-txt${companyName === "-" ? " no-team" : ""}">
<span class="pricing-popup-team-label">Team:</span>
${companyName !== "-" ? `
<span class="pricing-popup-company">
<img src="${escapeHtml(companyLogo)}" alt="" width="24" height="24" class="pricing-popup-company-logo" data-ptl-image-fallback>
<span>${escapeHtml(companyName)}</span>
</span>
` : "No team"}
</div>
</div>
</div>
</div>
<div class="pricing-popup-top-rgt">
<div class="plt-close-btn" title="Close modal">
<img src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6aabe63ef90ae5b44195b877_cross-ico.svg" loading="lazy" alt="Close" class="plt-close-btn-ico">
</div>
</div>
</div>

<div class="pricing-popup-rank">
<div class="pricing-popup-rank-row">
<div class="pricing-popup-rank-col">
<div class="pricing-popup-rank-card">
<div class="pricing-popup-rank-num yellow">#${escapeHtml(rankNum)}</div>
<div class="pricing-popup-rank-desc">${escapeHtml(leagueName)} rank</div>
</div>
</div>
<div class="pricing-popup-rank-col"><div class="pricing-popup-stick"></div></div>
<div class="pricing-popup-rank-col">
<div class="pricing-popup-rank-card">
<div class="pricing-popup-rank-num ${!pointsPositive ? "pts-negative" : ""}" style="${!pointsPositive ? "color: #f9cfcf;" : ""}">${escapeHtml(pointsDisplay)}</div>
<div class="pricing-popup-rank-desc">Total points</div>
</div>
</div>
<div class="pricing-popup-rank-col"><div class="pricing-popup-stick"></div></div>
<div class="pricing-popup-rank-col">
<div class="pricing-popup-rank-card">
<div class="pricing-popup-rank-num">${escapeHtml(recordDisplay)}</div>
<div class="pricing-popup-rank-desc">Track record</div>
</div>
</div>
<div class="pricing-popup-rank-col"><div class="pricing-popup-stick"></div></div>
<div class="pricing-popup-rank-col">
<div class="pricing-popup-rank-card">
<div class="pricing-popup-rank-num ${pnlPositive ? "green" : "#ef4444"}" style="color: ${pnlPositive ? "#03dc5d" : "#ef4444"};">${escapeHtml(pnlFormatted)}</div>
<div class="pricing-popup-rank-desc">Total P&amp;L</div>
</div>
</div>
<div class="pricing-popup-rank-col"><div class="pricing-popup-stick"></div></div>
<div class="pricing-popup-rank-col">
<div class="pricing-popup-rank-card">
<div class="pricing-popup-rank-num">${escapeHtml(matchesPlayed)}${creator ? "" : ` of ${escapeHtml(totalMatches)}`}</div>
<div class="pricing-popup-rank-desc">Matches played</div>
</div>
</div>
</div>
</div>

<div class="live-match-wrp-body">
${
  creator && !payload.current_match
    ? `<div class="live-match-wrp no-current-match"><div class="live-match-txt">No live match found.</div></div>`
    : `
${liveMatchHeaderHTML}
<div class="ptl-live-trade-outr">
<div class="ptl-live-trade">
<img src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6aabecd199ad59a0d3d56f12_ptl-live-bg.png" loading="lazy" sizes="100vw" alt="" class="ptl-live-trade-bg">
<div class="ptl-live-trade-wrp">
<div class="ptl-live-trade-row">
  <div class="ptl-live-trade-col">
    <div class="ptl-live-trade-card">
      <div class="ptl-live-trade-card-top">
        <div class="ptl-live-trade-card-cuntr-outr">
          <div class="ptl-live-trade-card-cuntr">
            <img src="${escapeHtml(youFlag)}" data-ptl-image-fallback loading="lazy" alt="${escapeHtml(youCountryName)}" class="ptl-live-trade-card-cuntr-flag" style="object-fit: cover;">
          </div>
        </div>
        <div class="ptl-live-trade-card-top-cont">
          <div class="ptl-live-trade-card-top-cont-txt">PLAYER</div>
          <div class="ptl-live-trade-card-top-cont-name">${escapeHtml(youName)}</div>
        </div>
      </div>
      <div class="ptl-live-trade-card-btm">
        <div class="ptl-live-trade-card-btm-count ${youBalancePositive ? "" : "negative"}">${escapeHtml(youBalanceText)}</div>
        <div class="ptl-live-trade-card-graph">
          <div class="ptl-live-trade-card-graph-left" style="color: ${youPnlPositive ? "#03dc5d" : "#ef4444"};">
            <img src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6aabf283c9bbb30927f8ca81_grn-arr.png" loading="lazy" alt="" class="ptl-live-trade-card-graph-arr ${youPnlPositive ? "" : "is-down red"}" style="${youPnlPositive ? "" : "transform: rotate(180deg); filter: hue-rotate(-140deg) saturate(100%);"}">
            <div class="ptl-live-trade-card-graph-txt" style="color: ${youPnlPositive ? "#03dc5d" : "#ef4444"};">${escapeHtml(youPnlText)}</div>
          </div>
          ${youTradeBlockHTML}
        </div>
      </div>
    </div>
  </div>
  <div class="ptl-live-trade-col mid">
    <img src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6aabeec11976a225d8b717ca_vs-ico.png" loading="lazy" alt="" class="ptl-live-trade-mid-ico">
  </div>
  <div class="ptl-live-trade-col">
    <div class="ptl-live-trade-card right">
      <div class="ptl-live-trade-card-top right">
        <div class="ptl-live-trade-card-top-cont">
          <div class="ptl-live-trade-card-top-cont-txt">OPPONENT</div>
          <div class="ptl-live-trade-card-top-cont-name">${escapeHtml(oppName)}</div>
        </div>
        <div class="ptl-live-trade-card-cuntr-outr right">
          <div class="ptl-live-trade-card-cuntr">
            <img src="${escapeHtml(oppFlag)}" data-ptl-image-fallback loading="lazy" alt="${escapeHtml(oppCountryName)}" class="ptl-live-trade-card-cuntr-flag" style="object-fit: cover;">
          </div>
        </div>
      </div>
      <div class="ptl-live-trade-card-btm">
        <div class="ptl-live-trade-card-btm-count ${oppBalancePositive ? "" : "negative"}">${escapeHtml(oppBalanceText)}</div>
        <div class="ptl-live-trade-card-graph right">
          <div class="ptl-live-trade-card-graph-left" style="color: ${oppPnlPositive ? "#03dc5d" : "#ef4444"};">
            <img src="https://cdn.prod.website-files.com/679b064a680c614548672a06/6aabf283c9bbb30927f8ca81_grn-arr.png" loading="lazy" alt="" class="ptl-live-trade-card-graph-arr ${oppPnlPositive ? "" : "is-down red"}" style="${oppPnlPositive ? "" : "transform: rotate(180deg); filter: invert(38%) sepia(86%) saturate(2883%) hue-rotate(338deg) brightness(99%) contrast(92%);"}">
            <div class="ptl-live-trade-card-graph-txt" style="color: ${oppPnlPositive ? "#03dc5d" : "#ef4444"};">${escapeHtml(oppPnlText)}</div>
          </div>
          ${oppTradeBlockHTML}
        </div>
      </div>
    </div>
  </div>
</div>
<div class="ptl-live-trade-prgs"><div class="ptl-live-trade-prgs-inn"><div class="ptl-live-trade-prgs-wrp" style="width: ${progressPercent}%;"><div class="ptl-live-trade-prgs-skick"></div></div></div></div>
<div class="ptl-live-trade-btn-wrp">
  ${leadBtnHTML}
  <div class="ptl-live-trade-btm-txt" style="display: none;">Updated 2 hours 30 mins ago • Updates in 2 hours 12 mins</div>
</div>
</div>
</div>
</div>

`
}
<div class="track-record-main">
<div class="live-match-table-head">
<div class="live-match-table-head-left">TRACK RECORD · MATCH HISTORY</div>
${creator ? "" : `<div class="live-match-table-head-left rgt">${escapeHtml(leagueName)} · ${matchesPlayed} played, ${remainingMatches} remaining</div>`}
</div>
<div class="creators-table-main">
<div class="creators-table">
<div class="creators-table-head track-trable">
  <div class="creators-table-row">
    <div class="creators-table-col match"><div class="creators-table-box head track-table"><div class="creators-table-box-txt">Match</div></div></div>
    <div class="creators-table-col opponent"><div class="creators-table-box head track-table"><div class="creators-table-box-txt">Opponent</div></div></div>
    <div class="creators-table-col result"><div class="creators-table-box head track-table"><div class="creators-table-box-txt">Result</div></div></div>
    <div class="creators-table-col finals"><div class="creators-table-box head track-table rgt"><div class="creators-table-box-txt">Final balance</div></div></div>
    <div class="creators-table-col final-points"><div class="creators-table-box head track-table rgt"><div class="creators-table-box-txt">Points</div></div></div>
  </div>
</div>
<div class="creators-table-body track-tbl-bd">
  ${matchRowsHTML || '<div class="empty-state-text creator-empty-state-msg">No match history available.</div>'}
</div>
</div>
</div>
</div>
</div>
</div>
`;
  },

  open: async function (item, tabIndex, customUserId) {
    if (!item && !customUserId) return;
    if (!isModalEnabledForTab(tabIndex)) return;
    if (this === TraderDetailModal) CreatorDetailModal.close();

    let popup = document.querySelector(this.popupSelector);
    if (!popup) {
      popup = document.createElement("div");
      popup.className = this.popupClass;
      popup.setAttribute("role", "dialog");
      popup.setAttribute("aria-modal", "true");
      popup.setAttribute("aria-label", this.dialogLabel || "Trader details");
      document.body.appendChild(popup);
    }

    const requestId = (this.requestId = (this.requestId || 0) + 1);
    popup.innerHTML = this.renderLoading();
    popup.classList.remove("is-hidden");
    popup.classList.add("is-open");
    document.body.classList.add("ptl-modal-open");
    this.bindEvents(popup, item, tabIndex, customUserId);

    const apiConfig = PTL_CONFIG.apis[tabIndex] || {};
    const userId =
      customUserId ||
      (item &&
        (item.user_id !== undefined && item.user_id !== null
          ? item.user_id
          : item.userId !== undefined && item.userId !== null
            ? item.userId
            : item.id));

    const baseUrl = creatorsTableConfig.detailsEndpoint.trim();
    if (this === CreatorDetailModal && isApiEnabled(apiConfig) && !userId) {
      popup.innerHTML = this.renderError(
        "This creator has no user ID available.",
      );
      this.bindEvents(popup, item, tabIndex, userId);
      return;
    }
    if (isApiEnabled(apiConfig) && baseUrl && userId) {
      try {
        const detailsUrl = `${baseUrl}?user_id=${encodeURIComponent(userId)}`;
        console.log(
          "[PTL Leaderboard] Fetching trader details endpoint:",
          detailsUrl,
        );

        const response = await fetch(detailsUrl, {
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(
            `HTTP ${response.status}: Failed to load trader details`,
          );
        }

        const json = await response.json();
        if (json && json.success === false) {
          throw new Error(
            json.message || json.error || "Failed to load trader details",
          );
        }

        if (requestId !== this.requestId) return;
        popup.innerHTML = this.render(json, tabIndex, item);
        this.bindEvents(popup, item, tabIndex, userId);
      } catch (err) {
        if (requestId !== this.requestId) return;
        console.error("[PTL Modal] Error fetching trader details:", err);
        popup.innerHTML = this.renderError(
          err.message || "Unable to connect to leaderboard service.",
        );
        this.bindEvents(popup, item, tabIndex, userId);
      }
    } else {
      let demoData =
        apiConfig.demo_individual_data ||
        (typeof PTL_DEMO_DATA !== "undefined"
          ? PTL_DEMO_DATA.creator_league_2_individual_data
          : null);
      if (this === CreatorDetailModal) demoData = { user: item };
      popup.innerHTML = this.render(demoData, tabIndex, item);
      this.bindEvents(popup, item, tabIndex, userId);
    }
  },

  bindEvents: function (popup, item, tabIndex, userId) {
    if (!popup) return;
    const closeBtns = popup.querySelectorAll(".plt-close-btn");
    closeBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.close();
      });
    });

    const retryBtn = popup.querySelector(".pricing-popup-retry-btn");
    if (retryBtn) {
      retryBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.open(item, tabIndex, userId);
      });
    }

    popup.onclick = (e) => {
      if (e.target === popup) {
        this.close();
      }
    };
  },

  close: function () {
    this.requestId = (this.requestId || 0) + 1;
    const popup = document.querySelector(this.popupSelector);
    if (popup) {
      popup.classList.remove("is-open");
      popup.classList.add("is-hidden");
      document.body.classList.remove("ptl-modal-open");
    }
  },

  init: function () {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const popup = document.querySelector(this.popupSelector);
        if (popup && popup.classList.contains("is-open")) {
          this.close();
        }
      }
    });
  },
};


const CreatorDetailModal = {
  ...TraderDetailModal,
  popupSelector: ".creator-popup-main",
  popupClass: "pricing-popup-main creator-popup-main",
  dialogLabel: "Creator details",
  open: function (item, tabIndex = 2, userId) {
    TraderDetailModal.close();
    return TraderDetailModal.open.call(this, item, 2, userId);
  },
  renderLoading: function () {
    return TraderDetailModal.renderLoading().replace(
      "Loading trader details",
      "Loading creator details",
    );
  },
  renderError: function (message) {
    return TraderDetailModal.renderError(message).replace(
      "Failed to load trader details",
      "Failed to load creator details",
    );
  },
  render: function (response, tabIndex, fallbackItem) {
    const payload = response?.data || response || {};
    const user = { ...fallbackItem, ...payload.user };
    user.username = user.display_handle || user.username || user.full_name;
    user.total_matches = user.total_game_days ?? payload.total_game_days;
    const normalized = {
      ...payload,
      user,
      match_history: (payload.match_history || []).map((match) => ({
        ...match,
        match: match.game_day != null ? `Day ${match.game_day}` : match.match,
      })),
    };
    return TraderDetailModal.render.call(
      this,
      normalized,
      2,
      fallbackItem,
      true,
    );
  },
};

function getCompanyName(item) {
  const sources = [
    typeof item.company === "string" ? item.company : item.company?.name,
    item.company_name,
  ];
  return sources.find((name) =>
    typeof name === "string" && name.trim() &&
    !["-", "not_found", "null", "undefined"].includes(name.trim().toLowerCase())
  )?.trim() || "-";
}

function getProfileImageUrl(...sources) {
  return sources.find((source) =>
    typeof source === "string" && source.trim() &&
    !["not_found", "null", "undefined"].includes(source.trim().toLowerCase())
  )?.trim() || PTL_CONFIG.fallbackImageUrl;
}

function initImageFallbacks() {
  document.addEventListener("error", (event) => {
    const image = event.target;
    if (!(image instanceof HTMLImageElement) ||
        !image.hasAttribute("data-ptl-image-fallback") ||
        !image.closest(".creator-popup-main")) return;
    // Remove the marker first so a failed fallback cannot trigger a retry loop.
    image.removeAttribute("data-ptl-image-fallback");
    if (image.getAttribute("src") !== PTL_CONFIG.fallbackImageUrl) {
      image.src = PTL_CONFIG.fallbackImageUrl;
    }
  }, true);
}

function isApiEnabled(apiConfig) {
  if (!apiConfig) return Boolean(PTL_CONFIG.use_api !== false);
  if (apiConfig.use_api !== undefined) return Boolean(apiConfig.use_api);
  if (apiConfig.is_live !== undefined) return Boolean(apiConfig.is_live);
  if (PTL_CONFIG.use_api !== undefined) return Boolean(PTL_CONFIG.use_api);
  return true;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isEliminated(item) {
  return (
    String(item?.status || "")
      .trim()
      .toLowerCase() === "eliminated"
  );
}


  window.PTLCreatorPopup = {
    open: (creator, userId) => CreatorDetailModal.open(creator, 2, userId),
    close: () => CreatorDetailModal.close(),
  };
  CreatorDetailModal.init();
  initImageFallbacks();
})();
