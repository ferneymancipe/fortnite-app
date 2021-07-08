import { 
    DOWNLOAD_CHALLENGES, 
    DOWNLOAD_CHALLENGES_COMPLETE, 
    DOWNLOAD_CHALLENGES_ERROR,
    MARK_CHALLENGE_SELECTED,
    UPDATE_CHALLENGE_SELECTED
} from '../types';

const initialState = {
    challengesFortnite: [],
    error: false,
    loading: false,
    listSelected: null,
    weekSelected: null
}

export default function challengesFortniteReducer (state = initialState, action) {
    switch (action.type) {
        case DOWNLOAD_CHALLENGES:
            return {
                ...state,
                loading: action.payload
            }
        
        case DOWNLOAD_CHALLENGES_COMPLETE:
            return {
                ...state,
                loading: false,
                error: false,
                challengesFortnite: action.payload
            }

        case DOWNLOAD_CHALLENGES_ERROR:
            return  {
                ...state,
                loading: false,
                error: action.payload
            }

        case MARK_CHALLENGE_SELECTED:
            return {
                ...state,
                listSelected: action.payload.idList,
                weekSelected: action.payload.idWeek
            }

        case UPDATE_CHALLENGE_SELECTED:
            return {
                ...state,
                
                challengesFortnite: state.challengesFortnite.map((challengeList) => {
                    if (challengeList.id === state.listSelected) {
                        challengeList.challenges.map((listChallengesPerWeek) => {
                            if (listChallengesPerWeek.id === state.weekSelected) {
                                listChallengesPerWeek.quests.map((challenge) => {
                                    if (challenge.id === action.payload) {
                                        return challenge.status = !challenge.status;
                                    }
                                    return challenge;
                                })
                            }
                            return listChallengesPerWeek;
                        })
                    }
                    return challengeList;
                }) 
            }
        default:
            return state;
    }
}