export const orderInfoByBundleChallenges = (challengesBattlePassList) => {
    const validChallengesSeason = [
        {
            id: "MissionBundle_S17_Week",
            name: "Misiones épicas de la semana",
            challenges: {}
        },
        {
            id: "QuestBundle_S17_Legendary_Week",
            name: "Misiones legendarias",
            challenges: {}
        },
        {
            id: "QuestBundle_S17_Emperor",
            name: "Misiones de Superman",
            challenges: {}
        },
        {
            id: "QuestBundle_Event_S17_CosmicSum",
            name: "Verano Cósmico",
            challenges: {}
        }
    ];
    const challengesOrder = challengesBattlePassList.reduce((accumulator, itemChallenge) => {
        const keyChallenge = validChallengesSeason.findIndex(validItemId => validItemId.id === itemChallenge.id.substring(0, itemChallenge.id.length-3));
        if (keyChallenge !== -1) {
            let nameIndexAccumulator = validChallengesSeason[keyChallenge].name;
            if (!accumulator[nameIndexAccumulator])
                accumulator[nameIndexAccumulator] = [];
            itemChallenge.quests.map((challenge) => challenge.status = false);
            accumulator[nameIndexAccumulator].push(itemChallenge);
        }
        return accumulator;
    }, []);

    validChallengesSeason.map((challengeList) => {
        return challengeList.challenges = challengesOrder[challengeList.name];
    });
    return validChallengesSeason;
}