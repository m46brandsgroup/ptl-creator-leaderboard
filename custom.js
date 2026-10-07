/*-- part 1 --*/
const creatorMilestoneConfig = {
  tiers: ["lemonade stand", "start up", "corporation", "monopoly"],
  creator_thresholds: {
    "itskatchii": [8562, 12033, 14115, 18049],
    "penta": [4903, 6890, 8083, 10335],
    "tminnzy": [5824, 8185, 9601, 12277],
    "pikaboo irl": [2361, 3318, 3892, 4976],
    "awake": [4355, 6120, 7180, 9181],
    "nemo": [11015, 15480, 18160, 23221],
    "esfandtv": [4407, 6193, 7265, 9290],
    "coopertv": [4340, 6100, 7155, 9149],
    "nagzz": [6083, 8549, 10028, 12823],
    "frodan": [6812, 9573, 11230, 14360],
    "varsitygaming": [6460, 9079, 10651, 13619],
    "arteezy": [2631, 3697, 4337, 5546],
    "thijs": [4007, 5632, 6606, 8447],
    "juliakins": [4544, 6386, 7491, 9578],
    "syanne": [5014, 7046, 8266, 10569],
    "qojqva": [4477, 6292, 7381, 9438],
  },
  fallback_thresholds: [3700, 4500, 5200, 7800],
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
  developerMode: true,
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
};

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
    try {
      return normalizeUsername(decodeURIComponent(username));
    } catch {
      return normalizeUsername(username);
    }
  }

  const highlightedUser = getHighlightedUser();

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
      (item) => highlightedUser && normalizeUsername(getCreatorName(item)) === highlightedUser,
    );
    const name = profile.querySelector(".cc-usr-name>div");
    const image = profile.querySelector(".cc-img-prof");
    if (name) name.textContent = creator ? getCreatorName(creator) : "Creator unavailable";
    if (image) {
      const imageUrl = creator?.image_url || creator?.company?.image_url;
      image.alt = creator ? getCreatorName(creator) : "";
      image.hidden = !imageUrl;
      image.onerror = () => { image.hidden = true; };
      if (imageUrl) image.src = imageUrl;
      else image.removeAttribute("src");
    }
  }

  updateActiveProfile([]);

  const milestoneAnimations = Array.from(document.querySelectorAll(".milestn-step-main"), (section) => ({
    section,
    visible: false,
    frame: null,
    progress: 0,
    render: null,
    target: 0,
    start: 0,
    elapsed: 0,
    hasData: false,
    glowCard: null,
    glowTimer: null,
  }));

  function animateMilestones(state) {
    cancelAnimationFrame(state.frame);
    if (!state.visible || !state.render || !state.hasData) return;
    const start = state.start;
    const target = state.target;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animationDurationMs = 3000;
    const staggerDelayMs = 280;
    const startedAt = performance.now() - state.elapsed;
    function tick(now) {
      state.elapsed = reducedMotion ? animationDurationMs : Math.min(animationDurationMs, now - startedAt);
      const elapsed = state.elapsed / animationDurationMs;
      const eased = 1 - Math.pow(1 - elapsed, 3);
      state.progress = start + (target - start) * eased;
      state.render(state.progress);
      const cards = state.section.querySelectorAll(".milestn-step-each-items");
      cards.forEach((card, index) => {
        const delay = index * staggerDelayMs;
        const duration = Math.max(1, animationDurationMs - (cards.length - 1) * staggerDelayMs);
        const fraction = reducedMotion ? 1 : Math.min(1, Math.max(0, (state.elapsed - delay) / duration));
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const state = milestoneAnimations.find((item) => item.section === entry.target);
        state.visible = entry.isIntersecting;
        if (state.visible) animateMilestones(state);
        else cancelAnimationFrame(state.frame);
      });
    }, { threshold: 0.15 });
    milestoneAnimations.forEach((state) => observer.observe(state.section));
  } else {
    milestoneAnimations.forEach((state) => { state.visible = true; });
  }

  function updateMilestoneProgress(creators) {
    const normalizeKey = (value) => normalizeUsername(value).replace(/[^a-z0-9]/g, "");
    const userKey = normalizeKey(highlightedUser);
    const team = staticMatchData.teams.find((item) =>
      userKey && [item.creator_key, item.creator_name, ...item.creator_aliases]
        .some((alias) => normalizeKey(alias) === userKey),
    );
    const userKeys = new Set(
      [highlightedUser, team?.creator_name, ...(team?.creator_aliases || [])]
        .filter(Boolean).map(normalizeKey),
    );
    const creator = creators.find((item) => userKeys.has(normalizeKey(getCreatorName(item))));
    const thresholdEntry = Object.entries(creatorMilestoneConfig.creator_thresholds)
      .find(([name]) => userKeys.has(normalizeKey(name)));
    const thresholds = thresholdEntry?.[1] || creatorMilestoneConfig.fallback_thresholds;
    const toPoints = (value) => Number.isFinite(Number(value)) ? Number(value) : 0;
    const totalPoints = toPoints(creator?.creator_points) + toPoints(creator?.team_points);
    const monopolyThreshold = thresholds[thresholds.length - 1];
    const progress = Math.min(100, Math.max(0, totalPoints / monopolyThreshold * 100));
    const nextTierIndex = thresholds.findIndex((threshold) => totalPoints < threshold);
    const targetThreshold = nextTierIndex === -1 ? monopolyThreshold : thresholds[nextTierIndex];
    const remainingPoints = Math.max(0, targetThreshold - totalPoints);

    document.querySelectorAll(".milestn-step-ftr-head-txt").forEach((heading) => {
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

    const lastReachedIndex = thresholds.reduce((last, threshold, index) =>
      creator && totalPoints >= threshold ? index : last, -1);

    milestoneAnimations.forEach((state) => {
      state.start = state.progress;
      state.elapsed = 0;
      state.hasData = Boolean(creator);
      state.target = progress;
      state.render = (displayedProgress) => {
        state.section.querySelectorAll(".milestn-step-prgs-count").forEach((bar) => {
          bar.style.width = `${displayedProgress}%`;
        });
        let lastActiveCard = null;
        state.section.querySelectorAll(".milestn-step-each-items").forEach((item, index) => {
          const reached = Boolean(creator) && totalPoints >= thresholds[index]
            && displayedProgress >= thresholds[index] / monopolyThreshold * 100;
          item.classList.toggle("active", reached);
          item.classList.toggle("inactive", !reached);
          if (item !== state.glowCard || !reached) item.classList.remove("glow");
          if (reached && index === lastReachedIndex) lastActiveCard = item;
        });
        if (lastActiveCard !== state.glowCard) {
          clearTimeout(state.glowTimer);
          state.glowCard?.classList.remove("glow");
          state.glowCard = lastActiveCard;
          state.glowTimer = lastActiveCard ? setTimeout(() => {
            if (state.glowCard === lastActiveCard && lastActiveCard.classList.contains("active")) {
              lastActiveCard.classList.add("glow");
            }
          }, 500) : null;
        }
      };
      state.render(state.progress);
      animateMilestones(state);
    });
  }

  updateMilestoneProgress([]);

  function updateOpponentProfile() {
    const profile = document.querySelector(".milestn-head-top-col.third");
    if (!profile) return;

    const normalizeKey = (value) => normalizeUsername(value).replace(/[^a-z0-9]/g, "");
    const userKey = normalizeKey(highlightedUser);
    const team = staticMatchData.teams.find((item) =>
      userKey && [item.creator_key, item.creator_name, ...item.creator_aliases, ...item.campaign_aliases]
        .some((alias) => normalizeKey(alias) === userKey),
    );
    const member = team?.campaign_member;
    const name = profile.querySelector(".cc-usr-name>div");
    const image = profile.querySelector(".cc-img-prof");
    if (name) name.textContent = member?.name || "Opponent unavailable";
    if (image) {
      image.alt = member?.name || "";
      image.hidden = !member?.image_url;
      image.onerror = () => { image.hidden = true; };
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
    if (highlightedUser && normalizeUsername(creatorName) === highlightedUser) {
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

    const rankLabel = element("creators-table-box-rank", rank);
    if (medals[rank]) {
      const medal = document.createElement("img");
      medal.src = medals[rank];
      medal.alt = "";
      medal.className = "creators-table-medal";
      medal.width = 24;
      medal.height = 24;
      rankLabel.prepend(medal);
    }
    cell("rank", rankLabel);
    cell(
      "creators",
      element("creators-table-box-txt", creatorName),
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
