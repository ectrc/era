import { AxiosError } from "axios";
import { axiosClient } from "./client";
import { useMe } from "src/state/me";

type BannerResponse = {
  data: Array<Banner>;
};
export const banners = async () => {
  const response = await axiosClient
    .get<BannerResponse>("/launcher/banners", {
      headers: {
        Authorization: `bearer ${useMe.getState().auth}`,
      },
    })
    .catch((error: AxiosError) => error);

  if (response instanceof AxiosError || response === null) {
    return [
      {
        data: [
          {
            background: "generic_audio_video",
            body: "Season 7, with the slogan **You Better Watch Out**, was the seventh season of **Fortnite**.",
            build: {
              build: "7.40-CL-5046157",
              name: "Fortnite 7.40",
              season: { name: "Season 7" },
              uuid: "c2258301-017b-4b6b-89e8-9c5ffea5767c",
            },
            header: "You Better Watch Out",
            meta: {
              audio:
                "https://cdn.discordapp.com/attachments/1133049187362160752/1185940636017369179/y2mate.is_-_Fortnite_Festive_Lobby_Music_C1S7_Battle_Pass_-V48HXBP41vs-192k-1702820669.mp3?ex=65917049&is=657efb49&hm=62f9825b2f97fa03f704292822a8b90958c2b8e23103ac6ea00b743fdc713ae9&",
              background:
                "https://cdn.discordapp.com/attachments/1065028039500640286/1181718747942236240/7.40_2023.12.05_-_22.06.10.38.DVR_-_Trim.mp4?ex=658b4ed8&is=6578d9d8&hm=c8c9e99659c24781d6419868b5efb9684f7b1557cea79b7e1d086ebf376fb62f&",
              background_styles: { filter: "brightness(0.65)" },
              background_v:
                "https://cdn.discordapp.com/attachments/1029738528382406697/1181705877032534136/Untitled_video_-_Made_with_Clipchamp_4.mp4?ex=6582085c&is=656f935c&hm=99628f0ba7fe649543096a5782d90d988bea5ec0207f66c9d0e4b45e02da9cbb&",
              blurhash: "LTA-D4yZRPROD%M{o#ogotxZj]a}",
              coming_soon: false,
              index: 15,
              interval: 15000,
              interval_v: 50000,
              shows_countdown: false,
              shows_volume_control: true,
              tags: ["players", "queue"],
            },
            starts_at: "2023-12-17T19:00:00Z",
          },
          {
            background: "generic",
            body: "Queue up in tournaments to test your **skill**! Score at least 120 points in a session and obtain 3000 V-Bucks!",
            build: {
              build: "7.40-CL-5046157",
              name: "Fortnite 7.40",
              season: { name: "Practice Event - Daily Trials" },
              uuid: "c2258301-017b-4b6b-89e8-9c5ffea5767c",
            },
            header: "PRACTICE TOURNAMENT SOLO",
            meta: {
              background:
                "https://cdn.erafn.org/tournaments/alpha/playlist.png",
              background_styles: { filter: "brightness(0.75)" },
              blurhash: "LUA:5VV|KnRWW1jFVvb]N2j?nObI",
              body_styles: { color: "#ACFFD3", fontWeight: 900 },
              header_styles: { color: "#FFF736" },
              headline_styles: {
                color: "#ffffff",
                fontFamily: "system-ui",
                fontWeight: 900,
              },
              index: 2,
              shows_countdown: true,
              tags: [["_message", "date", "Jan. 22nd - Jan. 24th"]],
            },
            starts_at: "2024-01-22T18:00:00Z",
          },
        ],
      } as BannerResponse,
      null,
    ] as const;
  }

  return [response.data, null] as const;
};

type ShopResponse = {
  data: {
    daily: ShopStorefront;
    featured: ShopStorefront;
    unique: string;
  };
};

export const shop = async () => {
  const response = await axiosClient
    .get<ShopResponse>("/launcher/shop", {
      headers: {
        Authorization: `bearer ${useMe.getState().auth}`,
      },
    })
    .catch((error: AxiosError) => error);

  if (response instanceof AxiosError || response === null) {
    return [
      {
        data: {
          daily: {
            content: [
              [
                {
                  item: {
                    category: "Biker Brigade",
                    description: "Glide down in a blaze of glory.",
                    featured_image:
                      "https://fortnite-api.com/images/cosmetics/br/glider_id_064_biker/featured.png",
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/glider_id_064_biker/icon.png",
                    name: "Blaze",
                    rarity: "uncommon",
                    type: "glider",
                  },
                  price: 500,
                },
                {
                  item: {
                    category: null,
                    description: "No autographs please.",
                    featured_image:
                      "https://fortnite-api.com/images/cosmetics/br/eid_popdance01/featured.png",
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/eid_popdance01/icon.png",
                    name: "Star Power",
                    rarity: "epic",
                    type: "emote",
                  },
                  price: 800,
                },
                {
                  item: {
                    category: null,
                    description: "Rare brawler outfit.",
                    featured_image:
                      "https://fortnite-api.com/images/cosmetics/br/cid_021_athena_commando_f/featured.png",
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/cid_021_athena_commando_f/icon.png",
                    name: "Brawler",
                    rarity: "rare",
                    type: "skin",
                  },
                  price: 1200,
                },
                {
                  item: {
                    category: null,
                    description:
                      "Climb your way to the top with the mountaineering inspired Cliffhanger Pickaxe.",
                    featured_image: null,
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/skiicepickaxe/icon.png",
                    name: "Cliffhanger",
                    rarity: "rare",
                    type: "pickaxe",
                  },
                  price: 800,
                },
                {
                  item: {
                    category: null,
                    description: "What's so funny?",
                    featured_image:
                      "https://fortnite-api.com/images/cosmetics/br/eid_laugh/featured.png",
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/eid_laugh/icon.png",
                    name: "Laugh It Up",
                    rarity: "rare",
                    type: "emote",
                  },
                  price: 500,
                },
                {
                  item: {
                    category: null,
                    description: "Rare special forces outfit.",
                    featured_image:
                      "https://fortnite-api.com/images/cosmetics/br/cid_020_athena_commando_m/featured.png",
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/cid_020_athena_commando_m/icon.png",
                    name: "Special Forces",
                    rarity: "rare",
                    type: "skin",
                  },
                  price: 1200,
                },
              ],
            ],
            expires_at: "2024-01-24T23:59:59Z",
          },
          featured: {
            content: [
              [
                {
                  item: {
                    category: "Vanishing Point",
                    description: "Take over the competition.",
                    featured_image:
                      "https://fortnite-api.com/images/cosmetics/br/cid_190_athena_commando_m_streetracerwhite/featured.png",
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/cid_190_athena_commando_m_streetracerwhite/icon.png",
                    name: "Overtaker",
                    rarity: "epic",
                    type: "skin",
                  },
                  price: 1500,
                },
                {
                  item: {
                    category: "Vanishing Point",
                    description: "Create a whirlwind.",
                    featured_image:
                      "https://fortnite-api.com/images/cosmetics/br/glider_id_062_streetracerwhite/featured.png",
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/glider_id_062_streetracerwhite/icon.png",
                    name: "White Squall",
                    rarity: "epic",
                    type: "glider",
                  },
                  price: 1200,
                },
                {
                  item: {
                    category: "Vanishing Point",
                    description: "Break away from the pack.",
                    featured_image:
                      "https://fortnite-api.com/images/cosmetics/br/cid_188_athena_commando_f_streetracerwhite/featured.png",
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/cid_188_athena_commando_f_streetracerwhite/icon.png",
                    name: "Whiteout",
                    rarity: "epic",
                    type: "skin",
                  },
                  price: 1500,
                },
              ],
              [
                {
                  item: {
                    category: "Fort Knights",
                    description: "The red menace of Anarchy Acres.",
                    featured_image:
                      "https://fortnite-api.com/images/cosmetics/br/cid_034_athena_commando_f_medieval/featured.png",
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/cid_034_athena_commando_f_medieval/icon.png",
                    name: "Red Knight",
                    rarity: "legendary",
                    type: "skin",
                  },
                  price: 2000,
                },
                {
                  item: {
                    category: "Fort Knights",
                    description: "Wield, smite, repeat.",
                    featured_image:
                      "https://fortnite-api.com/images/cosmetics/br/pickaxe_id_066_flintlockred/featured.png",
                    image:
                      "https://fortnite-api.com/images/cosmetics/br/pickaxe_id_066_flintlockred/icon.png",
                    name: "Crimson Axe",
                    rarity: "rare",
                    type: "pickaxe",
                  },
                  price: 800,
                },
              ],
            ],
            expires_at: "2024-01-24T23:59:59Z",
          },
          unique:
            "09b0848a44404b2abe5026205eb4e4cee5c6ef61906f45618b56b9aa4532a956",
        },
      } as ShopResponse,
      null,
    ] as const;
  }

  return [response.data, null] as const;
};

type UserResponse = {
  data: User;
};

export const user = async () => {
  const response = await axiosClient
    .get<UserResponse>("/launcher/user", {
      headers: {
        Authorization: `bearer ${useMe.getState().auth}`,
      },
    })
    .catch((error: AxiosError) => error);

  if (response instanceof AxiosError || response === null) {
    return [
      {
        data: {
          avatar: "https://cdn.discordapp.com/avatars/1187385098271971334/",
          character: {
            icon: "https://fortnite-api.com/images/cosmetics/br/cid_286_athena_commando_f_neoncat/icon.png",
          },
          currency: 120,
          discord: "1187385098271971334",
          role: { color: "#94a3b8", name: "Member" },
          roles: ["1168273420925018214", "1015696679585976351"],
          username: "Anonymous",
          uuid: "2242e238-9999-4f47-b159-1b6886d7030a",
        },
      } as UserResponse,
      null,
    ] as const;
  }

  return [response.data, null] as const;
};

type UserStatsResponse = {
  data: UserStats;
};

export const stats = async () => {
  const response = await axiosClient
    .get<UserStatsResponse>("/launcher/user/stats", {
      headers: {
        Authorization: `bearer ${useMe.getState().auth}`,
      },
    })
    .catch((error: AxiosError) => error);

  if (response instanceof AxiosError || response === null) {
    return [
      {
        data: {
          kdr: 1,
          matches: 200,
          time: 9999,
          wins: 31,
        },
      } as UserStatsResponse,
      null,
    ] as const;
  }

  return [response.data, null] as const;
};

type BlogsResponse = {
  data: Blog[];
};

export const blogs = async () => {
  const response = await axiosClient
    .get<BlogsResponse>("/launcher/news/posts", {
      headers: {
        Authorization: `bearer ${useMe.getState().auth}`,
      },
    })
    .catch((error: AxiosError) => error);

  if (response instanceof AxiosError || response === null) {
    return [
      {
        data: [
          {
            accent: "#8b5cf6",
            author: "[ERA] AidasP",
            body: "## TOURNAMENTS\r\nCompetitive finally arrives on Project Era!\r\n\r\n*Grab the Tournaments role in our Discord guild to remain up-to-date with every tournament news!*\r\n\r\nOver the next week, we'll be hosting **Practice Solo**, **Practice Duo** and weekly **Weekend Night Fortnite** tournaments.\r\n\r\n\r\n### **Practice Solo - Daily Trials**\r\n- Session 1: Jan 22nd 6PM-11PM UTC\r\n- Session 2: Jan 23rd 6PM-11PM UTC\r\n- Session 3: Jan 24th 6PM-11PM UTC\r\n\r\n\r\n### **Practice Duo - Daily Trials**\r\n- Session 1: Jan 25th 6PM-11PM UTC\r\n\r\n### **Weekend Night Fortnite**\r\n- Session 1: Every Friday 6PM-11PM UTC\r\n- Session 2: Every Saturday 6PM-11PM UTC\r\n- Session 3: Every Sunday 6PM-11PM UTC\r\n\r\n## WEEK 5\r\n*Week 5* quests are now available for you to complete! \r\n\r\n## 14 DAYS OF FORTNITE, WEEK 3 & WEEK 4 CHALLENGES FIXES\r\nBroken challenges from *14 Days Of Fortnite*, *Week 3* or *Week 4* challenge bundles have been fixed or autocompleted.",
            header: "Competitive",
            id: 15,
            image:
              "https://cdn2.unrealengine.com/Fortnite%2Ffortnite-game%2Ftournaments%2FPlaylistTile_BetaTournament-1024x512-54198b4fdfd17d571aba81c216122853bacc83a6.png",
            inserted_at: "2024-01-21T17:51:36",
            meta: {},
            tags: ["Tournaments", "Competitive"],
            views: 1151,
          },
          {
            accent: "#06b6d4",
            author: "[ERA] danii",
            body: "# WEEK 2 CHALLENGES & FIXES \r\n*Week 2* challenges are now available!  \r\n# 14 DAYS OF FORTNITE CHALLENGES FIXES  \r\n* **Sgt. Winter** challenges have been fixed.\r\n* **Fly through golden rings in an X-4 Stormwing plane** has been fixed.\r\n* **Hit a player with a snowball in different matches** has been fixed.\r\n# FIXED PROGRESSION \r\nWe have also fixed some accounts not being able to progress (Battle Pass, Levels..)\r\n# NEW YEAR EVENT \r\nA short **mini-event** will take place on **January 1st, 2024**, for each timezone (the event will replay every hour).\r\n\r\nHappy holidays from the Project Era team ",
            header: "SEASON 7 WEEK 2",
            id: 33,
            image:
              "https://media.discordapp.net/attachments/1133049187362160752/1188489575019069551/image.png?ex=659ab62b&is=6588412b&hm=6c43507d3d243db6665d55c5ebecb144da05d61de25cf6e22b3e3c667a505e99&=&format=webp&quality=lossless&width=1197&height=670",
            inserted_at: "2023-12-24T16:09:28",
            meta: {},
            tags: ["Season7", "Update"],
            views: 9241,
          },
          {
            accent: "#06b6d4",
            author: "[ERA] AidasP",
            body: "**Creative** is now available along with **14 Days of Fortnite** Challenges!\r\n\r\nCreative is currently in **BETA**. We currently feature:\r\n* Island saving\r\n* Devices, prefabs\r\n* Minigames\r\n\r\nThe following features do not yet work:\r\n* Editing island permissions\r\n* Choosing a different island preset. The default preset is currently enforced.\r\n* Island resetting\r\n\r\nDue to the early stage of development in which creative is in, you may encounter several bugs. We're actively working on resolving those.\r\n\r\n**NOTE**: *You might experience excessive Creative queue times due to high load demands. We're actively working on adding new servers.",
            header: "Creative",
            id: 32,
            image:
              "https://cdn.discordapp.com/attachments/1133049187362160752/1187156976912830564/Fortnite2Fblog2Fcreative2FCM07_News_Featured_CreativeMode_Announce-1920x1080-f2b3606efe82d43a4a89ba8efbb00b630641e754.png?ex=6595dd17&is=65836817&hm=383f68993cb746672fa69476ec93d485079f971874a309e9a737e5f57e0bd948&",
            inserted_at: "2023-12-21T00:21:17",
            meta: {},
            tags: ["Creative", "Season 7"],
            views: 5931,
          },
          {
            accent: "#06b6d4",
            author: "[ERA] danii",
            body: "**Season 7 (Version 7.40)** is now available on Project Era servers  \r\n**If you already have 7.40 installed** from a third party launcher, you can import it on the Project Era launcher.\r\n## VOICE CHAT & GIFTING   \r\n**Voice Chat** has been re-added and improved after being disabled for several months. \r\n\r\n**Gifting** has been re-enabled  \r\n## BACKBLINGS & COMPENSATION  \r\n**Item Shop** skins now come with backblings. \r\n\r\nPlayers have been compensated with every missing backbling that they were meant to receive.\r\n## SKULL TROOPER BACKBLING CHALLENGES  \r\nOwners of the **Skull Trooper** skin were granted the challenges to obtain the Skull Trooper's backbling.\r\n## ZENITH, LYNX CHALLENGES, WEEK 1 & SEASON 7 BATTLE PASS  \r\nThe Battle Pass has been updated and **Zenith** and **Lynx** challenges are now available.\r\n## SEASON 7 ROADMAP  \r\nWe have also planned several updates: \r\n* An 11-minutes long **Custom Live Event** will take place in the later stage of **Era Season 7**  \r\n* Tournaments  \r\n* **iOS & Android** support is scheduled to release before *Dec 18*\r\n* **Creative** mode and **14 Days of Fortnite** challenges will release on *Dec 19*",
            header: "SEASON 7",
            id: 31,
            image:
              "https://media.discordapp.net/attachments/1133049187362160752/1186015999598809158/Fortnite2Fpatch-notes2Fv7-002Fheader-v7-002FPATCH-BR07_News_Featured_16_9-1920x1080-cffcaf5bb2ed63854673855b592e167e7e817360.png?ex=6591b679&is=657f4179&hm=c652dd8e58b106bce9b07f4914f988d17575b886b544daa4d85df0f9a0f1a489&=&format=webp&quality=lossless&width=1202&height=676",
            inserted_at: "2023-12-17T20:59:48",
            meta: {},
            tags: ["Season 7"],
            views: 8382,
          },
          {
            accent: "#7c3aed",
            author: "[ERA] AidasP",
            body: "# THE BUTTERFLY EVENT\r\n\r\nProject Era will be re-hosting the **Butterfly Event** for the first time in **5 YEARS**!\r\n\r\nThe event is set to go live on 2023-12-09 20PM UTC. A second show will be hosted on 2023-12-10 20PM UTC\r\n\r\nAnyone who partakes in the event will receive the **Shackled Stone** backbling, and access to the **Lil' Kev Challenges** (Which will grant the **Lil Kev** backbling) \r\n\r\nMake sure not to miss out. See you on the Battle Bus!\r\n\r\n*****: The time displays in your local timezone. A live countdown is also available on the Project Era launcher.",
            header: "THE BUTTERFLY EVENT",
            id: 28,
            image:
              "https://cdn.discordapp.com/attachments/1057066644679176292/1181327577256833064/image.png?ex=6580a80a&is=656e330a&hm=73e8ae809eefeeb96e14300eb8626d7b1258a8ad4ba3dbabe6fcd2814a8e7397&",
            inserted_at: "2023-12-04T22:14:24",
            meta: { height: 230, special: false },
            tags: ["Season6", "Event", "Content"],
            views: 8939,
          },
          {
            accent: "#7c3aed",
            author: "[ERA] AidasP",
            body: '## WEEK 3 & WEEK 4 OUT NOW \r\nWeek 3 & Week 4 challenges are now available \r\n## UPDATED LAUNCHER\r\nWe have made a significant update to our launcher, with a revamped UI for news posts!\r\n## FIXED CHALLENGES\r\nWe have patched **some** challenges bug that would now allow progression!\r\n## INSTANT QUEUES NOW OUT OF BETA\r\nWe have improved our **Instant Queues** system **fixing several bugs** that appeared after the sudden spike in player activity on Project Era!\r\nInstant Queues are now stable and out of beta.\r\n## RANDOM LOADOUTS \r\nThe "Random" item in the locker finally works! \r\n## FIXED MUSIC PACKS NOT UNEQUIPPING \r\nMusic packs can now be properly unequipped\r\n## BUTTERFLY EVENT \r\nThe Butterfly Event will **soon** be re-hosted **LIVE** on Project Era servers. \r\nThere will be a **SEPARATE** announcement where we will drop the **EVENT DATE & TIME** aswell as every detail you need to know about! \r\nMake sure not to miss out \r\n\r\nWe hope to see you on the battle bus... and **keep an eye out on the Cube**!',
            header: "CONTENT UPDATE",
            id: 27,
            image:
              "https://cdn.discordapp.com/attachments/1133049187362160752/1180897374701375558/1000.png?ex=657f1762&is=656ca262&hm=69e64ca58c72428a538eb3e53234b07e0a3bf595695b20539c50c5d16b484b45&",
            inserted_at: "2023-12-03T23:53:52",
            meta: {
              blurhash: "LKM49=#L9;55%MIp%3xH9?M{klgJ",
              height: 230,
              special: false,
            },
            tags: ["Season6", "Challenges", "Content"],
            views: 6220,
          },
          {
            accent: "#3b82f6",
            author: "[ERA] danii",
            body: '## WEEK 2 \nServers are back up! **Week 2** challenges have been granted to everyone! \n## FIXED QUESTS \n"Placement" & "Outlive" daily quests (e.g. **Place Top 50 in Solo**) now work correctly!\n## FIXED QUEST REROLLING & COSMETIC VARIANTS \nQuests rerolling is now much faster!\nVariants should also be working correctly now. \n## PORT-A-FORTRESS \nThe Port-A-Fortress now works correctly.\n## WEEKLY LOADING SCREENS \nWeekly loading screens **should** now be correctly granted upon completing a weekly challenges bundle.\n## PETS \nGranting pets has been fixed and now works correctly!',
            header: "SEASON 6 WEEK 2",
            id: 25,
            image:
              "https://media.discordapp.net/attachments/1109578287124054106/1175931463951187988/battlestar.jpg?ex=656d0684&is=655a9184&hm=e0135aaf7e1007c1dc956c8fa869b75c464bb805ab68beac281be351aee3948a&=&width=1193&height=671",
            inserted_at: "2023-11-19T23:53:31",
            meta: { special: false },
            tags: ["Season6", "Update"],
            views: 8748,
          },
          {
            accent: "#3b82f6",
            author: "[ERA] danii",
            body: "Season 6 is out now! Download **6.21** from the launcher and have fun! Find out how to play: [tutorial](https://www.youtube.com/watch?v=R1Ngk9kUIgM)\r\n\r\n## INTRODUCING INSTANT QUEUES (BETA)\r\n\r\nA brand new matchmaking system has been implemented on Era! The speed of queues will now depend on the number of players online! We also set the maximum amount of time you can spend in a queue: **5 minutes**, after which you will be put into a match.\r\n**NOTE**: Instant Queues will initially be in beta, you may encounter some bugs.\r\n## CHALLENGES UPDATE & COMPENSATION\r\n\r\nThe challenges system has been improved and to apologize for the issues we had last season, you will get **10 tiers** worth of rewards from the Season 5 battlepass (As long as you were atleast **Tier 10**).\r\n\r\nYou will also be granted **5 tiers** on the Season 6 battlepass (After playing **ONE** match) if you were atleast **Tier 2** on the Season 5 battlepass.\r\n\r\nBackblings have been fixed! You will be given all missing backblings upon logging-in.\r\nRagnarok and Drift styles challenges are still available for you to complete during **Era Season 6**!\r\n## GAMEPLAY \r\n\r\nGlider Redeploy, Pets, Balloons, The Six Shooter, The Quad Launcher, Shadow Stones & New POIs are now available in-game!\r\n\r\nAdditionally, we have re-worked the **download services** on our launcher, fixing most download bugs & making it significantly faster!\r\nWill we see you on the Battle Bus?",
            header: "DARKNESS IS RISING",
            id: 23,
            image:
              "https://cdn.discordapp.com/attachments/1133049187362160752/1173358773449007234/Darknessrises.jpg?ex=6563aa83&is=65513583&hm=25356632825f775223ee7baedb5435e27effb5209e21340d3b35329c2dcd802e&",
            inserted_at: "2023-11-12T21:29:18",
            meta: { special: true },
            tags: ["Season6", "Update"],
            views: 3691,
          },
          {
            accent: "#3b82f6",
            author: "Soggs",
            body: 'You can now play [iOS](https://youtu.be/Ah7-7mersQg) on Era! Additionally, we have just released **Weekly Challenges 9 & 10** so you could finish off this season\'s Battle Pass!\r\n\r\n\r\n\r\n## **Patch notes:**\r\n- Week 9 & 10 Challenges are now available.\r\n- Fixed an issue where the launcher would crash when pressing *"Launch on other platforms"*.\r\n- New experimental downloader (in preperation for v6.21!)\r\n- Fixed an issue with the *Lazy Links POI* challenges.',
            header: "Weekly Challenges and iOS Release",
            id: 22,
            image:
              "https://cdn.discordapp.com/attachments/1133049187362160752/1168300824481517669/imrs.png?ex=655143ee&is=653eceee&hm=ce8bb0a8627f4bd64d5b5f288072cad1f4dd7a5ec4b0cd094b7d4ea62267bb4f&",
            inserted_at: "2023-10-29T21:16:53",
            meta: null,
            tags: ["Era", "Challenges", "Platforms", "iOS"],
            views: 7117,
          },
          {
            accent: "#3b82f6",
            author: "Soggs",
            body: "Patch notes:\r\n- Added Week 6, Week 7 and Week 8 challenges.\r\n- Fixed leaderboards\r\n- Fixed kick when swapped an item before using a Rift-To-Go",
            header: "Weekly Challenges Update",
            id: 21,
            image:
              "https://cdn.discordapp.com/attachments/1133049187362160752/1165404715429933187/fortnite-how-to-get-stars.png?ex=6546bab8&is=653445b8&hm=48051a70023b9466fa6a375977e08098b21d7acfddd3f078a5154e3dae942594&",
            inserted_at: "2023-10-21T22:45:09",
            meta: null,
            tags: ["Era", "Challenges"],
            views: 3689,
          },
        ],
      } as BlogsResponse,
      null,
    ] as const;
  }

  return [response.data, null] as const;
};