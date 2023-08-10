const championsData = [
  {
    "publish_details": {
      "locale": "en-us"
    },
    "uid": "bltf1c826326a26cd46",
    "url": "/champions/aatrox/",
    "data_dragon_id": "Aatrox",
    "data_dragon_json": "{\"id\":\"Aatrox\",\"key\":\"266\",\"name\":\"Aatrox\",\"title\":\"the Darkin Blade\",\"image\":{\"full\":\"Aatrox.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"266000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"266001\",\"num\":1,\"name\":\"Justicar Aatrox\",\"chromas\":false},{\"id\":\"266002\",\"num\":2,\"name\":\"Mecha Aatrox\",\"chromas\":true},{\"id\":\"266003\",\"num\":3,\"name\":\"Sea Hunter Aatrox\",\"chromas\":false},{\"id\":\"266007\",\"num\":7,\"name\":\"Blood Moon Aatrox\",\"chromas\":false},{\"id\":\"266008\",\"num\":8,\"name\":\"Prestige Blood Moon Aatrox\",\"chromas\":false},{\"id\":\"266009\",\"num\":9,\"name\":\"Victorious Aatrox\",\"chromas\":true},{\"id\":\"266011\",\"num\":11,\"name\":\"Odyssey Aatrox\",\"chromas\":true},{\"id\":\"266020\",\"num\":20,\"name\":\"Prestige Blood Moon Aatrox (2022)\",\"chromas\":false},{\"id\":\"266021\",\"num\":21,\"name\":\"Lunar Eclipse Aatrox\",\"chromas\":true},{\"id\":\"266030\",\"num\":30,\"name\":\"DRX Aatrox\",\"chromas\":true},{\"id\":\"266031\",\"num\":31,\"name\":\"Prestige DRX Aatrox\",\"chromas\":false}],\"lore\":\"Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.\",\"blurb\":\"Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...\",\"allytips\":[\"Use Umbral Dash while casting The Darkin Blade to increase your chances of hitting the enemy.\",\"Crowd Control abilities like Infernal Chains or your allies' immobilizing effects will help you set up The Darkin Blade.\",\"Cast World Ender when you are sure you can force a fight.\"],\"enemytips\":[\"Aatrox's attacks are very telegraphed, so use the time to dodge the hit zones.\",\"Aatrox's Infernal Chains are easier to exit when running towards the sides or at Aatrox.\",\"Keep your distance when Aatrox uses his Ultimate to prevent him from reviving.\"],\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Blood Well\",\"info\":{\"attack\":8,\"defense\":4,\"magic\":3,\"difficulty\":4},\"stats\":{\"hp\":650,\"hpperlevel\":114,\"mp\":0,\"mpperlevel\":0,\"movespeed\":345,\"armor\":38,\"armorperlevel\":4.45,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":175,\"hpregen\":3,\"hpregenperlevel\":1,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":5,\"attackspeedperlevel\":2.5,\"attackspeed\":0.651},\"spells\":[{\"id\":\"AatroxQ\",\"name\":\"The Darkin Blade\",\"description\":\"Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.\",\"tooltip\":\"Aatrox slams his greatsword, dealing <physicalDamage>{{ qdamage }} physical damage</physicalDamage>. If they are hit on the edge, they are briefly <status>Knocked Up</status> and they take <physicalDamage>{{ qedgedamage }}</physicalDamage> instead. This Ability can be <recast>Recast</recast> twice, each one changing shape and dealing 25% more damage than the previous one.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Damage\",\"Total AD Ratio\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ qbasedamage }} -> {{ qbasedamageNL }}\",\"{{ qtotaladratio*100.000000 }}% -> {{ qtotaladrationl*100.000000 }}%\"]},\"maxrank\":5,\"cooldown\":[14,12,10,8,6],\"cooldownBurn\":\"14/12/10/8/6\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[25000,25000,25000,25000,25000],\"rangeBurn\":\"25000\",\"image\":{\"full\":\"AatroxQ.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"No Cost\"},{\"id\":\"AatroxW\",\"name\":\"Infernal Chains\",\"description\":\"Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.\",\"tooltip\":\"Aatrox fires a chain, <status>Slowing</status> the first enemy hit by {{ wslowpercentage*-100 }}% for {{ wslowduration }} seconds and dealing <physicalDamage>{{ wdamage }} physical damage</physicalDamage>. Champions and large jungle monsters have {{ wslowduration }} seconds to leave the impact area or be <status>Pulled</status> back to the center and damaged again for the same amount.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Damage\",\"Slow\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ wbasedamage }} -> {{ wbasedamageNL }}\",\"{{ wslowpercentage*-100.000000 }}% -> {{ wslowpercentagenl*-100.000000 }}%\"]},\"maxrank\":5,\"cooldown\":[20,18,16,14,12],\"cooldownBurn\":\"20/18/16/14/12\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[825,825,825,825,825],\"rangeBurn\":\"825\",\"image\":{\"full\":\"AatroxW.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"No Cost\"},{\"id\":\"AatroxE\",\"name\":\"Umbral Dash\",\"description\":\"Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.\",\"tooltip\":\"<spellPassive>Passive:</spellPassive> Aatrox gains <lifeSteal>{{ espellvamp }}% Omnivamp</lifeSteal> against champions, increased to <lifeSteal>{{ espellvampempowered }}% Omnivamp</lifeSteal> during <keywordMajor>World Ender</keywordMajor>.<br /><br /><spellActive>Active:</spellActive> Aatrox dashes. He can use this Ability while winding up his other Abilities.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Healing %\",\"Healing % during World Ender\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ espellvamp }}% -> {{ espellvampNL }}%\",\"{{ espellvampempowered }}% -> {{ espellvampempoweredNL }}%\"]},\"maxrank\":5,\"cooldown\":[9,8,7,6,5],\"cooldownBurn\":\"9/8/7/6/5\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"1\",\"range\":[25000,25000,25000,25000,25000],\"rangeBurn\":\"25000\",\"image\":{\"full\":\"AatroxE.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"No Cost\"},{\"id\":\"AatroxR\",\"name\":\"World Ender\",\"description\":\"Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended.\",\"tooltip\":\"Aatrox reveals his true demonic form, <status>Fearing</status> nearby minions for {{ rminionfearduration }} seconds and gaining <speed>{{ rmovementspeedbonus*100 }}% Move Speed</speed> decaying over {{ rduration }} seconds. He also gains <scaleAD>{{ rtotaladamp*100 }}% Attack Damage</scaleAD> and increases <healing>self-healing by {{ rhealingamp*100 }}%</healing> for the duration.<br /><br />Champion takedowns extend the duration of this effect by {{ rextension }} seconds and refresh the <speed>Move Speed</speed> effect.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Total Attack Damage Increase\",\"Healing Increase\",\"Move Speed\",\"Cooldown\"],\"effect\":[\"{{ rtotaladamp*100.000000 }}% -> {{ rtotaladampnl*100.000000 }}%\",\"{{ rhealingamp*100.000000 }}% -> {{ rhealingampnl*100.000000 }}%\",\"{{ rmovementspeedbonus*100.000000 }}% -> {{ rmovementspeedbonusnl*100.000000 }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[120,100,80],\"cooldownBurn\":\"120/100/80\",\"cost\":[0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[25000,25000,25000],\"rangeBurn\":\"25000\",\"image\":{\"full\":\"AatroxR.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"No Cost\"}],\"passive\":{\"name\":\"Deathbringer Stance\",\"description\":\"Periodically, Aatrox's next basic attack deals bonus <physicalDamage>physical damage</physicalDamage> and heals him, based on the target's max health. \",\"image\":{\"full\":\"Aatrox_Passive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":0,\"y\":0,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find...",
    "lore": "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Aatrox.png",
    "champion_name": "Aatrox",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
    "champion_title": "the Darkin Blade",
    "recommended_lanes": [],
    "recommended_roles": [
      "Fighter",
      "Tank"
    ],
    "links": [
      {
        "href": "https://u.gg/lol/champions/aatrox/build",
        "title": "U.gg"
      },
      {
        "href": "https://na.op.gg/champion/Aatrox/statistics/mid",
        "title": "Op.gg"
      },
      {
        "href": "https://www.probuilds.net/champions/details/Aatrox",
        "title": "probuilds.net"
      }
    ],
    "champion": {
      "modular_blocks": []
    },
    "skins": [
      {
        "name": "default",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"
      },
      {
        "name": "Justicar Aatrox",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg"
      },
      {
        "name": "Mecha Aatrox",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_2.jpg"
      },
      {
        "name": "Sea Hunter Aatrox",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_3.jpg"
      },
      {
        "name": "Blood Moon Aatrox",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_7.jpg"
      },
      {
        "name": "Prestige Blood Moon Aatrox",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_8.jpg"
      },
      {
        "name": "Victorious Aatrox",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_9.jpg"
      },
      {
        "name": "Odyssey Aatrox",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_11.jpg"
      },
      {
        "name": "Prestige Blood Moon Aatrox (2022)",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_20.jpg"
      },
      {
        "name": "Lunar Eclipse Aatrox",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_21.jpg"
      },
      {
        "name": "DRX Aatrox",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_30.jpg"
      },
      {
        "name": "Prestige DRX Aatrox",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_31.jpg"
      }
    ],
    "champion_passive": {
      "champion_passive_description": "Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health. ",
      "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Aatrox_Passive.png",
      "champion_passive_name": "Deathbringer Stance",
      "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.mp4",
      "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.jpg",
      "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_P1.webm"
    },
    "champion_q": {
      "champion_q_description": "Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.",
      "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AatroxQ.png",
      "champion_q_name": "The Darkin Blade",
      "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.mp4",
      "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.jpg",
      "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_Q1.webm"
    },
    "champion_w": {
      "champion_w_description": "Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.",
      "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AatroxW.png",
      "champion_w_name": "Infernal Chains",
      "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.mp4",
      "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.jpg",
      "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_W1.webm"
    },
    "champion_e": {
      "champion_e_description": "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.",
      "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AatroxE.png",
      "champion_e_name": "Umbral Dash",
      "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.mp4",
      "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.jpg",
      "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_E1.webm"
    },
    "champion_r": {
      "champion_r_description": "Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended.",
      "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AatroxR.png",
      "champion_r_name": "World Ender",
      "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.mp4",
      "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.jpg",
      "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0266/ability_0266_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
      "locale": "en-us"
    },
    "uid": "blt390ceac1e3d19fbb",
    "url": "/champions/ahri/",
    "data_dragon_id": "Ahri",
    "data_dragon_json": "{\"id\":\"Ahri\",\"key\":\"103\",\"name\":\"Ahri\",\"title\":\"the Nine-Tailed Fox\",\"image\":{\"full\":\"Ahri.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"103000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"103001\",\"num\":1,\"name\":\"Dynasty Ahri\",\"chromas\":true},{\"id\":\"103002\",\"num\":2,\"name\":\"Midnight Ahri\",\"chromas\":true},{\"id\":\"103003\",\"num\":3,\"name\":\"Foxfire Ahri\",\"chromas\":true},{\"id\":\"103004\",\"num\":4,\"name\":\"Popstar Ahri\",\"chromas\":true},{\"id\":\"103005\",\"num\":5,\"name\":\"Challenger Ahri\",\"chromas\":true},{\"id\":\"103006\",\"num\":6,\"name\":\"Academy Ahri\",\"chromas\":true},{\"id\":\"103007\",\"num\":7,\"name\":\"Arcade Ahri\",\"chromas\":true},{\"id\":\"103014\",\"num\":14,\"name\":\"Star Guardian Ahri\",\"chromas\":true},{\"id\":\"103015\",\"num\":15,\"name\":\"K/DA Ahri\",\"chromas\":true},{\"id\":\"103016\",\"num\":16,\"name\":\"Prestige K/DA Ahri\",\"chromas\":false},{\"id\":\"103017\",\"num\":17,\"name\":\"Elderwood Ahri\",\"chromas\":true},{\"id\":\"103027\",\"num\":27,\"name\":\"Spirit Blossom Ahri\",\"chromas\":true},{\"id\":\"103028\",\"num\":28,\"name\":\"K/DA ALL OUT Ahri\",\"chromas\":true},{\"id\":\"103042\",\"num\":42,\"name\":\"Coven Ahri\",\"chromas\":true},{\"id\":\"103065\",\"num\":65,\"name\":\"Prestige K/DA Ahri (2022)\",\"chromas\":false},{\"id\":\"103066\",\"num\":66,\"name\":\"Arcana Ahri\",\"chromas\":true},{\"id\":\"103076\",\"num\":76,\"name\":\"Snow Moon Ahri\",\"chromas\":true}],\"lore\":\"Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward predator, Ahri is now traveling the world in search of remnants of her ancestors while also trying to replace her stolen memories with ones of her own making.\",\"blurb\":\"Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward...\",\"allytips\":[\"Use Charm to set up your combos, it will make landing Orb of Deception and Fox-Fire dramatically easier.\",\"Initiate team fights using Charm, and chase down stragglers with Spirit Rush.\",\"Spirit Rush enables Ahri's abilities, it opens up paths for Charm, helps double hitting with Orb of Deception, and closes to make use of Fox-Fire.\"],\"enemytips\":[\"Ahri's survivability is dramatically reduced when her Ultimate, Spirit Rush, is down.\",\"Stay behind minions to make Charm difficult to land, this will reduce Ahri's damage potential significantly.\"],\"tags\":[\"Mage\",\"Assassin\"],\"partype\":\"Mana\",\"info\":{\"attack\":3,\"defense\":4,\"magic\":8,\"difficulty\":5},\"stats\":{\"hp\":590,\"hpperlevel\":96,\"mp\":418,\"mpperlevel\":25,\"movespeed\":330,\"armor\":21,\"armorperlevel\":4.7,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":550,\"hpregen\":2.5,\"hpregenperlevel\":0.6,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2,\"attackspeed\":0.668},\"spells\":[{\"id\":\"AhriQ\",\"name\":\"Orb of Deception\",\"description\":\"Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back. \",\"tooltip\":\"Ahri throws then pulls back her orb, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> on the way out and <trueDamage>{{ totaldamage }} true damage</trueDamage> on the way back.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"@AbilityResourceName@ Cost\",\"Damage\"],\"effect\":[\"{{ cost }} -> {{ costNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\"]},\"maxrank\":5,\"cooldown\":[7,7,7,7,7],\"cooldownBurn\":\"7\",\"cost\":[55,65,75,85,95],\"costBurn\":\"55/65/75/85/95\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[970,970,970,970,970],\"rangeBurn\":\"970\",\"image\":{\"full\":\"AhriQ.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AhriW\",\"name\":\"Fox-Fire\",\"description\":\"Ahri gains a brief burst of Move Speed and releases three fox-fires, that lock onto and attack nearby enemies.\",\"tooltip\":\"Ahri releases 3 fox-fires that seek nearby enemies and deal <magicDamage>{{ singlefiredamage }} magic damage</magicDamage>, reduced to <magicDamage>{{ multifiredamage }} damage</magicDamage> beyond the first. She also gains <speed>{{ movementspeed*100 }}% Move Speed</speed> decaying over {{ movementspeedduration }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[9,8,7,6,5],\"cooldownBurn\":\"9/8/7/6/5\",\"cost\":[30,30,30,30,30],\"costBurn\":\"30\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[700,700,700,700,700],\"rangeBurn\":\"700\",\"image\":{\"full\":\"AhriW.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AhriE\",\"name\":\"Charm\",\"description\":\"Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her.\",\"tooltip\":\"Ahri blows a kiss that <status>Charms</status> the first enemy hit for {{ charmduration }} seconds and deals <magicDamage>{{ totaldamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Duration\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ charmduration }} -> {{ charmdurationNL }}\"]},\"maxrank\":5,\"cooldown\":[14,14,14,14,14],\"cooldownBurn\":\"14\",\"cost\":[60,60,60,60,60],\"costBurn\":\"60\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[975,975,975,975,975],\"rangeBurn\":\"975\",\"image\":{\"full\":\"AhriE.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AhriR\",\"name\":\"Spirit Rush\",\"description\":\"Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown, and gains additional recasts when taking down enemy champions.\",\"tooltip\":\"Ahri nimbly dashes, firing {{ rmaxtargetspercast }} essence bolts at nearby enemies, prioritizing champions. These bolts deal <magicDamage>{{ rcalculateddamage }} magic damage</magicDamage> each. Spirit Rush can be recast up to 2 more times within {{ rrecastwindow }} seconds.<br /><br />Consuming a champion's Essence with Essence Theft during this period extends the recast window by up to {{ pdurationextension }} seconds and grants an additional recast of Spirit Rush (up to {{ rmaxcasts }} stored).{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ rbasedamage }} -> {{ rbasedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[130,105,80],\"cooldownBurn\":\"130/105/80\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[450,450,450],\"rangeBurn\":\"450\",\"image\":{\"full\":\"AhriR.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Essence Theft\",\"description\":\"After killing 9 minions or monsters, Ahri heals.<br>After taking down an enemy champion, Ahri heals for a greater amount.\",\"image\":{\"full\":\"Ahri_SoulEater2.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":48,\"y\":0,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward...",
    "lore": "Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward predator, Ahri is now traveling the world in search of remnants of her ancestors while also trying to replace her stolen memories with ones of her own making.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Ahri.png",
    "champion_name": "Ahri",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    "champion_title": "the Nine-Tailed Fox",
    "recommended_lanes": [],
    "recommended_roles": [
      "Mage",
      "Assassin"
    ],
    "links": [
      {
        "href": "https://u.gg/lol/champions/ahri/build",
        "title": "U.gg"
      },
      {
        "href": "https://na.op.gg/champion/ahri/statistics/mid",
        "title": "Op.gg"
      },
      {
        "href": "https://www.probuilds.net/champions/details/ahri",
        "title": "probuilds.net"
      }
    ],
    "champion": {
      "modular_blocks": []
    },
    "skins": [
      {
        "name": "default",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"
      },
      {
        "name": "Dynasty Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_1.jpg"
      },
      {
        "name": "Midnight Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_2.jpg"
      },
      {
        "name": "Foxfire Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_3.jpg"
      },
      {
        "name": "Popstar Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_4.jpg"
      },
      {
        "name": "Challenger Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_5.jpg"
      },
      {
        "name": "Academy Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_6.jpg"
      },
      {
        "name": "Arcade Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_7.jpg"
      },
      {
        "name": "Star Guardian Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_14.jpg"
      },
      {
        "name": "K/DA Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_15.jpg"
      },
      {
        "name": "Prestige K/DA Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_16.jpg"
      },
      {
        "name": "Elderwood Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_17.jpg"
      },
      {
        "name": "Spirit Blossom Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_27.jpg"
      },
      {
        "name": "K/DA ALL OUT Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_28.jpg"
      },
      {
        "name": "Coven Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_42.jpg"
      },
      {
        "name": "Prestige K/DA Ahri (2022)",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_65.jpg"
      },
      {
        "name": "Arcana Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_66.jpg"
      },
      {
        "name": "Snow Moon Ahri",
        "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_76.jpg"
      }
    ],
    "champion_passive": {
      "champion_passive_description": "After killing 9 minions or monsters, Ahri heals.\nAfter taking down an enemy champion, Ahri heals for a greater amount.",
      "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Ahri_SoulEater2.png",
      "champion_passive_name": "Essence Theft",
      "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.mp4",
      "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.jpg",
      "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_P1.webm"
    },
    "champion_q": {
      "champion_q_description": "Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back. ",
      "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AhriQ.png",
      "champion_q_name": "Orb of Deception",
      "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_Q1.mp4",
      "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_Q1.jpg",
      "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_Q1.webm"
    },
    "champion_w": {
      "champion_w_description": "Ahri gains a brief burst of Move Speed and releases three fox-fires, that lock onto and attack nearby enemies.",
      "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AhriW.png",
      "champion_w_name": "Fox-Fire",
      "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_W1.mp4",
      "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_W1.jpg",
      "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_W1.webm"
    },
    "champion_e": {
      "champion_e_description": "Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her.",
      "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AhriE.png",
      "champion_e_name": "Charm",
      "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_E1.mp4",
      "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_E1.jpg",
      "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_E1.webm"
    },
    "champion_r": {
      "champion_r_description": "Ahri dashes forward and fires essence bolts, damaging nearby enemies. Spirit Rush can be cast up to three times before going on cooldown, and gains additional recasts when taking down enemy champions.",
      "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AhriR.png",
      "champion_r_name": "Spirit Rush",
      "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.mp4",
      "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.jpg",
      "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0103/ability_0103_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt22cd16bdce160fe1",
    "url": "/champions/akali/",
    "data_dragon_id": "Akali",
    "data_dragon_json": "{\"id\":\"Akali\",\"key\":\"84\",\"name\":\"Akali\",\"title\":\"the Rogue Assassin\",\"image\":{\"full\":\"Akali.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"84000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"84001\",\"num\":1,\"name\":\"Stinger Akali\",\"chromas\":false},{\"id\":\"84002\",\"num\":2,\"name\":\"Infernal Akali\",\"chromas\":false},{\"id\":\"84003\",\"num\":3,\"name\":\"All-star Akali\",\"chromas\":false},{\"id\":\"84004\",\"num\":4,\"name\":\"Nurse Akali\",\"chromas\":true},{\"id\":\"84005\",\"num\":5,\"name\":\"Blood Moon Akali\",\"chromas\":false},{\"id\":\"84006\",\"num\":6,\"name\":\"Silverfang Akali\",\"chromas\":false},{\"id\":\"84007\",\"num\":7,\"name\":\"Headhunter Akali\",\"chromas\":true},{\"id\":\"84008\",\"num\":8,\"name\":\"Sashimi Akali\",\"chromas\":false},{\"id\":\"84009\",\"num\":9,\"name\":\"K/DA Akali\",\"chromas\":false},{\"id\":\"84013\",\"num\":13,\"name\":\"Prestige K/DA Akali\",\"chromas\":false},{\"id\":\"84014\",\"num\":14,\"name\":\"PROJECT: Akali\",\"chromas\":true},{\"id\":\"84015\",\"num\":15,\"name\":\"True Damage Akali\",\"chromas\":true},{\"id\":\"84032\",\"num\":32,\"name\":\"K/DA ALL OUT Akali\",\"chromas\":true},{\"id\":\"84050\",\"num\":50,\"name\":\"Crime City Nightmare Akali\",\"chromas\":false},{\"id\":\"84060\",\"num\":60,\"name\":\"Prestige K/DA Akali (2022)\",\"chromas\":false},{\"id\":\"84061\",\"num\":61,\"name\":\"Star Guardian Akali\",\"chromas\":false},{\"id\":\"84068\",\"num\":68,\"name\":\"DRX Akali\",\"chromas\":false}],\"lore\":\"Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.\",\"blurb\":\"Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one...\",\"allytips\":[\"Akali excels at killing fragile champions. Let your team initiate and then strike at the people in the back.\",\"Twilight Shroud offers safety in even the most dangerous situations. Use that time to save up energy for a quick strike later.\"],\"enemytips\":[\"Akali can still be hit by area effect spells while obscured inside Twilight Shroud. Doing so will briefly reveal her position.\",\"Akali's Five Point Strike is powerful when used at maximum range and energy. Engage on her when she has low energy to maximize your chance of winning trades.\",\"Return to base if your Health is low and Akali has her ultimate available.\"],\"tags\":[\"Assassin\"],\"partype\":\"Energy\",\"info\":{\"attack\":5,\"defense\":3,\"magic\":8,\"difficulty\":7},\"stats\":{\"hp\":570,\"hpperlevel\":119,\"mp\":200,\"mpperlevel\":0,\"movespeed\":345,\"armor\":23,\"armorperlevel\":4.7,\"spellblock\":37,\"spellblockperlevel\":2.05,\"attackrange\":125,\"hpregen\":9,\"hpregenperlevel\":0.9,\"mpregen\":50,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":62,\"attackdamageperlevel\":3.3,\"attackspeedperlevel\":3.2,\"attackspeed\":0.625},\"spells\":[{\"id\":\"AkaliQ\",\"name\":\"Five Point Strike\",\"description\":\"Akali throws out five kunai, dealing damage based on her bonus Attack Damage and Ability Power and slowing.\",\"tooltip\":\"Akali slings kunai in an arc, dealing <magicDamage>{{ damage }} magic damage</magicDamage> and <status>Slowing</status> enemies at the tip by {{ slowpercentage*100 }}% for {{ slowduration }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"@AbilityResourceName@ Cost\",\"Damage\"],\"effect\":[\"{{ cost }} -> {{ costNL }}\",\"{{ basedamagenamed }} -> {{ basedamagenamedNL }}\"]},\"maxrank\":5,\"cooldown\":[1.5,1.5,1.5,1.5,1.5],\"cooldownBurn\":\"1.5\",\"cost\":[130,115,100,85,70],\"costBurn\":\"130/115/100/85/70\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[550,550,550,550,550],\"rangeBurn\":\"550\",\"image\":{\"full\":\"AkaliQ.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AkaliW\",\"name\":\"Twilight Shroud\",\"description\":\"Akali drops a cover of smoke and briefly gains Move Speed. While inside the shroud, Akali becomes invisible and unable to be selected by enemy spells and attacks. Attacking or using abilities will briefly reveal her.  \",\"tooltip\":\"Akali drops a smoke bomb, unleashing a spreading cover of smoke lasting {{ baseduration }} seconds and granting herself <speed>{{ e6 }}% Move Speed</speed> decaying over {{ movementspeedduration }} seconds.<br /><br />Akali increases her max Energy by {{ energyrestore }} while the shroud is active. <br /><br />While inside the smoke, Akali is <keywordStealth>Invisible</keywordStealth>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Move Speed\",\"Duration\"],\"effect\":[\"{{ movementspeed }}% -> {{ movementspeedNL }}%\",\"{{ baseduration }} -> {{ basedurationNL }}\"]},\"maxrank\":5,\"cooldown\":[20,20,20,20,20],\"cooldownBurn\":\"20\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[140,140,140,140,140],[4,4,4,4,4],[0,0,0,0,0],[250,250,250,250,250],[60,65,70,75,80],[30,35,40,45,50],[1,1,1,1,1],[0,0,0,0,0],[5,5.5,6,6.5,7],[0,0,0,0,0]],\"effectBurn\":[null,\"140\",\"4\",\"0\",\"250\",\"60/65/70/75/80\",\"30/35/40/45/50\",\"1\",\"0\",\"5/5.5/6/6.5/7\",\"0\"],\"vars\":[],\"costType\":\" Energy\",\"maxammo\":\"-1\",\"range\":[350,350,350,350,350],\"rangeBurn\":\"350\",\"image\":{\"full\":\"AkaliW.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"Restores {{ energyrestore }} Energy\"},{\"id\":\"AkaliE\",\"name\":\"Shuriken Flip\",\"description\":\"Flip backward and fire a shuriken forward, dealing magic damage. The first enemy or smoke cloud hit is marked. Re-cast to dash to the marked target, dealing additional damage.\",\"tooltip\":\"Akali flips backwards as she throws a shuriken, dealing <magicDamage>{{ e1damage }} magic damage</magicDamage> and marking the first enemy or smoke cloud hit. Akali can <recast>Recast</recast> this once to dash to the marked target, dealing <magicDamage>{{ e2damagecalc }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Base Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\"]},\"maxrank\":5,\"cooldown\":[16,14.5,13,11.5,10],\"cooldownBurn\":\"16/14.5/13/11.5/10\",\"cost\":[30,30,30,30,30],\"costBurn\":\"30\",\"datavalues\":{},\"effect\":[null,[50,75,100,125,150],[400,400,400,400,400],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"50/75/100/125/150\",\"400\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[825,825,825,825,825],\"rangeBurn\":\"825\",\"image\":{\"full\":\"AkaliE.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AkaliR\",\"name\":\"Perfect Execution\",\"description\":\"Akali leaps in a direction, damaging enemies she strikes. Re-cast: Akali dashes in a direction, executing all enemies she strikes.\",\"tooltip\":\"Akali vaults over an enemy champion, dealing <magicDamage>{{ cast1damage }} magic damage</magicDamage> to all enemies in her path. <br /><br />Akali can <recast>Recast</recast> after {{ cooldownbetweencasts }} seconds to execute a piercing thrust, dashing and dealing <magicDamage>{{ cast2damagemin }}</magicDamage> to <magicDamage>{{ cast2damagemax }} magic damage</magicDamage> based on missing health.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Base Damage\",\"Max Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ r2basedamage*3.000000 }} -> {{ r2basedamagenl*3.000000 }}\"]},\"maxrank\":3,\"cooldown\":[100,80,60],\"cooldownBurn\":\"100/80/60\",\"cost\":[0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[60,120,180],[3,3,3],[1,1,1],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[120,100,80]],\"effectBurn\":[null,\"60/120/180\",\"3\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"120/100/80\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[675,675,675],\"rangeBurn\":\"675\",\"image\":{\"full\":\"AkaliR.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"No Cost\"}],\"passive\":{\"name\":\"Assassin's Mark\",\"description\":\"Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next Attack with bonus range and damage.\",\"image\":{\"full\":\"Akali_P.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":96,\"y\":0,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one...",
    "lore": "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Akali.png",
    "champion_name": "Akali",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
    "champion_title": "the Rogue Assassin",
    "recommended_lanes": [],
    "recommended_roles": [
        "Assassin"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/akali/statistics/top",
            "title": "Op.gg"
        },
        {
            "href": "https://u.gg/lol/champions/akali/build",
            "title": "U.gg"
        },
        {
            "href": "https://www.probuilds.net/champions/details/akali",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg"
        },
        {
            "name": "Stinger Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_1.jpg"
        },
        {
            "name": "Infernal Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_2.jpg"
        },
        {
            "name": "All-star Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_3.jpg"
        },
        {
            "name": "Nurse Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_4.jpg"
        },
        {
            "name": "Blood Moon Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_5.jpg"
        },
        {
            "name": "Silverfang Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_6.jpg"
        },
        {
            "name": "Headhunter Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_7.jpg"
        },
        {
            "name": "Sashimi Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_8.jpg"
        },
        {
            "name": "K/DA Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_9.jpg"
        },
        {
            "name": "Prestige K/DA Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_13.jpg"
        },
        {
            "name": "PROJECT: Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_14.jpg"
        },
        {
            "name": "True Damage Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_15.jpg"
        },
        {
            "name": "K/DA ALL OUT Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_32.jpg"
        },
        {
            "name": "Crime City Nightmare Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_50.jpg"
        },
        {
            "name": "Prestige K/DA Akali (2022)",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_60.jpg"
        },
        {
            "name": "Star Guardian Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_61.jpg"
        },
        {
            "name": "DRX Akali",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_68.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Dealing spell damage to a champion creates a ring of energy around them. Exiting that ring empowers Akali's next Attack with bonus range and damage.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Akali_P.png",
        "champion_passive_name": "Assassin's Mark",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Akali throws out five kunai, dealing damage based on her bonus Attack Damage and Ability Power and slowing.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AkaliQ.png",
        "champion_q_name": "Five Point Strike",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Akali drops a cover of smoke and briefly gains Move Speed. While inside the shroud, Akali becomes invisible and unable to be selected by enemy spells and attacks. Attacking or using abilities will briefly reveal her.  ",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AkaliW.png",
        "champion_w_name": "Twilight Shroud",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Flip backward and fire a shuriken forward, dealing magic damage. The first enemy or smoke cloud hit is marked. Re-cast to dash to the marked target, dealing additional damage.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AkaliE.png",
        "champion_e_name": "Shuriken Flip",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Akali leaps in a direction, damaging enemies she strikes. Re-cast: Akali dashes in a direction, executing all enemies she strikes.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AkaliR.png",
        "champion_r_name": "Perfect Execution",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0084/ability_0084_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt8ff8a9cfe9a3fab0",
    "url": "/champions/akshan/",
    "data_dragon_id": "Akshan",
    "data_dragon_json": "{\"id\":\"Akshan\",\"key\":\"166\",\"name\":\"Akshan\",\"title\":\"the Rogue Sentinel\",\"image\":{\"full\":\"Akshan.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"166000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"166001\",\"num\":1,\"name\":\"Cyber Pop Akshan\",\"chromas\":true},{\"id\":\"166010\",\"num\":10,\"name\":\"Crystal Rose Akshan\",\"chromas\":true}],\"lore\":\"Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra's many scoundrels while living by his own moral code: “Don't be an ass.”\",\"blurb\":\"Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they...\",\"allytips\":[\"Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra's many scoundrels while living by his own moral code: “Don't be an ass.”\"],\"enemytips\":[],\"tags\":[\"Marksman\",\"Assassin\"],\"partype\":\"Mana\",\"info\":{\"attack\":0,\"defense\":0,\"magic\":0,\"difficulty\":0},\"stats\":{\"hp\":630,\"hpperlevel\":104,\"mp\":350,\"mpperlevel\":40,\"movespeed\":330,\"armor\":26,\"armorperlevel\":4.2,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":500,\"hpregen\":3.75,\"hpregenperlevel\":0.65,\"mpregen\":8.2,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":52,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":4,\"attackspeed\":0.638},\"spells\":[{\"id\":\"AkshanQ\",\"name\":\"Avengerang\",\"description\":\"Akshan throws a boomerang that deals damage going out and coming back, extending its range each time it hits an enemy.\",\"tooltip\":\"Akshan throws a boomerang that deals <physicalDamage>{{ finaldamage }} physical damage</physicalDamage>, extending the range each time an enemy is hit.<br /><br />Champion hits grant Akshan <speed>{{ totalhaste }} Move Speed</speed> decaying over {{ hasteduration }} second.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"@AbilityResourceName@ Cost\",\"Damage\",\"Minion Damage %\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ secondarytargetdamage*100.000000 }}% -> {{ secondarytargetdamagenl*100.000000 }}%\"]},\"maxrank\":5,\"cooldown\":[8,7.25,6.5,5.75,5],\"cooldownBurn\":\"8/7.25/6.5/5.75/5\",\"cost\":[60,65,70,75,80],\"costBurn\":\"60/65/70/75/80\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[850,850,850,850,850],\"rangeBurn\":\"850\",\"image\":{\"full\":\"AkshanQ.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":0,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AkshanW\",\"name\":\"Going Rogue\",\"description\":\"Akshan passively marks enemy champions as Scoundrels when they kill his ally champions. If Akshan kills a Scoundrel, he resurrects the allies they killed, gains bonus gold, and clears all marks.<br><br>When activated, Akshan enters camouflage and gains Move Speed and Mana Regen while moving towards Scoundrels. Akshan loses the camouflage quickly while he is not in brush or near terrain.\",\"tooltip\":\"{{ Spell_AkshanW_Tooltip_{{ gamemodeinteger }} }}{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"@AbilityResourceName@ Cost\",\"Move Speed\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ msvalue }} -> {{ msvalueNL }}\"]},\"maxrank\":5,\"cooldown\":[18,14,10,6,2],\"cooldownBurn\":\"18/14/10/6/2\",\"cost\":[40,30,20,10,0],\"costBurn\":\"40/30/20/10/0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[5500,5500,5500,5500,5500],\"rangeBurn\":\"5500\",\"image\":{\"full\":\"AkshanW.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":48,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AkshanE\",\"name\":\"Heroic Swing\",\"description\":\"Akshan fires a grappling hook into terrain then swings around it, repeatedly firing at the nearest enemy while swinging. He can jump off early or gets knocked off when colliding with champions or terrain.\",\"tooltip\":\"<spellActive>First Cast:</spellActive> Akshan fires a grappling hook, attaching to the first terrain hit.<br /><br /><spellActive>Second Cast:</spellActive> Akshan swings around the terrain, repeatedly firing at the nearest enemy for <physicalDamage>{{ asmoddamagetodeal }} physical damage</physicalDamage> per shot.<br /><br /><spellActive>Third Cast:</spellActive> Akshan dives off the rope, firing a final shot.<br /><br />Colliding with an enemy Champion or terrain ends the swing early.<br /><br />Champion takedowns refresh this Ability's Cooldown.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\"]},\"maxrank\":5,\"cooldown\":[18,16.5,15,13.5,12],\"cooldownBurn\":\"18/16.5/15/13.5/12\",\"cost\":[70,70,70,70,70],\"costBurn\":\"70\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[800,800,800,800,800],\"rangeBurn\":\"800\",\"image\":{\"full\":\"AkshanE.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":96,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AkshanR\",\"name\":\"Comeuppance\",\"description\":\"Akshan locks onto an enemy champion and starts storing bullets. When released, he fires all stored bullets, dealing damage based on missing health to the first champion, minion, or structure hit.\",\"tooltip\":\"Akshan locks onto a champion and begins overcharging his gun for up to {{ channelduration }} seconds, storing up to {{ numberofbullets }} bullets.<br /><br /><recast>Recast:</recast> Akshan unleashes the stored bullets, each dealing at least <physicalDamage>{{ damageperbulletwithcrit }} physical damage</physicalDamage> to the first enemy or structure hit, increased up to <physicalDamage>{{ maxdamageperbullet }} physical damage</physicalDamage> based on missing Health.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Maximum Bullets\",\"Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ numberofbullets }} -> {{ numberofbulletsNL }}\",\"{{ bonusdamage }} -> {{ bonusdamageNL }}\"]},\"maxrank\":3,\"cooldown\":[100,85,70],\"cooldownBurn\":\"100/85/70\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[2500,2500,2500],\"rangeBurn\":\"2500\",\"image\":{\"full\":\"AkshanR.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":144,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Dirty Fighting\",\"description\":\"Every three hits from Akshan's Attacks and Abilities deals bonus damage and grants him a Shield if the target was a champion.<br><br>When Akshan Attacks, he fires an additional Attack for reduced damage. If he cancels the additional Attack, he instead gains Move Speed.\",\"image\":{\"full\":\"akshan_p.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":144,\"y\":0,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they...",
    "lore": "Raising an eyebrow in the face of danger, Akshan fights evil with dashing charisma, righteous vengeance, and a conspicuous lack of shirts. He is highly skilled in the art of stealth combat, able to evade the eyes of his enemies and reappear when they least expect him. With a keen sense of justice and a legendary death-reversing weapon, he rights the wrongs of Runeterra's many scoundrels while living by his own moral code: “Don't be an ass.”",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Akshan.png",
    "champion_name": "Akshan",
    "champion_splash": "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt58b3304a9d38b091/60f5d6e21929bc58854d00a6/072221_AkshanChampionTheme_Banner.jpg",
    "champion_title": "the Rogue Sentinel",
    "recommended_lanes": [],
    "recommended_roles": [
        "Marksman",
        "Assassin"
    ],
    "links": [
        {
            "href": "https://www.op.gg/champion/akshan/statistics/mid/build",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/akshan/build",
            "title": "U.GG"
        },
        {
            "href": "https://probuildstats.com/champion/akshan",
            "title": "Probuild Stats"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "Akshan",
            "imageUrl": "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt58b3304a9d38b091/60f5d6e21929bc58854d00a6/072221_AkshanChampionTheme_Banner.jpg?quality=90&width=1215"
        },
        {
            "name": "Cyber Pop Akshan",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_1.jpg"
        },
        {
            "name": "Crystal Rose Akshan",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_10.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Every three hits from Akshan's Attacks and Abilities deals bonus damage and grants him a Shield if the target was a champion.\n\nWhen Akshan Attacks, he fires an additional Attack for reduced damage. If he cancels the additional Attack, he instead gains Move Speed.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/akshan_p.png",
        "champion_passive_name": "Dirty Fighting",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Akshan throws a boomerang that deals damage going out and coming back, extending its range each time it hits an enemy.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AkshanQ.png",
        "champion_q_name": "Avengerang",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Akshan passively marks enemy champions as Scoundrels when they kill his ally champions. If Akshan kills a Scoundrel, he resurrects the allies they killed, gains bonus gold, and clears all marks.\n\nWhen activated, Akshan enters camouflage and gains Move Speed and Mana Regen while moving towards Scoundrels. Akshan loses the camouflage quickly while he is not in brush or near terrain.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AkshanW.png",
        "champion_w_name": "Going Rogue",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Akshan fires a grappling hook into terrain then swings around it, repeatedly firing at the nearest enemy while swinging. He can jump off early or gets knocked off when colliding with champions or terrain.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AkshanE.png",
        "champion_e_name": "Heroic Swing",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Akshan locks onto an enemy champion and starts storing bullets. When released, he fires all stored bullets, dealing damage based on missing health to the first champion, minion, or structure hit.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AkshanR.png",
        "champion_r_name": "Comeuppance",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0166/ability_0166_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "bltc7f92581bbc27095",
    "url": "/champions/alistar/",
    "data_dragon_id": "Alistar",
    "data_dragon_json": "{\"id\":\"Alistar\",\"key\":\"12\",\"name\":\"Alistar\",\"title\":\"the Minotaur\",\"image\":{\"full\":\"Alistar.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"12000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"12001\",\"num\":1,\"name\":\"Black Alistar\",\"chromas\":false},{\"id\":\"12002\",\"num\":2,\"name\":\"Golden Alistar\",\"chromas\":false},{\"id\":\"12003\",\"num\":3,\"name\":\"Matador Alistar\",\"chromas\":false},{\"id\":\"12004\",\"num\":4,\"name\":\"Longhorn Alistar\",\"chromas\":false},{\"id\":\"12005\",\"num\":5,\"name\":\"Unchained Alistar\",\"chromas\":false},{\"id\":\"12006\",\"num\":6,\"name\":\"Infernal Alistar\",\"chromas\":false},{\"id\":\"12007\",\"num\":7,\"name\":\"Sweeper Alistar\",\"chromas\":false},{\"id\":\"12008\",\"num\":8,\"name\":\"Marauder Alistar\",\"chromas\":false},{\"id\":\"12009\",\"num\":9,\"name\":\"SKT T1 Alistar\",\"chromas\":false},{\"id\":\"12010\",\"num\":10,\"name\":\"Moo Cow Alistar\",\"chromas\":true},{\"id\":\"12019\",\"num\":19,\"name\":\"Hextech Alistar\",\"chromas\":false},{\"id\":\"12020\",\"num\":20,\"name\":\"Conqueror Alistar\",\"chromas\":true},{\"id\":\"12022\",\"num\":22,\"name\":\"Blackfrost Alistar\",\"chromas\":true},{\"id\":\"12029\",\"num\":29,\"name\":\"Lunar Beast Alistar\",\"chromas\":true}],\"lore\":\"Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.\",\"blurb\":\"Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly...\",\"allytips\":[\"Using Pulverize can allow you to establish better positioning for Headbutt.\",\"Move Speed is very important on Alistar. Consider which boots to buy carefully.\",\"Using Flash can allow you catch your target off guard to knock them back into your allies with Pulverize and Headbutt.\"],\"enemytips\":[\"Alistar is very disruptive but very tough - try to target more fragile damage dealers.\",\"Watch out for the Pulverize-Headbutt combo when around turrets.\",\"When Alistar uses his ultimate, it's often better to move back and wait until the effect wears off before attacking him.\"],\"tags\":[\"Tank\",\"Support\"],\"partype\":\"Mana\",\"info\":{\"attack\":6,\"defense\":9,\"magic\":5,\"difficulty\":7},\"stats\":{\"hp\":685,\"hpperlevel\":120,\"mp\":350,\"mpperlevel\":40,\"movespeed\":330,\"armor\":47,\"armorperlevel\":4.7,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.85,\"mpregen\":8.5,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":62,\"attackdamageperlevel\":3.75,\"attackspeedperlevel\":2.125,\"attackspeed\":0.625},\"spells\":[{\"id\":\"Pulverize\",\"name\":\"Pulverize\",\"description\":\"Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.\",\"tooltip\":\"Alistar smashes the ground, <status>Knocking Up</status> enemies for {{ knockupduration }} second and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"@AbilityResourceName@ Cost\",\"Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\"]},\"maxrank\":5,\"cooldown\":[14,13,12,11,10],\"cooldownBurn\":\"14/13/12/11/10\",\"cost\":[50,55,60,65,70],\"costBurn\":\"50/55/60/65/70\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[365,365,365,365,365],\"rangeBurn\":\"365\",\"image\":{\"full\":\"Pulverize.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":192,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"Headbutt\",\"name\":\"Headbutt\",\"description\":\"Alistar rams a target with his head, dealing damage and knocking the target back.\",\"tooltip\":\"Alistar rams into an enemy, <status>Knocking</status> them <status>Back</status> and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"@AbilityResourceName@ Cost\",\"Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ damage }} -> {{ damageNL }}\"]},\"maxrank\":5,\"cooldown\":[14,13,12,11,10],\"cooldownBurn\":\"14/13/12/11/10\",\"cost\":[50,55,60,65,70],\"costBurn\":\"50/55/60/65/70\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[700,700,700,700,700],[0.75,0.75,0.75,0.75,0.75],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"700\",\"0.75\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[650,650,650,650,650],\"rangeBurn\":\"650\",\"image\":{\"full\":\"Headbutt.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":240,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AlistarE\",\"name\":\"Trample\",\"description\":\"Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.\",\"tooltip\":\"Alistar begins trampling the ground, becoming Ghosted and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> over {{ e3 }} seconds to nearby enemies. Each pulse that damages a champion grants a stack.<br /><br />At {{ e5 }} stacks, Alistar's next Attack against champions <status>Stuns</status> for {{ e6 }} second and deals an additional <magicDamage>{{ attackbonusdamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"@AbilityResourceName@ Cost\",\"Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ e1 }} -> {{ e1NL }}\"]},\"maxrank\":5,\"cooldown\":[12,11.5,11,10.5,10],\"cooldownBurn\":\"12/11.5/11/10.5/10\",\"cost\":[50,55,60,65,70],\"costBurn\":\"50/55/60/65/70\",\"datavalues\":{},\"effect\":[null,[80,110,140,170,200],[50,50,50,50,50],[5,5,5,5,5],[350,350,350,350,350],[5,5,5,5,5],[1,1,1,1,1],[5,5,5,5,5],[20,20,20,20,20],[15,15,15,15,15],[0,0,0,0,0]],\"effectBurn\":[null,\"80/110/140/170/200\",\"50\",\"5\",\"350\",\"5\",\"1\",\"5\",\"20\",\"15\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[350,350,350,350,350],\"rangeBurn\":\"350\",\"image\":{\"full\":\"AlistarE.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":288,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"FerociousHowl\",\"name\":\"Unbreakable Will\",\"description\":\"Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.\",\"tooltip\":\"Alistar immediately cleanses all <status>Disabling</status> effects and takes {{ rdamagereduction }}% reduced damage for {{ rduration }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Damage Reduction\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ rdamagereduction }}% -> {{ rdamagereductionNL }}%\"]},\"maxrank\":3,\"cooldown\":[120,100,80],\"cooldownBurn\":\"120/100/80\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1,1,1],\"rangeBurn\":\"1\",\"image\":{\"full\":\"FerociousHowl.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":336,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Triumphant Roar\",\"description\":\"Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions.\",\"image\":{\"full\":\"Alistar_E.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":192,\"y\":0,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly...",
    "lore": "Always a mighty warrior with a fearsome reputation, Alistar seeks revenge for the death of his clan at the hands of the Noxian empire. Though he was enslaved and forced into the life of a gladiator, his unbreakable will was what kept him from truly becoming a beast. Now, free of the chains of his former masters, he fights in the name of the downtrodden and the disadvantaged, his rage as much a weapon as his horns, hooves and fists.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Alistar.png",
    "champion_name": "Alistar",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
    "champion_title": "the Minotaur",
    "recommended_lanes": [],
    "recommended_roles": [
        "Tank",
        "Support"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/alistar/statistics/",
            "title": "Op.gg"
        },
        {
            "href": "https://u.gg/lol/champions/alistar/build",
            "title": "U.gg"
        },
        {
            "href": "https://www.probuilds.net/champions/details/alistar",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg"
        },
        {
            "name": "Black Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_1.jpg"
        },
        {
            "name": "Golden Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_2.jpg"
        },
        {
            "name": "Matador Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_3.jpg"
        },
        {
            "name": "Longhorn Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_4.jpg"
        },
        {
            "name": "Unchained Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_5.jpg"
        },
        {
            "name": "Infernal Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_6.jpg"
        },
        {
            "name": "Sweeper Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_7.jpg"
        },
        {
            "name": "Marauder Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_8.jpg"
        },
        {
            "name": "SKT T1 Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_9.jpg"
        },
        {
            "name": "Moo Cow Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_10.jpg"
        },
        {
            "name": "Hextech Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_19.jpg"
        },
        {
            "name": "Conqueror Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_20.jpg"
        },
        {
            "name": "Blackfrost Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_22.jpg"
        },
        {
            "name": "Lunar Beast Alistar",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_29.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself all nearby allied champions.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Alistar_E.png",
        "champion_passive_name": "Triumphant Roar",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/Pulverize.png",
        "champion_q_name": "Pulverize",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Alistar rams a target with his head, dealing damage and knocking the target back.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/Headbutt.png",
        "champion_w_name": "Headbutt",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Alistar tramples nearby enemy units, ignoring unit collision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AlistarE.png",
        "champion_e_name": "Trample",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/FerociousHowl.png",
        "champion_r_name": "Unbreakable Will",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0012/ability_0012_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt6c55bf5df3dcb42c",
    "url": "/champions/amumu/",
    "data_dragon_id": "Amumu",
    "data_dragon_json": "{\"id\":\"Amumu\",\"key\":\"32\",\"name\":\"Amumu\",\"title\":\"the Sad Mummy\",\"image\":{\"full\":\"Amumu.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"32000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"32001\",\"num\":1,\"name\":\"Pharaoh Amumu\",\"chromas\":false},{\"id\":\"32002\",\"num\":2,\"name\":\"Vancouver Amumu\",\"chromas\":false},{\"id\":\"32003\",\"num\":3,\"name\":\"Emumu\",\"chromas\":false},{\"id\":\"32004\",\"num\":4,\"name\":\"Re-Gifted Amumu\",\"chromas\":false},{\"id\":\"32005\",\"num\":5,\"name\":\"Almost-Prom King Amumu\",\"chromas\":false},{\"id\":\"32006\",\"num\":6,\"name\":\"Little Knight Amumu\",\"chromas\":false},{\"id\":\"32007\",\"num\":7,\"name\":\"Sad Robot Amumu\",\"chromas\":false},{\"id\":\"32008\",\"num\":8,\"name\":\"Surprise Party Amumu\",\"chromas\":true},{\"id\":\"32017\",\"num\":17,\"name\":\"Infernal Amumu\",\"chromas\":true},{\"id\":\"32023\",\"num\":23,\"name\":\"Hextech Amumu\",\"chromas\":false},{\"id\":\"32024\",\"num\":24,\"name\":\"Pumpkin Prince Amumu\",\"chromas\":true},{\"id\":\"32034\",\"num\":34,\"name\":\"Porcelain Amumu\",\"chromas\":true},{\"id\":\"32044\",\"num\":44,\"name\":\"Heartache Amumu\",\"chromas\":true}],\"lore\":\"Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.\",\"blurb\":\"Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe...\",\"allytips\":[\"Amumu is highly dependent on teammates, so try laning with your friends for maximum effectiveness.\",\"Cooldown Reduction on Amumu is very strong, but it's often difficult to itemize for it. Grab the Golem buff whenever possible to gain Cooldown Reduction without sacrificing stats.\",\"Despair is very effective against other tanks, so make sure you're in range of opponents with the highest Health.\"],\"enemytips\":[\"Avoid bunching up with other allies when Amumu has his ultimate available.\",\"Erratic movement, or hiding behind creep waves can make it difficult for Amumu to instigate a fight with Bandage Toss.\",\"Amumu's Despair makes purchasing primarily Health items a risky proposition.\"],\"tags\":[\"Tank\",\"Mage\"],\"partype\":\"Mana\",\"info\":{\"attack\":2,\"defense\":6,\"magic\":8,\"difficulty\":3},\"stats\":{\"hp\":685,\"hpperlevel\":94,\"mp\":285,\"mpperlevel\":40,\"movespeed\":335,\"armor\":30,\"armorperlevel\":4,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":125,\"hpregen\":9,\"hpregenperlevel\":0.85,\"mpregen\":7.4,\"mpregenperlevel\":0.55,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53,\"attackdamageperlevel\":3.8,\"attackspeedperlevel\":2.18,\"attackspeed\":0.736},\"spells\":[{\"id\":\"BandageToss\",\"name\":\"Bandage Toss\",\"description\":\"Amumu tosses a sticky bandage at a target, stunning and damaging the target while he pulls himself to them.\",\"tooltip\":\"Amumu launches a bandage, pulling himself to the first enemy hit, <status>Stunning</status> them for {{ e2 }} second, and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.<br /><br />This Ability has 2 charges.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Recharge Time\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ ammorechargetime }} -> {{ ammorechargetimeNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[3,3,3,3,3],\"cooldownBurn\":\"3\",\"cost\":[45,50,55,60,65],\"costBurn\":\"45/50/55/60/65\",\"datavalues\":{},\"effect\":[null,[70,95,120,145,170],[1,1,1,1,1],[1800,1800,1800,1800,1800],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"70/95/120/145/170\",\"1\",\"1800\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"2\",\"range\":[1100,1100,1100,1100,1100],\"rangeBurn\":\"1100\",\"image\":{\"full\":\"BandageToss.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":384,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AuraofDespair\",\"name\":\"Despair\",\"description\":\"Overcome by anguish, nearby enemies lose a percentage of their maximum Health each second and have their <font color='#9b0f5f'>Curses</font> refreshed.\",\"tooltip\":\"<toggle>Toggle:</toggle> Amumu begins crying, dealing <magicDamage>{{ basedamage }} plus {{ totalhealthdamage }}% max Health magic damage</magicDamage> to nearby enemies every second and refreshing <keywordMajor>Curse</keywordMajor>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"% Health as Damage\"],\"effect\":[\"{{ healthdamage }}% -> {{ healthdamageNL }}%\"]},\"maxrank\":5,\"cooldown\":[1,1,1,1,1],\"cooldownBurn\":\"1\",\"cost\":[8,8,8,8,8],\"costBurn\":\"8\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }} per Second\",\"maxammo\":\"-1\",\"range\":[300,300,300,300,300],\"rangeBurn\":\"300\",\"image\":{\"full\":\"AuraofDespair.png\",\"sprite\":\"spell0.png\",\"group\":\"spell\",\"x\":432,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }} per Second\"},{\"id\":\"Tantrum\",\"name\":\"Tantrum\",\"description\":\"Permanently reduces the physical damage Amumu would take. Amumu can unleash his rage, dealing damage to surrounding enemies. Each time Amumu is hit, the cooldown on Tantrum is reduced.\",\"tooltip\":\"<spellPassive>Passive:</spellPassive> Amumu takes {{ damagereduction }} reduced physical damage. Additionally, when Amumu is hit by an Attack, this Ability's Cooldown is reduced by {{ e3 }} seconds.<br /><br /><spellActive>Active:</spellActive> Amumu throws a tantrum, dealing <magicDamage>{{ tantrumdamage }} magic damage</magicDamage> to nearby enemies.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage Reduced\",\"Cooldown\",\"Damage\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ e2 }} -> {{ e2NL }}\"]},\"maxrank\":5,\"cooldown\":[9,8,7,6,5],\"cooldownBurn\":\"9/8/7/6/5\",\"cost\":[35,35,35,35,35],\"costBurn\":\"35\",\"datavalues\":{},\"effect\":[null,[5,7,9,11,13],[65,100,135,170,205],[0.75,0.75,0.75,0.75,0.75],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0.03,0.03,0.03,0.03,0.03],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"5/7/9/11/13\",\"65/100/135/170/205\",\"0.75\",\"0\",\"0\",\"0\",\"0.03\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[350,350,350,350,350],\"rangeBurn\":\"350\",\"image\":{\"full\":\"Tantrum.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CurseoftheSadMummy\",\"name\":\"Curse of the Sad Mummy\",\"description\":\"Amumu entangles surrounding enemy units in bandages, applying his <keywordMajor>Curse</keywordMajor>, damaging and stunning them.\",\"tooltip\":\"Amumu flares out his bandages, <status>Stunning</status> for {{ rduration }} seconds, dealing <magicDamage>{{ rcalculateddamage }} magic damage</magicDamage> and applying <keywordMajor>Curse</keywordMajor>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"@AbilityResourceName@ Cost\",\"Cooldown\",\"Damage\"],\"effect\":[\"{{ cost }} -> {{ costNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ rdamage }} -> {{ rdamageNL }}\"]},\"maxrank\":3,\"cooldown\":[150,125,100],\"cooldownBurn\":\"150/125/100\",\"cost\":[100,150,200],\"costBurn\":\"100/150/200\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[550,550,550],\"rangeBurn\":\"550\",\"image\":{\"full\":\"CurseoftheSadMummy.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Cursed Touch\",\"description\":\"Amumu's basic attacks <font color='#9b0f5f'>Curse</font> his enemies, causing them to take bonus true damage from incoming magic damage.\",\"image\":{\"full\":\"Amumu_Passive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":240,\"y\":0,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe...",
    "lore": "Legend claims that Amumu is a lonely and melancholy soul from ancient Shurima, roaming the world in search of a friend. Doomed by an ancient curse to remain alone forever, his touch is death, his affection ruin. Those who claim to have seen him describe a living cadaver, small in stature and wrapped in creeping bandages. Amumu has inspired myths, songs, and folklore told and retold for generations—such that it is impossible to separate truth from fiction.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Amumu.png",
    "champion_name": "Amumu",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
    "champion_title": "the Sad Mummy",
    "recommended_lanes": [],
    "recommended_roles": [
        "Tank",
        "Mage"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/amumu/statistics/",
            "title": "Op.gg"
        },
        {
            "href": "https://u.gg/lol/champions/amumu/build",
            "title": "U.gg"
        },
        {
            "href": "https://www.probuilds.net/champions/details/amumu",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg"
        },
        {
            "name": "Pharaoh Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_1.jpg"
        },
        {
            "name": "Vancouver Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_2.jpg"
        },
        {
            "name": "Emumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_3.jpg"
        },
        {
            "name": "Re-Gifted Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_4.jpg"
        },
        {
            "name": "Almost-Prom King Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_5.jpg"
        },
        {
            "name": "Little Knight Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_6.jpg"
        },
        {
            "name": "Sad Robot Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_7.jpg"
        },
        {
            "name": "Surprise Party Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_8.jpg"
        },
        {
            "name": "Infernal Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_17.jpg"
        },
        {
            "name": "Hextech Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_23.jpg"
        },
        {
            "name": "Pumpkin Prince Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_24.jpg"
        },
        {
            "name": "Porcelain Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_34.jpg"
        },
        {
            "name": "Heartache Amumu",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_44.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Amumu's basic attacks Curse his enemies, causing them to take bonus true damage from incoming magic damage.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Amumu_Passive.png",
        "champion_passive_name": "Cursed Touch",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Amumu tosses a sticky bandage at a target, stunning and damaging the target while he pulls himself to them.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BandageToss.png",
        "champion_q_name": "Bandage Toss",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Overcome by anguish, nearby enemies lose a percentage of their maximum Health each second and have their Curses refreshed.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AuraofDespair.png",
        "champion_w_name": "Despair",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Permanently reduces the physical damage Amumu would take. Amumu can unleash his rage, dealing damage to surrounding enemies. Each time Amumu is hit, the cooldown on Tantrum is reduced.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/Tantrum.png",
        "champion_e_name": "Tantrum",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Amumu entangles surrounding enemy units in bandages, applying his Curse, damaging and stunning them.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CurseoftheSadMummy.png",
        "champion_r_name": "Curse of the Sad Mummy",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0032/ability_0032_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt69702f001da6fa66",
    "url": "/champions/anivia/",
    "data_dragon_id": "Anivia",
    "data_dragon_json": "{\"id\":\"Anivia\",\"key\":\"34\",\"name\":\"Anivia\",\"title\":\"the Cryophoenix\",\"image\":{\"full\":\"Anivia.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"34000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"34001\",\"num\":1,\"name\":\"Team Spirit Anivia\",\"chromas\":false},{\"id\":\"34002\",\"num\":2,\"name\":\"Bird of Prey Anivia\",\"chromas\":false},{\"id\":\"34003\",\"num\":3,\"name\":\"Noxus Hunter Anivia\",\"chromas\":false},{\"id\":\"34004\",\"num\":4,\"name\":\"Hextech Anivia\",\"chromas\":false},{\"id\":\"34005\",\"num\":5,\"name\":\"Blackfrost Anivia\",\"chromas\":false},{\"id\":\"34006\",\"num\":6,\"name\":\"Prehistoric Anivia\",\"chromas\":false},{\"id\":\"34007\",\"num\":7,\"name\":\"Festival Queen Anivia\",\"chromas\":false},{\"id\":\"34008\",\"num\":8,\"name\":\"Papercraft Anivia\",\"chromas\":true},{\"id\":\"34017\",\"num\":17,\"name\":\"Cosmic Flight Anivia\",\"chromas\":true},{\"id\":\"34027\",\"num\":27,\"name\":\"Divine Phoenix Anivia\",\"chromas\":true},{\"id\":\"34037\",\"num\":37,\"name\":\"Bewitching Batnivia\",\"chromas\":true},{\"id\":\"34046\",\"num\":46,\"name\":\"Victorious Anivia\",\"chromas\":true}],\"lore\":\"Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.\",\"blurb\":\"Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland...\",\"allytips\":[\"Timing Flash Frost with Frostbite can lead to devastating combinations.\",\"Anivia is extremely reliant on Mana for Glacial Storm. Try getting items with Mana or going for a Crest of the Ancient Golem buff on Summoner's Rift.\",\"It can be very difficult for enemy champions to kill her egg early in game. Seize the advantage by playing aggressively.\"],\"enemytips\":[\"Try to gank Anivia when she's laning. With multiple people, it is easier to ensure that her egg dies.\",\"If you're playing a ranged champion, stay far enough away from Anivia so you can dodge Flash Frost more easily.\",\"Try to fight Anivia in the lanes. In the jungle she can block pathways with lower ranks of Crystallize.\"],\"tags\":[\"Mage\",\"Support\"],\"partype\":\"Mana\",\"info\":{\"attack\":1,\"defense\":4,\"magic\":10,\"difficulty\":10},\"stats\":{\"hp\":550,\"hpperlevel\":92,\"mp\":495,\"mpperlevel\":45,\"movespeed\":325,\"armor\":21,\"armorperlevel\":4.9,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":600,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":51,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":1.68,\"attackspeed\":0.625},\"spells\":[{\"id\":\"FlashFrost\",\"name\":\"Flash Frost\",\"description\":\"Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area.\",\"tooltip\":\"Anivia fires a massive chunk of ice, dealing <magicDamage>{{ totalpassthroughdamage }} magic damage</magicDamage> and <keywordMajor>Chilling</keywordMajor> enemies for {{ slowduration }} seconds, <status>Slowing</status> them by {{ spell.glacialstorm:slowamount }}%. At the end of its range, the ice detonates, <status>Stunning</status> enemies for {{ stunduration }} seconds and dealing <magicDamage>{{ totalexplosiondamage }} magic damage</magicDamage>.<br /><br />Anivia can <recast>Recast</recast> this ability while the ice flies to detonate it early.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Detonation Damage\",\"Stun Duration\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ passthroughbasedamage }} -> {{ passthroughbasedamageNL }}\",\"{{ explosionbasedamage }} -> {{ explosionbasedamageNL }}\",\"{{ stunduration }} -> {{ stundurationNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[12,11,10,9,8],\"cooldownBurn\":\"12/11/10/9/8\",\"cost\":[80,85,90,95,100],\"costBurn\":\"80/85/90/95/100\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1075,1075,1075,1075,1075],\"rangeBurn\":\"1075\",\"image\":{\"full\":\"FlashFrost.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"Crystallize\",\"name\":\"Crystallize\",\"description\":\"Anivia condenses the moisture in the air into an impassable wall of ice to block all movement. The wall only lasts a short duration before it melts.\",\"tooltip\":\"Anivia summons a wall of ice {{ e2 }} units wide. The wall lasts for {{ e1 }} seconds before it melts.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Width\"],\"effect\":[\"{{ e2 }} -> {{ e2NL }}\"]},\"maxrank\":5,\"cooldown\":[17,17,17,17,17],\"cooldownBurn\":\"17\",\"cost\":[70,70,70,70,70],\"costBurn\":\"70\",\"datavalues\":{},\"effect\":[null,[5,5,5,5,5],[400,500,600,700,800],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"5\",\"400/500/600/700/800\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1000,1000,1000,1000,1000],\"rangeBurn\":\"1000\",\"image\":{\"full\":\"Crystallize.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"Frostbite\",\"name\":\"Frostbite\",\"description\":\"With a flap of her wings, Anivia blasts a freezing gust of wind at her target, dealing damage. If the target was recently hit by Flash Frost or damaged by a fully formed Glacial Storm, the damage they take is doubled.\",\"tooltip\":\"Anivia blasts an enemy with a freezing wind, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. Against <keywordMajor>Chilled</keywordMajor> enemies, Anivia deals <magicDamage>{{ empowereddamage }} magic damage</magicDamage> instead.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\"]},\"maxrank\":5,\"cooldown\":[4,4,4,4,4],\"cooldownBurn\":\"4\",\"cost\":[50,50,50,50,50],\"costBurn\":\"50\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[650,650,650,650,650],\"rangeBurn\":\"650\",\"image\":{\"full\":\"Frostbite.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"GlacialStorm\",\"name\":\"Glacial Storm\",\"description\":\"Anivia summons a driving rain of ice and hail to damage her enemies and slow their advance.\",\"tooltip\":\"<toggle>Toggle:</toggle> Anivia calls forth a driving rain of ice and hail that <status>Slows</status> enemies by {{ slowamount }}% and deals <magicDamage>{{ totaldamagepersecond }} magic damage per second</magicDamage>. The storm increases in size over {{ growthtime }} seconds.<br /><br />When the storm is fully formed, it <keywordMajor>Chills</keywordMajor>, <status>Slows</status> by {{ slowpercentempoweredtt }}%, and does <magicDamage>{{ empowereddamagepersecondtooltiponly }} magic damage per second</magicDamage> instead.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage Per Second\",\"Slow\",\"Chilled Slow Amount\",\"Mana Cost Per Second\",\"Cooldown\"],\"effect\":[\"{{ damagepersecond }} -> {{ damagepersecondNL }}\",\"{{ slowamount }}% -> {{ slowamountNL }}%\",\"{{ slowpercentempoweredtt }}% -> {{ slowpercentempoweredttNL }}%\",\"{{ manacostpersecond }} -> {{ manacostpersecondNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[4,3,2],\"cooldownBurn\":\"4/3/2\",\"cost\":[60,60,60],\"costBurn\":\"60\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" + {{ manacostpersecond }} Mana per second\",\"maxammo\":\"-1\",\"range\":[750,750,750],\"rangeBurn\":\"750\",\"image\":{\"full\":\"GlacialStorm.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} + {{ manacostpersecond }} Mana per second\"}],\"passive\":{\"name\":\"Rebirth\",\"description\":\"Upon taking fatal damage, Anivia reverts to an egg and is reborn with full health.\",\"image\":{\"full\":\"Anivia_P.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":288,\"y\":0,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland...",
    "lore": "Anivia is a benevolent winged spirit who endures endless cycles of life, death, and rebirth to protect the Freljord. A demigod born of unforgiving ice and bitter winds, she wields those elemental powers to thwart any who dare disturb her homeland. Anivia guides and protects the tribes of the harsh north, who revere her as a symbol of hope, and a portent of great change. She fights with every ounce of her being, knowing that through her sacrifice, her memory will endure, and she will be reborn into a new tomorrow.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Anivia.png",
    "champion_name": "Anivia",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
    "champion_title": "the Cryophoenix",
    "recommended_lanes": [],
    "recommended_roles": [
        "Mage",
        "Support"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/anivia/statistics/",
            "title": "Op.gg"
        },
        {
            "href": "https://u.gg/lol/champions/anivia/build",
            "title": "U.gg"
        },
        {
            "href": "https://www.probuilds.net/champions/details/anivia",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg"
        },
        {
            "name": "Team Spirit Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_1.jpg"
        },
        {
            "name": "Bird of Prey Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_2.jpg"
        },
        {
            "name": "Noxus Hunter Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_3.jpg"
        },
        {
            "name": "Hextech Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_4.jpg"
        },
        {
            "name": "Blackfrost Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_5.jpg"
        },
        {
            "name": "Prehistoric Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_6.jpg"
        },
        {
            "name": "Festival Queen Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_7.jpg"
        },
        {
            "name": "Papercraft Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_8.jpg"
        },
        {
            "name": "Cosmic Flight Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_17.jpg"
        },
        {
            "name": "Divine Phoenix Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_27.jpg"
        },
        {
            "name": "Bewitching Batnivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_37.jpg"
        },
        {
            "name": "Victorious Anivia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_46.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Upon taking fatal damage, Anivia reverts to an egg and is reborn with full health.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Anivia_P.png",
        "champion_passive_name": "Rebirth",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/FlashFrost.png",
        "champion_q_name": "Flash Frost",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Anivia condenses the moisture in the air into an impassable wall of ice to block all movement. The wall only lasts a short duration before it melts.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/Crystallize.png",
        "champion_w_name": "Crystallize",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "With a flap of her wings, Anivia blasts a freezing gust of wind at her target, dealing damage. If the target was recently hit by Flash Frost or damaged by a fully formed Glacial Storm, the damage they take is doubled.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/Frostbite.png",
        "champion_e_name": "Frostbite",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Anivia summons a driving rain of ice and hail to damage her enemies and slow their advance.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/GlacialStorm.png",
        "champion_r_name": "Glacial Storm",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0034/ability_0034_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "bltdf4ef9a617bc7424",
    "url": "/champions/annie/",
    "data_dragon_id": "Annie",
    "data_dragon_json": "{\"id\":\"Annie\",\"key\":\"1\",\"name\":\"Annie\",\"title\":\"the Dark Child\",\"image\":{\"full\":\"Annie.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"1000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"1001\",\"num\":1,\"name\":\"Goth Annie\",\"chromas\":false},{\"id\":\"1002\",\"num\":2,\"name\":\"Red Riding Annie\",\"chromas\":false},{\"id\":\"1003\",\"num\":3,\"name\":\"Annie in Wonderland\",\"chromas\":false},{\"id\":\"1004\",\"num\":4,\"name\":\"Prom Queen Annie\",\"chromas\":false},{\"id\":\"1005\",\"num\":5,\"name\":\"Frostfire Annie\",\"chromas\":false},{\"id\":\"1006\",\"num\":6,\"name\":\"Reverse Annie\",\"chromas\":false},{\"id\":\"1007\",\"num\":7,\"name\":\"FrankenTibbers Annie\",\"chromas\":false},{\"id\":\"1008\",\"num\":8,\"name\":\"Panda Annie\",\"chromas\":false},{\"id\":\"1009\",\"num\":9,\"name\":\"Sweetheart Annie\",\"chromas\":false},{\"id\":\"1010\",\"num\":10,\"name\":\"Hextech Annie\",\"chromas\":false},{\"id\":\"1011\",\"num\":11,\"name\":\"Super Galaxy Annie\",\"chromas\":false},{\"id\":\"1012\",\"num\":12,\"name\":\"Annie-Versary\",\"chromas\":false},{\"id\":\"1013\",\"num\":13,\"name\":\"Lunar Beast Annie\",\"chromas\":true},{\"id\":\"1022\",\"num\":22,\"name\":\"Cafe Cuties Annie\",\"chromas\":false},{\"id\":\"1031\",\"num\":31,\"name\":\"Fright Night Annie\",\"chromas\":false}],\"lore\":\"Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.\",\"blurb\":\"Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable...\",\"allytips\":[\"Storing a stun for use with her ultimate can turn the tide of a team fight.\",\"Striking killing blows on minions with Disintegrate enables Annie to farm extremely well early in the game.\",\"Molten Shield is a good spell to cast to work up to Annie's stun, so sometimes it's beneficial to grab at least 1 rank in it early.\"],\"enemytips\":[\"Annie's summoned bear, Tibbers, burns opposing units around himself. Try to keep your distance from him after he's been summoned.\",\"Summoner Smite can be used to help take down Tibbers.\",\"Keep an eye out for a white, swirling power around Annie. It means she's ready to unleash her stun.\"],\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"info\":{\"attack\":2,\"defense\":3,\"magic\":10,\"difficulty\":6},\"stats\":{\"hp\":560,\"hpperlevel\":102,\"mp\":418,\"mpperlevel\":25,\"movespeed\":335,\"armor\":19,\"armorperlevel\":4.7,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":625,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":50,\"attackdamageperlevel\":2.65,\"attackspeedperlevel\":1.36,\"attackspeed\":0.579},\"spells\":[{\"id\":\"AnnieQ\",\"name\":\"Disintegrate\",\"description\":\"Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.\",\"tooltip\":\"Annie hurls a fireball, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. If the target dies, Annie refunds the Mana cost and reduces the Cooldown by 50%.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[4,4,4,4,4],\"cooldownBurn\":\"4\",\"cost\":[60,65,70,75,80],\"costBurn\":\"60/65/70/75/80\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[625,625,625,625,625],\"rangeBurn\":\"625\",\"image\":{\"full\":\"AnnieQ.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AnnieW\",\"name\":\"Incinerate\",\"description\":\"Annie casts a blazing cone of fire, dealing damage to all enemies in the area.\",\"tooltip\":\"Annie projects a wave of fire, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[8,8,8,8,8],\"cooldownBurn\":\"8\",\"cost\":[90,95,100,105,110],\"costBurn\":\"90/95/100/105/110\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[600,600,600,600,600],\"rangeBurn\":\"600\",\"image\":{\"full\":\"AnnieW.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AnnieE\",\"name\":\"Molten Shield\",\"description\":\"Grants Annie or an ally a shield, a burst of Move Speed, and damages enemies who strike her with attacks or spells.\",\"tooltip\":\"Annie grants an ally champion <shield>{{ shieldblocktotal }} Shield</shield> for {{ shieldduration }} seconds and <speed>{{ movespeedcalc }} Decaying Move Speed</speed> for {{ movementspeedduration }} seconds. While the shield holds, enemies who hit the shielded ally with an Attack or Ability receive <magicDamage>{{ damagereturn }} magic damage</magicDamage> once per shield.<br /><br />Tibbers always gains the effects of <spellName>Molten Shield</spellName> when summoned.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Shield Health\",\"Damage Reflection\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ shieldamount }} -> {{ shieldamountNL }}\",\"{{ damagereflection }} -> {{ damagereflectionNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[12,11.5,11,10.5,10],\"cooldownBurn\":\"12/11.5/11/10.5/10\",\"cost\":[60,65,70,75,80],\"costBurn\":\"60/65/70/75/80\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[800,800,800,800,800],\"rangeBurn\":\"800\",\"image\":{\"full\":\"AnnieE.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AnnieR\",\"name\":\"Summon: Tibbers\",\"description\":\"Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.\",\"tooltip\":\"Annie summons her bear Tibbers, dealing <magicDamage>{{ initialburstdamage }} magic damage</magicDamage>. For the next {{ tibberslifetime }} seconds, Tibbers burns nearby enemies for <magicDamage>{{ tibbersauradamage }} magic damage per second</magicDamage>.<br /><br />Tibbers becomes enraged when summoned, if Annie stuns an enemy champion, and if Annie dies. When enraged, Tibbers gains <attackSpeed>275% Attack Speed</attackSpeed> and <speed>100% Move Speed</speed> decaying over 3 seconds.<br /><br /><recast>Recast:</recast> Manually issue orders to Tibbers.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Initial Damage\",\"Aura Damage\",\"Tibbers Attack Damage\",\"Bonus Health\",\"Bonus Resistances\",\"Cooldown\"],\"effect\":[\"{{ initialdamage }} -> {{ initialdamageNL }}\",\"{{ auradamage }} -> {{ auradamageNL }}\",\"{{ tibbersattackdamage }} -> {{ tibbersattackdamageNL }}\",\"{{ bonushealth }} -> {{ bonushealthNL }}\",\"{{ bonusresistances }} -> {{ bonusresistancesNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[130,115,100],\"cooldownBurn\":\"130/115/100\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[600,600,600],\"rangeBurn\":\"600\",\"image\":{\"full\":\"AnnieR.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Pyromania\",\"description\":\"After casting 4 spells, Annie's next offensive spell will stun the target.<br><br>Annie begins the game and respawns with Pyromania available.\",\"image\":{\"full\":\"Annie_Passive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":336,\"y\":0,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable...",
    "lore": "Dangerous, yet disarmingly precocious, Annie is a child mage with immense pyromantic power. Even in the shadows of the mountains north of Noxus, she is a magical outlier. Her natural affinity for fire manifested early in life through unpredictable, emotional outbursts, though she eventually learned to control these “playful tricks.” Her favorite includes the summoning of her beloved teddy bear, Tibbers, as a fiery protector. Lost in the perpetual innocence of childhood, Annie wanders the dark forests, always looking for someone to play with.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Annie.png",
    "champion_name": "Annie",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
    "champion_title": "the Dark Child",
    "recommended_lanes": [],
    "recommended_roles": [
        "Mage"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/annie/statistics/",
            "title": "Op.gg"
        },
        {
            "href": "https://u.gg/lol/champions/annie/build",
            "title": "U.gg"
        },
        {
            "href": "https://www.probuilds.net/champions/details/annie",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg"
        },
        {
            "name": "Goth Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_1.jpg"
        },
        {
            "name": "Red Riding Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_2.jpg"
        },
        {
            "name": "Annie in Wonderland",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_3.jpg"
        },
        {
            "name": "Prom Queen Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_4.jpg"
        },
        {
            "name": "Frostfire Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_5.jpg"
        },
        {
            "name": "Reverse Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_6.jpg"
        },
        {
            "name": "FrankenTibbers Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_7.jpg"
        },
        {
            "name": "Panda Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_8.jpg"
        },
        {
            "name": "Sweetheart Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_9.jpg"
        },
        {
            "name": "Hextech Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_10.jpg"
        },
        {
            "name": "Super Galaxy Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_11.jpg"
        },
        {
            "name": "Annie-Versary",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_12.jpg"
        },
        {
            "name": "Lunar Beast Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_13.jpg"
        },
        {
            "name": "Cafe Cuties Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_22.jpg"
        },
        {
            "name": "Fright Night Annie",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_31.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "After casting 4 spells, Annie's next offensive spell will stun the target.\n\nAnnie begins the game and respawns with Pyromania available.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Annie_Passive.png",
        "champion_passive_name": "Pyromania",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Annie hurls a Mana infused fireball, dealing damage and refunding the Mana cost if it destroys the target.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AnnieQ.png",
        "champion_q_name": "Disintegrate",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Annie casts a blazing cone of fire, dealing damage to all enemies in the area.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AnnieW.png",
        "champion_w_name": "Incinerate",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Grants Annie or an ally a shield, a burst of Move Speed, and damages enemies who strike her with attacks or spells.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AnnieE.png",
        "champion_e_name": "Molten Shield",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Annie wills her bear Tibbers to life, dealing damage to units in the area. Tibbers can attack and also burns enemies that stand near him.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AnnieR.png",
        "champion_r_name": "Summon: Tibbers",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0001/ability_0001_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt234c097cdcadb697",
    "url": "/champions/aphelios/",
    "data_dragon_id": "Aphelios",
    "data_dragon_json": "{\"id\":\"Aphelios\",\"key\":\"523\",\"name\":\"Aphelios\",\"title\":\"the Weapon of the Faithful\",\"image\":{\"full\":\"Aphelios.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"523000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"523001\",\"num\":1,\"name\":\"Nightbringer Aphelios\",\"chromas\":true},{\"id\":\"523009\",\"num\":9,\"name\":\"Lunar Beast Aphelios\",\"chromas\":true},{\"id\":\"523018\",\"num\":18,\"name\":\"EDG Aphelios\",\"chromas\":false},{\"id\":\"523020\",\"num\":20,\"name\":\"Spirit Blossom Aphelios\",\"chromas\":false}],\"lore\":\"Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by his sister Alune. From her distant temple sanctuary, she pushes an arsenal of moonstone weapons into his hands. For as long as the moon shines overhead, Aphelios will never be alone.\",\"blurb\":\"Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by...\",\"allytips\":[\"Each of Aphelios' weapons have different strengths, so try to find the right situation for your current weapons. \"],\"enemytips\":[\"Each of Aphelios' weapons have different weaknesses, try to exploit the ones that work best for your champion. Watch out for the purple Gravity gun, it can root you.\"],\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"info\":{\"attack\":6,\"defense\":2,\"magic\":1,\"difficulty\":10},\"stats\":{\"hp\":580,\"hpperlevel\":102,\"mp\":348,\"mpperlevel\":42,\"movespeed\":325,\"armor\":26,\"armorperlevel\":4.2,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":550,\"hpregen\":3.25,\"hpregenperlevel\":0.55,\"mpregen\":6.5,\"mpregenperlevel\":0.4,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.1,\"attackspeed\":0.64},\"spells\":[{\"id\":\"ApheliosQ_ClientTooltipWrapper\",\"name\":\"Weapon Abilites\",\"description\":\"Aphelios has 5 different activated abilities, based on his main-hand weapon:<br><br>Calibrum (Rifle): Long range shot that marks its target for a long-range follow-up attack.<br>Severum (Scythe Pistol): Run fast while attacking nearby enemies with both weapons.<br>Gravitum (Cannon): Root all enemies slowed by this weapon.<br>Infernum (Flamethrower): Blast enemies in a cone and attack them with your off-hand weapon.<br>Crescendum (Chakram): Deploy a sentry that shoots your off-hand weapon.<br>\",\"tooltip\":\"{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[],\"effect\":[]},\"maxrank\":6,\"cooldown\":[9,9,9,9,9,9],\"cooldownBurn\":\"9\",\"cost\":[60,60,60,60,60,60],\"costBurn\":\"60\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1450,1450,1450,1450,1450,1450],\"rangeBurn\":\"1450\",\"image\":{\"full\":\"ApheliosQ_ClientTooltipWrapper.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"ApheliosW\",\"name\":\"Phase\",\"description\":\"Aphelios swaps his main-hand gun with his off-hand gun, replacing his basic attack and activated ability.\",\"tooltip\":\"Swap main-hand and off-hand weapons, equipping <b><i><span class=\\\"colora64dff\\\">Gravitum</span></i></b>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[],\"effect\":[]},\"maxrank\":6,\"cooldown\":[0.8,0.8,0.8,0.8,0.8,0.8],\"cooldownBurn\":\"0.8\",\"cost\":[0,0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[250,250,250,250,250,250],\"rangeBurn\":\"250\",\"image\":{\"full\":\"ApheliosW.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"No Cost\"},{\"id\":\"ApheliosE_ClientTooltipWrapper\",\"name\":\"Weapon Queue System\",\"description\":\"Aphelios has no third ability. This slot shows the next weapon Alune will give him. Weapon order begins fixed but may change over game time -- when a weapon is out of ammo it goes to the end of the order.\",\"tooltip\":\"{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[],\"effect\":[]},\"maxrank\":6,\"cooldown\":[0,0,0,0,0,0],\"cooldownBurn\":\"0\",\"cost\":[0,0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1000,1000,1000,1000,1000,1000],\"rangeBurn\":\"1000\",\"image\":{\"full\":\"ApheliosE_ClientTooltipWrapper.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"ApheliosR\",\"name\":\"Moonlight Vigil\",\"description\":\"Fire a concentrated blast of moonlight that explodes on enemy champions. Applies the unique effect of Aphelios' main-hand gun.\",\"tooltip\":\"Aphelios fires a concentrated blast of moonlight that explodes when it hits a champion, dealing <physicalDamage>{{ maxdamage }} physical damage</physicalDamage> to surrounding enemies.<br /><br />Then, Aphelios attacks all champions hit with his main-hand weapon. {{ Spell_ApheliosR_WeaponMod_{{ f1 }} }}{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Calibrum Bonus: Mark Damage\",\"Severum Bonus: Heal\",\"Infernum Bonus: Damage\"],\"effect\":[\"{{ rbasedamage }} -> {{ rbasedamageNL }}\",\"{{ calibrumrmarkbonusdamage }} -> {{ calibrumrmarkbonusdamageNL }}\",\"{{ severumrhealbonus }} -> {{ severumrhealbonusNL }}\",\"{{ infernumrbonusdamagebase }} -> {{ infernumrbonusdamagebaseNL }}\"]},\"maxrank\":3,\"cooldown\":[120,110,100],\"cooldownBurn\":\"120/110/100\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1300,1300,1300],\"rangeBurn\":\"1300\",\"image\":{\"full\":\"ApheliosR.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"The Hitman and the Seer\",\"description\":\"Aphelios wields 5 Lunari Weapons made by his sister Alune. He has access to two at a time: one main-hand and one off-hand. Each weapon has a unique Basic Attack and Ability. Attacks and abilities consume a weapon's ammo. When out of ammo, Aphelios discards the weapon and Alune summons the next of the 5. \",\"image\":{\"full\":\"ApheliosP.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":384,\"y\":0,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by...",
    "lore": "Emerging from moonlight's shadow with weapons drawn, Aphelios kills the enemies of his faith in brooding silence—speaking only through the certainty of his aim, and the firing of each gun. Though fueled by a poison that renders him mute, he is guided by his sister Alune. From her distant temple sanctuary, she pushes an arsenal of moonstone weapons into his hands. For as long as the moon shines overhead, Aphelios will never be alone.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Aphelios.png",
    "champion_name": "Aphelios",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
    "champion_title": "the Weapon of the Faithful",
    "recommended_lanes": [],
    "recommended_roles": [
        "Marksman"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/aphelios/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/aphelios/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/aphelios",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg"
        },
        {
            "name": "Nightbringer Aphelios",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_1.jpg"
        },
        {
            "name": "Lunar Beast Aphelios",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_9.jpg"
        },
        {
            "name": "EDG Aphelios",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_18.jpg"
        },
        {
            "name": "Spirit Blossom Aphelios",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_20.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Aphelios wields 5 Lunari Weapons made by his sister Alune. He has access to two at a time: one main-hand and one off-hand. Each weapon has a unique Basic Attack and Ability. Attacks and abilities consume a weapon's ammo. When out of ammo, Aphelios discards the weapon and Alune summons the next of the 5. ",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/ApheliosP.png",
        "champion_passive_name": "The Hitman and the Seer",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Aphelios has 5 different activated abilities, based on his main-hand weapon:\n\nCalibrum (Rifle): Long range shot that marks its target for a long-range follow-up attack.\nSeverum (Scythe Pistol): Run fast while attacking nearby enemies with both weapons.\nGravitum (Cannon): Root all enemies slowed by this weapon.\nInfernum (Flamethrower): Blast enemies in a cone and attack them with your off-hand weapon.\nCrescendum (Chakram): Deploy a sentry that shoots your off-hand weapon.\n",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/ApheliosQ_ClientTooltipWrapper.png",
        "champion_q_name": "Weapon Abilites",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Aphelios swaps his main-hand gun with his off-hand gun, replacing his basic attack and activated ability.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/ApheliosW.png",
        "champion_w_name": "Phase",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Aphelios has no third ability. This slot shows the next weapon Alune will give him. Weapon order begins fixed but may change over game time -- when a weapon is out of ammo it goes to the end of the order.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/ApheliosE_ClientTooltipWrapper.png",
        "champion_e_name": "Weapon Queue System",
        "champion_e_video_mp4": "",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Fire a concentrated blast of moonlight that explodes on enemy champions. Applies the unique effect of Aphelios' main-hand gun.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/ApheliosR.png",
        "champion_r_name": "Moonlight Vigil",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0523/ability_0523_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt91a4bd9d3499c588",
    "url": "/champions/ashe/",
    "data_dragon_id": "Ashe",
    "data_dragon_json": "{\"id\":\"Ashe\",\"key\":\"22\",\"name\":\"Ashe\",\"title\":\"the Frost Archer\",\"image\":{\"full\":\"Ashe.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"22000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"22001\",\"num\":1,\"name\":\"Freljord Ashe\",\"chromas\":false},{\"id\":\"22002\",\"num\":2,\"name\":\"Sherwood Forest Ashe\",\"chromas\":false},{\"id\":\"22003\",\"num\":3,\"name\":\"Woad Ashe\",\"chromas\":false},{\"id\":\"22004\",\"num\":4,\"name\":\"Queen Ashe\",\"chromas\":false},{\"id\":\"22005\",\"num\":5,\"name\":\"Amethyst Ashe\",\"chromas\":false},{\"id\":\"22006\",\"num\":6,\"name\":\"Heartseeker Ashe\",\"chromas\":false},{\"id\":\"22007\",\"num\":7,\"name\":\"Marauder Ashe\",\"chromas\":false},{\"id\":\"22008\",\"num\":8,\"name\":\"PROJECT: Ashe\",\"chromas\":true},{\"id\":\"22009\",\"num\":9,\"name\":\"Championship Ashe\",\"chromas\":true},{\"id\":\"22011\",\"num\":11,\"name\":\"Cosmic Queen Ashe\",\"chromas\":true},{\"id\":\"22017\",\"num\":17,\"name\":\"High Noon Ashe\",\"chromas\":true},{\"id\":\"22023\",\"num\":23,\"name\":\"Fae Dragon Ashe\",\"chromas\":true},{\"id\":\"22032\",\"num\":32,\"name\":\"Coven Ashe\",\"chromas\":true},{\"id\":\"22043\",\"num\":43,\"name\":\"Ocean Song Ashe\",\"chromas\":true},{\"id\":\"22052\",\"num\":52,\"name\":\"Lunar Empress Ashe\",\"chromas\":true},{\"id\":\"22063\",\"num\":63,\"name\":\"DRX Ashe\",\"chromas\":true}],\"lore\":\"Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.\",\"blurb\":\"Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice...\",\"allytips\":[\"Try to fire Enchanted Crystal Arrow in the same direction enemies are moving, so it is more likely to hit.\",\"Volley arrows are blocked by the first enemy they hit, so keep your distance to avoid having them all absorbed by enemy frontliners.\",\"Hawkshot reveals units in brush. If a team fight is occuring in the jungle it can give you a significant advantage.\"],\"enemytips\":[\"Ashe has very few defensive options, and she's a good target to gank.\",\"Be wary of moving around the map alone if Ashe has not recently cast her Enchanted Crystal Arrow.\"],\"tags\":[\"Marksman\",\"Support\"],\"partype\":\"Mana\",\"info\":{\"attack\":7,\"defense\":3,\"magic\":2,\"difficulty\":4},\"stats\":{\"hp\":640,\"hpperlevel\":101,\"mp\":280,\"mpperlevel\":35,\"movespeed\":325,\"armor\":26,\"armorperlevel\":4.6,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":600,\"hpregen\":3.5,\"hpregenperlevel\":0.55,\"mpregen\":7,\"mpregenperlevel\":0.65,\"crit\":0,\"critperlevel\":0,\"attackdamage\":59,\"attackdamageperlevel\":2.95,\"attackspeedperlevel\":3.33,\"attackspeed\":0.658},\"spells\":[{\"id\":\"AsheQ\",\"name\":\"Ranger's Focus\",\"description\":\"Ashe builds up Focus by attacking. At maximum Focus, Ashe can cast Ranger's Focus to consume all stacks of Focus, temporarily increasing her Attack Speed and transforming her basic attack into a powerful flurry attack for the duration.\",\"tooltip\":\"<spellPassive>Passive: </spellPassive>Ashe's Attacks grant a stack for {{ e1 }} seconds. At {{ e2 }} stacks, she may activate this ability.<br /><br /><spellPassive>Active:</spellPassive> Ashe gains <attackSpeed>{{ e4 }}% Attack Speed</attackSpeed> and her Attacks deal <physicalDamage>{{ empowereddamage }} damage</physicalDamage> instead for {{ e3 }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Attack Speed\",\"Flurry Attack Damage ratio\"],\"effect\":[\"{{ e4 }}% -> {{ e4NL }}%\",\"{{ e6 }} -> {{ e6NL }}\"]},\"maxrank\":5,\"cooldown\":[0,0,0,0,0],\"cooldownBurn\":\"0\",\"cost\":[30,30,30,30,30],\"costBurn\":\"30\",\"datavalues\":{},\"effect\":[null,[4,4,4,4,4],[4,4,4,4,4],[6,6,6,6,6],[25,32.5,40,47.5,55],[0.21,0.22,0.23,0.24,0.25],[1.05,1.1,1.15,1.2,1.25],[1,1,1,1,1],[1,1,1,1,1],[1,1,1,1,1],[0,0,0,0,0]],\"effectBurn\":[null,\"4\",\"4\",\"6\",\"25/32.5/40/47.5/55\",\"0.21/0.22/0.23/0.24/0.25\",\"1.05/1.1/1.15/1.2/1.25\",\"1\",\"1\",\"1\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[400,400,400,400,400],\"rangeBurn\":\"400\",\"image\":{\"full\":\"AsheQ.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"Volley\",\"name\":\"Volley\",\"description\":\"Ashe fires arrows in a cone for increased damage. Also applies Frost Shot.\",\"tooltip\":\"Ashe fires a volley of {{ numberofarrowstooltip }} arrows, each dealing <physicalDamage>{{ totaldamage }} physical damage</physicalDamage>. Enemies can be hit by multiple arrows, but only take damage from the first.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Arrows Fired\",\"Damage\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ numberofarrowstooltip }} -> {{ numberofarrowstooltipNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[18,14.5,11,7.5,4],\"cooldownBurn\":\"18/14.5/11/7.5/4\",\"cost\":[75,70,65,60,55],\"costBurn\":\"75/70/65/60/55\",\"datavalues\":{},\"effect\":[null,[5,7,9,11,13],[20,35,50,65,80],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"5/7/9/11/13\",\"20/35/50/65/80\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1200,1200,1200,1200,1200],\"rangeBurn\":\"1200\",\"image\":{\"full\":\"Volley.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AsheSpiritOfTheHawk\",\"name\":\"Hawkshot\",\"description\":\"Ashe sends her Hawk Spirit on a scouting mission anywhere on the map.\",\"tooltip\":\"Ashe sends forth a hawk to grant vision for 5 seconds anywhere on the map. It also reveals the area around it as it flies.<br /><br />This ability has 2 charges ({{ chargecooldown }} second recharge).{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Recharge Time\"],\"effect\":[\"{{ ammorechargetime }} -> {{ ammorechargetimeNL }}\"]},\"maxrank\":5,\"cooldown\":[5,5,5,5,5],\"cooldownBurn\":\"5\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[3,3,3,3,3],[50,90,130,170,210],[25000,25000,25000,25000,25000],[5,5,5,5,5],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"3\",\"50/90/130/170/210\",\"25000\",\"5\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"2\",\"range\":[25000,25000,25000,25000,25000],\"rangeBurn\":\"25000\",\"image\":{\"full\":\"AsheSpiritOfTheHawk.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"No Cost\"},{\"id\":\"EnchantedCrystalArrow\",\"name\":\"Enchanted Crystal Arrow\",\"description\":\"Ashe fires a missile of ice in a straight line. If the arrow collides with an enemy Champion, it deals damage and stuns the Champion, stunning for longer the farther arrow has traveled. In addition, surrounding enemy units take damage and are slowed.\",\"tooltip\":\"Ashe launches a crystal arrow of ice that <status>Stuns</status> the first champion hit and deals <magicDamage>{{ rmaindamage }} magic damage</magicDamage>. The <status>Stun</status> duration increases with distance travelled, up to {{ maxstunduration }} seconds. Surrounding enemies are slowed by <spellName>Frost Shot</spellName> and take half damage.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ rbasedamage }} -> {{ rbasedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[100,80,60],\"cooldownBurn\":\"100/80/60\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[25000,25000,25000],\"rangeBurn\":\"25000\",\"image\":{\"full\":\"EnchantedCrystalArrow.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Frost Shot\",\"description\":\"Ashe's attacks slow their target, causing her to deal increased damage to these targets.<br><br>Ashe's critical strikes deal no bonus damage but apply an empowered slow to the target.\",\"image\":{\"full\":\"Ashe_P.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":432,\"y\":0,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice...",
    "lore": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice. With her people's belief that she is the mythological hero Avarosa reincarnated, Ashe hopes to unify the Freljord once more by retaking their ancient, tribal lands.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Ashe.png",
    "champion_name": "Ashe",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
    "champion_title": "the Frost Archer",
    "recommended_lanes": [],
    "recommended_roles": [
        "Marksman",
        "Support"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/ashe/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/ashe/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/ashe",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg"
        },
        {
            "name": "Freljord Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_1.jpg"
        },
        {
            "name": "Sherwood Forest Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_2.jpg"
        },
        {
            "name": "Woad Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_3.jpg"
        },
        {
            "name": "Queen Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_4.jpg"
        },
        {
            "name": "Amethyst Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_5.jpg"
        },
        {
            "name": "Heartseeker Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_6.jpg"
        },
        {
            "name": "Marauder Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_7.jpg"
        },
        {
            "name": "PROJECT: Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_8.jpg"
        },
        {
            "name": "Championship Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_9.jpg"
        },
        {
            "name": "Cosmic Queen Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_11.jpg"
        },
        {
            "name": "High Noon Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_17.jpg"
        },
        {
            "name": "Fae Dragon Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_23.jpg"
        },
        {
            "name": "Coven Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_32.jpg"
        },
        {
            "name": "Ocean Song Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_43.jpg"
        },
        {
            "name": "Lunar Empress Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_52.jpg"
        },
        {
            "name": "DRX Ashe",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_63.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Ashe's attacks slow their target, causing her to deal increased damage to these targets.\n\nAshe's critical strikes deal no bonus damage but apply an empowered slow to the target.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Ashe_P.png",
        "champion_passive_name": "Frost Shot",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Ashe builds up Focus by attacking. At maximum Focus, Ashe can cast Ranger's Focus to consume all stacks of Focus, temporarily increasing her Attack Speed and transforming her basic attack into a powerful flurry attack for the duration.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AsheQ.png",
        "champion_q_name": "Ranger's Focus",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Ashe fires arrows in a cone for increased damage. Also applies Frost Shot.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/Volley.png",
        "champion_w_name": "Volley",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Ashe sends her Hawk Spirit on a scouting mission anywhere on the map.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AsheSpiritOfTheHawk.png",
        "champion_e_name": "Hawkshot",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Ashe fires a missile of ice in a straight line. If the arrow collides with an enemy Champion, it deals damage and stuns the Champion, stunning for longer the farther arrow has traveled. In addition, surrounding enemy units take damage and are slowed.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EnchantedCrystalArrow.png",
        "champion_r_name": "Enchanted Crystal Arrow",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0022/ability_0022_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt78dcc651d55801e4",
    "url": "/champions/aurelion-sol/",
    "data_dragon_id": "AurelionSol",
    "data_dragon_json": "{\"id\":\"AurelionSol\",\"key\":\"136\",\"name\":\"Aurelion Sol\",\"title\":\"The Star Forger\",\"image\":{\"full\":\"AurelionSol.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"136000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"136001\",\"num\":1,\"name\":\"Ashen Lord Aurelion Sol\",\"chromas\":false},{\"id\":\"136002\",\"num\":2,\"name\":\"Mecha Aurelion Sol\",\"chromas\":true},{\"id\":\"136011\",\"num\":11,\"name\":\"Storm Dragon Aurelion Sol\",\"chromas\":false},{\"id\":\"136021\",\"num\":21,\"name\":\"Inkshadow Aurelion Sol\",\"chromas\":false}],\"lore\":\"Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.\",\"blurb\":\"Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his...\",\"allytips\":[],\"enemytips\":[],\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"info\":{\"attack\":2,\"defense\":3,\"magic\":8,\"difficulty\":7},\"stats\":{\"hp\":620,\"hpperlevel\":90,\"mp\":530,\"mpperlevel\":40,\"movespeed\":335,\"armor\":22,\"armorperlevel\":4,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":8,\"mpregenperlevel\":0.75,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":1.5,\"attackspeed\":0.625},\"spells\":[{\"id\":\"AurelionSolQ\",\"name\":\"Breath of Light\",\"description\":\"Aurelion Sol channels his dragon breath for a few seconds, damaging the first enemy hit and splashing reduced damage onto nearby enemies. Each second the breath is channeled directly at an enemy will deal bonus damage, which is improved by the amount of Stardust that's been collected. This ability collects Stardust if the target is a champion.\",\"tooltip\":\"Aurelion Sol breathes starfire for up to {{ maxchannelduration }} seconds, dealing <magicDamage>{{ damagepersecond }} magic damage</magicDamage> per second to the first enemy hit and {{ aoemodifier*100 }}% of the damage to surrounding enemies.<br /><br />Each full second of breath on the same enemy deals a burst of <magicDamage>{{ burstdamage }} magic damage</magicDamage> plus <magicDamage>{{ burstbonustruedamagetochamps }} max Health magic damage</magicDamage> and absorbs <span class=\\\"color3458eb\\\">{{ qmassstolen }} Stardust</span> if they are a champion.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"@AbilityResourceName@ Cost\",\"Damage Per Second\",\"Burst Damage\",\"Maximum Channel Duration\"],\"effect\":[\"{{ cost }} -> {{ costNL }}\",\"{{ rankdamagepersecond }} -> {{ rankdamagepersecondNL }}\",\"{{ rankburstdamage }} -> {{ rankburstdamageNL }}\",\"{{ maxchannelduration }} -> {{ maxchanneldurationNL }}\"]},\"maxrank\":5,\"cooldown\":[3,3,3,3,3],\"cooldownBurn\":\"3\",\"cost\":[45,50,55,60,65],\"costBurn\":\"45/50/55/60/65\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" Mana per second\",\"maxammo\":\"-1\",\"range\":[750,750,750,750,750],\"rangeBurn\":\"750\",\"image\":{\"full\":\"AurelionSolQ.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ manacostpersecond }} Mana per second\"},{\"id\":\"AurelionSolW\",\"name\":\"Astral Flight\",\"description\":\"Aurelion Sol flies over terrain in a targeted direction. While in this state, he can cast other abilities. Breath of Light no longer has a cooldown or maximum channel duration and deals increased damage while flying.\\\\n\\\\nAstral Flight's remaining cooldown is reduced whenever an enemy champion dies after being recently damaged by Aurelion Sol.\\\\n\\\\nStardust increases Astral Flight's maximum range.\",\"tooltip\":\"Aurelion Sol flies in a direction. While flying, <spellName>Breath of Light</spellName> has no Cooldown, no max channel duration, and its flat damage is increased by {{ truedamagebonus*100 }}%.<br /><br />Takedowns on champions within {{ resetwindow }} seconds of damaging them refunds {{ tooltiptakedowncooldownmultiplier }}% of this Ability's Cooldown.<br /><br /><recast>Recast:</recast> End flight early.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Percent Bonus Magic Damage\",\"@AbilityResourceName@ Cost\",\"Cooldown\"],\"effect\":[\"{{ truedamagebonus*100.000000 }} -> {{ truedamagebonusnl*100.000000 }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ cd }} -> {{ cdNL }}\"]},\"maxrank\":5,\"cooldown\":[0,0,0,0,0],\"cooldownBurn\":\"0\",\"cost\":[80,85,90,95,100],\"costBurn\":\"80/85/90/95/100\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1200,1200,1200,1200,1200],\"rangeBurn\":\"1200\",\"image\":{\"full\":\"AurelionSolW.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AurelionSolE\",\"name\":\"Singularity\",\"description\":\"Aurelion Sol summons a black hole, damaging enemies and slowly pulling them toward its center. This ability grants Stardust each time an enemy dies within the black hole and for each second an enemy champion is caught inside it. The center of the black hole executes enemies who are below a certain percentage of their maximum health. Stardust increases Singularity's area as well as the execution threshold.\",\"tooltip\":\"Aurelion Sol summons a black hole, dealing <magicDamage>{{ damagepersecond }} magic damage</magicDamage> per second and <status>Dragging</status> enemies towards the center for {{ duration }} seconds. Enemies in the center below <scaleHealth>{{ currentexecutionthreshold }}% max Health</scaleHealth> die instantly.<br /><br />The black hole absorbs <span class=\\\"color3458eb\\\">Stardust</span> when enemies die within it and each second an enemy champion is inside.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage Per Second\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ basedamagepersecond }} -> {{ basedamagepersecondNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[12,12,12,12,12],\"cooldownBurn\":\"12\",\"cost\":[80,85,90,95,100],\"costBurn\":\"80/85/90/95/100\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[750,750,750,750,750],\"rangeBurn\":\"750\",\"image\":{\"full\":\"AurelionSolE.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AurelionSolR\",\"name\":\"Falling Star / The Skies Descend\",\"description\":\"Falling Star: Aurelion Sol crashes a star into the earth. This impact deals magic damage and stuns enemies while also granting Stardust for each enemy champion it hits. Gathering enough Stardust transforms Aurelion Sol's next Falling Star into The Skies Descend. The Skies Descend: Aurelion Sol drags a giant star down from the heavens with an increased impact zone and increased damage, knocking up enemies rather than stunning them. A shockwave then spreads from the edge of the impact zone, which damages and slows the enemies it hits. Stardust increases the impact area of both Falling Star and The Skies Descend.\",\"tooltip\":\"Aurelion Sol plucks a star from the heavens and crashes it into the earth, dealing <magicDamage>{{ maxdamagetooltip }} magic damage</magicDamage>, <status>Stunning</status> enemies {{ stunduration }} second, and absorbing <span class=\\\"color3458eb\\\">{{ massstolen }} Stardust</span> for each champion hit.<br /><br />Gathering <span class=\\\"color3458eb\\\">{{ calamitystacks }} Stardust</span> transforms the next <spellName>Falling Star</spellName> into <spellName>The Skies Descend</spellName>.<br /><br /><spellName>The Skies Descend</spellName>: Aurelion Sol drags a constellation's worth of fury down from the cosmos, dealing <magicDamage>{{ r2damage }} magic damage</magicDamage> in a larger area, <status>Knocking Up</status> enemies hit for {{ stunduration }} second, and unleashing a massive shockwave that deals <magicDamage>{{ shockwavedamage }} magic damage</magicDamage> to champions and Epic Monsters and <status>Slows</status> all enemies hit by {{ shockwaveslow*100 }}% for 1 second.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Damage\",\"Empowered Damage\",\"Shockwave Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ basedamage*1.250000 }} -> {{ basedamagenl*1.250000 }}\",\"{{ basedamage }} -> {{ basedamageNL }}\"]},\"maxrank\":3,\"cooldown\":[120,110,100],\"cooldownBurn\":\"120/110/100\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1250,1250,1250],\"rangeBurn\":\"1250\",\"image\":{\"full\":\"AurelionSolR.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Cosmic Creator\",\"description\":\"Aurelion Sol's damaging Abilities break down enemies into stacks of <font color='#3458eb'>Stardust</font>, which permanently improves each of his abilities. \",\"image\":{\"full\":\"AurelionSolP.ASolGU.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":0,\"y\":48,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his...",
    "lore": "Aurelion Sol once graced the vast emptiness of the cosmos with celestial wonders of his own devising. Now, he is forced to wield his awesome power at the behest of a space-faring empire that tricked him into servitude. Desiring a return to his star-forging ways, Aurelion Sol will drag the very stars from the sky, if he must, in order to regain his freedom.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/AurelionSol.png",
    "champion_name": "Aurelion Sol",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
    "champion_title": "The Star Forger",
    "recommended_lanes": [],
    "recommended_roles": [
        "Mage"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/aurelionsol/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/aurelionsol/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/aurelionsol",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg"
        },
        {
            "name": "Ashen Lord Aurelion Sol",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_1.jpg"
        },
        {
            "name": "Mecha Aurelion Sol",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_2.jpg"
        },
        {
            "name": "Storm Dragon Aurelion Sol",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_11.jpg"
        },
        {
            "name": "Inkshadow Aurelion Sol",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_21.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Aurelion Sol's damaging Abilities break down enemies into stacks of Stardust, which permanently improves each of his abilities. ",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/AurelionSolP.ASolGU.png",
        "champion_passive_name": "Cosmic Creator",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Aurelion Sol channels his dragon breath for a few seconds, damaging the first enemy hit and splashing reduced damage onto nearby enemies. Each second the breath is channeled directly at an enemy will deal bonus damage, which is improved by the amount of Stardust that's been collected. This ability collects Stardust if the target is a champion.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AurelionSolQ.png",
        "champion_q_name": "Breath of Light",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Aurelion Sol flies over terrain in a targeted direction. While in this state, he can cast other abilities. Breath of Light no longer has a cooldown or maximum channel duration and deals increased damage while flying.\\n\\nAstral Flight's remaining cooldown is reduced whenever an enemy champion dies after being recently damaged by Aurelion Sol.\\n\\nStardust increases Astral Flight's maximum range.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AurelionSolW.png",
        "champion_w_name": "Astral Flight",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Aurelion Sol summons a black hole, damaging enemies and slowly pulling them toward its center. This ability grants Stardust each time an enemy dies within the black hole and for each second an enemy champion is caught inside it. The center of the black hole executes enemies who are below a certain percentage of their maximum health. Stardust increases Singularity's area as well as the execution threshold.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AurelionSolE.png",
        "champion_e_name": "Singularity",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Falling Star: Aurelion Sol crashes a star into the earth. This impact deals magic damage and stuns enemies while also granting Stardust for each enemy champion it hits. Gathering enough Stardust transforms Aurelion Sol's next Falling Star into The Skies Descend. The Skies Descend: Aurelion Sol drags a giant star down from the heavens with an increased impact zone and increased damage, knocking up enemies rather than stunning them. A shockwave then spreads from the edge of the impact zone, which damages and slows the enemies it hits. Stardust increases the impact area of both Falling Star and The Skies Descend.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AurelionSolR.png",
        "champion_r_name": "Falling Star / The Skies Descend",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0136/ability_0136_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt48be9ecd8f1b761a",
    "url": "/champions/azir/",
    "data_dragon_id": "Azir",
    "data_dragon_json": "{\"id\":\"Azir\",\"key\":\"268\",\"name\":\"Azir\",\"title\":\"the Emperor of the Sands\",\"image\":{\"full\":\"Azir.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"268000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"268001\",\"num\":1,\"name\":\"Galactic Azir\",\"chromas\":false},{\"id\":\"268002\",\"num\":2,\"name\":\"Gravelord Azir\",\"chromas\":false},{\"id\":\"268003\",\"num\":3,\"name\":\"SKT T1 Azir\",\"chromas\":false},{\"id\":\"268004\",\"num\":4,\"name\":\"Warring Kingdoms Azir\",\"chromas\":false},{\"id\":\"268005\",\"num\":5,\"name\":\"Elderwood Azir\",\"chromas\":true},{\"id\":\"268014\",\"num\":14,\"name\":\"Worlds 2022 Azir\",\"chromas\":true}],\"lore\":\"Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power. With his buried city risen from the sand, Azir seeks to restore Shurima to its former glory.\",\"blurb\":\"Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended...\",\"allytips\":[\"Be careful about putting down both of the soldiers stored by Arise! Unless you're going all-in, always have a soldier in your back pocket if you need to escape over a wall or if you misposition your other soldier and need damage now.\",\"In the lane, try to position your soldiers between the enemy's minions and the enemy champion. This way you can use them both to last hit and to project threat onto your lane opponent.\",\"Think of Emperor's Divide as a defensive ability first and foremost. Use it when the enemy engages on you or your allies. Remember that your team can walk through the soldiers summoned by Emperor's Divide and use this to your advantage when enemy melee champions engage on you.\",\"Be a bird!\"],\"enemytips\":[\"Azir relies on his soldiers to deal damage and can only move them so often. Try to capitalize on windows of time when his soldiers are stationary.\",\"Azir has immense damage over a prolonged amount of time but lacks the upfront burst of other mages. Try to burst him out before he can turn a confrontation around.\",\"Try to think of Sand Soldiers as fire. Don't stand in the fire.\"],\"tags\":[\"Mage\",\"Marksman\"],\"partype\":\"Mana\",\"info\":{\"attack\":6,\"defense\":3,\"magic\":8,\"difficulty\":9},\"stats\":{\"hp\":550,\"hpperlevel\":119,\"mp\":320,\"mpperlevel\":40,\"movespeed\":335,\"armor\":22,\"armorperlevel\":5,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":525,\"hpregen\":7,\"hpregenperlevel\":0.75,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":52,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":6,\"attackspeed\":0.625},\"spells\":[{\"id\":\"AzirQWrapper\",\"name\":\"Conquering Sands\",\"description\":\"Azir sends all Sand Soldiers towards a location. Sand Soldiers deal magic damage to enemies they pass through and apply a slow for 1 second.\",\"tooltip\":\"Azir orders all <keywordMajor>Sand Soldiers</keywordMajor> to an area, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> to enemies they pass through and <status>Slowing</status> them by {{ e2 }}% for 1 second.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[12,10.5,9,7.5,6],\"cooldownBurn\":\"12/10.5/9/7.5/6\",\"cost\":[70,80,90,100,110],\"costBurn\":\"70/80/90/100/110\",\"datavalues\":{},\"effect\":[null,[60,80,100,120,140],[25,25,25,25,25],[0,0,0,0,0],[70,70,70,70,70],[1600,1600,1600,1600,1600],[200,200,200,200,200],[325,325,325,325,325],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"60/80/100/120/140\",\"25\",\"0\",\"70\",\"1600\",\"200\",\"325\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[740,740,740,740,740],\"rangeBurn\":\"740\",\"image\":{\"full\":\"AzirQWrapper.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AzirW\",\"name\":\"Arise!\",\"description\":\"Azir summons a Sand Soldier to attack nearby targets for him, replacing his basic attack against targets within the soldier's range. Their attacks deal magic damage to enemies in a line. Arise! also passively grants attack speed to Azir and his Sand Soldiers.\",\"tooltip\":\"Azir summons a <keywordMajor>Sand Soldier</keywordMajor> for {{ e1 }} seconds. When Azir Attacks an enemy near a <keywordMajor>Sand Soldier</keywordMajor>, he instead orders the soldiers to stab, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> in their direction.<br /><br />This Ability has {{ maxammo }} charges.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Solder Attack Damage\",\"Recharge Time\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ ammorechargetime }} -> {{ ammorechargetimeNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[1.5,1.5,1.5,1.5,1.5],\"cooldownBurn\":\"1.5\",\"cost\":[40,35,30,25,20],\"costBurn\":\"40/35/30/25/20\",\"datavalues\":{},\"effect\":[null,[10,10,10,10,10],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[3,3,3,3,3],[0,0,0,0,0],[5,5,5,5,5],[25,25,25,25,25],[0.5,0.5,0.5,0.5,0.5]],\"effectBurn\":[null,\"10\",\"0\",\"0\",\"0\",\"0\",\"3\",\"0\",\"5\",\"25\",\"0.5\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"2\",\"range\":[525,525,525,525,525],\"rangeBurn\":\"525\",\"image\":{\"full\":\"AzirW.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AzirEWrapper\",\"name\":\"Shifting Sands\",\"description\":\"Azir shields himself briefly and dashes to one of his Sand Soldiers, damaging enemies. If he hits an enemy champion, he instantly readies a new Sand Soldier for deployment and halts his dash.\",\"tooltip\":\"Azir grants himself <shield>{{ totalshield }} Shield</shield> for {{ e6 }} seconds and dashes to one of his <keywordMajor>Sand Soldiers</keywordMajor>, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> to enemies he passes through.<br /><br />If Azir hits an enemy champion, he stops and gains a <keywordMajor>Sand Soldier</keywordMajor> charge.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Shield Amount\",\"Damage\",\"Cooldown\"],\"effect\":[\"{{ e4 }} -> {{ e4NL }}\",\"{{ e3 }} -> {{ e3NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[22,20.5,19,17.5,16],\"cooldownBurn\":\"22/20.5/19/17.5/16\",\"cost\":[60,60,60,60,60],\"costBurn\":\"60\",\"datavalues\":{},\"effect\":[null,[1700,1700,1700,1700,1700],[0,0,0,0,0],[60,100,140,180,220],[70,110,150,190,230],[0.3,0.5,0.7,0.9,1.1],[1.5,1.5,1.5,1.5,1.5],[1100,1100,1100,1100,1100],[0,0,0,0,0],[5,5,5,5,5],[25,25,25,25,25]],\"effectBurn\":[null,\"1700\",\"0\",\"60/100/140/180/220\",\"70/110/150/190/230\",\"0.3/0.5/0.7/0.9/1.1\",\"1.5\",\"1100\",\"0\",\"5\",\"25\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1100,1100,1100,1100,1100],\"rangeBurn\":\"1100\",\"image\":{\"full\":\"AzirEWrapper.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"AzirR\",\"name\":\"Emperor's Divide\",\"description\":\"Azir summons a wall of soldiers which charge forward, knocking back and damaging enemies.\",\"tooltip\":\"Azir summons a wall of armored soldiers that charges forward, <status>Knocking Back</status> enemies and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. The soldiers remain, blocking enemy paths for {{ e4 }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Number of Soldiers\",\"Cooldown\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ e3 }} -> {{ e3NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[120,105,90],\"cooldownBurn\":\"120/105/90\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[200,400,600],[0,0,0],[6,7,8],[5,5,5],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"200/400/600\",\"0\",\"6/7/8\",\"5\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[250,250,250],\"rangeBurn\":\"250\",\"image\":{\"full\":\"AzirR.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Shurima's Legacy\",\"description\":\"Azir can summon the Disc of the Sun from the ruins of allied or enemy turrets.\",\"image\":{\"full\":\"Azir_Passive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":48,\"y\":48,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended...",
    "lore": "Azir was a mortal emperor of Shurima in a far distant age, a proud man who stood at the cusp of immortality. His hubris saw him betrayed and murdered at the moment of his greatest triumph, but now, millennia later, he has been reborn as an Ascended being of immense power. With his buried city risen from the sand, Azir seeks to restore Shurima to its former glory.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Azir.png",
    "champion_name": "Azir",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
    "champion_title": "the Emperor of the Sands",
    "recommended_lanes": [],
    "recommended_roles": [
        "Mage",
        "Marksman"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/azir/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/azir/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/azir",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg"
        },
        {
            "name": "Galactic Azir",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_1.jpg"
        },
        {
            "name": "Gravelord Azir",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_2.jpg"
        },
        {
            "name": "SKT T1 Azir",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_3.jpg"
        },
        {
            "name": "Warring Kingdoms Azir",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_4.jpg"
        },
        {
            "name": "Elderwood Azir",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_5.jpg"
        },
        {
            "name": "Worlds 2022 Azir",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_14.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Azir can summon the Disc of the Sun from the ruins of allied or enemy turrets.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Azir_Passive.png",
        "champion_passive_name": "Shurima's Legacy",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Azir sends all Sand Soldiers towards a location. Sand Soldiers deal magic damage to enemies they pass through and apply a slow for 1 second.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AzirQWrapper.png",
        "champion_q_name": "Conquering Sands",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Azir summons a Sand Soldier to attack nearby targets for him, replacing his basic attack against targets within the soldier's range. Their attacks deal magic damage to enemies in a line. Arise! also passively grants attack speed to Azir and his Sand Soldiers.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AzirW.png",
        "champion_w_name": "Arise!",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Azir shields himself briefly and dashes to one of his Sand Soldiers, damaging enemies. If he hits an enemy champion, he instantly readies a new Sand Soldier for deployment and halts his dash.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AzirEWrapper.png",
        "champion_e_name": "Shifting Sands",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Azir summons a wall of soldiers which charge forward, knocking back and damaging enemies.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AzirR.png",
        "champion_r_name": "Emperor's Divide",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0268/ability_0268_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "bltf7bf978b17d518df",
    "url": "/champions/bard/",
    "data_dragon_id": "Bard",
    "data_dragon_json": "{\"id\":\"Bard\",\"key\":\"432\",\"name\":\"Bard\",\"title\":\"the Wandering Caretaker\",\"image\":{\"full\":\"Bard.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"432000\",\"num\":0,\"name\":\"default\",\"chromas\":true},{\"id\":\"432001\",\"num\":1,\"name\":\"Elderwood Bard\",\"chromas\":false},{\"id\":\"432005\",\"num\":5,\"name\":\"Snow Day Bard\",\"chromas\":true},{\"id\":\"432006\",\"num\":6,\"name\":\"Bard Bard\",\"chromas\":false},{\"id\":\"432008\",\"num\":8,\"name\":\"Astronaut Bard\",\"chromas\":true},{\"id\":\"432017\",\"num\":17,\"name\":\"Cafe Cuties Bard\",\"chromas\":true},{\"id\":\"432026\",\"num\":26,\"name\":\"Shan Hai Scrolls Bard\",\"chromas\":true}],\"lore\":\"A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic vagabond is drawn to artifacts of great magical power. Surrounded by a jubilant choir of helpful spirit meeps, it is impossible to mistake his actions as malevolent, as Bard always serves the greater good... in his own odd way.\",\"blurb\":\"A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic...\",\"allytips\":[\"It's important to collect chimes to improve your meep's attacks, but don't neglect your lane partner! Try to make a big entrance by bringing an ally into the lane with you with Magical Journey.\",\"Let your Caretaker's Shrines charge up - they heal for a lot more when at full power.\",\"Don't forget that enemies can also use your Magical Journey doorways, and that your ultimate can also hit your allies!\"],\"enemytips\":[\"Bard's opponents can also travel through his Magical Journey doorways. You can follow him, if you think it's safe.\",\"You can crush Bard's healing shrines just by walking over them. Don't let his allies take them without a fight.\",\"Bard's ultimate, Tempered Fate, affects allies, enemies, monsters, and turrets alike. Sometimes it can be to your advantage to jump into it!\"],\"tags\":[\"Support\",\"Mage\"],\"partype\":\"Mana\",\"info\":{\"attack\":4,\"defense\":4,\"magic\":5,\"difficulty\":9},\"stats\":{\"hp\":630,\"hpperlevel\":103,\"mp\":350,\"mpperlevel\":50,\"movespeed\":330,\"armor\":34,\"armorperlevel\":5.2,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":500,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":6,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":52,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2,\"attackspeed\":0.625},\"spells\":[{\"id\":\"BardQ\",\"name\":\"Cosmic Binding\",\"description\":\"Bard fires a missile which will slow the first enemy struck, and continue onward. If it strikes a wall, it will stun the initial target; if it strikes another enemy, it will stun them both.\",\"tooltip\":\"Bard fires an energy bolt, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> to the first two enemies hit. The first target hit is <status>Slowed</status> by {{ e3 }}% for {{ e4 }} second(s).<br /><br />If the bolt hits a second enemy or a wall, any enemies hit are <status>Stunned</status> for {{ e2 }} second(s).<br />{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Slow Duration\",\"Stun Duration\",\"Cooldown\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ e2 }} -> {{ e2NL }}\",\"{{ e2 }} -> {{ e2NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[11,10,9,8,7],\"cooldownBurn\":\"11/10/9/8/7\",\"cost\":[60,60,60,60,60],\"costBurn\":\"60\",\"datavalues\":{},\"effect\":[null,[80,125,170,215,260],[1,1.2,1.4,1.6,1.8],[60,60,60,60,60],[1,1.2,1.4,1.6,1.8],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"80/125/170/215/260\",\"1/1.2/1.4/1.6/1.8\",\"60\",\"1/1.2/1.4/1.6/1.8\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[25000,25000,25000,25000,25000],\"rangeBurn\":\"25000\",\"image\":{\"full\":\"BardQ.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"BardW\",\"name\":\"Caretaker's Shrine\",\"description\":\"Reveals a healing shrine which powers up over a short time, disappearing after healing and speeding up the first ally that touches it.\",\"tooltip\":\"Bard creates a health shrine that grants <speed>{{ e1 }}% Move Speed</speed> decaying over {{ e2 }} seconds and restores at least <healing>{{ initialheal }} Health</healing> to the first ally to enter. The shrine grows to restore <healing>{{ maxheal }} Health</healing> after existing for {{ e8 }} seconds.<br /><br />Bard can have up to {{ e3 }} shrines at once. If an enemy champion enters a shrine, it is destroyed.<br /><br />Current Active Shrines: {{ f1 }} / {{ f2 }}{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Base Heal\",\"Max Heal\"],\"effect\":[\"{{ e5 }} -> {{ e5NL }}\",\"{{ e6 }} -> {{ e6NL }}\"]},\"maxrank\":5,\"cooldown\":[14,14,14,14,14],\"cooldownBurn\":\"14\",\"cost\":[70,70,70,70,70],\"costBurn\":\"70\",\"datavalues\":{},\"effect\":[null,[30,30,30,30,30],[1.5,1.5,1.5,1.5,1.5],[3,3,3,3,3],[0,0,0,0,0],[25,50,75,100,125],[50,87.5,125,162.5,200],[0,0,0,0,0],[10,10,10,10,10],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"30\",\"1.5\",\"3\",\"0\",\"25/50/75/100/125\",\"50/87.5/125/162.5/200\",\"0\",\"10\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[800,800,800,800,800],\"rangeBurn\":\"800\",\"image\":{\"full\":\"BardW.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"BardE\",\"name\":\"Magical Journey\",\"description\":\"Bard opens a portal in nearby terrain. Allies and enemies alike can take a one-way trip through that terrain by moving into the portal.\",\"tooltip\":\"Bard opens a one-way portal through Terrain for {{ e1 }} seconds. Any champion can enter the portal by moving onto it while near the entrance.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[22,20.5,19,17.5,16],\"cooldownBurn\":\"22/20.5/19/17.5/16\",\"cost\":[30,30,30,30,30],\"costBurn\":\"30\",\"datavalues\":{},\"effect\":[null,[10,10,10,10,10],[33,33,33,33,33],[900,900,900,900,900],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"10\",\"33\",\"900\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[900,900,900,900,900],\"rangeBurn\":\"900\",\"image\":{\"full\":\"BardE.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"BardR\",\"name\":\"Tempered Fate\",\"description\":\"Bard sends spirit energy arcing to a location, putting all champions, minions, monsters, and turrets hit into stasis for a brief time.\",\"tooltip\":\"Bard hurls magical protective energy to an area, placing all units and structures hit into Stasis for {{ rstasisduration }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[110,95,80],\"cooldownBurn\":\"110/95/80\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[3400,3400,3400],\"rangeBurn\":\"3400\",\"image\":{\"full\":\"BardR.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Traveler's Call\",\"description\":\"<font color='#FF9900'>Meeps:</font> Bard attracts lesser spirits that assist with his basic attacks to deal extra magic damage. When Bard has collected enough  <font color='#cccc00'>Chimes</font>, his meeps will also deal damage in an area and slow enemies hit.<br><br><font color='#FF9900'>Chimes:</font> Ancient <font color='#cccc00'>chimes</font> randomly appear for Bard to collect. These grant experience, restore mana, and provide out of combat Move Speed.\",\"image\":{\"full\":\"Bard_Passive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":96,\"y\":48,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic...",
    "lore": "A traveler from beyond the stars, Bard is an agent of serendipity who fights to maintain a balance where life can endure the indifference of chaos. Many Runeterrans sing songs that ponder his extraordinary nature, yet they all agree that the cosmic vagabond is drawn to artifacts of great magical power. Surrounded by a jubilant choir of helpful spirit meeps, it is impossible to mistake his actions as malevolent, as Bard always serves the greater good... in his own odd way.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Bard.png",
    "champion_name": "Bard",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",
    "champion_title": "the Wandering Caretaker",
    "recommended_lanes": [],
    "recommended_roles": [
        "Support",
        "Mage"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/bard/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/bard/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/bard",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg"
        },
        {
            "name": "Elderwood Bard",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_1.jpg"
        },
        {
            "name": "Snow Day Bard",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_5.jpg"
        },
        {
            "name": "Bard Bard",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_6.jpg"
        },
        {
            "name": "Astronaut Bard",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_8.jpg"
        },
        {
            "name": "Cafe Cuties Bard",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_17.jpg"
        },
        {
            "name": "Shan Hai Scrolls Bard",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_26.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Meeps: Bard attracts lesser spirits that assist with his basic attacks to deal extra magic damage. When Bard has collected enough  Chimes, his meeps will also deal damage in an area and slow enemies hit.\n\nChimes: Ancient chimes randomly appear for Bard to collect. These grant experience, restore mana, and provide out of combat Move Speed.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Bard_Passive.png",
        "champion_passive_name": "Traveler's Call",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Bard fires a missile which will slow the first enemy struck, and continue onward. If it strikes a wall, it will stun the initial target; if it strikes another enemy, it will stun them both.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BardQ.png",
        "champion_q_name": "Cosmic Binding",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Reveals a healing shrine which powers up over a short time, disappearing after healing and speeding up the first ally that touches it.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BardW.png",
        "champion_w_name": "Caretaker's Shrine",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Bard opens a portal in nearby terrain. Allies and enemies alike can take a one-way trip through that terrain by moving into the portal.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BardE.png",
        "champion_e_name": "Magical Journey",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Bard sends spirit energy arcing to a location, putting all champions, minions, monsters, and turrets hit into stasis for a brief time.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BardR.png",
        "champion_r_name": "Tempered Fate",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0432/ability_0432_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt1bc96c4fc8cc2052",
    "url": "/champions/bel-veth/",
    "data_dragon_id": "Belveth",
    "data_dragon_json": "{\"id\":\"Belveth\",\"key\":\"200\",\"name\":\"Bel'Veth\",\"title\":\"the Empress of the Void\",\"image\":{\"full\":\"Belveth.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"200000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"200001\",\"num\":1,\"name\":\"Battle Boss Bel'Veth\",\"chromas\":true}],\"lore\":\"A nightmarish empress created from the raw material of an entire devoured city, Bel'Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from the world above, she voraciously feeds an ever-expanding need for new experiences and emotions, consuming all that crosses her path. Yet her wants could never be sated by only one world as she turns her hungry eyes toward the Void's old masters...\",\"blurb\":\"A nightmarish empress created from the raw material of an entire devoured city, Bel'Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from...\",\"allytips\":[],\"enemytips\":[],\"tags\":[\"Fighter\"],\"partype\":\"\",\"info\":{\"attack\":4,\"defense\":2,\"magic\":7,\"difficulty\":10},\"stats\":{\"hp\":610,\"hpperlevel\":99,\"mp\":60,\"mpperlevel\":0,\"movespeed\":340,\"armor\":32,\"armorperlevel\":4.7,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":175,\"hpregen\":6,\"hpregenperlevel\":0.6,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":1.5,\"attackspeedperlevel\":0,\"attackspeed\":0.85},\"spells\":[{\"id\":\"BelvethQ\",\"name\":\"Void Surge\",\"description\":\"Bel'Veth dashes in a chosen direction and damages all enemies she passes through.\",\"tooltip\":\"Bel'Veth dashes, dealing <physicalDamage>{{ basedamage }} physical damage</physicalDamage> to enemies she passes through.<br /><br />Each direction has an unique Cooldown of {{ f1 }} seconds that scales down based on her <attackSpeed>Attack Speed</attackSpeed>.<br />{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown Per Direction\",\"Minion Damage\"],\"effect\":[\"{{ damage }} -> {{ damageNL }}\",\"{{ persidecooldown }} -> {{ persidecooldownNL }}\",\"{{ minonmod*100.000000 }}% -> {{ minonmodnl*100.000000 }}%\"]},\"maxrank\":5,\"cooldown\":[1,1,1,1,1],\"cooldownBurn\":\"1\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[450,450,450,450,450],\"rangeBurn\":\"450\",\"image\":{\"full\":\"BelvethQ.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":0,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"No Cost\"},{\"id\":\"BelvethW\",\"name\":\"Above and Below\",\"description\":\"Bel'Veth slams her tail to the ground, damaging, knocking up, and slowing her enemies.\",\"tooltip\":\"Bel'Veth slams her tail, dealing <magicDamage>{{ damage }} magic damage</magicDamage>, <status>Knocking Up</status> foes for {{ duration }} seconds, and <status>Slowing</status> them by {{ slowpercent*100 }}% for {{ slowduration }} seconds. If a champion is hit, this refreshes the Cooldown of <spellName>Void Surge</spellName> in that direction.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Slow Duration\",\"Cooldown\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ slowduration }} -> {{ slowdurationNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[12,11,10,9,8],\"cooldownBurn\":\"12/11/10/9/8\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[715,715,715,715,715],\"rangeBurn\":\"715\",\"image\":{\"full\":\"BelvethW.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":48,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"No Cost\"},{\"id\":\"BelvethE\",\"name\":\"Royal Maelstrom\",\"description\":\"Bel'Veth roots herself in place, channeling a storm of slashes around her that targets the lowest-health enemy and grants her lifesteal and damage reduction.\",\"tooltip\":\"Bel'Veth channels and slashes around herself, gaining {{ drpercent*100 }}% Damage Reduction, {{ totallifesteal }} Life Steal, and Attacking {{ f2.0 }} times over {{ totalduration }} seconds with the number of Attacks increasing based on her <attackSpeed>Attack Speed</attackSpeed>. Each Attack strikes the lowest-health enemy, dealing <physicalDamage>{{ damageperstrike }}</physicalDamage> to <physicalDamage>{{ maxdamageperstriketooltip }} physical damage</physicalDamage> based on the target's missing Health.<br /><br />Using another Ability or <recast>Recasting</recast> ends this Ability early.<br />{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ damageperhit }} -> {{ damageperhitNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[24,22.5,21,19.5,18],\"cooldownBurn\":\"24/22.5/21/19.5/18\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[500,500,500,500,500],\"rangeBurn\":\"500\",\"image\":{\"full\":\"BelvethE.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":96,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"No Cost\"},{\"id\":\"BelvethR\",\"name\":\"Endless Banquet\",\"description\":\"Bel'Veth consumes Void coral remnants, transforming into her true form and increasing her max health, attack range, attack speed, and out-of-combat move speed. Consuming the Void coral remnants of a Void epic monster will grant her a longer ultimate duration, as well as the power to summon Void remora.\",\"tooltip\":\"<spellPassive>Passive:</spellPassive> Every second Attack against the same target deals an additional <trueDamage>{{ finalonhitdamage }} true damage</trueDamage>, stacking infinitely. Takedowns against champions and epic monsters leave behind a piece of Void Coral.<br /><br /><spellActive>Active:</spellActive> Consuming Void Coral grants <keywordMajor>{{ passivestacksondevour }} Lavender</keywordMajor> stack and activates Bel'Veth's true form for {{ steroidduration }} seconds. Void Coral from Void epic monsters increases the duration to {{ voidduration }} seconds and causes minions that die nearby to become Void Remora. While casting, Bel'Veth <status>Slows</status> nearby enemies before exploding, dealing <trueDamage>{{ totalexplosiondamage }} + {{ missinghealthdamage*100 }}% missing-Health true damage</trueDamage>.<br /><br />In her true form, Bel'Veth gains <healing>{{ maxhealthondevour }} max Health</healing>, <speed>{{ oocms }} Move Speed</speed> out of combat, {{ bonusaarange }} Attack range, <attackSpeed>{{ totalasmod*100 }}% Total Attack Speed</attackSpeed>, and <spellName>Void Surge</spellName> can pass through walls.<br /><br /><br />{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"On-Hit Damage\",\"Explosion Damage\",\"Bonus Health\",\"Move Speed\",\"Attack Speed\",\"Void Remora Health\"],\"effect\":[\"{{ onhitdamage }} -> {{ onhitdamageNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ basemaxhealth }} -> {{ basemaxhealthNL }}\",\"{{ oocms }} -> {{ oocmsNL }}\",\"{{ totalasmod*100.000000 }}% -> {{ totalasmodnl*100.000000 }}%\",\"{{ voidlinghpscale*100.000000 }}% -> {{ voidlinghpscalenl*100.000000 }}%\"]},\"maxrank\":3,\"cooldown\":[1,1,1],\"cooldownBurn\":\"1\",\"cost\":[0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[275,275,275],\"rangeBurn\":\"275\",\"image\":{\"full\":\"BelvethR.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":144,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"No Cost\"}],\"passive\":{\"name\":\"Death in Lavender \",\"description\":\"Bel'Veth gains permanent attack speed stacks after taking down large minions and monsters and champions. She also gains temporary bonus attack speed after using an ability.\",\"image\":{\"full\":\"Belveth_Passive.Belveth.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":144,\"y\":48,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "A nightmarish empress created from the raw material of an entire devoured city, Bel'Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from...",
    "lore": "A nightmarish empress created from the raw material of an entire devoured city, Bel'Veth is the end of Runeterra itself... and the beginning of a monstrous reality of her own design. Driven by epochs of repurposed history, knowledge, and memories from the world above, she voraciously feeds an ever-expanding need for new experiences and emotions, consuming all that crosses her path. Yet her wants could never be sated by only one world as she turns her hungry eyes toward the Void's old masters...",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Belveth.png",
    "champion_name": "Bel'Veth",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg",
    "champion_title": "the Empress of the Void",
    "recommended_lanes": [],
    "recommended_roles": [
        "Fighter"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champions/belveth/jungle/build",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/belveth/build",
            "title": "U.GG"
        },
        {
            "href": "https://probuildstats.com/champion/belveth",
            "title": "Probuild Stats"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg"
        },
        {
            "name": "Battle Boss Bel'Veth",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_1.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Bel'Veth gains permanent attack speed stacks after taking down large minions and monsters and champions. She also gains temporary bonus attack speed after using an ability.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Belveth_Passive.Belveth.png",
        "champion_passive_name": "Death in Lavender ",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Bel'Veth dashes in a chosen direction and damages all enemies she passes through.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BelvethQ.png",
        "champion_q_name": "Void Surge",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Bel'Veth slams her tail to the ground, damaging, knocking up, and slowing her enemies.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BelvethW.png",
        "champion_w_name": "Above and Below",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Bel'Veth roots herself in place, channeling a storm of slashes around her that targets the lowest-health enemy and grants her lifesteal and damage reduction.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BelvethE.png",
        "champion_e_name": "Royal Maelstrom",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Bel'Veth consumes Void coral remnants, transforming into her true form and increasing her max health, attack range, attack speed, and out-of-combat move speed. Consuming the Void coral remnants of a Void epic monster will grant her a longer ultimate duration, as well as the power to summon Void remora.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BelvethR.png",
        "champion_r_name": "Endless Banquet",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0200/ability_0200_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt968877b6a7b3420f",
    "url": "/champions/blitzcrank/",
    "data_dragon_id": "Blitzcrank",
    "data_dragon_json": "{\"id\":\"Blitzcrank\",\"key\":\"53\",\"name\":\"Blitzcrank\",\"title\":\"the Great Steam Golem\",\"image\":{\"full\":\"Blitzcrank.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"53000\",\"num\":0,\"name\":\"default\",\"chromas\":true},{\"id\":\"53001\",\"num\":1,\"name\":\"Rusty Blitzcrank\",\"chromas\":false},{\"id\":\"53002\",\"num\":2,\"name\":\"Goalkeeper Blitzcrank\",\"chromas\":false},{\"id\":\"53003\",\"num\":3,\"name\":\"Boom Boom Blitzcrank\",\"chromas\":false},{\"id\":\"53004\",\"num\":4,\"name\":\"Piltover Customs Blitzcrank\",\"chromas\":false},{\"id\":\"53005\",\"num\":5,\"name\":\"Definitely Not Blitzcrank\",\"chromas\":false},{\"id\":\"53006\",\"num\":6,\"name\":\"iBlitzcrank\",\"chromas\":false},{\"id\":\"53007\",\"num\":7,\"name\":\"Riot Blitzcrank\",\"chromas\":false},{\"id\":\"53011\",\"num\":11,\"name\":\"Battle Boss Blitzcrank\",\"chromas\":true},{\"id\":\"53020\",\"num\":20,\"name\":\"Lancer Rogue Blitzcrank\",\"chromas\":false},{\"id\":\"53021\",\"num\":21,\"name\":\"Lancer Paragon Blitzcrank\",\"chromas\":false},{\"id\":\"53022\",\"num\":22,\"name\":\"Witch's Brew Blitzcrank\",\"chromas\":true},{\"id\":\"53029\",\"num\":29,\"name\":\"Space Groove Blitz & Crank\",\"chromas\":true},{\"id\":\"53036\",\"num\":36,\"name\":\"Victorious Blitzcrank\",\"chromas\":true},{\"id\":\"53047\",\"num\":47,\"name\":\"Zenith Games Blitzcrank\",\"chromas\":true}],\"lore\":\"Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers.\",\"blurb\":\"Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump...\",\"allytips\":[\"The 1-2-3 combo of Rocket Grab, Power Fist, and Static Field can devastate an individual opponent.\",\"Using Blitzcrank's grab to pull an enemy into your tower range followed by a Power Fist will allow the tower to get several hits on them.\"],\"enemytips\":[\"Blitzcrank's passive Mana Barrier grants him a shield when he is low on health.\",\"Staying behind creeps can prevent you from being Rocket Grabbed. Blitzcrank's Rocket Grab only pulls the first enemy target it encounters.\"],\"tags\":[\"Tank\",\"Fighter\"],\"partype\":\"Mana\",\"info\":{\"attack\":4,\"defense\":8,\"magic\":5,\"difficulty\":4},\"stats\":{\"hp\":633,\"hpperlevel\":109,\"mp\":267,\"mpperlevel\":40,\"movespeed\":325,\"armor\":40,\"armorperlevel\":4.7,\"spellblock\":28,\"spellblockperlevel\":2.05,\"attackrange\":125,\"hpregen\":7.5,\"hpregenperlevel\":0.75,\"mpregen\":8.5,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":62,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":1.13,\"attackspeed\":0.65},\"spells\":[{\"id\":\"RocketGrab\",\"name\":\"Rocket Grab\",\"description\":\"Blitzcrank fires their right hand to grab an opponent on its path, dealing damage and dragging it back to them.\",\"tooltip\":\"Blitzcrank fires their right hand, <status>Pulling</status> the first enemy hit towards them and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[20,19,18,17,16],\"cooldownBurn\":\"20/19/18/17/16\",\"cost\":[100,100,100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[90,140,190,240,290],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"90/140/190/240/290\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1079,1079,1079,1079,1079],\"rangeBurn\":\"1079\",\"image\":{\"full\":\"RocketGrab.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":192,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"Overdrive\",\"name\":\"Overdrive\",\"description\":\"Blitzcrank super charges themself to get dramatically increased Move and Attack Speed. They are temporarily slowed after the effect ends.\",\"tooltip\":\"Blitzcrank supercharges themself, gaining <speed>{{ movespeedmod*100 }}% decaying Move Speed</speed> and <attackSpeed>{{ attackspeedmod*100 }}% Attack Speed</attackSpeed> for {{ duration }} seconds. During this time, their attacks deal an additional <magicDamage>{{ percenthealthdamage*100 }}% Target Max Health magic damage</magicDamage> %i:OnHit% <OnHit>On-Hit</OnHit>.<br /><br />Afterwards, Blitzcrank is <status>Slowed</status> by {{ movespeedmodreduction*100 }}% for {{ slowduration }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Move Speed\",\"Attack Speed\"],\"effect\":[\"{{ movespeedmod*100.000000 }}% -> {{ movespeedmodnl*100.000000 }}%\",\"{{ attackspeedmod*100.000000 }}% -> {{ attackspeedmodnl*100.000000 }}%\"]},\"maxrank\":5,\"cooldown\":[15,15,15,15,15],\"cooldownBurn\":\"15\",\"cost\":[85,85,85,85,85],\"costBurn\":\"85\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1,1,1,1,1],\"rangeBurn\":\"1\",\"image\":{\"full\":\"Overdrive.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":240,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"PowerFist\",\"name\":\"Power Fist\",\"description\":\"Blitzcrank charges up their fist to make the next attack deal double damage and pop their target up in the air.\",\"tooltip\":\"Blitzcrank charges up their fist, causing their next Attack to <status>Knock Up</status> for {{ ccduration }} second(s) and deal <physicalDamage>{{ totaldamage }} physical damage</physicalDamage>.<br /><br />Monsters and Minions take an additional <physicalDamage>{{ totaldamagenonchampextra }} physical damage</physicalDamage> bonus damage.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[9,8,7,6,5],\"cooldownBurn\":\"9/8/7/6/5\",\"cost\":[40,40,40,40,40],\"costBurn\":\"40\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[300,300,300,300,300],\"rangeBurn\":\"300\",\"image\":{\"full\":\"PowerFist.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":288,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"StaticField\",\"name\":\"Static Field\",\"description\":\"Enemies attacked by Blitzcrank are marked and take lightning damage after 1 second. Additionally, Blitzcrank can activate this ability to remove nearby enemies' shields, damage them, and silence them briefly.\",\"tooltip\":\"<spellPassive>Passive: </spellPassive>While this ability is available, lightning charges Blitzcrank's fists, marking those  Attacked. After 1 second, they are shocked for <magicDamage>{{ passivedamage }} magic damage</magicDamage>.<br /><br /><spellActive>Active: </spellActive>Blitzcrank overcharges, dealing <magicDamage>{{ activedamage }} magic damage</magicDamage> and <status>Silencing</status> nearby enemies for {{ silenceduration }} seconds. Their shields are also destroyed.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Passive Base Damage\",\"Passive AP Ratio\",\"Active Base Damage\",\"Active Cooldown\"],\"effect\":[\"{{ passivebasedamage }} -> {{ passivebasedamageNL }}\",\"{{ passiveapratio*100.000000 }}% -> {{ passiveaprationl*100.000000 }}%\",\"{{ activebasedamage }} -> {{ activebasedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[60,40,20],\"cooldownBurn\":\"60/40/20\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[600,600,600],\"rangeBurn\":\"600\",\"image\":{\"full\":\"StaticField.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":336,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Mana Barrier\",\"description\":\"Blitzcrank gains a shield based on their mana when dropping to low health.\",\"image\":{\"full\":\"Blitzcrank_ManaBarrier.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":192,\"y\":48,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump...",
    "lore": "Blitzcrank is an enormous, near-indestructible automaton from Zaun, originally built to dispose of hazardous waste. However, he found this primary purpose too restricting, and modified his own form to better serve the fragile people of the Sump. Blitzcrank selflessly uses his strength and durability to protect others, extending a helpful metal fist or burst of energy to subdue any troublemakers.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Blitzcrank.png",
    "champion_name": "Blitzcrank",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
    "champion_title": "the Great Steam Golem",
    "recommended_lanes": [],
    "recommended_roles": [
        "Tank",
        "Fighter"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/blitzcrank/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/blitzcrank/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/blitzcrank",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg"
        },
        {
            "name": "Rusty Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_1.jpg"
        },
        {
            "name": "Goalkeeper Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_2.jpg"
        },
        {
            "name": "Boom Boom Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_3.jpg"
        },
        {
            "name": "Piltover Customs Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_4.jpg"
        },
        {
            "name": "Definitely Not Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_5.jpg"
        },
        {
            "name": "iBlitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_6.jpg"
        },
        {
            "name": "Riot Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_7.jpg"
        },
        {
            "name": "Battle Boss Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_11.jpg"
        },
        {
            "name": "Lancer Rogue Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_20.jpg"
        },
        {
            "name": "Lancer Paragon Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_21.jpg"
        },
        {
            "name": "Witch's Brew Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_22.jpg"
        },
        {
            "name": "Space Groove Blitz & Crank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_29.jpg"
        },
        {
            "name": "Victorious Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_36.jpg"
        },
        {
            "name": "Zenith Games Blitzcrank",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_47.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Blitzcrank gains a shield based on their mana when dropping to low health.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Blitzcrank_ManaBarrier.png",
        "champion_passive_name": "Mana Barrier",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Blitzcrank fires their right hand to grab an opponent on its path, dealing damage and dragging it back to them.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/RocketGrab.png",
        "champion_q_name": "Rocket Grab",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Blitzcrank super charges themself to get dramatically increased Move and Attack Speed. They are temporarily slowed after the effect ends.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/Overdrive.png",
        "champion_w_name": "Overdrive",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Blitzcrank charges up their fist to make the next attack deal double damage and pop their target up in the air.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/PowerFist.png",
        "champion_e_name": "Power Fist",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Enemies attacked by Blitzcrank are marked and take lightning damage after 1 second. Additionally, Blitzcrank can activate this ability to remove nearby enemies' shields, damage them, and silence them briefly.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/StaticField.png",
        "champion_r_name": "Static Field",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0053/ability_0053_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt2c6256dd53fe8f1e",
    "url": "/champions/brand/",
    "data_dragon_id": "Brand",
    "data_dragon_json": "{\"id\":\"Brand\",\"key\":\"63\",\"name\":\"Brand\",\"title\":\"the Burning Vengeance\",\"image\":{\"full\":\"Brand.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"63000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"63001\",\"num\":1,\"name\":\"Apocalyptic Brand\",\"chromas\":false},{\"id\":\"63002\",\"num\":2,\"name\":\"Vandal Brand\",\"chromas\":false},{\"id\":\"63003\",\"num\":3,\"name\":\"Cryocore Brand\",\"chromas\":false},{\"id\":\"63004\",\"num\":4,\"name\":\"Zombie Brand\",\"chromas\":false},{\"id\":\"63005\",\"num\":5,\"name\":\"Spirit Fire Brand\",\"chromas\":false},{\"id\":\"63006\",\"num\":6,\"name\":\"Battle Boss Brand\",\"chromas\":false},{\"id\":\"63007\",\"num\":7,\"name\":\"Arclight Brand\",\"chromas\":true},{\"id\":\"63008\",\"num\":8,\"name\":\"Eternal Dragon Brand\",\"chromas\":true},{\"id\":\"63021\",\"num\":21,\"name\":\"Debonair Brand\",\"chromas\":true},{\"id\":\"63022\",\"num\":22,\"name\":\"Prestige Debonair Brand\",\"chromas\":false}],\"lore\":\"Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the man was no more. His soul burned away, his body a vessel of living flame, Brand now roams Valoran in search of other Runes, swearing revenge for wrongs he could never possibly have suffered in a dozen mortal lifetimes.\",\"blurb\":\"Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the...\",\"allytips\":[\"You can deter enemies from standing near their minions by setting them ablaze, due to Conflagration.\",\"You can use Brand's abilities in a variety of combinations to maximize his damage in different situations.\",\"Pyroclasm bounces randomly between enemies, so try to cast it on a small group of enemies if you want to hit the same target multiple times.\"],\"enemytips\":[\"Brand must land an ability before his combo is able to get started. Dodging his Sear or Pillar of Flame will disrupt his rhythm.\",\"Try to move away from allies when you see Pyroclasm being cast. The initial missile speed is slow, which should give your team time to react.\",\"Brand's passive allows him to excel against teams that cluster together. Be sure to split up against him.\"],\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"info\":{\"attack\":2,\"defense\":2,\"magic\":9,\"difficulty\":4},\"stats\":{\"hp\":590,\"hpperlevel\":102,\"mp\":469,\"mpperlevel\":21,\"movespeed\":340,\"armor\":22,\"armorperlevel\":4.7,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":10.65,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":57,\"attackdamageperlevel\":3,\"attackspeedperlevel\":1.36,\"attackspeed\":0.625},\"spells\":[{\"id\":\"BrandQ\",\"name\":\"Sear\",\"description\":\"Brand launches a ball of fire forward that deals magic damage. If the target is ablaze, Sear will stun the target for 1.5 seconds.\",\"tooltip\":\"Brand launches a fireball that deals <magicDamage>{{ totaldamage }} magic damage</magicDamage> to the first enemy hit.<br /><br />If the target is <keywordMajor>Ablaze</keywordMajor>, they will be <status>Stunned</status> for 1.5 seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[8,7.5,7,6.5,6],\"cooldownBurn\":\"8/7.5/7/6.5/6\",\"cost\":[50,50,50,50,50],\"costBurn\":\"50\",\"datavalues\":{},\"effect\":[null,[80,110,140,170,200],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"80/110/140/170/200\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1050,1050,1050,1050,1050],\"rangeBurn\":\"1050\",\"image\":{\"full\":\"BrandQ.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":384,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"BrandW\",\"name\":\"Pillar of Flame\",\"description\":\"After a short delay, Brand creates a Pillar of Flame at a target area, dealing magic damage to enemy units within the area. Units that are ablaze take an additional 25% damage.\",\"tooltip\":\"Brand creates a pillar of pure fire, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>.<br /><br />Units that are <keywordMajor>Ablaze</keywordMajor> take <magicDamage>{{ empowereddamage }} damage</magicDamage> instead.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[10,9.5,9,8.5,8],\"cooldownBurn\":\"10/9.5/9/8.5/8\",\"cost\":[60,70,80,90,100],\"costBurn\":\"60/70/80/90/100\",\"datavalues\":{},\"effect\":[null,[75,120,165,210,255],[20,40,60,80,100],[0.25,0.25,0.25,0.25,0.25],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"75/120/165/210/255\",\"20/40/60/80/100\",\"0.25\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[900,900,900,900,900],\"rangeBurn\":\"900\",\"image\":{\"full\":\"BrandW.png\",\"sprite\":\"spell1.png\",\"group\":\"spell\",\"x\":432,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"BrandE\",\"name\":\"Conflagration\",\"description\":\"Brand conjures a powerful blast at his target that spreads to nearby enemies, dealing magic damage. If the target is ablaze, Conflagration's spread is doubled.\",\"tooltip\":\"Brand conjures a powerful blast at his target, dealing <magicDamage>{{ explosiondamage }} magic damage</magicDamage> to surrounding units.<br /><br />If the target is <keywordMajor>Ablaze</keywordMajor>, the spread range is doubled.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[12,11,10,9,8],\"cooldownBurn\":\"12/11/10/9/8\",\"cost\":[70,75,80,85,90],\"costBurn\":\"70/75/80/85/90\",\"datavalues\":{},\"effect\":[null,[70,95,120,145,170],[375,375,375,375,375],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"70/95/120/145/170\",\"375\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[625,625,625,625,625],\"rangeBurn\":\"625\",\"image\":{\"full\":\"BrandE.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"BrandR\",\"name\":\"Pyroclasm\",\"description\":\"Brand unleashes a devastating torrent of fire that bounces up to 5 times off of Brand and nearby enemies, dealing magic damage to enemies each time bounce. Bounces prioritize stacking Blaze to max on Champions. If a target is ablaze, Pyroclasm will briefly slow them.\",\"tooltip\":\"Brand unleashes a devastating torrent of fire that can bounce to Brand or another enemy up to 5 times, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> to enemies each bounce. Bounces prioritize stacking <keywordMajor>Blaze</keywordMajor> to max on champions.<br /><br />If the target is <keywordMajor>Ablaze</keywordMajor>, they are briefly <status>Slowed</status> by {{ slowamount }}%.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage per Bounce\",\"Slow\",\"Cooldown\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ slowamount }}% -> {{ slowamountNL }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[105,90,75],\"cooldownBurn\":\"105/90/75\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[750,750,750],\"rangeBurn\":\"750\",\"image\":{\"full\":\"BrandR.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Blaze\",\"description\":\"Brand's spells light his targets ablaze, dealing damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim.\",\"image\":{\"full\":\"BrandP.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":240,\"y\":48,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the...",
    "lore": "Once a tribesman of the icy Freljord named Kegan Rodhe, the creature known as Brand is a lesson in the temptation of greater power. Seeking one of the legendary World Runes, Kegan betrayed his companions and seized it for himself—and, in an instant, the man was no more. His soul burned away, his body a vessel of living flame, Brand now roams Valoran in search of other Runes, swearing revenge for wrongs he could never possibly have suffered in a dozen mortal lifetimes.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Brand.png",
    "champion_name": "Brand",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
    "champion_title": "the Burning Vengeance",
    "recommended_lanes": [],
    "recommended_roles": [
        "Mage"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/brand/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/brand/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/brand",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg"
        },
        {
            "name": "Apocalyptic Brand",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_1.jpg"
        },
        {
            "name": "Vandal Brand",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_2.jpg"
        },
        {
            "name": "Cryocore Brand",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_3.jpg"
        },
        {
            "name": "Zombie Brand",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_4.jpg"
        },
        {
            "name": "Spirit Fire Brand",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_5.jpg"
        },
        {
            "name": "Battle Boss Brand",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_6.jpg"
        },
        {
            "name": "Arclight Brand",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_7.jpg"
        },
        {
            "name": "Eternal Dragon Brand",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_8.jpg"
        },
        {
            "name": "Debonair Brand",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_21.jpg"
        },
        {
            "name": "Prestige Debonair Brand",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_22.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Brand's spells light his targets ablaze, dealing damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or large monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/BrandP.png",
        "champion_passive_name": "Blaze",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Brand launches a ball of fire forward that deals magic damage. If the target is ablaze, Sear will stun the target for 1.5 seconds.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BrandQ.png",
        "champion_q_name": "Sear",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "After a short delay, Brand creates a Pillar of Flame at a target area, dealing magic damage to enemy units within the area. Units that are ablaze take an additional 25% damage.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BrandW.png",
        "champion_w_name": "Pillar of Flame",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Brand conjures a powerful blast at his target that spreads to nearby enemies, dealing magic damage. If the target is ablaze, Conflagration's spread is doubled.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BrandE.png",
        "champion_e_name": "Conflagration",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Brand unleashes a devastating torrent of fire that bounces up to 5 times off of Brand and nearby enemies, dealing magic damage to enemies each time bounce. Bounces prioritize stacking Blaze to max on Champions. If a target is ablaze, Pyroclasm will briefly slow them.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BrandR.png",
        "champion_r_name": "Pyroclasm",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0063/ability_0063_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt482b5f5243ea623f",
    "url": "/champions/braum/",
    "data_dragon_id": "Braum",
    "data_dragon_json": "{\"id\":\"Braum\",\"key\":\"201\",\"name\":\"Braum\",\"title\":\"the Heart of the Freljord\",\"image\":{\"full\":\"Braum.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"201000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"201001\",\"num\":1,\"name\":\"Dragonslayer Braum\",\"chromas\":true},{\"id\":\"201002\",\"num\":2,\"name\":\"El Tigre Braum\",\"chromas\":false},{\"id\":\"201003\",\"num\":3,\"name\":\"Braum Lionheart\",\"chromas\":false},{\"id\":\"201010\",\"num\":10,\"name\":\"Santa Braum\",\"chromas\":false},{\"id\":\"201011\",\"num\":11,\"name\":\"Crime City Braum\",\"chromas\":true},{\"id\":\"201024\",\"num\":24,\"name\":\"Sugar Rush Braum\",\"chromas\":true},{\"id\":\"201033\",\"num\":33,\"name\":\"Pool Party Braum\",\"chromas\":true}],\"lore\":\"Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into rubble. Bearing an enchanted vault door as his shield, Braum roams the frozen north sporting a mustachioed smile as big as his muscles—a true friend to all those in need.\",\"blurb\":\"Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into...\",\"allytips\":[\"Work with your allies to stack Concussive Blows, encourage them to basic attack marked targets.\",\"Leap in front of squishy friends and shield them from projectiles with Unbreakable.\",\"Glacial Fissure leaves a powerful slow zone, position it well to split teamfights and slow the enemy approach.\"],\"enemytips\":[\"Braum must land Winter's Bite or a basic attack to start Concussive Blows. If you get marked, exit combat range before getting hit 3 more times to avoid the stun.\",\"Braum's ultimate has a long cast time, use that extra time to dodge. Walking over the frozen ground left behind will slow you, position so that you don't need to cross it.\",\"Unbreakable gives Braum extremely strong directional defense, either wait until it is down or outposition the ability.\"],\"tags\":[\"Support\",\"Tank\"],\"partype\":\"Mana\",\"info\":{\"attack\":3,\"defense\":9,\"magic\":4,\"difficulty\":3},\"stats\":{\"hp\":610,\"hpperlevel\":112,\"mp\":311,\"mpperlevel\":45,\"movespeed\":335,\"armor\":47,\"armorperlevel\":5.2,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":1,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55,\"attackdamageperlevel\":3.2,\"attackspeedperlevel\":3.5,\"attackspeed\":0.644},\"spells\":[{\"id\":\"BraumQ\",\"name\":\"Winter's Bite\",\"description\":\"Braum propels freezing ice from his shield, slowing and dealing magic damage.<br><br>Applies a stack of <font color='#FFF673'>Concussive Blows</font>.\",\"tooltip\":\"Braum propels freezing ice from his shield, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> to the first enemy hit and <status>Slowing</status> them by {{ e2 }}% decaying over {{ e5 }} seconds.<br /><br />Applies a stack of <keywordMajor>Concussive Blows</keywordMajor>. {{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[8,7.5,7,6.5,6],\"cooldownBurn\":\"8/7.5/7/6.5/6\",\"cost\":[45,50,55,60,65],\"costBurn\":\"45/50/55/60/65\",\"datavalues\":{},\"effect\":[null,[75,125,175,225,275],[70,70,70,70,70],[30,30,30,30,30],[0.02,0.02,0.02,0.02,0.02],[2,2,2,2,2],[1050,1050,1050,1050,1050],[4,4,4,4,4],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"75/125/175/225/275\",\"70\",\"30\",\"0.02\",\"2\",\"1050\",\"4\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1000,1000,1000,1000,1000],\"rangeBurn\":\"1000\",\"image\":{\"full\":\"BraumQ.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"BraumW\",\"name\":\"Stand Behind Me\",\"description\":\"Braum leaps to a target allied champion or minion. On arrival, Braum and the ally gain Armor and Magic Resist for a few seconds.\",\"tooltip\":\"Braum leaps to an allied champion or minion. On arrival, Braum grants the target <scaleArmor>{{ grantedallyarmor }} Armor</scaleArmor> and <scaleMR>{{ grantedallymr }} Magic Resist</scaleMR> for {{ e1 }} seconds. Braum grants himself <scaleArmor>{{ grantedbraumarmor }}</scaleArmor> Armor and  <scaleMR>{{ grantedbraummr }}</scaleMR> Magic Resist for the same duration.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Base Resists\",\"Cooldown\"],\"effect\":[\"{{ baseresists }} -> {{ baseresistsNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[12,11,10,9,8],\"cooldownBurn\":\"12/11/10/9/8\",\"cost\":[40,40,40,40,40],\"costBurn\":\"40\",\"datavalues\":{},\"effect\":[null,[3,3,3,3,3],[750,750,750,750,750],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[40,40,40,40,40],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"3\",\"750\",\"0\",\"0\",\"0\",\"40\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[650,650,650,650,650],\"rangeBurn\":\"650\",\"image\":{\"full\":\"BraumW.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"BraumE\",\"name\":\"Unbreakable\",\"description\":\"Braum raises his shield in a direction for several seconds, intercepting all projectiles causing them to hit him and be destroyed. He negates the damage of the first attack completely and reduces the damage of all subsequent attacks from this direction.\",\"tooltip\":\"Braum raises his shield for {{ e2 }} seconds, intercepting enemy missiles from the chosen direction, causing them to hit Braum and then be destroyed. The first missile Braum blocks deals no damage, and subsequent projectiles deal {{ e3 }}% reduced damage.<br /><br />Braum gains <speed>{{ e4 }}% Move Speed</speed> while his shield is raised.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Duration\",\"Damage Reduction\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e2 }} -> {{ e2NL }}\",\"{{ e3 }}% -> {{ e3NL }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[16,14,12,10,8],\"cooldownBurn\":\"16/14/12/10/8\",\"cost\":[30,35,40,45,50],\"costBurn\":\"30/35/40/45/50\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[3,3.25,3.5,3.75,4],[35,40,45,50,55],[10,10,10,10,10],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"3/3.25/3.5/3.75/4\",\"35/40/45/50/55\",\"10\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[25000,25000,25000,25000,25000],\"rangeBurn\":\"25000\",\"image\":{\"full\":\"BraumE.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"BraumRWrapper\",\"name\":\"Glacial Fissure\",\"description\":\"Braum slams the ground, knocking up enemies nearby and in a line in front of him. A fissure is left along the line that slows enemies.\",\"tooltip\":\"Braum slams the ground sending forth a fissure that <status>Knocks Up</status> enemies in its path and nearby Braum, and deals <magicDamage>{{ totaldamage }} magic damage</magicDamage>. The first target hit is <status>Knocked Up</status> for between {{ minknockup }} and {{ maxknockup }} seconds, increasing with distance from Braum. All others hit are <status>Knocked Up</status> for {{ minknockup }} seconds.<br /><br />The fissure also creates a zone for {{ slowzoneduration }} seconds, that <status>Slows</status> by {{ movespeedmod }}%.<br />{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Knockup Duration\",\"Slow\",\"Cooldown\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ firstknockupduration }} -> {{ firstknockupdurationNL }}\",\"{{ movespeedmod }}% -> {{ movespeedmodNL }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[120,100,80],\"cooldownBurn\":\"120/100/80\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1250,1250,1250],\"rangeBurn\":\"1250\",\"image\":{\"full\":\"BraumRWrapper.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Concussive Blows\",\"description\":\"Braum's basic attacks apply Concussive Blows. Once the first stack is applied, <font color='#FFF673'>ally</font> basic attacks also stack Concussive Blows. <br><br>Upon reaching 4 stacks, the target is stunned and takes magic damage. For the next few seconds they cannot receive new stacks, but take bonus magic damage from Braum's attacks.\",\"image\":{\"full\":\"Braum_Passive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":288,\"y\":48,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into...",
    "lore": "Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord. Every mead hall north of Frostheld toasts his legendary strength, said to have felled a forest of oaks in a single night, and punched an entire mountain into rubble. Bearing an enchanted vault door as his shield, Braum roams the frozen north sporting a mustachioed smile as big as his muscles—a true friend to all those in need.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Braum.png",
    "champion_name": "Braum",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
    "champion_title": "the Heart of the Freljord",
    "recommended_lanes": [],
    "recommended_roles": [
        "Support",
        "Tank"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/braum/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/braum/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/braum",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": [
            {
                "promo_module": {
                    "promo_module_selection": [
                        {
                            "uid": "blt0486ab0a2c86e8d7",
                            "promo_title": "Rise Against Ruin",
                            "subtitle": "",
                            "description": "Ruined King: A League of Legends Story, a single-player turn-based RPG, coming 2021.",
                            "hide_title": false,
                            "include_description": true,
                            "promo_reference": [
                                {
                                    "__typename": "Contentstack_articles",
                                    "uid": "blte4650ae179ab2f76",
                                    "title": "Ruined King Website Redirect for Braum",
                                    "date": "2020-10-31T17:00:00.000Z",
                                    "description": "Ruined King: A League of Legends Story, a single-player turn-based RPG, arrives early 2021.",
                                    "article_type": "External Link",
                                    "url": {
                                        "url": "/news/riot-games/ruined-king-website-redirect-for-braum/"
                                    },
                                    "external_link": "https://ruinedking.com/en_US/?utm_medium=promo_module&utm_source=lolweb&utm_campaign=forge_rk&utm_content=braum_promo01",
                                    "youtube_link": "",
                                    "banner": {
                                        "url": "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt396547c1c10cc8cd/5f99e7ebcb9eba781f085914/RuinedKing_Braum_PromoModule01.jpg",
                                        "uid": "blt396547c1c10cc8cd"
                                    },
                                    "category": [
                                        {
                                            "title": "Riot Games"
                                        }
                                    ],
                                    "author": [],
                                    "article_tags": []
                                }
                            ],
                            "promo_full_width_banner": {
                                "url": "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt396547c1c10cc8cd/5f99e7ebcb9eba781f085914/RuinedKing_Braum_PromoModule01.jpg",
                                "uid": "blt396547c1c10cc8cd"
                            }
                        }
                    ]
                }
            }
        ]
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg"
        },
        {
            "name": "Dragonslayer Braum",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_1.jpg"
        },
        {
            "name": "El Tigre Braum",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_2.jpg"
        },
        {
            "name": "Braum Lionheart",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_3.jpg"
        },
        {
            "name": "Santa Braum",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_10.jpg"
        },
        {
            "name": "Crime City Braum",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_11.jpg"
        },
        {
            "name": "Sugar Rush Braum",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_24.jpg"
        },
        {
            "name": "Pool Party Braum",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_33.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Braum's basic attacks apply Concussive Blows. Once the first stack is applied, ally basic attacks also stack Concussive Blows. \n\nUpon reaching 4 stacks, the target is stunned and takes magic damage. For the next few seconds they cannot receive new stacks, but take bonus magic damage from Braum's attacks.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Braum_Passive.png",
        "champion_passive_name": "Concussive Blows",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Braum propels freezing ice from his shield, slowing and dealing magic damage.\n\nApplies a stack of Concussive Blows.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BraumQ.png",
        "champion_q_name": "Winter's Bite",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Braum leaps to a target allied champion or minion. On arrival, Braum and the ally gain Armor and Magic Resist for a few seconds.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BraumW.png",
        "champion_w_name": "Stand Behind Me",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Braum raises his shield in a direction for several seconds, intercepting all projectiles causing them to hit him and be destroyed. He negates the damage of the first attack completely and reduces the damage of all subsequent attacks from this direction.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BraumE.png",
        "champion_e_name": "Unbreakable",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Braum slams the ground, knocking up enemies nearby and in a line in front of him. A fissure is left along the line that slows enemies.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/BraumRWrapper.png",
        "champion_r_name": "Glacial Fissure",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0201/ability_0201_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blta47f3869e876b7ae",
    "url": "/champions/caitlyn/",
    "data_dragon_id": "Caitlyn",
    "data_dragon_json": "{\"id\":\"Caitlyn\",\"key\":\"51\",\"name\":\"Caitlyn\",\"title\":\"the Sheriff of Piltover\",\"image\":{\"full\":\"Caitlyn.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"51000\",\"num\":0,\"name\":\"default\",\"chromas\":true},{\"id\":\"51001\",\"num\":1,\"name\":\"Resistance Caitlyn\",\"chromas\":false},{\"id\":\"51002\",\"num\":2,\"name\":\"Sheriff Caitlyn\",\"chromas\":false},{\"id\":\"51003\",\"num\":3,\"name\":\"Safari Caitlyn\",\"chromas\":false},{\"id\":\"51004\",\"num\":4,\"name\":\"Arctic Warfare Caitlyn\",\"chromas\":false},{\"id\":\"51005\",\"num\":5,\"name\":\"Officer Caitlyn\",\"chromas\":false},{\"id\":\"51006\",\"num\":6,\"name\":\"Headhunter Caitlyn\",\"chromas\":false},{\"id\":\"51010\",\"num\":10,\"name\":\"Lunar Wraith Caitlyn\",\"chromas\":true},{\"id\":\"51011\",\"num\":11,\"name\":\"Pulsefire Caitlyn\",\"chromas\":true},{\"id\":\"51013\",\"num\":13,\"name\":\"Pool Party Caitlyn\",\"chromas\":true},{\"id\":\"51019\",\"num\":19,\"name\":\"Arcade Caitlyn\",\"chromas\":false},{\"id\":\"51020\",\"num\":20,\"name\":\"Prestige Arcade Caitlyn\",\"chromas\":false},{\"id\":\"51022\",\"num\":22,\"name\":\"Battle Academia Caitlyn\",\"chromas\":true},{\"id\":\"51028\",\"num\":28,\"name\":\"Arcane Caitlyn\",\"chromas\":false},{\"id\":\"51029\",\"num\":29,\"name\":\"Prestige Arcade Caitlyn (2022)\",\"chromas\":false},{\"id\":\"51030\",\"num\":30,\"name\":\"Snow Moon Caitlyn\",\"chromas\":true},{\"id\":\"51039\",\"num\":39,\"name\":\"Heartthrob Caitlyn\",\"chromas\":true},{\"id\":\"51048\",\"num\":48,\"name\":\"DRX Caitlyn\",\"chromas\":true}],\"lore\":\"Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn's most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.\",\"blurb\":\"Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a...\",\"allytips\":[\"Make use of her Yordle Snap Traps by placing them pre-emptively to ensure that you'll have one off of cooldown during combat.\",\"Avoid using Ace in the Hole in large team melees as it might be blocked by the wrong target.\",\"Fire 90 Caliber Net away from the opponent to close the gap or hop over walls.\"],\"enemytips\":[\"Keep behind allied minions if Caitlyn is harassing you with Piltover Peacemaker (it deals less damage with each subsequent target).\",\"You can intercept Ace in the Hole's missile from hitting an ally if you stand in its path.\"],\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"info\":{\"attack\":8,\"defense\":2,\"magic\":2,\"difficulty\":6},\"stats\":{\"hp\":580,\"hpperlevel\":107,\"mp\":315,\"mpperlevel\":40,\"movespeed\":325,\"armor\":27,\"armorperlevel\":4.7,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":650,\"hpregen\":3.5,\"hpregenperlevel\":0.55,\"mpregen\":7.4,\"mpregenperlevel\":0.7,\"crit\":0,\"critperlevel\":0,\"attackdamage\":60,\"attackdamageperlevel\":3.8,\"attackspeedperlevel\":4,\"attackspeed\":0.681},\"spells\":[{\"id\":\"CaitlynQ\",\"name\":\"Piltover Peacemaker\",\"description\":\"Caitlyn revs up her rifle for 1 second to unleash a penetrating shot that deals physical damage (deals less damage to subsequent targets).\",\"tooltip\":\"Caitlyn revs her rifle to fire a piercing shot dealing <physicalDamage>{{ initialdamage }} physical damage</physicalDamage>. After the bolt strikes the first target, it opens into a wider shot that deals <physicalDamage>{{ secondarydamage }} physical damage</physicalDamage>.<br /><br />Enemies revealed by <spellName>Yordle Snap Trap</spellName> always take full damage.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Total AD Ratio\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ tadratio*100.000000 }}% -> {{ tadrationl*100.000000 }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[10,9,8,7,6],\"cooldownBurn\":\"10/9/8/7/6\",\"cost\":[55,60,65,70,75],\"costBurn\":\"55/60/65/70/75\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[50,50,50,50,50],[1,1,1,1,1],[1.3,1.45,1.6,1.75,1.9],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"50\",\"1\",\"1.3/1.45/1.6/1.75/1.9\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1250,1250,1250,1250,1250],\"rangeBurn\":\"1250\",\"image\":{\"full\":\"CaitlynQ.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CaitlynW\",\"name\":\"Yordle Snap Trap\",\"description\":\"Caitlyn sets a trap that, when sprung, reveals and immobilizes the enemy champion for 1.5 seconds, granting Caitlyn an empowered Headshot.\",\"tooltip\":\"Caitlyn sets a trap that <status>Roots</status> the first champion that steps on it for {{ e6 }} seconds and granting <keywordStealth>True Sight</keywordStealth> of them for 3 seconds. Traps last for {{ e3 }} seconds, and {{ e5 }} traps may be active at once. This Ability has {{ e5 }} charges ({{ ammorechargetime }} second refresh).{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Bonus Headshot Damage on Trapped Targets\",\"Bonus Attack Damage Ratio\",\"Recharge Time\",\"Maximum Traps\",\"Trap Duration\"],\"effect\":[\"{{ e2 }} -> {{ e2NL }}\",\"{{ e7 }}% -> {{ e7NL }}%\",\"{{ ammorechargetime }} -> {{ ammorechargetimeNL }}\",\"{{ e4 }} -> {{ e4NL }}\",\"{{ e3 }} -> {{ e3NL }}\"]},\"maxrank\":5,\"cooldown\":[0.5,0.5,0.5,0.5,0.5],\"cooldownBurn\":\"0.5\",\"cost\":[20,20,20,20,20],\"costBurn\":\"20\",\"datavalues\":{},\"effect\":[null,[2,2,2,2,2],[40,85,130,175,220],[30,35,40,45,50],[3,3,4,4,5],[3,3,4,4,5],[1.5,1.5,1.5,1.5,1.5],[40,50,60,70,80],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"2\",\"40/85/130/175/220\",\"30/35/40/45/50\",\"3/3/4/4/5\",\"3/3/4/4/5\",\"1.5\",\"40/50/60/70/80\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"2\",\"range\":[800,800,800,800,800],\"rangeBurn\":\"800\",\"image\":{\"full\":\"CaitlynW.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CaitlynE\",\"name\":\"90 Caliber Net\",\"description\":\"Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back.\",\"tooltip\":\"Caitlyn fires a net, pushing her backwards. The net <status>Slows</status> the first target hit by {{ e3 }}% for {{ e2 }} second and deals <magicDamage>{{ netdamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[16,14,12,10,8],\"cooldownBurn\":\"16/14/12/10/8\",\"cost\":[75,75,75,75,75],\"costBurn\":\"75\",\"datavalues\":{},\"effect\":[null,[80,130,180,230,280],[1,1,1,1,1],[50,50,50,50,50],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"80/130/180/230/280\",\"1\",\"50\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[750,750,750,750,750],\"rangeBurn\":\"750\",\"image\":{\"full\":\"CaitlynE.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CaitlynR\",\"name\":\"Ace in the Hole\",\"description\":\"Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.\",\"tooltip\":\"Caitlyn takes a moment to channel and line up the perfect shot, then she fires, dealing <physicalDamage>{{ rtotaldamage }} physical damage</physicalDamage>, but other enemy champions can intercept it. This Ability grants <keywordStealth>True Sight</keywordStealth> of the target during the channel.<br /><br /><rules>Deals up to an additional {{ critchanceamp*100 }}% based on Caitlyn's Critical Strike chance.</rules>{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ rbasedamage }} -> {{ rbasedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[90,75,60],\"cooldownBurn\":\"90/75/60\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[3500,3500,3500],\"rangeBurn\":\"3500\",\"image\":{\"full\":\"CaitlynR.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Headshot\",\"description\":\"Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled.\",\"image\":{\"full\":\"Caitlyn_Headshot.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":336,\"y\":48,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a...",
    "lore": "Renowned as its finest peacekeeper, Caitlyn is also Piltover's best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner's more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn's most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Caitlyn.png",
    "champion_name": "Caitlyn",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
    "champion_title": "the Sheriff of Piltover",
    "recommended_lanes": [],
    "recommended_roles": [
        "Marksman"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/caitlyn/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/caitlyn/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/caitlyn",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg"
        },
        {
            "name": "Resistance Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_1.jpg"
        },
        {
            "name": "Sheriff Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_2.jpg"
        },
        {
            "name": "Safari Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_3.jpg"
        },
        {
            "name": "Arctic Warfare Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_4.jpg"
        },
        {
            "name": "Officer Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_5.jpg"
        },
        {
            "name": "Headhunter Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_6.jpg"
        },
        {
            "name": "Lunar Wraith Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_10.jpg"
        },
        {
            "name": "Pulsefire Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_11.jpg"
        },
        {
            "name": "Pool Party Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_13.jpg"
        },
        {
            "name": "Arcade Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_19.jpg"
        },
        {
            "name": "Prestige Arcade Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_20.jpg"
        },
        {
            "name": "Battle Academia Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_22.jpg"
        },
        {
            "name": "Arcane Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_28.jpg"
        },
        {
            "name": "Prestige Arcade Caitlyn (2022)",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_29.jpg"
        },
        {
            "name": "Snow Moon Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_30.jpg"
        },
        {
            "name": "Heartthrob Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_39.jpg"
        },
        {
            "name": "DRX Caitlyn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_48.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Caitlyn_Headshot.png",
        "champion_passive_name": "Headshot",
        "champion_passive_video_mp4": "",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Caitlyn revs up her rifle for 1 second to unleash a penetrating shot that deals physical damage (deals less damage to subsequent targets).",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CaitlynQ.png",
        "champion_q_name": "Piltover Peacemaker",
        "champion_q_video_mp4": "",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Caitlyn sets a trap that, when sprung, reveals and immobilizes the enemy champion for 1.5 seconds, granting Caitlyn an empowered Headshot.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CaitlynW.png",
        "champion_w_name": "Yordle Snap Trap",
        "champion_w_video_mp4": "",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CaitlynE.png",
        "champion_e_name": "90 Caliber Net",
        "champion_e_video_mp4": "",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CaitlynR.png",
        "champion_r_name": "Ace in the Hole",
        "champion_r_video_mp4": "",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0051/ability_0051_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt65bea5c9a295f1cc",
    "url": "/champions/camille/",
    "data_dragon_id": "Camille",
    "data_dragon_json": "{\"id\":\"Camille\",\"key\":\"164\",\"name\":\"Camille\",\"title\":\"the Steel Shadow\",\"image\":{\"full\":\"Camille.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"164000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"164001\",\"num\":1,\"name\":\"Program Camille\",\"chromas\":false},{\"id\":\"164002\",\"num\":2,\"name\":\"Coven Camille\",\"chromas\":true},{\"id\":\"164010\",\"num\":10,\"name\":\"iG Camille\",\"chromas\":false},{\"id\":\"164011\",\"num\":11,\"name\":\"Arcana Camille\",\"chromas\":true},{\"id\":\"164021\",\"num\":21,\"name\":\"Strike Commander Camille\",\"chromas\":true}],\"lore\":\"Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy technique as an embarrassment that must be put to order. With a mind as sharp as the blades she bears, Camille's pursuit of superiority through hextech body augmentation has left many to wonder if she is now more machine than woman.\",\"blurb\":\"Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy...\",\"allytips\":[\"Try waiting until the other team is distracted with fighting your team, and use Hookshot to pick off vulnerable targets.\",\"Use the CC from your abilities to land both of your Precision Protocol attacks on enemies.\"],\"enemytips\":[\"Camille's shield only works against one damage type, so hit her when she's vulnerable to your damage.\",\"The Hextech Ultimatum has a very short range to cast, so try to flash away from her before she gets close.\"],\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"info\":{\"attack\":8,\"defense\":6,\"magic\":3,\"difficulty\":4},\"stats\":{\"hp\":646,\"hpperlevel\":99,\"mp\":339,\"mpperlevel\":52,\"movespeed\":340,\"armor\":35,\"armorperlevel\":5,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.8,\"mpregen\":8.15,\"mpregenperlevel\":0.75,\"crit\":0,\"critperlevel\":0,\"attackdamage\":68,\"attackdamageperlevel\":3.5,\"attackspeedperlevel\":2.5,\"attackspeed\":0.644},\"spells\":[{\"id\":\"CamilleQ\",\"name\":\"Precision Protocol\",\"description\":\"Camille's next attack deals bonus damage and grants bonus Move Speed. This spell can be recast for a short period of time, doing significantly increased bonus damage if Camille delays a period of time between the two attacks.\",\"tooltip\":\"Camille's next Attack deals an additional <physicalDamage>{{ bonusdamage }} physical damage</physicalDamage> and grants her <speed>{{ msbonus*100 }}% Move Speed</speed> for {{ msduration }} second. This ability can be <recast>Recast</recast> in the next {{ qtotalrecasttime }} seconds.<br /><br />If the <recast>Recast</recast> Attack hits at least {{ qrampuptime }} seconds after the first, the bonus damage is increased to <physicalDamage>{{ empoweredbonusdamage }}</physicalDamage> and {{ damageconversionpercentage }} of the Attack's damage is converted into <trueDamage>true damage</trueDamage>.<br /><br /><rules>This Ability triggers spell effects upon dealing damage.</rules>{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Total AD Ratio\",\"Cooldown\",\"Move Speed\"],\"effect\":[\"{{ tadratio*100.000000 }}% -> {{ tadrationl*100.000000 }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ msbonus*100.000000 }}% -> {{ msbonusnl*100.000000 }}%\"]},\"maxrank\":5,\"cooldown\":[9,8.25,7.5,6.75,6],\"cooldownBurn\":\"9/8.25/7.5/6.75/6\",\"cost\":[25,25,25,25,25],\"costBurn\":\"25\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[325,325,325,325,325],\"rangeBurn\":\"325\",\"image\":{\"full\":\"CamilleQ.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CamilleW\",\"name\":\"Tactical Sweep\",\"description\":\"Camille blasts in a cone after a delay, dealing damage. Enemies in the outer half are slowed and take extra damage, while also healing Camille.\",\"tooltip\":\"Camille winds up and slices, dealing <physicalDamage>{{ basedamagetotal }} physical damage</physicalDamage>.<br /><br />Enemies hit by the outer half are <status>Slowed</status> by {{ slowpercentage }}% decaying over {{ slowduration }} seconds, and they take an additional <physicalDamage>{{ outeredgetooltip }} max Health physical damage</physicalDamage>. Camille restores <healing>{{ outerconehealingratio }}% of the bonus damage dealt to champions as Health</healing>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"@AbilityResourceName@ Cost\",\"Damage\",\"Maximum Health Damage\",\"Cooldown\"],\"effect\":[\"{{ cost }} -> {{ costNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ outerconemaxhpdamage*100.000000 }}% -> {{ outerconemaxhpdamagenl*100.000000 }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[17,15.5,14,12.5,11],\"cooldownBurn\":\"17/15.5/14/12.5/11\",\"cost\":[50,55,60,65,70],\"costBurn\":\"50/55/60/65/70\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[610,610,610,610,610],\"rangeBurn\":\"610\",\"image\":{\"full\":\"CamilleW.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CamilleE\",\"name\":\"Hookshot\",\"description\":\"Camille pulls herself to a wall, leaping off and knocking up enemy champions upon landing.\",\"tooltip\":\"Camille fires a hookshot that attaches to terrain, pulling her to it for 1 second and allowing this Ability to be <recast>Recast</recast>.<br /><br /><recast>Recast:</recast> Camille dashes from the wall, colliding with the first enemy champion hit. Upon landing, she deals <physicalDamage>{{ totaldamage }} physical damage</physicalDamage> to nearby enemies and <status>Stuns</status> enemy champions for {{ knockupduration }} seconds. Dashes towards enemy champions travel twice as far and grant <attackSpeed>{{ asbuff*100 }}% Attack Speed</attackSpeed> for {{ asduration }} seconds on impact.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Damage\",\"Attack Speed\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ asbuff*100.000000 }}% -> {{ asbuffnl*100.000000 }}%\"]},\"maxrank\":5,\"cooldown\":[16,15,14,13,12],\"cooldownBurn\":\"16/15/14/13/12\",\"cost\":[70,70,70,70,70],\"costBurn\":\"70\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[800,800,800,800,800],\"rangeBurn\":\"800\",\"image\":{\"full\":\"CamilleE.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CamilleR\",\"name\":\"The Hextech Ultimatum\",\"description\":\"Camille dashes to target champion, anchoring them to the area. She also deals bonus magic damage to the target with her basic attacks.\",\"tooltip\":\"Camille briefly becomes Untargetable and leaps onto an enemy champion, interrupting channels and locking them into an area they cannot escape by any means for {{ rduration }} seconds. Other nearby enemies are <status>Knocked Away</status>. Her Attacks against the trapped enemy deal an additional <magicDamage>{{ ronhitdamage }} plus {{ rpercentcurrenthpdamage }}% current Health magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Duration\",\"Cooldown\",\"Bonus Damage\",\"Current Health Damage\"],\"effect\":[\"{{ rduration }} -> {{ rdurationNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ ronhitdamage }} -> {{ ronhitdamageNL }}\",\"{{ rpercentcurrenthpdamage }}% -> {{ rpercentcurrenthpdamageNL }}%\"]},\"maxrank\":3,\"cooldown\":[140,115,90],\"cooldownBurn\":\"140/115/90\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[475,475,475],\"rangeBurn\":\"475\",\"image\":{\"full\":\"CamilleR.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Adaptive Defenses\",\"description\":\"Basic attacks on champions grant a shield equal to a percentage of Camille's maximum health against their damage type (Physical or Magic) for a brief duration.\",\"image\":{\"full\":\"Camille_Passive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":384,\"y\":48,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy...",
    "lore": "Weaponized to operate outside the boundaries of the law, Camille is the Principal Intelligencer of Clan Ferros—an elegant and elite agent who ensures the Piltover machine and its Zaunite underbelly runs smoothly. Adaptable and precise, she views sloppy technique as an embarrassment that must be put to order. With a mind as sharp as the blades she bears, Camille's pursuit of superiority through hextech body augmentation has left many to wonder if she is now more machine than woman.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Camille.png",
    "champion_name": "Camille",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",
    "champion_title": "the Steel Shadow",
    "recommended_lanes": [],
    "recommended_roles": [
        "Fighter",
        "Tank"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/camille/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/camille/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/camille",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg"
        },
        {
            "name": "Program Camille",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_1.jpg"
        },
        {
            "name": "Coven Camille",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_2.jpg"
        },
        {
            "name": "iG Camille",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_10.jpg"
        },
        {
            "name": "Arcana Camille",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_11.jpg"
        },
        {
            "name": "Strike Commander Camille",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_21.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Basic attacks on champions grant a shield equal to a percentage of Camille's maximum health against their damage type (Physical or Magic) for a brief duration.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Camille_Passive.png",
        "champion_passive_name": "Adaptive Defenses",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Camille's next attack deals bonus damage and grants bonus Move Speed. This spell can be recast for a short period of time, doing significantly increased bonus damage if Camille delays a period of time between the two attacks.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CamilleQ.png",
        "champion_q_name": "Precision Protocol",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Camille blasts in a cone after a delay, dealing damage. Enemies in the outer half are slowed and take extra damage, while also healing Camille.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CamilleW.png",
        "champion_w_name": "Tactical Sweep",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Camille pulls herself to a wall, leaping off and knocking up enemy champions upon landing.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CamilleE.png",
        "champion_e_name": "Hookshot",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Camille dashes to target champion, anchoring them to the area. She also deals bonus magic damage to the target with her basic attacks.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CamilleR.png",
        "champion_r_name": "The Hextech Ultimatum",
        "champion_r_video_mp4": "",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0164/ability_0164_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt3b10937b6abb4185",
    "url": "/champions/cassiopeia/",
    "data_dragon_id": "Cassiopeia",
    "data_dragon_json": "{\"id\":\"Cassiopeia\",\"key\":\"69\",\"name\":\"Cassiopeia\",\"title\":\"the Serpent's Embrace\",\"image\":{\"full\":\"Cassiopeia.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"69000\",\"num\":0,\"name\":\"default\",\"chromas\":true},{\"id\":\"69001\",\"num\":1,\"name\":\"Desperada Cassiopeia\",\"chromas\":false},{\"id\":\"69002\",\"num\":2,\"name\":\"Siren Cassiopeia\",\"chromas\":false},{\"id\":\"69003\",\"num\":3,\"name\":\"Mythic Cassiopeia\",\"chromas\":false},{\"id\":\"69004\",\"num\":4,\"name\":\"Jade Fang Cassiopeia\",\"chromas\":false},{\"id\":\"69008\",\"num\":8,\"name\":\"Eternum Cassiopeia\",\"chromas\":false},{\"id\":\"69009\",\"num\":9,\"name\":\"Spirit Blossom Cassiopeia\",\"chromas\":true},{\"id\":\"69018\",\"num\":18,\"name\":\"Coven Cassiopeia\",\"chromas\":true},{\"id\":\"69028\",\"num\":28,\"name\":\"Bewitching Cassiopeia\",\"chromas\":true}],\"lore\":\"Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was bitten by a gruesome tomb guardian, whose venom transformed her into a viper-like predator. Cunning and agile, Cassiopeia now slithers under the veil of night, petrifying her enemies with her baleful gaze.\",\"blurb\":\"Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was...\",\"allytips\":[\"Use Twin Fang on poisoned stationary targets like monsters and units stunned by her Petrifying Gaze for maximum damage.\",\"Lead your enemy when targeting with Noxious Blast to ensure the hit.\"],\"enemytips\":[\"Be wary of Cassiopeia's damage potential with Twin Fang when she has you poisoned.\",\"Turn away from Cassiopeia when she is casting Petrifying Gaze to get slowed instead of stunned.\"],\"tags\":[\"Mage\"],\"partype\":\"Mana\",\"info\":{\"attack\":2,\"defense\":3,\"magic\":9,\"difficulty\":10},\"stats\":{\"hp\":630,\"hpperlevel\":104,\"mp\":350,\"mpperlevel\":60,\"movespeed\":328,\"armor\":18,\"armorperlevel\":4.7,\"spellblock\":32,\"spellblockperlevel\":1.3,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.5,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":53,\"attackdamageperlevel\":3,\"attackspeedperlevel\":1.5,\"attackspeed\":0.647},\"spells\":[{\"id\":\"CassiopeiaQ\",\"name\":\"Noxious Blast\",\"description\":\"Cassiopeia blasts an area with Poison after a brief delay, granting her increased Move Speed if she hits an enemy champion.\",\"tooltip\":\"Cassiopeia blasts noxious gas, <keywordMajor>Poisoning</keywordMajor> enemies and dealing <magicDamage>{{ tooltiptotaldamage }} magic damage</magicDamage> over {{ e2 }} seconds. Hitting a champion grants Cassiopeia <speed>{{ e3 }}% Move Speed</speed> decaying over {{ e4 }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Move Speed\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ e3 }}% -> {{ e3NL }}%\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[3.5,3.5,3.5,3.5,3.5],\"cooldownBurn\":\"3.5\",\"cost\":[50,60,70,80,90],\"costBurn\":\"50/60/70/80/90\",\"datavalues\":{},\"effect\":[null,[75,110,145,180,215],[3,3,3,3,3],[30,35,40,45,50],[3,3,3,3,3],[7,7,7,7,7],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"75/110/145/180/215\",\"3\",\"30/35/40/45/50\",\"3\",\"7\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[850,850,850,850,850],\"rangeBurn\":\"850\",\"image\":{\"full\":\"CassiopeiaQ.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CassiopeiaW\",\"name\":\"Miasma\",\"description\":\"Cassiopeia releases several clouds of poison, slowing, grounding, and lightly damaging enemies that pass through them. Grounded enemies cannot use Movement abilities.\",\"tooltip\":\"Cassiopeia spews venom, leaving toxic clouds for {{ e4 }} seconds. Enemies in the clouds take <magicDamage>{{ damagepersecond }} magic damage</magicDamage> per second, are <keywordMajor>Poisoned</keywordMajor>, <status>Grounded</status>, and <status>Slowed</status> by {{ e2 }}%.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Slow\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ e2 }}% -> {{ e2NL }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[24,22,20,18,16],\"cooldownBurn\":\"24/22/20/18/16\",\"cost\":[70,80,90,100,110],\"costBurn\":\"70/80/90/100/110\",\"datavalues\":{},\"effect\":[null,[20,25,30,35,40],[40,50,60,70,80],[1,1,1,1,1],[5,5,5,5,5],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"20/25/30/35/40\",\"40/50/60/70/80\",\"1\",\"5\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[700,700,700,700,700],\"rangeBurn\":\"700\",\"image\":{\"full\":\"CassiopeiaW.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CassiopeiaE\",\"name\":\"Twin Fang\",\"description\":\"Cassiopeia lets loose an attack that deals increased damage to Poisoned targets and heals her for a percentage of the damage dealt. If the target dies from this attack, Cassiopeia regains Mana.\",\"tooltip\":\"Cassiopeia launches deadly fangs, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. If the enemy is <keywordMajor>Poisoned</keywordMajor>, they take an additional <magicDamage>{{ bouspoisoneddamage }} magic damage</magicDamage> and Cassiopeia restores <healing>{{ healcalc }} Health</healing>.<br /><br />If this kills the target, Cassiopeia restores <scaleMana>{{ cost }} Mana</scaleMana>.<br /><br />{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Bonus Poison Damage\",\"Healing from Ability Power\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ healratio*100.000000 }}% -> {{ healrationl*100.000000 }}%\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[0.75,0.75,0.75,0.75,0.75],\"cooldownBurn\":\"0.75\",\"cost\":[50,48,46,44,42],\"costBurn\":\"50/48/46/44/42\",\"datavalues\":{},\"effect\":[null,[20,40,60,80,100],[0,0,0,0,0],[0.1,0.1,0.1,0.1,0.1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"20/40/60/80/100\",\"0\",\"0.1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[700,700,700,700,700],\"rangeBurn\":\"700\",\"image\":{\"full\":\"CassiopeiaE.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CassiopeiaR\",\"name\":\"Petrifying Gaze\",\"description\":\"Cassiopeia releases a swirl of magical energy from her eyes, stunning any enemies in front of her that are facing her and slowing any others with their back turned.\",\"tooltip\":\"Cassiopeia unleashes a petrifying gaze, dealing <magicDamage>{{ rdamage }} magic damage</magicDamage> and <status>Stunning</status> enemies facing her for {{ rccduration }} seconds. Enemies facing away are <status>Slowed</status> by {{ rslowpercent }}% decaying over the same duration instead.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ rbasedamage }} -> {{ rbasedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[120,100,80],\"cooldownBurn\":\"120/100/80\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[825,825,825],\"rangeBurn\":\"825\",\"image\":{\"full\":\"CassiopeiaR.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Serpentine Grace\",\"description\":\"Cassiopeia gains Move Speed per level, but she cannot purchase Boots items.\",\"image\":{\"full\":\"Cassiopeia_Passive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":432,\"y\":48,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was...",
    "lore": "Cassiopeia is a deadly creature bent on manipulating others to her sinister will. Youngest and most beautiful daughter of the noble Du Couteau family of Noxus, she ventured deep into the crypts beneath Shurima in search of ancient power. There, she was bitten by a gruesome tomb guardian, whose venom transformed her into a viper-like predator. Cunning and agile, Cassiopeia now slithers under the veil of night, petrifying her enemies with her baleful gaze.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Cassiopeia.png",
    "champion_name": "Cassiopeia",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",
    "champion_title": "the Serpent's Embrace",
    "recommended_lanes": [],
    "recommended_roles": [
        "Mage"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/cassiopeia/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/cassiopeia/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/cassiopeia",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg"
        },
        {
            "name": "Desperada Cassiopeia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_1.jpg"
        },
        {
            "name": "Siren Cassiopeia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_2.jpg"
        },
        {
            "name": "Mythic Cassiopeia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_3.jpg"
        },
        {
            "name": "Jade Fang Cassiopeia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_4.jpg"
        },
        {
            "name": "Eternum Cassiopeia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_8.jpg"
        },
        {
            "name": "Spirit Blossom Cassiopeia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_9.jpg"
        },
        {
            "name": "Coven Cassiopeia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_18.jpg"
        },
        {
            "name": "Bewitching Cassiopeia",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_28.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Cassiopeia gains Move Speed per level, but she cannot purchase Boots items.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Cassiopeia_Passive.png",
        "champion_passive_name": "Serpentine Grace",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Cassiopeia blasts an area with Poison after a brief delay, granting her increased Move Speed if she hits an enemy champion.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CassiopeiaQ.png",
        "champion_q_name": "Noxious Blast",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Cassiopeia releases several clouds of poison, slowing, grounding, and lightly damaging enemies that pass through them. Grounded enemies cannot use Movement abilities.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CassiopeiaW.png",
        "champion_w_name": "Miasma",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Cassiopeia lets loose an attack that deals increased damage to Poisoned targets and heals her for a percentage of the damage dealt. If the target dies from this attack, Cassiopeia regains Mana.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CassiopeiaE.png",
        "champion_e_name": "Twin Fang",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Cassiopeia releases a swirl of magical energy from her eyes, stunning any enemies in front of her that are facing her and slowing any others with their back turned.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CassiopeiaR.png",
        "champion_r_name": "Petrifying Gaze",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0069/ability_0069_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt9b83a4d51e734afd",
    "url": "/champions/cho-gath/",
    "data_dragon_id": "Chogath",
    "data_dragon_json": "{\"id\":\"Chogath\",\"key\":\"31\",\"name\":\"Cho'Gath\",\"title\":\"the Terror of the Void\",\"image\":{\"full\":\"Chogath.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"31000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"31001\",\"num\":1,\"name\":\"Nightmare Cho'Gath\",\"chromas\":false},{\"id\":\"31002\",\"num\":2,\"name\":\"Gentleman Cho'Gath\",\"chromas\":false},{\"id\":\"31003\",\"num\":3,\"name\":\"Loch Ness Cho'Gath\",\"chromas\":false},{\"id\":\"31004\",\"num\":4,\"name\":\"Jurassic Cho'Gath\",\"chromas\":false},{\"id\":\"31005\",\"num\":5,\"name\":\"Battlecast Prime Cho'Gath\",\"chromas\":true},{\"id\":\"31006\",\"num\":6,\"name\":\"Prehistoric Cho'Gath\",\"chromas\":false},{\"id\":\"31007\",\"num\":7,\"name\":\"Dark Star Cho'Gath\",\"chromas\":false},{\"id\":\"31014\",\"num\":14,\"name\":\"Shan Hai Scrolls Cho'Gath\",\"chromas\":true},{\"id\":\"31023\",\"num\":23,\"name\":\"Broken Covenant Cho'Gath\",\"chromas\":true}],\"lore\":\"From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts matter into new bodily growth—increasing its muscle mass and density, or hardening its outer carapace like organic diamond. When growing larger does not suit the Void-spawn's needs, it vomits out the excess material as razor-sharp spines, leaving prey skewered and ready to feast upon later.\",\"blurb\":\"From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts...\",\"allytips\":[\"Try to line up your attacks with Vorpal Spikes so that they kill minions and harass enemy champions at the same time.\",\"If you're having difficulty feasting upon champions, try eating minions until you're larger.\",\"Using Rupture on creeps in combination with Carnivore is a good way to gain Health and Mana.\"],\"enemytips\":[\"Purchasing a few HP items decreases the chances of Cho'Gath killing you quickly.\",\"Focus on preventing Cho'Gath from reaching his max size.\",\"Rupture has a smoke cloud indicating the area it will strike. Try to watch out for it to prevent Cho'Gath from being able to combo his abilities.\"],\"tags\":[\"Tank\",\"Mage\"],\"partype\":\"Mana\",\"info\":{\"attack\":3,\"defense\":7,\"magic\":7,\"difficulty\":5},\"stats\":{\"hp\":644,\"hpperlevel\":94,\"mp\":270,\"mpperlevel\":60,\"movespeed\":345,\"armor\":38,\"armorperlevel\":5,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":125,\"hpregen\":9,\"hpregenperlevel\":0.85,\"mpregen\":7.2,\"mpregenperlevel\":0.45,\"crit\":0,\"critperlevel\":0,\"attackdamage\":69,\"attackdamageperlevel\":4.2,\"attackspeedperlevel\":1.44,\"attackspeed\":0.625},\"spells\":[{\"id\":\"Rupture\",\"name\":\"Rupture\",\"description\":\"Ruptures the ground at target location, popping enemy units into the air, dealing damage and slowing them.\",\"tooltip\":\"Cho'Gath ruptures the ground, <status>Knocking Up</status> enemies for {{ e5 }} second, dealing <magicDamage>{{ totaldamagetooltip }} magic damage</magicDamage>, and <status>Slowing</status> them by {{ e2 }}% for {{ e3 }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\"]},\"maxrank\":5,\"cooldown\":[6,6,6,6,6],\"cooldownBurn\":\"6\",\"cost\":[50,50,50,50,50],\"costBurn\":\"50\",\"datavalues\":{},\"effect\":[null,[80,140,200,260,320],[60,60,60,60,60],[1.5,1.5,1.5,1.5,1.5],[0.625,0.625,0.625,0.625,0.625],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"80/140/200/260/320\",\"60\",\"1.5\",\"0.63\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[950,950,950,950,950],\"rangeBurn\":\"950\",\"image\":{\"full\":\"Rupture.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":384,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"FeralScream\",\"name\":\"Feral Scream\",\"description\":\"Cho'Gath unleashes a terrible scream at enemies in a cone, dealing magic damage and Silencing enemies for a few seconds.\",\"tooltip\":\"Cho'Gath roars, <status>Silencing</status> enemies for {{ e2 }} seconds and dealing <magicDamage>{{ totaldamagetooltip }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\",\"Silence Duration\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ e2 }} -> {{ e2NL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[13,12,11,10,9],\"cooldownBurn\":\"13/12/11/10/9\",\"cost\":[70,75,80,85,90],\"costBurn\":\"70/75/80/85/90\",\"datavalues\":{},\"effect\":[null,[80,135,190,245,300],[1.6,1.7,1.8,1.9,2],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"80/135/190/245/300\",\"1.6/1.7/1.8/1.9/2\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[300,300,300,300,300],\"rangeBurn\":\"300\",\"image\":{\"full\":\"FeralScream.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":432,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"VorpalSpikes\",\"name\":\"Vorpal Spikes\",\"description\":\"Cho'Gath's attacks release deadly spikes, dealing damage and slowing all enemy units in front of him.\",\"tooltip\":\"Cho'Gath's next 3 Attacks launch spikes that deal <magicDamage>{{ basedamagetotaltooltip }} plus {{ maxhealthpercentcalc }} of the target's max Health magic damage</magicDamage> and <status>Slow</status> by {{ e2 }}%, decaying over {{ e3 }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\",\"Slow\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ e2 }}% -> {{ e2NL }}%\"]},\"maxrank\":5,\"cooldown\":[8,7,6,5,4],\"cooldownBurn\":\"8/7/6/5/4\",\"cost\":[30,30,30,30,30],\"costBurn\":\"30\",\"datavalues\":{},\"effect\":[null,[22,34,46,58,70],[30,35,40,45,50],[1.5,1.5,1.5,1.5,1.5],[6,6,6,6,6],[3,3,3,3,3],[3,3,3,3,3],[0.5,0.5,0.5,0.5,0.5],[60,80,100,120,140],[6,6,6,6,6],[50,50,50,50,50]],\"effectBurn\":[null,\"22/34/46/58/70\",\"30/35/40/45/50\",\"1.5\",\"6\",\"3\",\"3\",\"0.5\",\"60/80/100/120/140\",\"6\",\"50\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[40,40,40,40,40],\"rangeBurn\":\"40\",\"image\":{\"full\":\"VorpalSpikes.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":0,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"Feast\",\"name\":\"Feast\",\"description\":\"Devours an enemy unit, dealing a high amount of true damage. If the target is killed, Cho'Gath grows, gaining maximum Health.\",\"tooltip\":\"Cho'Gath ravenously feeds on an enemy, dealing <trueDamage>{{ rdamage }} true damage</trueDamage> to champions or <trueDamage>{{ rmonsterdamage }}</trueDamage> to minions or jungle monsters. If this kills the target, Cho'Gath gains a stack, which causes him to grow in size and gain <healing>{{ rhealthperstack }} max Health</healing>. Only {{ rminionmaxstacks }} stacks can be gained from minions and non-epic jungle monsters. {{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Champion Damage\",\"Health per Stack\",\"Cooldown\"],\"effect\":[\"{{ rbasedamage }} -> {{ rbasedamageNL }}\",\"{{ rhealthperstack }} -> {{ rhealthperstackNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[80,70,60],\"cooldownBurn\":\"80/70/60\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[175,175,175],\"rangeBurn\":\"175\",\"image\":{\"full\":\"Feast.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Carnivore\",\"description\":\"Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level.\",\"image\":{\"full\":\"GreenTerror_TailSpike.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":0,\"y\":96,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts...",
    "lore": "From the moment Cho'Gath first emerged into the harsh light of Runeterra's sun, the beast was driven by the most pure and insatiable hunger. A perfect expression of the Void's desire to consume all life, Cho'Gath's complex biology quickly converts matter into new bodily growth—increasing its muscle mass and density, or hardening its outer carapace like organic diamond. When growing larger does not suit the Void-spawn's needs, it vomits out the excess material as razor-sharp spines, leaving prey skewered and ready to feast upon later.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Chogath.png",
    "champion_name": "Cho'Gath",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
    "champion_title": "the Terror of the Void",
    "recommended_lanes": [],
    "recommended_roles": [
        "Tank",
        "Mage"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/chogath/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/chogath/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/chogath",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg"
        },
        {
            "name": "Nightmare Cho'Gath",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_1.jpg"
        },
        {
            "name": "Gentleman Cho'Gath",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_2.jpg"
        },
        {
            "name": "Loch Ness Cho'Gath",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_3.jpg"
        },
        {
            "name": "Jurassic Cho'Gath",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_4.jpg"
        },
        {
            "name": "Battlecast Prime Cho'Gath",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_5.jpg"
        },
        {
            "name": "Prehistoric Cho'Gath",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_6.jpg"
        },
        {
            "name": "Dark Star Cho'Gath",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_7.jpg"
        },
        {
            "name": "Shan Hai Scrolls Cho'Gath",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_14.jpg"
        },
        {
            "name": "Broken Covenant Cho'Gath",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_23.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/GreenTerror_TailSpike.png",
        "champion_passive_name": "Carnivore",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Ruptures the ground at target location, popping enemy units into the air, dealing damage and slowing them.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/Rupture.png",
        "champion_q_name": "Rupture",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Cho'Gath unleashes a terrible scream at enemies in a cone, dealing magic damage and Silencing enemies for a few seconds.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/FeralScream.png",
        "champion_w_name": "Feral Scream",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Cho'Gath's attacks release deadly spikes, dealing damage and slowing all enemy units in front of him.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/VorpalSpikes.png",
        "champion_e_name": "Vorpal Spikes",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Devours an enemy unit, dealing a high amount of true damage. If the target is killed, Cho'Gath grows, gaining maximum Health.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/Feast.png",
        "champion_r_name": "Feast",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0031/ability_0031_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt9aabf47b194072bb",
    "url": "/champions/corki/",
    "data_dragon_id": "Corki",
    "data_dragon_json": "{\"id\":\"Corki\",\"key\":\"42\",\"name\":\"Corki\",\"title\":\"the Daring Bombardier\",\"image\":{\"full\":\"Corki.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":48,\"y\":96,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"42000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"42001\",\"num\":1,\"name\":\"UFO Corki\",\"chromas\":false},{\"id\":\"42002\",\"num\":2,\"name\":\"Ice Toboggan Corki\",\"chromas\":false},{\"id\":\"42003\",\"num\":3,\"name\":\"Red Baron Corki\",\"chromas\":false},{\"id\":\"42004\",\"num\":4,\"name\":\"Hot Rod Corki\",\"chromas\":false},{\"id\":\"42005\",\"num\":5,\"name\":\"Urfrider Corki\",\"chromas\":false},{\"id\":\"42006\",\"num\":6,\"name\":\"Dragonwing Corki\",\"chromas\":true},{\"id\":\"42007\",\"num\":7,\"name\":\"Fnatic Corki\",\"chromas\":false},{\"id\":\"42008\",\"num\":8,\"name\":\"Arcade Corki\",\"chromas\":true},{\"id\":\"42018\",\"num\":18,\"name\":\"Corgi Corki\",\"chromas\":true},{\"id\":\"42026\",\"num\":26,\"name\":\"Astronaut Corki\",\"chromas\":true}],\"lore\":\"The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He dedicated himself to the development of flying contraptions, leading an aerial defense force of seasoned veterans known as the Screaming Yipsnakes. Calm under fire, Corki patrols the skies around his adopted home, and has never encountered a problem that a good missile barrage couldn't solve.\",\"blurb\":\"The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He...\",\"allytips\":[\"Phosphorus Bomb can be used to reveal enemy units that might be hiding in a nearby patch of brush.\",\"Valkyrie can be used defensively as well, so try using it for a quick escape.\",\"Corki can continue to attack while using Gatling Gun. Maximizing Gatling Gun is key to mastering Corki.\"],\"enemytips\":[\"Watch out for Corki's Missile Barrage. They deal splash damage, so you can get hit even when hiding behind minions.\",\"Corki is vulnerable after he uses his Valkyrie or Special Delivery, so try switching focus to him if he uses them to enter a fight.\"],\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"info\":{\"attack\":8,\"defense\":3,\"magic\":6,\"difficulty\":6},\"stats\":{\"hp\":588,\"hpperlevel\":105,\"mp\":350,\"mpperlevel\":54,\"movespeed\":325,\"armor\":28,\"armorperlevel\":4.7,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.55,\"mpregen\":7.4,\"mpregenperlevel\":0.55,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55,\"attackdamageperlevel\":2.8,\"attackspeedperlevel\":2.3,\"attackspeed\":0.638},\"spells\":[{\"id\":\"PhosphorusBomb\",\"name\":\"Phosphorus Bomb\",\"description\":\"Corki fires a flash bomb at a target location, dealing magic damage to enemies in the area. This attack additionally reveals units in the area for a duration.\",\"tooltip\":\"Corki lobs a bomb, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. The area and champions hit are revealed for {{ e2 }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[8,8,8,8,8],\"cooldownBurn\":\"8\",\"cost\":[60,70,80,90,100],\"costBurn\":\"60/70/80/90/100\",\"datavalues\":{},\"effect\":[null,[75,120,165,210,255],[6,6,6,6,6],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"75/120/165/210/255\",\"6\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[825,825,825,825,825],\"rangeBurn\":\"825\",\"image\":{\"full\":\"PhosphorusBomb.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"CarpetBomb\",\"name\":\"Valkyrie\",\"description\":\"Corki flies a short distance, dropping bombs that create a trail of fire that damages opponents who remain in it.\",\"tooltip\":\"Corki flies over and scorches a path, burning it for {{ trailduration }} seconds. Enemies in the fire take <magicDamage>{{ totaldamagepersecond }} magic damage</magicDamage> per second.<br /><br />If Corki has <keywordMajor>The Package</keywordMajor>, he instead consumes it to fly a much greater distance, refresh this Ability's Cooldown, <status>Knock Aside</status> enemies hit, and burn the path for {{ megatrailduration }} seconds. Enemies hit and in the path are <status>Slowed</status> by {{ spell.carpetbombmega:slowamount*100 }}% and take <magicDamage>{{ spell.carpetbombmega:totaldamagepersecond }} magic damage</magicDamage> per second for {{ spell.carpetbombmega:directburnduration }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage Per Second\",\"Cooldown\"],\"effect\":[\"{{ basedamagepersecond }} -> {{ basedamagepersecondNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[20,19,18,17,16],\"cooldownBurn\":\"20/19/18/17/16\",\"cost\":[100,100,100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[600,600,600,600,600],\"rangeBurn\":\"600\",\"image\":{\"full\":\"CarpetBomb.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"GGun\",\"name\":\"Gatling Gun\",\"description\":\"Corki's gatling gun rapidly fires in a cone in front of him, dealing damage and reducing enemy Armor and Magic Resist.\",\"tooltip\":\"Corki fires a gatling gun in front of him, dealing <physicalDamage>{{ physicaldamagepersecond }} physical damage</physicalDamage> and <magicDamage>{{ magicaldamagepersecond }} magic damage</magicDamage> per second and shredding up to <scaleArmor>{{ e4 }} Armor</scaleArmor> and <scaleMR>Magic Resist</scaleMR> over {{ e2 }} seconds.<br /><br />Total Damage Per Second: {{ totaldamagepersecond }}{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Defense Reduction\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ effect4amount*-1.000000 }} -> {{ effect4amountnl*-1.000000 }}\"]},\"maxrank\":5,\"cooldown\":[16,16,16,16,16],\"cooldownBurn\":\"16\",\"cost\":[50,50,50,50,50],\"costBurn\":\"50\",\"datavalues\":{},\"effect\":[null,[120,170,220,270,320],[4,4,4,4,4],[4,4,4,4,4],[8,11,14,17,20],[8,8,8,8,8],[2,2,2,2,2],[0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"120/170/220/270/320\",\"4\",\"4\",\"8/11/14/17/20\",\"8\",\"2\",\"0.5\",\"0.5\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[600,600,600,600,600],\"rangeBurn\":\"600\",\"image\":{\"full\":\"GGun.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"MissileBarrage\",\"name\":\"Missile Barrage\",\"description\":\"Corki fires a missile toward his target location that explodes on impact, dealing damage to enemies in an area. Corki stores missiles over time, up to a maximum. Every 3rd missile fired will be a Big One, dealing extra damage.\",\"tooltip\":\"Corki fires a missile that explodes on the first enemy hit, dealing <magicDamage>{{ rsmallmissiledamage }} magic damage</magicDamage> to surrounding enemies. Every third missile instead deals <magicDamage>{{ rbigmissiledamage }} magic damage</magicDamage>.<br /><br />This Ability has 7 charges.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Attack Damage Ratio\",\"Missile Recharge Time\"],\"effect\":[\"{{ rbasedamage }} -> {{ rbasedamageNL }}\",\"{{ radratio*100.000000 }}% -> {{ radrationl*100.000000 }}%\",\"{{ ammorechargetime }} -> {{ ammorechargetimeNL }}\"]},\"maxrank\":3,\"cooldown\":[2,2,2],\"cooldownBurn\":\"2\",\"cost\":[20,20,20],\"costBurn\":\"20\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"7\",\"range\":[1225,1225,1225],\"rangeBurn\":\"1225\",\"image\":{\"full\":\"MissileBarrage.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Hextech Munitions\",\"description\":\"A percentage of Corki's basic attack damage is converted into <magicDamage>magic damage</magicDamage>.<br><br>Corki can occasionally retrieve The Package inside his base, granting him Move Speed and an empowered cast of Valkyrie.\",\"image\":{\"full\":\"Corki_RapidReload.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":48,\"y\":96,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He...",
    "lore": "The yordle pilot Corki loves two things above all others: flying, and his glamorous mustache... though not necessarily in that order. After leaving Bandle City, he settled in Piltover and fell in love with the wondrous machines he found there. He dedicated himself to the development of flying contraptions, leading an aerial defense force of seasoned veterans known as the Screaming Yipsnakes. Calm under fire, Corki patrols the skies around his adopted home, and has never encountered a problem that a good missile barrage couldn't solve.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Corki.png",
    "champion_name": "Corki",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",
    "champion_title": "the Daring Bombardier",
    "recommended_lanes": [],
    "recommended_roles": [
        "Marksman"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/corki/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/corki/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/corki",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg"
        },
        {
            "name": "UFO Corki",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_1.jpg"
        },
        {
            "name": "Ice Toboggan Corki",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_2.jpg"
        },
        {
            "name": "Red Baron Corki",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_3.jpg"
        },
        {
            "name": "Hot Rod Corki",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_4.jpg"
        },
        {
            "name": "Urfrider Corki",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_5.jpg"
        },
        {
            "name": "Dragonwing Corki",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_6.jpg"
        },
        {
            "name": "Fnatic Corki",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_7.jpg"
        },
        {
            "name": "Arcade Corki",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_8.jpg"
        },
        {
            "name": "Corgi Corki",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_18.jpg"
        },
        {
            "name": "Astronaut Corki",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_26.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "A percentage of Corki's basic attack damage is converted into magic damage.\n\nCorki can occasionally retrieve The Package inside his base, granting him Move Speed and an empowered cast of Valkyrie.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Corki_RapidReload.png",
        "champion_passive_name": "Hextech Munitions",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Corki fires a flash bomb at a target location, dealing magic damage to enemies in the area. This attack additionally reveals units in the area for a duration.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/PhosphorusBomb.png",
        "champion_q_name": "Phosphorus Bomb",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Corki flies a short distance, dropping bombs that create a trail of fire that damages opponents who remain in it.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/CarpetBomb.png",
        "champion_w_name": "Valkyrie",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Corki's gatling gun rapidly fires in a cone in front of him, dealing damage and reducing enemy Armor and Magic Resist.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/GGun.png",
        "champion_e_name": "Gatling Gun",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Corki fires a missile toward his target location that explodes on impact, dealing damage to enemies in an area. Corki stores missiles over time, up to a maximum. Every 3rd missile fired will be a Big One, dealing extra damage.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/MissileBarrage.png",
        "champion_r_name": "Missile Barrage",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0042/ability_0042_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "bltafb356a880c37379",
    "url": "/champions/darius/",
    "data_dragon_id": "Darius",
    "data_dragon_json": "{\"id\":\"Darius\",\"key\":\"122\",\"name\":\"Darius\",\"title\":\"the Hand of Noxus\",\"image\":{\"full\":\"Darius.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":96,\"y\":96,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"122000\",\"num\":0,\"name\":\"default\",\"chromas\":true},{\"id\":\"122001\",\"num\":1,\"name\":\"Lord Darius\",\"chromas\":false},{\"id\":\"122002\",\"num\":2,\"name\":\"Bioforge Darius\",\"chromas\":false},{\"id\":\"122003\",\"num\":3,\"name\":\"Woad King Darius\",\"chromas\":false},{\"id\":\"122004\",\"num\":4,\"name\":\"Dunkmaster Darius\",\"chromas\":true},{\"id\":\"122008\",\"num\":8,\"name\":\"Academy Darius\",\"chromas\":false},{\"id\":\"122014\",\"num\":14,\"name\":\"Dreadnova Darius\",\"chromas\":false},{\"id\":\"122015\",\"num\":15,\"name\":\"God-King Darius\",\"chromas\":false},{\"id\":\"122016\",\"num\":16,\"name\":\"High Noon Darius\",\"chromas\":true},{\"id\":\"122024\",\"num\":24,\"name\":\"Lunar Beast Darius\",\"chromas\":true},{\"id\":\"122033\",\"num\":33,\"name\":\"Crime City Nightmare Darius\",\"chromas\":false},{\"id\":\"122043\",\"num\":43,\"name\":\"Spirit Blossom Darius\",\"chromas\":false}],\"lore\":\"There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that he never doubts his cause is just, and never hesitates once his axe is raised, those who stand against the leader of the Trifarian Legion can expect no mercy.\",\"blurb\":\"There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that...\",\"allytips\":[\"Decimate is a powerful harassment ability. Strike an enemy from maximum range for the greatest effect.\",\"Noxian Guillotine does more damage the more attacks you can land prior to it. Use Noxian Might to deal maximum damage.\",\"Darius benefits greatly from enhanced survivability. The longer you can prolong a fight, the more powerful he becomes.\"],\"enemytips\":[\"When Darius's axe grab is on cooldown, he is vulnerable to harassment attacks.\",\"Darius's ability to escape from fights is limited. If you have an advantage against him, press your lead.\"],\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"Mana\",\"info\":{\"attack\":9,\"defense\":5,\"magic\":1,\"difficulty\":2},\"stats\":{\"hp\":652,\"hpperlevel\":114,\"mp\":263,\"mpperlevel\":58,\"movespeed\":340,\"armor\":39,\"armorperlevel\":5.2,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":175,\"hpregen\":10,\"hpregenperlevel\":0.95,\"mpregen\":6.6,\"mpregenperlevel\":0.35,\"crit\":0,\"critperlevel\":0,\"attackdamage\":64,\"attackdamageperlevel\":5,\"attackspeedperlevel\":1,\"attackspeed\":0.625},\"spells\":[{\"id\":\"DariusCleave\",\"name\":\"Decimate\",\"description\":\"Darius winds up and swings his axe in a wide circle. Enemies struck by the blade take more damage than those struck by the handle. Darius heals based on enemy champions and large monsters hit by the blade.\",\"tooltip\":\"Darius hefts his axe then swings it around, dealing <physicalDamage>{{ bladedamage }} physical damage</physicalDamage> with the edge and <physicalDamage>{{ handledamage }} damage</physicalDamage> with the handle. Enemies hit with the handle do not take a <keywordMajor>Hemorrhage</keywordMajor> stack.<br /><br />Darius restores <healing>{{ e5 }}% missing Health</healing> per enemy champion and large jungle monster hit with the edge, up to a max of <healing>{{ e7 }}%</healing>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Total AD Ratio\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e2 }} -> {{ e2NL }}\",\"{{ e1 }}% -> {{ e1NL }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[9,8,7,6,5],\"cooldownBurn\":\"9/8/7/6/5\",\"cost\":[30,35,40,45,50],\"costBurn\":\"30/35/40/45/50\",\"datavalues\":{},\"effect\":[null,[100,110,120,130,140],[50,80,110,140,170],[99,99,99,99,99],[0.1,0.1,0.1,0.1,0.1],[13,13,13,13,13],[35,35,35,35,35],[39,39,39,39,39],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"100/110/120/130/140\",\"50/80/110/140/170\",\"99\",\"0.1\",\"13\",\"35\",\"39\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1,1,1,1,1],\"rangeBurn\":\"1\",\"image\":{\"full\":\"DariusCleave.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"DariusNoxianTacticsONH\",\"name\":\"Crippling Strike\",\"description\":\"Darius's next attack strikes an enemy's crucial artery. As they bleed out, their Move Speed is slowed.\",\"tooltip\":\"Darius' next Attack deals <physicalDamage>{{ empoweredattackdamage }} physical damage</physicalDamage> and <status>Slows</status> by {{ e2 }}% for {{ e5 }} second.<br /><br />This Ability refunds its Mana cost and reduces its Cooldown by {{ e3 }}% if it kills the target.<br /><br /><rules>This Ability triggers spell effects upon dealing damage.</rules>{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Total AD Ratio\"],\"effect\":[\"{{ effect4amount*100.000000 }} -> {{ effect4amountnl*100.000000 }}\"]},\"maxrank\":5,\"cooldown\":[5,5,5,5,5],\"cooldownBurn\":\"5\",\"cost\":[40,40,40,40,40],\"costBurn\":\"40\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[90,90,90,90,90],[50,50,50,50,50],[1.4,1.45,1.5,1.55,1.6],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"90\",\"50\",\"1.4/1.45/1.5/1.55/1.6\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[300,300,300,300,300],\"rangeBurn\":\"300\",\"image\":{\"full\":\"DariusNoxianTacticsONH.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"DariusAxeGrabCone\",\"name\":\"Apprehend\",\"description\":\"Darius hones his axe, passively causing his physical damage to ignore a percentage of his target's Armor. When activated, Darius sweeps up his enemies with his axe's hook and pulls them to him.\",\"tooltip\":\"<spellPassive>Passive:</spellPassive> Darius gains {{ e1 }}% Armor Penetration.<br /><br /><spellActive>Active:</spellActive> Darius hooks with his axe, <status>Pulling</status>, and <status>Knocking Up</status> and <status>Slowing</status> by {{ e2 }}% for {{ e3 }} second.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Percent Armor Penetration\",\"@AbilityResourceName@ Cost\",\"Cooldown\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[24,21.5,19,16.5,14],\"cooldownBurn\":\"24/21.5/19/16.5/14\",\"cost\":[70,60,50,40,30],\"costBurn\":\"70/60/50/40/30\",\"datavalues\":{},\"effect\":[null,[15,20,25,30,35],[40,40,40,40,40],[1,1,1,1,1],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"15/20/25/30/35\",\"40\",\"1\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[535,535,535,535,535],\"rangeBurn\":\"535\",\"image\":{\"full\":\"DariusAxeGrabCone.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"DariusExecute\",\"name\":\"Noxian Guillotine\",\"description\":\"Darius leaps to an enemy champion and strikes a lethal blow, dealing true damage. This damage is increased for each stack of Hemorrhage on the target. If Noxian Guillotine is a killing blow, its cooldown is refreshed for a brief duration.\",\"tooltip\":\"Darius leaps to an enemy and strikes a lethal blow, dealing <trueDamage>{{ damage }} true damage</trueDamage>. For each <keywordMajor>Hemorrhage</keywordMajor> on the target, this Ability deals an additional {{ rdamagepercentperhemostack*100 }}% damage, up to a max of <trueDamage>{{ maximumdamage }} damage</trueDamage>.<br /><br />If this kills the target, Darius may <recast>Recast</recast> this Ability once within {{ rrecastduration }} seconds. At rank 3, this Ability has no Mana cost and kills refresh the Cooldown completely.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ rbasedamage }} -> {{ rbasedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[120,100,80],\"cooldownBurn\":\"120/100/80\",\"cost\":[100,100,0],\"costBurn\":\"100/100/0\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[460,460,460],\"rangeBurn\":\"460\",\"image\":{\"full\":\"DariusExecute.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Hemorrhage\",\"description\":\"Darius' attacks and damaging abilities cause enemies to bleed for physical damage over 5 seconds, stacking up to 5 times. Darius enrages and gains massive Attack Damage when his target reaches max stacks.\",\"image\":{\"full\":\"Darius_Icon_Hemorrhage.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":96,\"y\":96,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that...",
    "lore": "There is no greater symbol of Noxian might than Darius, the nation's most feared and battle-hardened commander. Rising from humble origins to become the Hand of Noxus, he cleaves through the empire's enemies—many of them Noxians themselves. Knowing that he never doubts his cause is just, and never hesitates once his axe is raised, those who stand against the leader of the Trifarian Legion can expect no mercy.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Darius.png",
    "champion_name": "Darius",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
    "champion_title": "the Hand of Noxus",
    "recommended_lanes": [],
    "recommended_roles": [
        "Fighter",
        "Tank"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/darius/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/darius/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/darius",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg"
        },
        {
            "name": "Lord Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_1.jpg"
        },
        {
            "name": "Bioforge Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_2.jpg"
        },
        {
            "name": "Woad King Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_3.jpg"
        },
        {
            "name": "Dunkmaster Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_4.jpg"
        },
        {
            "name": "Academy Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_8.jpg"
        },
        {
            "name": "Dreadnova Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_14.jpg"
        },
        {
            "name": "God-King Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_15.jpg"
        },
        {
            "name": "High Noon Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_16.jpg"
        },
        {
            "name": "Lunar Beast Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_24.jpg"
        },
        {
            "name": "Crime City Nightmare Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_33.jpg"
        },
        {
            "name": "Spirit Blossom Darius",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_43.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Darius' attacks and damaging abilities cause enemies to bleed for physical damage over 5 seconds, stacking up to 5 times. Darius enrages and gains massive Attack Damage when his target reaches max stacks.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Darius_Icon_Hemorrhage.png",
        "champion_passive_name": "Hemorrhage",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Darius winds up and swings his axe in a wide circle. Enemies struck by the blade take more damage than those struck by the handle. Darius heals based on enemy champions and large monsters hit by the blade.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DariusCleave.png",
        "champion_q_name": "Decimate",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Darius's next attack strikes an enemy's crucial artery. As they bleed out, their Move Speed is slowed.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DariusNoxianTacticsONH.png",
        "champion_w_name": "Crippling Strike",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Darius hones his axe, passively causing his physical damage to ignore a percentage of his target's Armor. When activated, Darius sweeps up his enemies with his axe's hook and pulls them to him.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DariusAxeGrabCone.png",
        "champion_e_name": "Apprehend",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Darius leaps to an enemy champion and strikes a lethal blow, dealing true damage. This damage is increased for each stack of Hemorrhage on the target. If Noxian Guillotine is a killing blow, its cooldown is refreshed for a brief duration.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DariusExecute.png",
        "champion_r_name": "Noxian Guillotine",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0122/ability_0122_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "bltec3fbc1d45649620",
    "url": "/champions/diana/",
    "data_dragon_id": "Diana",
    "data_dragon_json": "{\"id\":\"Diana\",\"key\":\"131\",\"name\":\"Diana\",\"title\":\"Scorn of the Moon\",\"image\":{\"full\":\"Diana.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":144,\"y\":96,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"131000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"131001\",\"num\":1,\"name\":\"Dark Valkyrie Diana\",\"chromas\":false},{\"id\":\"131002\",\"num\":2,\"name\":\"Lunar Goddess Diana\",\"chromas\":true},{\"id\":\"131003\",\"num\":3,\"name\":\"Infernal Diana\",\"chromas\":false},{\"id\":\"131011\",\"num\":11,\"name\":\"Blood Moon Diana\",\"chromas\":false},{\"id\":\"131012\",\"num\":12,\"name\":\"Dark Waters Diana\",\"chromas\":true},{\"id\":\"131018\",\"num\":18,\"name\":\"Dragonslayer Diana\",\"chromas\":true},{\"id\":\"131025\",\"num\":25,\"name\":\"Battle Queen Diana\",\"chromas\":false},{\"id\":\"131026\",\"num\":26,\"name\":\"Prestige Battle Queen Diana\",\"chromas\":false},{\"id\":\"131027\",\"num\":27,\"name\":\"Sentinel Diana\",\"chromas\":true},{\"id\":\"131037\",\"num\":37,\"name\":\"Firecracker Diana\",\"chromas\":true},{\"id\":\"131047\",\"num\":47,\"name\":\"Winterblessed Diana\",\"chromas\":true}],\"lore\":\"Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued with the essence of an Aspect from beyond Targon's towering summit, Diana is no longer wholly human, and struggles to understand her power and purpose in this world.\",\"blurb\":\"Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued...\",\"allytips\":[\"Landing Crescent Strike is critically important, but don't be afraid to miss. The cooldown is short and the mana cost is low.\",\"Consider when to cast Lunar Rush without Moonlight and when to wait for another Crescent Strike.\",\"Use Moonfall and Lunar Rush to stay on targets and activate Moonsilver Blade for extra damage.\"],\"enemytips\":[\"Dodge Crescent Strike, or move to safety if you are affected by Moonlight.\",\"Pale Cascade orbs only last a few seconds. Avoid Diana and engage her after the shield dissipates.\",\"Diana can play very aggressively if she uses Lunar Rush without Moonlight, but you can punish her by slowing or stunning her when she has no way to get back into position.\"],\"tags\":[\"Fighter\",\"Mage\"],\"partype\":\"Mana\",\"info\":{\"attack\":7,\"defense\":6,\"magic\":8,\"difficulty\":4},\"stats\":{\"hp\":640,\"hpperlevel\":109,\"mp\":375,\"mpperlevel\":25,\"movespeed\":345,\"armor\":31,\"armorperlevel\":4.3,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":150,\"hpregen\":6.5,\"hpregenperlevel\":0.85,\"mpregen\":8,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":57,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.25,\"attackspeed\":0.625},\"spells\":[{\"id\":\"DianaQ\",\"name\":\"Crescent Strike\",\"description\":\"Unleashes a bolt of lunar energy in an arc dealing magic damage.<br><br>Afflicts enemies struck with Moonlight, revealing them if they are not stealthed for 3 seconds.\",\"tooltip\":\"Diana unleashes an arc of lunar energy, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> and marking with <keywordMajor>Moonlight</keywordMajor> for {{ moonlightduration }} seconds. <br /><br /><keywordMajor>Moonlight</keywordMajor> reveals enemies that are not <keywordStealth>stealthed</keywordStealth>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\"]},\"maxrank\":5,\"cooldown\":[8,7.5,7,6.5,6],\"cooldownBurn\":\"8/7.5/7/6.5/6\",\"cost\":[50,50,50,50,50],\"costBurn\":\"50\",\"datavalues\":{},\"effect\":[null,[60,95,130,165,200],[1,1,1,1,1],[1.5,1.5,1.5,1.5,1.5],[3,3,3,3,3],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"60/95/130/165/200\",\"1\",\"1.5\",\"3\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[900,900,900,900,900],\"rangeBurn\":\"900\",\"image\":{\"full\":\"DianaQ.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":0,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"DianaOrbs\",\"name\":\"Pale Cascade\",\"description\":\"Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.\",\"tooltip\":\"Diana creates three orbiting spheres for {{ shieldduration }} seconds that explode on contact, each dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>, up to a max of <magicDamage>{{ totalmaxdamage }} damage</magicDamage>.<br /><br />Diana also gains <shield>{{ shieldvalue }} Shield</shield> for the same duration. When the last sphere detonates, she gains an additional <shield>{{ shieldvalue }} Shield</shield> and refreshes the duration.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Shield Amount\",\"@AbilityResourceName@ Cost\",\"Cooldown\"],\"effect\":[\"{{ e2 }} -> {{ e2NL }}\",\"{{ shieldbase }} -> {{ shieldbaseNL }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[15,13.5,12,10.5,9],\"cooldownBurn\":\"15/13.5/12/10.5/9\",\"cost\":[40,45,50,55,60],\"costBurn\":\"40/45/50/55/60\",\"datavalues\":{},\"effect\":[null,[5,5,5,5,5],[18,30,42,54,66],[25,40,55,70,85],[1,1,1,1,1],[4,4,4,4,4],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"5\",\"18/30/42/54/66\",\"25/40/55/70/85\",\"1\",\"4\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[800,800,800,800,800],\"rangeBurn\":\"800\",\"image\":{\"full\":\"DianaOrbs.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":48,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"DianaTeleport\",\"name\":\"Lunar Rush\",\"description\":\"Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing magic damage.<br><br>Lunar Rush has no cooldown when used to dash to an enemy afflicted with Moonlight. All other enemies will have the Moonlight debuff removed regardless of whether they were the target of Lunar Rush.\",\"tooltip\":\"Diana becomes as the vengeful moon, dashing to an enemy and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage>. If the target is afflicted with <keywordMajor>Moonlight</keywordMajor>, this Ability's Cooldown is refreshed.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"@AbilityResourceName@ Cost\",\"Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\"]},\"maxrank\":5,\"cooldown\":[22,20,18,16,14],\"cooldownBurn\":\"22/20/18/16/14\",\"cost\":[40,45,50,55,60],\"costBurn\":\"40/45/50/55/60\",\"datavalues\":{},\"effect\":[null,[4,4,4,0,0],[40,60,80,100,120],[50,75,100,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"4/4/4/0/0\",\"40/60/80/100/120\",\"50/75/100/0/0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[825,825,825,825,825],\"rangeBurn\":\"825\",\"image\":{\"full\":\"DianaTeleport.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":96,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"DianaR\",\"name\":\"Moonfall\",\"description\":\"Diana reveals and draws in all nearby enemies and slows them.<br><br>If Diana pulls in one or more enemy champions, the moonlight crashes down onto her after a short delay, dealing magic damage in an area around her, increased for each target beyond the first pulled.\",\"tooltip\":\"Diana <status>Pulls In</status>, <status>Slows</status> by {{ slowtooltip }}%, and reveals nearby enemies for {{ slowduration }} seconds.<br /><br />If Diana hits at least one enemy champion, she calls to the moon, dealing <magicDamage>{{ rexplosiondamage }} magic damage</magicDamage> plus <magicDamage>{{ rmultihitamplification }}</magicDamage> for each champion pulled beyond the first, up to a max of an additional <magicDamage>{{ maxdamage }} damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Damage\",\"Slow\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ damage }} -> {{ damageNL }}\",\"{{ slowtooltip }}% -> {{ slowtooltipNL }}%\"]},\"maxrank\":3,\"cooldown\":[100,90,80],\"cooldownBurn\":\"100/90/80\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[-0.35,-0.4,-0.45],[2,2,2],[0.5,0.5,0.5],[3,3,3],[4,4,4],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"-0.35/-0.4/-0.45\",\"2\",\"0.5\",\"3\",\"4\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[475,475,475],\"rangeBurn\":\"475\",\"image\":{\"full\":\"DianaR.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":144,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Moonsilver Blade\",\"description\":\"Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains Attack Speed for her next 3 attacks.\",\"image\":{\"full\":\"Diana_Passive_LunarBlade.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":144,\"y\":96,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued...",
    "lore": "Bearing her crescent moonblade, Diana fights as a warrior of the Lunari—a faith all but quashed in the lands around Mount Targon. Clad in shimmering armor the color of winter snow at night, she is a living embodiment of the silver moon's power. Imbued with the essence of an Aspect from beyond Targon's towering summit, Diana is no longer wholly human, and struggles to understand her power and purpose in this world.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Diana.png",
    "champion_name": "Diana",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg",
    "champion_title": "Scorn of the Moon",
    "recommended_lanes": [],
    "recommended_roles": [
        "Fighter",
        "Mage"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/diana/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/diana/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/diana",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg"
        },
        {
            "name": "Dark Valkyrie Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_1.jpg"
        },
        {
            "name": "Lunar Goddess Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_2.jpg"
        },
        {
            "name": "Infernal Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_3.jpg"
        },
        {
            "name": "Blood Moon Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_11.jpg"
        },
        {
            "name": "Dark Waters Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_12.jpg"
        },
        {
            "name": "Dragonslayer Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_18.jpg"
        },
        {
            "name": "Battle Queen Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_25.jpg"
        },
        {
            "name": "Prestige Battle Queen Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_26.jpg"
        },
        {
            "name": "Sentinel Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_27.jpg"
        },
        {
            "name": "Firecracker Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_37.jpg"
        },
        {
            "name": "Winterblessed Diana",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_47.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Every third strike cleaves nearby enemies for an additional magic damage. After casting a spell, Diana gains Attack Speed for her next 3 attacks.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Diana_Passive_LunarBlade.png",
        "champion_passive_name": "Moonsilver Blade",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Unleashes a bolt of lunar energy in an arc dealing magic damage.\n\nAfflicts enemies struck with Moonlight, revealing them if they are not stealthed for 3 seconds.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DianaQ.png",
        "champion_q_name": "Crescent Strike",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DianaOrbs.png",
        "champion_w_name": "Pale Cascade",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Becomes the living embodiment of the vengeful moon, dashing to an enemy and dealing magic damage.\n\nLunar Rush has no cooldown when used to dash to an enemy afflicted with Moonlight. All other enemies will have the Moonlight debuff removed regardless of whether they were the target of Lunar Rush.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DianaTeleport.png",
        "champion_e_name": "Lunar Rush",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Diana reveals and draws in all nearby enemies and slows them.\n\nIf Diana pulls in one or more enemy champions, the moonlight crashes down onto her after a short delay, dealing magic damage in an area around her, increased for each target beyond the first pulled.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DianaR.png",
        "champion_r_name": "Moonfall",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0131/ability_0131_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blte04bcd16ecb4b5f7",
    "url": "/champions/dr-mundo/",
    "data_dragon_id": "DrMundo",
    "data_dragon_json": "{\"id\":\"DrMundo\",\"key\":\"36\",\"name\":\"Dr. Mundo\",\"title\":\"the Madman of Zaun\",\"image\":{\"full\":\"DrMundo.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":240,\"y\":96,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"36000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"36001\",\"num\":1,\"name\":\"Toxic Dr. Mundo\",\"chromas\":false},{\"id\":\"36002\",\"num\":2,\"name\":\"Mr. Mundoverse\",\"chromas\":false},{\"id\":\"36003\",\"num\":3,\"name\":\"Corporate Mundo\",\"chromas\":true},{\"id\":\"36004\",\"num\":4,\"name\":\"Mundo Mundo\",\"chromas\":false},{\"id\":\"36005\",\"num\":5,\"name\":\"Executioner Mundo\",\"chromas\":false},{\"id\":\"36006\",\"num\":6,\"name\":\"Rageborn Mundo\",\"chromas\":false},{\"id\":\"36007\",\"num\":7,\"name\":\"TPA Mundo\",\"chromas\":false},{\"id\":\"36008\",\"num\":8,\"name\":\"Pool Party Mundo\",\"chromas\":false},{\"id\":\"36009\",\"num\":9,\"name\":\"El Macho Mundo\",\"chromas\":false},{\"id\":\"36010\",\"num\":10,\"name\":\"Frozen Prince Mundo\",\"chromas\":true}],\"lore\":\"Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After \\\"curing\\\" the entire staff, Dr. Mundo established his practice in the empty wards that once treated him and began mimicking the highly unethical procedures he had so often experienced himself. With a full cabinet of medicines and zero medical knowledge, he now makes himself more monstrous with each injection and terrifies the hapless \\\"patients\\\" who wander near his office.\",\"blurb\":\"Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After \\\"curing\\\" the...\",\"allytips\":[\"A well-timed Sadism can bait enemy champions into attacking you even when they lack the damage to finish you.\",\"Spirit Visage will increase the healing done by your ultimate and lower cooldowns on all of your abilities.\",\"Cleavers are a powerful tool for killing neutral monsters. Instead of returning to base, farm neutral monsters until your ultimate can heal you.\"],\"enemytips\":[\"Try to coordinate high-damage abilities with your allies right after Dr. Mundo uses his ultimate, but if you're unable to kill him quickly with burst he will heal through the damage.\",\"Try casting Ignite when Dr. Mundo uses Sadism to negate a large portion of its healing.\"],\"tags\":[\"Fighter\",\"Tank\"],\"partype\":\"None\",\"info\":{\"attack\":5,\"defense\":7,\"magic\":6,\"difficulty\":5},\"stats\":{\"hp\":613,\"hpperlevel\":103,\"mp\":0,\"mpperlevel\":0,\"movespeed\":345,\"armor\":32,\"armorperlevel\":3.7,\"spellblock\":29,\"spellblockperlevel\":2.3,\"attackrange\":125,\"hpregen\":7,\"hpregenperlevel\":0.5,\"mpregen\":0,\"mpregenperlevel\":0,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":2.5,\"attackspeedperlevel\":3.3,\"attackspeed\":0.67},\"spells\":[{\"id\":\"DrMundoQ\",\"name\":\"Infected Bonesaw\",\"description\":\"Dr. Mundo throws an infected bonesaw, dealing damage to the first enemy hit based on their current health and slowing them.\",\"tooltip\":\"Dr. Mundo hurls his bonesaw, dealing <magicDamage>{{ currenthealthdamage*100 }}% current Health magic damage</magicDamage> to the first enemy hit and <status>Slowing</status> them by {{ slowamount*100 }}% for {{ slowduration }} seconds.<br /><br />If the bonesaw hits a champion or monster, Dr. Mundo restores <healing>{{ healthrestoreonhitchampionmonster }} Health</healing>. If it hits a non-champion or non-monster, Dr. Mundo instead restores <healing>{{ healthrestoreonhitminion }} Health</healing>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Current Health Damage\",\"Minimum Damage\",\"Monster Damage Cap\",\"Health Cost\"],\"effect\":[\"{{ currenthealthdamage*100.000000 }}% -> {{ currenthealthdamagenl*100.000000 }}%\",\"{{ minimumdamage }} -> {{ minimumdamageNL }}\",\"{{ maximummonsterdamage }} -> {{ maximummonsterdamageNL }}\",\"{{ healthcost }} -> {{ healthcostNL }}\"]},\"maxrank\":5,\"cooldown\":[4,4,4,4,4],\"cooldownBurn\":\"4\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" Health\",\"maxammo\":\"-1\",\"range\":[975,975,975,975,975],\"rangeBurn\":\"975\",\"image\":{\"full\":\"DrMundoQ.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":384,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ healthcost }} Health\"},{\"id\":\"DrMundoW\",\"name\":\"Heart Zapper\",\"description\":\"Dr. Mundo electrocutes himself, dealing persistent damage to nearby enemies and storing a portion of damage he takes. At the end of the duration or on Recast, Dr. Mundo deals a burst of damage to nearby enemies. If the burst hit an enemy, he heals a percentage of the stored damage.\",\"tooltip\":\"Dr. Mundo charges up a defibrilator, dealing <magicDamage>{{ damagepertick*4 }} magic damage</magicDamage> each second for up to {{ duration }} seconds to nearby enemies. Additionally he stores {{ grayhealthstorageinitial }} of damage taken for the first {{ grayhealthinitialduration }} seconds and {{ grayhealthstorage*100 }}% for the remaining duration as gray health and can <recast>Recast</recast>.<br /><br /><recast>Recast:</recast> Detonate the defibrilator, dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> to nearby enemies. If this hits at least one champion, Dr. Mundo restores <healing>{{ grayhealthbigmod*100 }}% of gray health</healing>, otherwise he instead restores <healing>{{ grayhealthsmallmod*100 }}% of gray health</healing>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage per Tick\",\"Recast Damage\",\"Cooldown\"],\"effect\":[\"{{ damagepertick }} -> {{ damagepertickNL }}\",\"{{ recastbasedamage }} -> {{ recastbasedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[17,16.5,16,15.5,15],\"cooldownBurn\":\"17/16.5/16/15.5/15\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"% Current Health\",\"maxammo\":\"-1\",\"range\":[325,325,325,325,325],\"rangeBurn\":\"325\",\"image\":{\"full\":\"DrMundoW.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":432,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ currenthealthcost*100 }}% Current Health\"},{\"id\":\"DrMundoE\",\"name\":\"Blunt Force Trauma\",\"description\":\"Passive - Dr. Mundo gains bonus Attack Damage, increasing based on his max Health.<br><br>Active - Dr. Mundo slams his “medical” bag into an enemy, dealing additional damage based on his missing Health. If the enemy dies they are swatted away, dealing damage to enemies they pass through.\",\"tooltip\":\"<spellPassive>Passive:</spellPassive> Dr Mundo gains <physicalDamage>{{ passivebonusad }} Attack Damage</physicalDamage>.<br /><br /><spellActive>Active:</spellActive> Dr Mundo violently swings his \\\"medical\\\" bag, causing his next Attack to deal an additional <physicalDamage>{{ additionaldamage }} physical damage</physicalDamage>, increased by up to {{ maxdamageamptooltip }} based on his missing Health. If the enemy is killed, Mundo swats them away, dealing <physicalDamage>{{ additionaldamage }} physical damage</physicalDamage> to enemies they pass through.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Base Damage\",\"Health Cost\",\"Health Into Attack Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ flathealthcost }} -> {{ flathealthcostNL }}\",\"{{ healthtoadratio*100.000000 }}% -> {{ healthtoadrationl*100.000000 }}%\"]},\"maxrank\":5,\"cooldown\":[9,8.25,7.5,6.75,6],\"cooldownBurn\":\"9/8.25/7.5/6.75/6\",\"cost\":[0,0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" Health\",\"maxammo\":\"-1\",\"range\":[0,0,0,0,0],\"rangeBurn\":\"0\",\"image\":{\"full\":\"DrMundoE.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":0,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ flathealthcost }} Health\"},{\"id\":\"DrMundoR\",\"name\":\"Maximum Dosage\",\"description\":\"Dr. Mundo pumps himself with chemicals, instantly healing a percent of his missing Health. He then gains Move Speed and regenerates a portion of his maximum Health over a long duration.\",\"tooltip\":\"Dr. Mundo pumps himself with chemicals, gaining <healing>{{ missinghealthheal*100 }}% of his missing Health as max Health</healing>, <speed>{{ speedboostamount*100 }}% Move Speed</speed>, and regenerating <healing>{{ maxhealthhot*100 }}% max Health</healing> over {{ duration }} seconds.<br /><br />At Rank 3, both healing effects are increased by an additional {{ bonuspernearbychampion*100 }}% per nearby enemy champion.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Bonus Health\",\"Move Speed\",\"Max Health %\"],\"effect\":[\"{{ missinghealthheal*100.000000 }}% -> {{ missinghealthhealnl*100.000000 }}%\",\"{{ speedboostamount*100.000000 }}% -> {{ speedboostamountnl*100.000000 }}%\",\"{{ maxhealthhot*100.000000 }}% -> {{ maxhealthhotnl*100.000000 }}%\"]},\"maxrank\":3,\"cooldown\":[120,120,120],\"cooldownBurn\":\"120\",\"cost\":[0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[20,20,20],\"rangeBurn\":\"20\",\"image\":{\"full\":\"DrMundoR.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":48,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"No Cost\"}],\"passive\":{\"name\":\"Goes Where He Pleases\",\"description\":\"Dr. Mundo resists the first Immobilizing effect that hits him, instead losing Health and dropping a chemical cannister nearby. Dr. Mundo can pick it up by walking over it, restoring Health and reducing this Ability's Cooldown.<br><br>Dr. Mundo also has significantly increased Health regeneration.<br>\",\"image\":{\"full\":\"DrMundo_P.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":240,\"y\":96,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After \"curing\" the...",
    "lore": "Utterly mad, tragically homicidal, and horrifyingly purple, Dr. Mundo is what keeps many of Zaun's citizens indoors on particularly dark nights. Now a self-proclaimed physician, he was once a patient of Zaun's most infamous asylum. After \"curing\" the entire staff, Dr. Mundo established his practice in the empty wards that once treated him and began mimicking the highly unethical procedures he had so often experienced himself. With a full cabinet of medicines and zero medical knowledge, he now makes himself more monstrous with each injection and terrifies the hapless \"patients\" who wander near his office.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/DrMundo.png",
    "champion_name": "Dr. Mundo",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
    "champion_title": "the Madman of Zaun",
    "recommended_lanes": [],
    "recommended_roles": [
        "Fighter",
        "Tank"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/drmundo/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/drmundo/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/drmundo",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg"
        },
        {
            "name": "Toxic Dr. Mundo",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_1.jpg"
        },
        {
            "name": "Mr. Mundoverse",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_2.jpg"
        },
        {
            "name": "Corporate Mundo",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_3.jpg"
        },
        {
            "name": "Mundo Mundo",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_4.jpg"
        },
        {
            "name": "Executioner Mundo",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_5.jpg"
        },
        {
            "name": "Rageborn Mundo",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_6.jpg"
        },
        {
            "name": "TPA Mundo",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_7.jpg"
        },
        {
            "name": "Pool Party Mundo",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_8.jpg"
        },
        {
            "name": "El Macho Mundo",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_9.jpg"
        },
        {
            "name": "Frozen Prince Mundo",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_10.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Dr. Mundo resists the first Immobilizing effect that hits him, instead losing Health and dropping a chemical cannister nearby. Dr. Mundo can pick it up by walking over it, restoring Health and reducing this Ability's Cooldown.\n\nDr. Mundo also has significantly increased Health regeneration.\n",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/DrMundo_P.png",
        "champion_passive_name": "Goes Where He Pleases",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Dr. Mundo throws an infected bonesaw, dealing damage to the first enemy hit based on their current health and slowing them.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DrMundoQ.png",
        "champion_q_name": "Infected Bonesaw",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Dr. Mundo electrocutes himself, dealing persistent damage to nearby enemies and storing a portion of damage he takes. At the end of the duration or on Recast, Dr. Mundo deals a burst of damage to nearby enemies. If the burst hit an enemy, he heals a percentage of the stored damage.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DrMundoW.png",
        "champion_w_name": "Heart Zapper",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Passive - Dr. Mundo gains bonus Attack Damage, increasing based on his max Health.\n\nActive - Dr. Mundo slams his “medical” bag into an enemy, dealing additional damage based on his missing Health. If the enemy dies they are swatted away, dealing damage to enemies they pass through.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DrMundoE.png",
        "champion_e_name": "Blunt Force Trauma",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Dr. Mundo pumps himself with chemicals, instantly healing a percent of his missing Health. He then gains Move Speed and regenerates a portion of his maximum Health over a long duration.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DrMundoR.png",
        "champion_r_name": "Maximum Dosage",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0036/ability_0036_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt48716e72346dabdf",
    "url": "/champions/draven/",
    "data_dragon_id": "Draven",
    "data_dragon_json": "{\"id\":\"Draven\",\"key\":\"119\",\"name\":\"Draven\",\"title\":\"the Glorious Executioner\",\"image\":{\"full\":\"Draven.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":192,\"y\":96,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"119000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"119001\",\"num\":1,\"name\":\"Soul Reaver Draven\",\"chromas\":false},{\"id\":\"119002\",\"num\":2,\"name\":\"Gladiator Draven\",\"chromas\":false},{\"id\":\"119003\",\"num\":3,\"name\":\"Primetime Draven\",\"chromas\":true},{\"id\":\"119004\",\"num\":4,\"name\":\"Pool Party Draven\",\"chromas\":false},{\"id\":\"119005\",\"num\":5,\"name\":\"Beast Hunter Draven\",\"chromas\":false},{\"id\":\"119006\",\"num\":6,\"name\":\"Draven Draven\",\"chromas\":false},{\"id\":\"119012\",\"num\":12,\"name\":\"Santa Draven\",\"chromas\":false},{\"id\":\"119013\",\"num\":13,\"name\":\"Mecha Kingdoms Draven\",\"chromas\":true},{\"id\":\"119020\",\"num\":20,\"name\":\"Ruined Draven\",\"chromas\":true},{\"id\":\"119029\",\"num\":29,\"name\":\"Debonair Draven\",\"chromas\":true},{\"id\":\"119039\",\"num\":39,\"name\":\"Fright Night Draven\",\"chromas\":true}],\"lore\":\"In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and his unparalleled skill with his spinning axes. Addicted to the spectacle of his own brash perfection, Draven has sworn to defeat whomever he must to ensure that his name is chanted throughout the empire forever more.\",\"blurb\":\"In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and...\",\"allytips\":[\"If Draven doesn't move, Spinning Axe will fall near his present location. It will fall directly on him, or just to the right or left.\",\"If Draven does move after attacking, Spinning Axe will lead him in the direction of his movement. Use this to control where the Spinning Axe will go.\"],\"enemytips\":[\"Launch skillshots toward the landing position of Draven's Spinning Axes.\",\"Disrupt Draven with the goal of making him drop his axes. If you do, his power drops dramatically.\"],\"tags\":[\"Marksman\"],\"partype\":\"Mana\",\"info\":{\"attack\":9,\"defense\":3,\"magic\":1,\"difficulty\":8},\"stats\":{\"hp\":675,\"hpperlevel\":104,\"mp\":361,\"mpperlevel\":39,\"movespeed\":330,\"armor\":29,\"armorperlevel\":4.5,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":550,\"hpregen\":3.75,\"hpregenperlevel\":0.7,\"mpregen\":8.05,\"mpregenperlevel\":0.65,\"crit\":0,\"critperlevel\":0,\"attackdamage\":62,\"attackdamageperlevel\":3.6,\"attackspeedperlevel\":2.7,\"attackspeed\":0.679},\"spells\":[{\"id\":\"DravenSpinning\",\"name\":\"Spinning Axe\",\"description\":\"Draven's next attack will deal bonus physical damage. This axe will ricochet off the target high up into the air. If Draven catches it, he automatically readies another Spinning Axe. Draven can have two Spinning Axes at once.\",\"tooltip\":\"Draven readies a <keywordMajor>Spinning Axe</keywordMajor>, causing his next Attack to deal an additional <physicalDamage>{{ totaldamage }} physical damage</physicalDamage> and ricochet into the air. If Draven catches it, he readies another <keywordMajor>Spinning Axe</keywordMajor>.<br /><br />Draven can hold two <keywordMajor>Spinning Axes</keywordMajor> at once.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Bonus AD Percentage\",\"Cooldown\"],\"effect\":[\"{{ e5 }} -> {{ e5NL }}\",\"{{ e2 }}% -> {{ e2NL }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[12,11,10,9,8],\"cooldownBurn\":\"12/11/10/9/8\",\"cost\":[45,45,45,45,45],\"costBurn\":\"45\",\"datavalues\":{},\"effect\":[null,[100,100,100,100,100],[75,85,95,105,115],[30,35,40,45,50],[5.75,5.75,5.75,5.75,5.75],[40,45,50,55,60],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"100\",\"75/85/95/105/115\",\"30/35/40/45/50\",\"5.75\",\"40/45/50/55/60\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[300,300,300,300,300],\"rangeBurn\":\"300\",\"image\":{\"full\":\"DravenSpinning.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":192,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"DravenFury\",\"name\":\"Blood Rush\",\"description\":\"Draven gains increased Move Speed and Attack Speed. The Move Speed bonus decreases rapidly over its duration. Catching a Spinning Axe will refresh the cooldown of Blood Rush.\",\"tooltip\":\"Draven becomes Ghosted, gains <speed>{{ e2 }}% Move Speed</speed> decaying over {{ e3 }} seconds and <attackSpeed>{{ e4 }}% Attack Speed</attackSpeed> for {{ e5 }} seconds.<br /><br />When Draven catches a <keywordMajor>Spinning Axe</keywordMajor>, this Ability's Cooldown is refreshed.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Attack Speed\",\"@AbilityResourceName@ Cost\",\"Move Speed\"],\"effect\":[\"{{ e4 }}% -> {{ e4NL }}%\",\"{{ cost }} -> {{ costNL }}\",\"{{ e2 }}% -> {{ e2NL }}%\"]},\"maxrank\":5,\"cooldown\":[12,12,12,12,12],\"cooldownBurn\":\"12\",\"cost\":[40,35,30,25,20],\"costBurn\":\"40/35/30/25/20\",\"datavalues\":{},\"effect\":[null,[4,5,6,7,8],[50,55,60,65,70],[1.5,1.5,1.5,1.5,1.5],[20,25,30,35,40],[3,3,3,3,3],[-0.062,-0.069,-0.075,-0.081,-0.087],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"4/5/6/7/8\",\"50/55/60/65/70\",\"1.5\",\"20/25/30/35/40\",\"3\",\"-0.062/-0.069/-0.075/-0.081/-0.087\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1000,1000,1000,1000,1000],\"rangeBurn\":\"1000\",\"image\":{\"full\":\"DravenFury.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":240,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"DravenDoubleShot\",\"name\":\"Stand Aside\",\"description\":\"Draven throws his axes, dealing physical damage to targets hit and knocking them aside. Targets hit are slowed.\",\"tooltip\":\"Draven chucks a sideways axe that deals <physicalDamage>{{ totaldamage }} physical damage</physicalDamage>, <status>Knocks Back</status>, and <status>Slows</status> by {{ e2 }}% for {{ e3 }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Slow\",\"Cooldown\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ e2 }}% -> {{ e2NL }}%\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":5,\"cooldown\":[18,17,16,15,14],\"cooldownBurn\":\"18/17/16/15/14\",\"cost\":[70,70,70,70,70],\"costBurn\":\"70\",\"datavalues\":{},\"effect\":[null,[75,110,145,180,215],[20,25,30,35,40],[2,2,2,2,2],[0.5,0.5,0.5,0.5,0.5],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"75/110/145/180/215\",\"20/25/30/35/40\",\"2\",\"0.5\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1050,1050,1050,1050,1050],\"rangeBurn\":\"1050\",\"image\":{\"full\":\"DravenDoubleShot.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":288,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"DravenRCast\",\"name\":\"Whirling Death\",\"description\":\"Draven hurls two massive axes to deal physical damage to each unit struck. Whirling Death slowly reverses direction and returns to Draven after striking an enemy champion. Draven may also activate this ability while the axes are in flight to cause it to return early. Deals less damage for each unit hit and resets when the axes reverse direction. Executes enemies who have less health than Draven's number of Adoration stacks.\",\"tooltip\":\"Draven hurls two massive axes that deal <physicalDamage>{{ rcalculateddamage }} physical damage</physicalDamage>. Upon hitting a champion or <recast>Recasting</recast>, they reverse direction and return to Draven. The axes deal {{ rdamagereductionperhit*100 }}% less damage for each enemy hit, down to a minimum of {{ rmindamagepercent }}%.<br /><br />If <keywordMajor>Whirling Death</keywordMajor> would leave an enemy champion with less health than {{ rpassivestackscoefficient*100 }}% of Draven's current <keywordMajor>League of Draven</keywordMajor> stacks ({{ rpassivetruedamage }}), he will execute them.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\",\"Bonus AD Ratio\"],\"effect\":[\"{{ rbasedamage }} -> {{ rbasedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ rcoefficient*100.000000 }}% -> {{ rcoefficientnl*100.000000 }}%\"]},\"maxrank\":3,\"cooldown\":[100,90,80],\"cooldownBurn\":\"100/90/80\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[20000,20000,20000],\"rangeBurn\":\"20000\",\"image\":{\"full\":\"DravenRCast.png\",\"sprite\":\"spell2.png\",\"group\":\"spell\",\"x\":336,\"y\":144,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"League of Draven\",\"description\":\"Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has.\",\"image\":{\"full\":\"Draven_passive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":192,\"y\":96,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and...",
    "lore": "In Noxus, warriors known as Reckoners face one another in arenas where blood is spilled and strength tested—but none has ever been as celebrated as Draven. A former soldier, he found that the crowds uniquely appreciated his flair for the dramatic, and his unparalleled skill with his spinning axes. Addicted to the spectacle of his own brash perfection, Draven has sworn to defeat whomever he must to ensure that his name is chanted throughout the empire forever more.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Draven.png",
    "champion_name": "Draven",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",
    "champion_title": "the Glorious Executioner",
    "recommended_lanes": [],
    "recommended_roles": [
        "Marksman"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/draven/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/draven/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/draven",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg"
        },
        {
            "name": "Soul Reaver Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_1.jpg"
        },
        {
            "name": "Gladiator Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_2.jpg"
        },
        {
            "name": "Primetime Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_3.jpg"
        },
        {
            "name": "Pool Party Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_4.jpg"
        },
        {
            "name": "Beast Hunter Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_5.jpg"
        },
        {
            "name": "Draven Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_6.jpg"
        },
        {
            "name": "Santa Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_12.jpg"
        },
        {
            "name": "Mecha Kingdoms Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_13.jpg"
        },
        {
            "name": "Ruined Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_20.jpg"
        },
        {
            "name": "Debonair Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_29.jpg"
        },
        {
            "name": "Fright Night Draven",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_39.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Draven_passive.png",
        "champion_passive_name": "League of Draven",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Draven's next attack will deal bonus physical damage. This axe will ricochet off the target high up into the air. If Draven catches it, he automatically readies another Spinning Axe. Draven can have two Spinning Axes at once.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DravenSpinning.png",
        "champion_q_name": "Spinning Axe",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Draven gains increased Move Speed and Attack Speed. The Move Speed bonus decreases rapidly over its duration. Catching a Spinning Axe will refresh the cooldown of Blood Rush.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DravenFury.png",
        "champion_w_name": "Blood Rush",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Draven throws his axes, dealing physical damage to targets hit and knocking them aside. Targets hit are slowed.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DravenDoubleShot.png",
        "champion_e_name": "Stand Aside",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Draven hurls two massive axes to deal physical damage to each unit struck. Whirling Death slowly reverses direction and returns to Draven after striking an enemy champion. Draven may also activate this ability while the axes are in flight to cause it to return early. Deals less damage for each unit hit and resets when the axes reverse direction. Executes enemies who have less health than Draven's number of Adoration stacks.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/DravenRCast.png",
        "champion_r_name": "Whirling Death",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0119/ability_0119_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blta8b5a51e31f89309",
    "url": "/champions/ekko/",
    "data_dragon_id": "Ekko",
    "data_dragon_json": "{\"id\":\"Ekko\",\"key\":\"245\",\"name\":\"Ekko\",\"title\":\"the Boy Who Shattered Time\",\"image\":{\"full\":\"Ekko.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":288,\"y\":96,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"245000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"245001\",\"num\":1,\"name\":\"Sandstorm Ekko\",\"chromas\":true},{\"id\":\"245002\",\"num\":2,\"name\":\"Academy Ekko\",\"chromas\":false},{\"id\":\"245003\",\"num\":3,\"name\":\"PROJECT: Ekko\",\"chromas\":false},{\"id\":\"245011\",\"num\":11,\"name\":\"SKT T1 Ekko\",\"chromas\":false},{\"id\":\"245012\",\"num\":12,\"name\":\"Trick or Treat Ekko\",\"chromas\":true},{\"id\":\"245019\",\"num\":19,\"name\":\"True Damage Ekko\",\"chromas\":true},{\"id\":\"245028\",\"num\":28,\"name\":\"Pulsefire Ekko\",\"chromas\":true},{\"id\":\"245036\",\"num\":36,\"name\":\"Firelight Ekko\",\"chromas\":true},{\"id\":\"245045\",\"num\":45,\"name\":\"Star Guardian Ekko\",\"chromas\":true},{\"id\":\"245046\",\"num\":46,\"name\":\"Prestige Star Guardian Ekko\",\"chromas\":false}],\"lore\":\"A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this freedom, when there's a threat to his friends he'll do anything to defend them. To outsiders, Ekko seems to achieve the impossible the first time, every time.\",\"blurb\":\"A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this...\",\"allytips\":[\"Chronobreak is a potent escape tool, but it can also be quite powerful when used offensively. Don't underestimate its damage potential.\",\"If you can proc Z-Drive Resonance on an enemy champion, it's worth taking risks to do so. The bonus Move Speed makes it easy to escape.\",\"Phase Dive's dash is a great tool for setting up Ekko's other abilities. Use it to get double hits with Timewinder or get into position to detonate Parallel Convergence.\"],\"enemytips\":[\"Ekko is significantly weaker when his ultimate is down. Watch for the trail he leaves behind to determine if Chronobreak is available.\",\"Ekko's stun zone takes 3 seconds to arm. Watch for the image he creates on cast and try to guess where the zone was placed.\",\"The second hit of Timewinder does more damage than the first; try to avoid it.\"],\"tags\":[\"Assassin\",\"Fighter\"],\"partype\":\"Mana\",\"info\":{\"attack\":5,\"defense\":3,\"magic\":7,\"difficulty\":8},\"stats\":{\"hp\":655,\"hpperlevel\":99,\"mp\":280,\"mpperlevel\":70,\"movespeed\":340,\"armor\":32,\"armorperlevel\":4.2,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":125,\"hpregen\":9,\"hpregenperlevel\":0.9,\"mpregen\":7,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":58,\"attackdamageperlevel\":3,\"attackspeedperlevel\":3.3,\"attackspeed\":0.688},\"spells\":[{\"id\":\"EkkoQ\",\"name\":\"Timewinder\",\"description\":\"Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return.\",\"tooltip\":\"Ekko throws a device dealing <magicDamage>{{ initialdamage }} magic damage</magicDamage>. On hitting a champion or reaching the end of its range, it expands into a field that <status>Slows</status> enemies inside by {{ e2 }}%. After it expands, Ekko recalls it, dealing <magicDamage>{{ recalldamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"@AbilityResourceName@ Cost\",\"Outgoing Damage\",\"Slow\",\"Return Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ e1 }} -> {{ e1NL }}\",\"{{ effect2amount*-100.000000 }}% -> {{ effect2amountnl*-100.000000 }}%\",\"{{ e3 }} -> {{ e3NL }}\"]},\"maxrank\":5,\"cooldown\":[9,8.5,8,7.5,7],\"cooldownBurn\":\"9/8.5/8/7.5/7\",\"cost\":[50,60,70,80,90],\"costBurn\":\"50/60/70/80/90\",\"datavalues\":{},\"effect\":[null,[60,75,90,105,120],[32,39,46,53,60],[40,65,90,115,140],[100,100,100,100,100],[0,0,0,0,0],[165,165,165,165,165],[1.75,1.75,1.75,1.75,1.75],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"60/75/90/105/120\",\"32/39/46/53/60\",\"40/65/90/115/140\",\"100\",\"0\",\"165\",\"1.75\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1075,1075,1075,1075,1075],\"rangeBurn\":\"1075\",\"image\":{\"full\":\"EkkoQ.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":96,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EkkoW\",\"name\":\"Parallel Convergence\",\"description\":\"Ekko's basic attacks deal bonus magic damage to low health enemies. He can cast Parallel Convergence to split the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and stuns enemies by suspending them in time.\",\"tooltip\":\"<spellPassive>Passive:</spellPassive> Ekko's Attacks against enemies below 30% Health deal <magicDamage>{{ missinghealthpercent }} missing Health magic damage</magicDamage>.<br /><br /><spellActive>Active:</spellActive> Ekko launches a chronosphere lasting 1.5 seconds after a delay that <status>Slows</status> enemies inside by {{ e0 }}%. If Ekko enters the sphere, he detonates it, <status>Stunning</status> for {{ e2 }} seconds and gaining <shield>{{ totalshield }} Shield</shield>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Shield Amount\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e4 }} -> {{ e4NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[22,20,18,16,14],\"cooldownBurn\":\"22/20/18/16/14\",\"cost\":[30,35,40,45,50],\"costBurn\":\"30/35/40/45/50\",\"datavalues\":{},\"effect\":[null,[375,375,375,375,375],[2.25,2.25,2.25,2.25,2.25],[3,3,3,3,3],[70,90,110,130,150],[150,150,150,150,150],[15,15,15,15,15],[1.5,1.5,1.5,1.5,1.5],[3,3,3,3,3],[2,2,2,2,2],[40,40,40,40,40]],\"effectBurn\":[null,\"375\",\"2.25\",\"3\",\"70/90/110/130/150\",\"150\",\"15\",\"1.5\",\"3\",\"2\",\"40\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1600,1600,1600,1600,1600],\"rangeBurn\":\"1600\",\"image\":{\"full\":\"EkkoW.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":144,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EkkoE\",\"name\":\"Phase Dive\",\"description\":\"Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target.\",\"tooltip\":\"Ekko dashes and empowers his next Attack to have bonus range, teleport him to his target, and deal an additional <magicDamage>{{ totaldamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[9,8.5,8,7.5,7],\"cooldownBurn\":\"9/8.5/8/7.5/7\",\"cost\":[40,45,50,55,60],\"costBurn\":\"40/45/50/55/60\",\"datavalues\":{},\"effect\":[null,[50,75,100,125,150],[350,350,350,350,350],[3,3,3,3,3],[300,300,300,300,300],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"50/75/100/125/150\",\"350\",\"3\",\"300\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[325,325,325,325,325],\"rangeBurn\":\"325\",\"image\":{\"full\":\"EkkoE.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":192,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EkkoR\",\"name\":\"Chronobreak\",\"description\":\"Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage.\",\"tooltip\":\"Ekko turns back time, entering Stasis while teleporting to where he was 4 seconds ago and dealing <magicDamage>{{ totaldamage }} magic damage</magicDamage> to nearby enemies. In addition, Ekko restores <healing>{{ totalbaseheal }} Health</healing>, increased by {{ percenthealampperpercentmissinghealth }}% for each 1% Health he lost in last 4 seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Healing\",\"Cooldown\"],\"effect\":[\"{{ damage }} -> {{ damageNL }}\",\"{{ flatheal }} -> {{ flathealNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[110,80,50],\"cooldownBurn\":\"110/80/50\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[850,850,850],\"rangeBurn\":\"850\",\"image\":{\"full\":\"EkkoR.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":240,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Z-Drive Resonance\",\"description\":\"Every third attack or damaging spell on the same target deals bonus magic damage, and grants Ekko a burst of speed if the target is a champion.<br><br>\",\"image\":{\"full\":\"Ekko_P.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":288,\"y\":96,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this...",
    "lore": "A prodigy from the rough streets of Zaun, Ekko manipulates time to twist any situation to his advantage. Using his own invention, the Zero Drive, he explores the branching possibilities of reality to craft the perfect moment. Though he revels in this freedom, when there's a threat to his friends he'll do anything to defend them. To outsiders, Ekko seems to achieve the impossible the first time, every time.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Ekko.png",
    "champion_name": "Ekko",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
    "champion_title": "the Boy Who Shattered Time",
    "recommended_lanes": [],
    "recommended_roles": [
        "Assassin",
        "Fighter"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/ekko/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/ekko/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/ekko",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg"
        },
        {
            "name": "Sandstorm Ekko",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_1.jpg"
        },
        {
            "name": "Academy Ekko",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_2.jpg"
        },
        {
            "name": "PROJECT: Ekko",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_3.jpg"
        },
        {
            "name": "SKT T1 Ekko",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_11.jpg"
        },
        {
            "name": "Trick or Treat Ekko",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_12.jpg"
        },
        {
            "name": "True Damage Ekko",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_19.jpg"
        },
        {
            "name": "Pulsefire Ekko",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_28.jpg"
        },
        {
            "name": "Firelight Ekko",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_36.jpg"
        },
        {
            "name": "Star Guardian Ekko",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_45.jpg"
        },
        {
            "name": "Prestige Star Guardian Ekko",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_46.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Every third attack or damaging spell on the same target deals bonus magic damage, and grants Ekko a burst of speed if the target is a champion.\n\n",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Ekko_P.png",
        "champion_passive_name": "Z-Drive Resonance",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EkkoQ.png",
        "champion_q_name": "Timewinder",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Ekko's basic attacks deal bonus magic damage to low health enemies. He can cast Parallel Convergence to split the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and stuns enemies by suspending them in time.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EkkoW.png",
        "champion_w_name": "Parallel Convergence",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EkkoE.png",
        "champion_e_name": "Phase Dive",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EkkoR.png",
        "champion_r_name": "Chronobreak",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0245/ability_0245_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt29b284b0b6e95d55",
    "url": "/champions/elise/",
    "data_dragon_id": "Elise",
    "data_dragon_json": "{\"id\":\"Elise\",\"key\":\"60\",\"name\":\"Elise\",\"title\":\"the Spider Queen\",\"image\":{\"full\":\"Elise.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":336,\"y\":96,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"60000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"60001\",\"num\":1,\"name\":\"Death Blossom Elise\",\"chromas\":false},{\"id\":\"60002\",\"num\":2,\"name\":\"Victorious Elise\",\"chromas\":false},{\"id\":\"60003\",\"num\":3,\"name\":\"Blood Moon Elise\",\"chromas\":false},{\"id\":\"60004\",\"num\":4,\"name\":\"SKT T1 Elise\",\"chromas\":false},{\"id\":\"60005\",\"num\":5,\"name\":\"Super Galaxy Elise\",\"chromas\":false},{\"id\":\"60006\",\"num\":6,\"name\":\"Bewitching Elise\",\"chromas\":true},{\"id\":\"60015\",\"num\":15,\"name\":\"Withered Rose Elise\",\"chromas\":true}],\"lore\":\"Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly inhuman—a spider-like creature, drawing unsuspecting prey into her web. To maintain her eternal youth, Elise now prefers to feed upon the naive and the faithless, and there are few who can resist her seductions.\",\"blurb\":\"Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly...\",\"allytips\":[\"Spider Form is most effective at finishing off enemies with low health; Human Form's Neurotoxin does more damage to healthy foes. \",\"When in Spider Form, Spiderlings will attack the target that Elise uses Venomous Bite on. \",\"Elise's Spider Form and Spider Form abilities do not cost mana and can be prioritized when you are trying to conserve mana.\"],\"enemytips\":[\"Elise's Spider Form is more dangerous when you are at low health, and her Human Form more potent when you are at high health.\",\"Rappel will only move Elise straight up and down unless she can descend upon an enemy unit.\",\"Rappel has a long cooldown. Elise is vulnerable after she has used it.\"],\"tags\":[\"Mage\",\"Fighter\"],\"partype\":\"Mana\",\"info\":{\"attack\":6,\"defense\":5,\"magic\":7,\"difficulty\":9},\"stats\":{\"hp\":650,\"hpperlevel\":109,\"mp\":324,\"mpperlevel\":50,\"movespeed\":330,\"armor\":30,\"armorperlevel\":5.2,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":550,\"hpregen\":5.5,\"hpregenperlevel\":0.6,\"mpregen\":6,\"mpregenperlevel\":0.8,\"crit\":0,\"critperlevel\":0,\"attackdamage\":55,\"attackdamageperlevel\":3,\"attackspeedperlevel\":1.75,\"attackspeed\":0.625},\"spells\":[{\"id\":\"EliseHumanQ\",\"name\":\"Neurotoxin / Venomous Bite\",\"description\":\"Human Form: Deals damage based upon how high the target's Health is.<br><br>Spider Form: Lunges at an enemy and deals damage based upon how low their Health is.\",\"tooltip\":\"<keywordMajor>Human Form</keywordMajor>: Elise injects neurotoxin, dealing <magicDamage>{{ e1 }} plus {{ humanpercenthealth }} current Health magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Neurotoxin Damage\",\"Venomous Bite Damage\",\"Monster Damage Cap\",\"Mana Cost (Neurotoxin)\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ e5 }} -> {{ e5NL }}\",\"{{ e2 }} -> {{ e2NL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[6,6,6,6,6],\"cooldownBurn\":\"6\",\"cost\":[80,85,90,95,100],\"costBurn\":\"80/85/90/95/100\",\"datavalues\":{},\"effect\":[null,[40,75,110,145,180],[75,100,125,150,175],[15,20,25,30,35],[36,42,48,54,60],[60,90,120,150,180],[4,4,4,4,4],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"40/75/110/145/180\",\"75/100/125/150/175\",\"15/20/25/30/35\",\"36/42/48/54/60\",\"60/90/120/150/180\",\"4\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[615,615,615,615,615],\"rangeBurn\":\"615\",\"image\":{\"full\":\"EliseHumanQ.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":288,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EliseHumanW\",\"name\":\"Volatile Spiderling / Skittering Frenzy\",\"description\":\"Human Form: Releases a venom-gorged Spiderling that explodes when it nears a target.<br><br>Spider Form: Elise and her Spiderlings gain Attack Speed.\",\"tooltip\":\"<keywordMajor>Human Form</keywordMajor>: Elise summons an explosive spider that moves to a location and explodes when it nears an enemy or after 3 seconds. The spider deals <magicDamage>{{ spell.elisehumanw:totalspiderdamage }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e3 }} -> {{ e3NL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[12,12,12,12,12],\"cooldownBurn\":\"12\",\"cost\":[60,70,80,90,100],\"costBurn\":\"60/70/80/90/100\",\"datavalues\":{},\"effect\":[null,[4,4,4,4,4],[60,80,100,120,140],[60,105,150,195,240],[3,3,3,3,3],[65,75,85,95,105],[275,275,275,275,275],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"4\",\"60/80/100/120/140\",\"60/105/150/195/240\",\"3\",\"65/75/85/95/105\",\"275\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[950,950,950,950,950],\"rangeBurn\":\"950\",\"image\":{\"full\":\"EliseHumanW.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":336,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EliseHumanE\",\"name\":\"Cocoon / Rappel\",\"description\":\"Human Form: Stuns the first enemy unit hit and reveals them if they are not stealthed.<br><br>Spider Form: Elise and her Spiderlings ascend into the air and then descend upon target enemy. After descending on an enemy target, Elise's bonus damage and healing from Spider Queen is increased.\",\"tooltip\":\"<keywordMajor>Human Form</keywordMajor>: Elise fires a cocoon, <status>Stunning</status> and revealing the first enemy hit for {{ e5 }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Stun Duration\",\"Cooldown (Cocoon)\",\"Cooldown (Rappel)\",\"Damage and Healing Increase\"],\"effect\":[\"{{ e5 }} -> {{ e5NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ e3 }} -> {{ e3NL }}\",\"{{ effect6amount*100.000000 }}% -> {{ effect6amountnl*100.000000 }}%\"]},\"maxrank\":5,\"cooldown\":[12,11.5,11,10.5,10],\"cooldownBurn\":\"12/11.5/11/10.5/10\",\"cost\":[50,50,50,50,50],\"costBurn\":\"50\",\"datavalues\":{},\"effect\":[null,[12,11.5,11,10.5,10],[15,20,25,30,35],[22,21,20,19,18],[2,2,2,2,2],[1.6,1.7,1.8,1.9,2],[40,55,70,85,100],[250,250,250,250,250],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"12/11.5/11/10.5/10\",\"15/20/25/30/35\",\"22/21/20/19/18\",\"2\",\"1.6/1.7/1.8/1.9/2\",\"40/55/70/85/100\",\"250\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1075,1075,1075,1075,1075],\"rangeBurn\":\"1075\",\"image\":{\"full\":\"EliseHumanE.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":384,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EliseR\",\"name\":\"Spider Form\",\"description\":\"Transforms into a menacing spider, reducing her attack range in exchange for Move Speed, new abilities, and a Spiderling swarm that will attack her foes.\",\"tooltip\":\"<keywordMajor>Human Form</keywordMajor>: Elise transforms into a menacing spider, becoming melee ranged, and gaining <speed>{{ e3 }} Move Speed</speed> and access to <keywordMajor>Spider Form</keywordMajor> Abilities. She also summons all dormant <keywordMajor>Spiderlings</keywordMajor>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Spider Form Bite Damage\",\"Spiderling Bonus Damage\",\"Maximum Number of Spiderlings\",\"Spiderling Armor\",\"Spiderling Magic Resist\"],\"effect\":[\"{{ e2 }} -> {{ e2NL }}\",\"{{ e1 }} -> {{ e1NL }}\",\"{{ e5 }} -> {{ e5NL }}\",\"{{ e6 }} -> {{ e6NL }}\",\"{{ e7 }} -> {{ e7NL }}\"]},\"maxrank\":4,\"cooldown\":[4,4,4,4],\"cooldownBurn\":\"4\",\"cost\":[0,0,0,0],\"costBurn\":\"0\",\"datavalues\":{},\"effect\":[null,[8,14,20,26],[10,20,30,40],[25,25,25,25],[25,25,25,25],[2,3,4,5],[30,50,70,90],[50,70,90,110],[4,6,8,10],[0.08,0.08,0.08,0.08],[0,0,0,0]],\"effectBurn\":[null,\"8/14/20/26\",\"10/20/30/40\",\"25\",\"25\",\"2/3/4/5\",\"30/50/70/90\",\"50/70/90/110\",\"4/6/8/10\",\"0.08\",\"0\"],\"vars\":[],\"costType\":\"No Cost\",\"maxammo\":\"-1\",\"range\":[20,20,20,20],\"rangeBurn\":\"20\",\"image\":{\"full\":\"EliseR.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":432,\"y\":0,\"w\":48,\"h\":48},\"resource\":\"No Cost\"}],\"passive\":{\"name\":\"Spider Queen\",\"description\":\"Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling.<br><br>Spider Form: Basic attacks deal bonus magic damage and restore health to Elise.\",\"image\":{\"full\":\"ElisePassive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":336,\"y\":96,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly...",
    "lore": "Elise is a deadly predator who dwells in a shuttered, lightless palace, deep within the oldest city of Noxus. Once mortal, she was the mistress of a powerful house, but the bite of a vile demigod transformed her into something beautiful, yet utterly inhuman—a spider-like creature, drawing unsuspecting prey into her web. To maintain her eternal youth, Elise now prefers to feed upon the naive and the faithless, and there are few who can resist her seductions.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Elise.png",
    "champion_name": "Elise",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg",
    "champion_title": "the Spider Queen",
    "recommended_lanes": [],
    "recommended_roles": [
        "Mage",
        "Fighter"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/elise/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/elise/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/elise",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg"
        },
        {
            "name": "Death Blossom Elise",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_1.jpg"
        },
        {
            "name": "Victorious Elise",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_2.jpg"
        },
        {
            "name": "Blood Moon Elise",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_3.jpg"
        },
        {
            "name": "SKT T1 Elise",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_4.jpg"
        },
        {
            "name": "Super Galaxy Elise",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_5.jpg"
        },
        {
            "name": "Bewitching Elise",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_6.jpg"
        },
        {
            "name": "Withered Rose Elise",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_15.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling.\n\nSpider Form: Basic attacks deal bonus magic damage and restore health to Elise.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/ElisePassive.png",
        "champion_passive_name": "Spider Queen",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Human Form: Deals damage based upon how high the target's Health is.\n\nSpider Form: Lunges at an enemy and deals damage based upon how low their Health is.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EliseHumanQ.png",
        "champion_q_name": "Neurotoxin / Venomous Bite",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Human Form: Releases a venom-gorged Spiderling that explodes when it nears a target.\n\nSpider Form: Elise and her Spiderlings gain Attack Speed.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EliseHumanW.png",
        "champion_w_name": "Volatile Spiderling / Skittering Frenzy",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Human Form: Stuns the first enemy unit hit and reveals them if they are not stealthed.\n\nSpider Form: Elise and her Spiderlings ascend into the air and then descend upon target enemy. After descending on an enemy target, Elise's bonus damage and healing from Spider Queen is increased.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EliseHumanE.png",
        "champion_e_name": "Cocoon / Rappel",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Transforms into a menacing spider, reducing her attack range in exchange for Move Speed, new abilities, and a Spiderling swarm that will attack her foes.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EliseR.png",
        "champion_r_name": "Spider Form",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0060/ability_0060_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "bltfdc8a0a29298a7d8",
    "url": "/champions/evelynn/",
    "data_dragon_id": "Evelynn",
    "data_dragon_json": "{\"id\":\"Evelynn\",\"key\":\"28\",\"name\":\"Evelynn\",\"title\":\"Agony's Embrace\",\"image\":{\"full\":\"Evelynn.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":384,\"y\":96,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"28000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"28001\",\"num\":1,\"name\":\"Shadow Evelynn\",\"chromas\":false},{\"id\":\"28002\",\"num\":2,\"name\":\"Masquerade Evelynn\",\"chromas\":false},{\"id\":\"28003\",\"num\":3,\"name\":\"Tango Evelynn\",\"chromas\":false},{\"id\":\"28004\",\"num\":4,\"name\":\"Safecracker Evelynn\",\"chromas\":false},{\"id\":\"28005\",\"num\":5,\"name\":\"Blood Moon Evelynn\",\"chromas\":false},{\"id\":\"28006\",\"num\":6,\"name\":\"K/DA Evelynn\",\"chromas\":false},{\"id\":\"28007\",\"num\":7,\"name\":\"Prestige K/DA Evelynn\",\"chromas\":false},{\"id\":\"28008\",\"num\":8,\"name\":\"Sugar Rush Evelynn\",\"chromas\":true},{\"id\":\"28015\",\"num\":15,\"name\":\"K/DA ALL OUT Evelynn\",\"chromas\":true},{\"id\":\"28024\",\"num\":24,\"name\":\"Coven Evelynn\",\"chromas\":true},{\"id\":\"28031\",\"num\":31,\"name\":\"Prestige K/DA Evelynn (2022)\",\"chromas\":false},{\"id\":\"28032\",\"num\":32,\"name\":\"Spirit Blossom Evelynn\",\"chromas\":true}],\"lore\":\"Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn's true form is unleashed. She then subjects her victim to unspeakable torment, gratifying herself with their pain. To the demon, these liaisons are innocent flings. To the rest of Runeterra, they are ghoulish tales of lust gone awry and horrific reminders of the cost of wanton desire.\",\"blurb\":\"Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn's true form is unleashed. She then subjects her victim...\",\"allytips\":[\"Allure's arm time might seem long, but the Charm and magic resist shred put Evelynn at an exteme advantage so are worth the wait.\",\"While stealthed, pay attention to when you are (near) being detected by enemy champions. This is identified by the glowing yellow and red eyes over nearby enemy champions.\",\"If at low health, you can take advantage of Demon Shade's healing and Camouflage to return to the fight and surprise opponents.\"],\"enemytips\":[\"Purchasing Vision Wards can help you detect Evelynn's location in order to prepare for her ambushes.\",\"A large share of Evelynn's threat is in her charm, 'Allure.' Protect allies marked with 'Allure' or, if you are marked, make sure allies are between you and where Evelynn may attack from.\",\"If you suspect Evelynn is about to ambush one of your teammates, let them know by pinging the minimap and typing in chat.\"],\"tags\":[\"Assassin\",\"Mage\"],\"partype\":\"Mana\",\"info\":{\"attack\":4,\"defense\":2,\"magic\":7,\"difficulty\":10},\"stats\":{\"hp\":642,\"hpperlevel\":98,\"mp\":315,\"mpperlevel\":42,\"movespeed\":335,\"armor\":37,\"armorperlevel\":4.7,\"spellblock\":32,\"spellblockperlevel\":2.05,\"attackrange\":125,\"hpregen\":8.5,\"hpregenperlevel\":0.75,\"mpregen\":8.11,\"mpregenperlevel\":0.6,\"crit\":0,\"critperlevel\":0,\"attackdamage\":61,\"attackdamageperlevel\":3,\"attackspeedperlevel\":2.1,\"attackspeed\":0.667},\"spells\":[{\"id\":\"EvelynnQ\",\"name\":\"Hate Spike\",\"description\":\"Evelynn strikes out with her Lasher, dealing damage to the first unit hit. Then, Evelynn can shoot a line of spikes at nearby foes up to 3 times.\",\"tooltip\":\"Evelynn strikes with her Lasher, dealing <magicDamage>{{ missiledamagetooltip }} magic damage</magicDamage> to the first enemy hit and causing Evelynn's next 3 Attacks or Abilities on that unit to deal an additional <magicDamage>{{ totalbonusdamagetooltip }} magic damage</magicDamage>. Evelynn can <recast>Recast</recast> this Ability up to 3 times.<br /><br /><recast>Recast:</recast> Evelynn fires spikes through the nearest enemy, dealing <magicDamage>{{ missiledamagetooltip }} magic damage</magicDamage> to all enemies hit.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Lasher and Spike Damage\",\"Bonus Damage\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e5 }} -> {{ e5NL }}\",\"{{ e4 }} -> {{ e4NL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[4,4,4,4,4],\"cooldownBurn\":\"4\",\"cost\":[40,45,50,55,60],\"costBurn\":\"40/45/50/55/60\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[30,30,30,30,30],[60,60,60,60,60],[15,25,35,45,55],[25,30,35,40,45],[6,6,6,6,6],[30,30,30,30,30],[50,50,50,50,50],[4,4,4,4,4],[-0.25,-0.25,-0.25,-0.25,-0.25]],\"effectBurn\":[null,\"0\",\"30\",\"60\",\"15/25/35/45/55\",\"25/30/35/40/45\",\"6\",\"30\",\"50\",\"4\",\"-0.25\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[800,800,800,800,800],\"rangeBurn\":\"800\",\"image\":{\"full\":\"EvelynnQ.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":0,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EvelynnW\",\"name\":\"Allure\",\"description\":\"Evelynn curses her target, causing her next attack or spell after a delay to charm her target and reduce their magic resist.\",\"tooltip\":\"Evelynn marks a champion or monster for 5 seconds. If Evelynn hits the target with an Attack or Ability, she will expunge the mark, refund its cost, and <status>Slow</status> the target by {{ slowamount*100 }}% for {{ slowduration }} seconds.<br /><br />If the mark lasts at least 2.5 seconds, expunging it has extra effects:<li>Against champions: <status>Charms</status> them for {{ charmduration }} second(s) and removes <scaleMR>{{ mrshred*100 }}% Magic Resist</scaleMR> for {{ shredduration }} seconds.<li>Against monsters: <status>Charms</status> them for {{ monstercharm }} seconds and deals <magicDamage>{{ monsterdamagetotaltooltip }} magic damage</magicDamage>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Charm Duration\",\"Monster Charm Duration\",\"Magic Resist Shred\",\"Monster Damage\",\"Cooldown\",\"Range\"],\"effect\":[\"{{ e2 }} -> {{ e2NL }}\",\"{{ monstercharm }} -> {{ monstercharmNL }}\",\"{{ effect9amount*100.000000 }}% -> {{ effect9amountnl*100.000000 }}%\",\"{{ e7 }} -> {{ e7NL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ castrange }} -> {{ castrangeNL }}\"]},\"maxrank\":5,\"cooldown\":[15,14,13,12,11],\"cooldownBurn\":\"15/14/13/12/11\",\"cost\":[60,70,80,90,100],\"costBurn\":\"60/70/80/90/100\",\"datavalues\":{},\"effect\":[null,[2,2,2,2,2],[1.25,1.5,1.75,2,2.25],[-0.65,-0.65,-0.65,-0.65,-0.65],[15,14,13,12,11],[5,5,5,5,5],[1.5,1.5,1.5,1.5,1.5],[250,300,350,400,450],[0.75,0.75,0.75,0.75,0.75],[0.35,0.375,0.4,0.425,0.45],[4,4,4,4,4]],\"effectBurn\":[null,\"2\",\"1.25/1.5/1.75/2/2.25\",\"-0.65\",\"15/14/13/12/11\",\"5\",\"1.5\",\"250/300/350/400/450\",\"0.75\",\"0.35/0.375/0.4/0.425/0.45\",\"4\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1200,1300,1400,1500,1600],\"rangeBurn\":\"1200/1300/1400/1500/1600\",\"image\":{\"full\":\"EvelynnW.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":48,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EvelynnE\",\"name\":\"Whiplash\",\"description\":\"Evelynn whips her target with her Lasher, dealing damage. She then gains Move Speed for a short duration.\",\"tooltip\":\"Evelynn whips an enemy, dealing <magicDamage>{{ basedamage }} plus {{ percenthealthbasetooltip }} max Health magic damage</magicDamage>. Evelynn gains <speed>{{ speedamount*100 }}% Move Speed</speed> for {{ speedduration }} seconds.<br /><br />Entering <keywordMajor>Demon Shade</keywordMajor> refreshes this Ability's cooldown and empowers it. When this Ability is empowered, Evelynn dashes to the target and deals <magicDamage>{{ empowereddamage }} plus {{ percenthealthempoweredtooltip }} max Health magic damage</magicDamage> to her target and everyone she passes through instead.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Empowered Damage\",\"@AbilityResourceName@ Cost\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ e2 }} -> {{ e2NL }}\",\"{{ cost }} -> {{ costNL }}\"]},\"maxrank\":5,\"cooldown\":[8,8,8,8,8],\"cooldownBurn\":\"8\",\"cost\":[40,45,50,55,60],\"costBurn\":\"40/45/50/55/60\",\"datavalues\":{},\"effect\":[null,[55,70,85,100,115],[75,100,125,150,175],[0.3,0.3,0.3,0.3,0.3],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[450,450,450,450,450],[0.8,0.85,0.9,0.95,1],[2,2,2,2,2],[1.3,1.35,1.4,1.45,1.5]],\"effectBurn\":[null,\"55/70/85/100/115\",\"75/100/125/150/175\",\"0.3\",\"2\",\"3\",\"4\",\"450\",\"0.8/0.85/0.9/0.95/1\",\"2\",\"1.3/1.35/1.4/1.45/1.5\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[210,210,210,210,210],\"rangeBurn\":\"210\",\"image\":{\"full\":\"EvelynnE.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":96,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EvelynnR\",\"name\":\"Last Caress\",\"description\":\"Evelynn briefly goes untargetable and decimates the area in front of her before warping backwards a long distance.\",\"tooltip\":\"Evelynn unleashes her demonic energy, dealing heavy damage, becoming Untargetable and teleporting backwards. She deals <magicDamage>{{ damage }} magic damage</magicDamage>, increased to <magicDamage>{{ critdamage }}</magicDamage> against enemies below <healing>30% Health</healing>. Upon cast, set Demon Shade to a 1.25 second cooldown.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Empowered Damage\",\"Cooldown\"],\"effect\":[\"{{ e1 }} -> {{ e1NL }}\",\"{{ effect1amount*2.400000 }} -> {{ effect1amountnl*2.400000 }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[120,100,80],\"cooldownBurn\":\"120/100/80\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[125,250,375],[1.4,1.4,1.4],[2.5,2.5,2.5],[150,225,300],[3,3,3],[5,4,3],[0.3,0.3,0.3],[700,700,700],[30,45,60],[0,0,0]],\"effectBurn\":[null,\"125/250/375\",\"1.4\",\"2.5\",\"150/225/300\",\"3\",\"5/4/3\",\"0.3\",\"700\",\"30/45/60\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[25000,25000,25000],\"rangeBurn\":\"25000\",\"image\":{\"full\":\"EvelynnR.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":144,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Demon Shade\",\"description\":\"When out of combat, Evelynn enters Demon Shade. Demon Shade heals Evelynn when she is low on health and grants Camouflage after level 6.\",\"image\":{\"full\":\"Evelynn_Passive.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":384,\"y\":96,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn's true form is unleashed. She then subjects her victim...",
    "lore": "Within the dark seams of Runeterra, the demon Evelynn searches for her next victim. She lures in prey with the voluptuous façade of a human female, but once a person succumbs to her charms, Evelynn's true form is unleashed. She then subjects her victim to unspeakable torment, gratifying herself with their pain. To the demon, these liaisons are innocent flings. To the rest of Runeterra, they are ghoulish tales of lust gone awry and horrific reminders of the cost of wanton desire.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Evelynn.png",
    "champion_name": "Evelynn",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
    "champion_title": "Agony's Embrace",
    "recommended_lanes": [],
    "recommended_roles": [
        "Assassin",
        "Mage"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/evelynn/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/evelynn/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/evelynn",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg"
        },
        {
            "name": "Shadow Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_1.jpg"
        },
        {
            "name": "Masquerade Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_2.jpg"
        },
        {
            "name": "Tango Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_3.jpg"
        },
        {
            "name": "Safecracker Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_4.jpg"
        },
        {
            "name": "Blood Moon Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_5.jpg"
        },
        {
            "name": "K/DA Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_6.jpg"
        },
        {
            "name": "Prestige K/DA Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_7.jpg"
        },
        {
            "name": "Sugar Rush Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_8.jpg"
        },
        {
            "name": "K/DA ALL OUT Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_15.jpg"
        },
        {
            "name": "Coven Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_24.jpg"
        },
        {
            "name": "Prestige K/DA Evelynn (2022)",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_31.jpg"
        },
        {
            "name": "Spirit Blossom Evelynn",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_32.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "When out of combat, Evelynn enters Demon Shade. Demon Shade heals Evelynn when she is low on health and grants Camouflage after level 6.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Evelynn_Passive.png",
        "champion_passive_name": "Demon Shade",
        "champion_passive_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_P1.mp4",
        "champion_passive_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_P1.jpg",
        "champion_passive_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_P1.webm"
    },
    "champion_q": {
        "champion_q_description": "Evelynn strikes out with her Lasher, dealing damage to the first unit hit. Then, Evelynn can shoot a line of spikes at nearby foes up to 3 times.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EvelynnQ.png",
        "champion_q_name": "Hate Spike",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Evelynn curses her target, causing her next attack or spell after a delay to charm her target and reduce their magic resist.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EvelynnW.png",
        "champion_w_name": "Allure",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Evelynn whips her target with her Lasher, dealing damage. She then gains Move Speed for a short duration.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EvelynnE.png",
        "champion_e_name": "Whiplash",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Evelynn briefly goes untargetable and decimates the area in front of her before warping backwards a long distance.",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EvelynnR.png",
        "champion_r_name": "Last Caress",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0028/ability_0028_R1.webm"
    },
    "related_champions": []
  },
  {
    "publish_details": {
        "locale": "en-us"
    },
    "uid": "blt7039d8c8a3936405",
    "url": "/champions/ezreal/",
    "data_dragon_id": "Ezreal",
    "data_dragon_json": "{\"id\":\"Ezreal\",\"key\":\"81\",\"name\":\"Ezreal\",\"title\":\"the Prodigal Explorer\",\"image\":{\"full\":\"Ezreal.png\",\"sprite\":\"champion0.png\",\"group\":\"champion\",\"x\":432,\"y\":96,\"w\":48,\"h\":48},\"skins\":[{\"id\":\"81000\",\"num\":0,\"name\":\"default\",\"chromas\":false},{\"id\":\"81001\",\"num\":1,\"name\":\"Nottingham Ezreal\",\"chromas\":false},{\"id\":\"81002\",\"num\":2,\"name\":\"Striker Ezreal\",\"chromas\":false},{\"id\":\"81003\",\"num\":3,\"name\":\"Frosted Ezreal\",\"chromas\":false},{\"id\":\"81004\",\"num\":4,\"name\":\"Explorer Ezreal\",\"chromas\":false},{\"id\":\"81005\",\"num\":5,\"name\":\"Pulsefire Ezreal\",\"chromas\":false},{\"id\":\"81006\",\"num\":6,\"name\":\"TPA Ezreal\",\"chromas\":false},{\"id\":\"81007\",\"num\":7,\"name\":\"Debonair Ezreal\",\"chromas\":true},{\"id\":\"81008\",\"num\":8,\"name\":\"Ace of Spades Ezreal\",\"chromas\":false},{\"id\":\"81009\",\"num\":9,\"name\":\"Arcade Ezreal\",\"chromas\":false},{\"id\":\"81018\",\"num\":18,\"name\":\"Star Guardian Ezreal\",\"chromas\":false},{\"id\":\"81019\",\"num\":19,\"name\":\"SSG Ezreal\",\"chromas\":false},{\"id\":\"81020\",\"num\":20,\"name\":\"Pajama Guardian Ezreal\",\"chromas\":false},{\"id\":\"81021\",\"num\":21,\"name\":\"Battle Academia Ezreal\",\"chromas\":true},{\"id\":\"81022\",\"num\":22,\"name\":\"PsyOps Ezreal\",\"chromas\":false},{\"id\":\"81023\",\"num\":23,\"name\":\"Prestige PsyOps Ezreal\",\"chromas\":false},{\"id\":\"81025\",\"num\":25,\"name\":\"Porcelain Protector Ezreal\",\"chromas\":false},{\"id\":\"81033\",\"num\":33,\"name\":\"Faerie Court Ezreal\",\"chromas\":false}],\"lore\":\"A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way out of any situation, relying partially on his wits, but mostly on his mystical Shuriman gauntlet, which he uses to unleash devastating arcane blasts. One thing is for sure—whenever Ezreal is around, trouble isn't too far behind. Or ahead. Probably everywhere.\",\"blurb\":\"A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way...\",\"allytips\":[\"Use Arcane Shift to help line up your other skill shots.\",\"You can play Ezreal either as a Attack Damage carry or Ability Power carry depending on how you build him.\",\"You can line up Trueshot Barrage to hit multiple minion waves or even Monsters.\"],\"enemytips\":[\"Ezreal is a very fragile champion so take the fight to him.\",\"Ezreal is completely skill shot based, so make sure to keep minions in between you.\",\"Mystic Shot applies on-hit effects including the Crest of Cinders.\"],\"tags\":[\"Marksman\",\"Mage\"],\"partype\":\"Mana\",\"info\":{\"attack\":7,\"defense\":2,\"magic\":6,\"difficulty\":7},\"stats\":{\"hp\":600,\"hpperlevel\":102,\"mp\":375,\"mpperlevel\":70,\"movespeed\":325,\"armor\":24,\"armorperlevel\":4.7,\"spellblock\":30,\"spellblockperlevel\":1.3,\"attackrange\":550,\"hpregen\":4,\"hpregenperlevel\":0.65,\"mpregen\":8.5,\"mpregenperlevel\":1,\"crit\":0,\"critperlevel\":0,\"attackdamage\":62,\"attackdamageperlevel\":2.5,\"attackspeedperlevel\":2.5,\"attackspeed\":0.625},\"spells\":[{\"id\":\"EzrealQ\",\"name\":\"Mystic Shot\",\"description\":\"Ezreal fires a damaging bolt of energy which reduces all of his cooldowns slightly if it strikes an enemy unit.\",\"tooltip\":\"Ezreal fires a bolt of energy, dealing <physicalDamage>{{ damage }} physical damage</physicalDamage> to the first enemy hit and reducing his Ability Cooldowns by {{ cdrefund }} seconds.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"@AbilityResourceName@ Cost\",\"Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ cost }} -> {{ costNL }}\",\"{{ basedamage }} -> {{ basedamageNL }}\"]},\"maxrank\":5,\"cooldown\":[5.5,5.25,5,4.75,4.5],\"cooldownBurn\":\"5.5/5.25/5/4.75/4.5\",\"cost\":[28,31,34,37,40],\"costBurn\":\"28/31/34/37/40\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1150,1150,1150,1150,1150],\"rangeBurn\":\"1150\",\"image\":{\"full\":\"EzrealQ.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":192,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EzrealW\",\"name\":\"Essence Flux\",\"description\":\"Ezreal fires an orb that sticks to the first champion or objective hit. If Ezreal hits an enemy with the orb, it detonates and deals damage.\",\"tooltip\":\"Ezreal fires a magical orb that sticks to the first champion, structure, or epic jungle monster hit for {{ detonationtimeout }} seconds. If Ezreal hits that target with an Attack or Ability, it detonates, dealing <magicDamage>{{ damage }} magic damage</magicDamage>. Detonating with an Ability refunds the Mana cost of that Ability plus <scaleMana>{{ manareturn }} Mana</scaleMana>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Total AP Ratio\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ apratio*100.000000 }}% -> {{ aprationl*100.000000 }}%\"]},\"maxrank\":5,\"cooldown\":[12,12,12,12,12],\"cooldownBurn\":\"12\",\"cost\":[50,50,50,50,50],\"costBurn\":\"50\",\"datavalues\":{},\"effect\":[null,[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[1150,1150,1150,1150,1150],\"rangeBurn\":\"1150\",\"image\":{\"full\":\"EzrealW.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":240,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EzrealE\",\"name\":\"Arcane Shift\",\"description\":\"Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit. Prioritizes enemies stuck with Essence Flux.\",\"tooltip\":\"Ezreal teleports then fires a bolt at the nearest enemy, dealing <magicDamage>{{ damage }} magic damage</magicDamage>. The bolt prioritizes enemies affected by <spellName>Essence Flux</spellName>.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Cooldown\",\"Damage\"],\"effect\":[\"{{ cooldown }} -> {{ cooldownNL }}\",\"{{ e1 }} -> {{ e1NL }}\"]},\"maxrank\":5,\"cooldown\":[26,23,20,17,14],\"cooldownBurn\":\"26/23/20/17/14\",\"cost\":[90,90,90,90,90],\"costBurn\":\"90\",\"datavalues\":{},\"effect\":[null,[80,130,180,230,280],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],\"effectBurn\":[null,\"80/130/180/230/280\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[475,475,475,475,475],\"rangeBurn\":\"475\",\"image\":{\"full\":\"EzrealE.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":288,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"},{\"id\":\"EzrealR\",\"name\":\"Trueshot Barrage\",\"description\":\"Ezreal winds up before firing a powerful barrage of energy that deals massive damage to each unit it passes through (damage is reduced for minions and non-epic monsters).\",\"tooltip\":\"Ezreal fires a massive energy arc that deals <magicDamage>{{ damage }} magic damage</magicDamage>. The arc deals {{ damagereductionwaveclear.0*100 }}% damage to minions and non-epic jungle monsters.{{ spellmodifierdescriptionappend }}\",\"leveltip\":{\"label\":[\"Damage\",\"Cooldown\"],\"effect\":[\"{{ basedamage }} -> {{ basedamageNL }}\",\"{{ cooldown }} -> {{ cooldownNL }}\"]},\"maxrank\":3,\"cooldown\":[120,105,90],\"cooldownBurn\":\"120/105/90\",\"cost\":[100,100,100],\"costBurn\":\"100\",\"datavalues\":{},\"effect\":[null,[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"effectBurn\":[null,\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\",\"0\"],\"vars\":[],\"costType\":\" {{ abilityresourcename }}\",\"maxammo\":\"-1\",\"range\":[25000,25000,25000],\"rangeBurn\":\"25000\",\"image\":{\"full\":\"EzrealR.png\",\"sprite\":\"spell3.png\",\"group\":\"spell\",\"x\":336,\"y\":48,\"w\":48,\"h\":48},\"resource\":\"{{ cost }} {{ abilityresourcename }}\"}],\"passive\":{\"name\":\"Rising Spell Force\",\"description\":\"Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times.\",\"image\":{\"full\":\"Ezreal_RisingSpellForce.png\",\"sprite\":\"passive0.png\",\"group\":\"passive\",\"x\":432,\"y\":96,\"w\":48,\"h\":48}},\"recommended\":[]}",
    "champion_blurb": "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way...",
    "lore": "A dashing adventurer, unknowingly gifted in the magical arts, Ezreal raids long-lost catacombs, tangles with ancient curses, and overcomes seemingly impossible odds with ease. His courage and bravado knowing no bounds, he prefers to improvise his way out of any situation, relying partially on his wits, but mostly on his mystical Shuriman gauntlet, which he uses to unleash devastating arcane blasts. One thing is for sure—whenever Ezreal is around, trouble isn't too far behind. Or ahead. Probably everywhere.",
    "champion_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Ezreal.png",
    "champion_name": "Ezreal",
    "champion_splash": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
    "champion_title": "the Prodigal Explorer",
    "recommended_lanes": [],
    "recommended_roles": [
        "Marksman",
        "Mage"
    ],
    "links": [
        {
            "href": "https://na.op.gg/champion/ezreal/statistics/",
            "title": "OP.GG"
        },
        {
            "href": "https://u.gg/lol/champions/ezreal/build",
            "title": "U.GG"
        },
        {
            "href": "https://www.probuilds.net/champions/details/ezreal",
            "title": "probuilds.net"
        }
    ],
    "champion": {
        "modular_blocks": []
    },
    "skins": [
        {
            "name": "default",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg"
        },
        {
            "name": "Nottingham Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_1.jpg"
        },
        {
            "name": "Striker Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_2.jpg"
        },
        {
            "name": "Frosted Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_3.jpg"
        },
        {
            "name": "Explorer Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_4.jpg"
        },
        {
            "name": "Pulsefire Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_5.jpg"
        },
        {
            "name": "TPA Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_6.jpg"
        },
        {
            "name": "Debonair Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_7.jpg"
        },
        {
            "name": "Ace of Spades Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_8.jpg"
        },
        {
            "name": "Arcade Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_9.jpg"
        },
        {
            "name": "Star Guardian Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_18.jpg"
        },
        {
            "name": "SSG Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_19.jpg"
        },
        {
            "name": "Pajama Guardian Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_20.jpg"
        },
        {
            "name": "Battle Academia Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_21.jpg"
        },
        {
            "name": "PsyOps Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_22.jpg"
        },
        {
            "name": "Prestige PsyOps Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_23.jpg"
        },
        {
            "name": "Porcelain Protector Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_25.jpg"
        },
        {
            "name": "Faerie Court Ezreal",
            "imageUrl": "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_33.jpg"
        }
    ],
    "champion_passive": {
        "champion_passive_description": "Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times.",
        "champion_passive_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Ezreal_RisingSpellForce.png",
        "champion_passive_name": "Rising Spell Force",
        "champion_passive_video_mp4": "",
        "champion_passive_video_poster": "",
        "champion_passive_video_webm": ""
    },
    "champion_q": {
        "champion_q_description": "Ezreal fires a damaging bolt of energy which reduces all of his cooldowns slightly if it strikes an enemy unit.",
        "champion_q_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EzrealQ.png",
        "champion_q_name": "Mystic Shot",
        "champion_q_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_Q1.mp4",
        "champion_q_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_Q1.jpg",
        "champion_q_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_Q1.webm"
    },
    "champion_w": {
        "champion_w_description": "Ezreal fires an orb that sticks to the first champion or objective hit. If Ezreal hits an enemy with the orb, it detonates and deals damage.",
        "champion_w_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EzrealW.png",
        "champion_w_name": "Essence Flux",
        "champion_w_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_W1.mp4",
        "champion_w_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_W1.jpg",
        "champion_w_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_W1.webm"
    },
    "champion_e": {
        "champion_e_description": "Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit. Prioritizes enemies stuck with Essence Flux.",
        "champion_e_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EzrealE.png",
        "champion_e_name": "Arcane Shift",
        "champion_e_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_E1.mp4",
        "champion_e_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_E1.jpg",
        "champion_e_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_E1.webm"
    },
    "champion_r": {
        "champion_r_description": "Ezreal winds up before firing a powerful barrage of energy that deals massive damage to each unit it passes through (damage is reduced for minions and non-epic monsters).",
        "champion_r_icon": "https://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/EzrealR.png",
        "champion_r_name": "Trueshot Barrage",
        "champion_r_video_mp4": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_R1.mp4",
        "champion_r_video_poster": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_R1.jpg",
        "champion_r_video_webm": "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0081/ability_0081_R1.webm"
    },
    "related_champions": []
  }
];

export default championsData;