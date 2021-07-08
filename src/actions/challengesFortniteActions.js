import { 
    DOWNLOAD_CHALLENGES, 
    DOWNLOAD_CHALLENGES_COMPLETE, 
    DOWNLOAD_CHALLENGES_ERROR,
    MARK_CHALLENGE_SELECTED,
    UPDATE_CHALLENGE_SELECTED
 } from '../types';

import axios from 'axios';
import {orderInfoByBundleChallenges} from "../components/tools/orderInfo";

export function getChallengesFortniteAction () {
    return async (dispatch) => {
        dispatch(downloadChallengesFortnite());
        try {
            const url = process.env.REACT_APP_URL_BATTLEPASS_CHALLENGES;
            await axios.get(url, {
                headers: {
                    'Authorization': process.env.REACT_APP_AUTHORIZATION_KEY
                }
            }).then( challengesBattlePassList => {
                const response = orderInfoByBundleChallenges(challengesBattlePassList.data.bundles);
                dispatch(downloadChallengesFortniteComplete(response));
            });
        } catch (error) {
            dispatch(downloadChallengesFortniteError());
        }
    }
}

const downloadChallengesFortnite = () => ({
    type: DOWNLOAD_CHALLENGES,
    payload: true
});

const downloadChallengesFortniteComplete = challengesFortnite => ({
    type: DOWNLOAD_CHALLENGES_COMPLETE,
    payload: challengesFortnite
});

const downloadChallengesFortniteError = () => ({
    type: DOWNLOAD_CHALLENGES_ERROR,
    payload: true
});

export function markChallengeSelectedAction (idListWeekChallenge) {
    return (dispatch) => {
        dispatch(markChallengeSelected(idListWeekChallenge));
    }
}

const markChallengeSelected = (idListWeekChallenge) => ({
    type: MARK_CHALLENGE_SELECTED,
    payload: idListWeekChallenge
});

export function updateChallengeSelectedAction (idChallenge) {
    return (dispatch) => {
        dispatch(updateChallengeSelected(idChallenge));
    }
}

const updateChallengeSelected = (idChallenge) => ({
    type: UPDATE_CHALLENGE_SELECTED,
    payload: idChallenge
});