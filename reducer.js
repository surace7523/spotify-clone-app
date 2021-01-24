export const initialState = {

    user: null,
    playlists: [],
    playing: false,
    item: null,

    //remove the token(null) after developing to avoid authentication again
  //token: 'BQCV-wFclsf-8YRAa5hyG3qF5TF98-BIlM4LgW3cSerZqJeMGYpOF_i91Q_wrypJgj6yRmTP5LLlcxaqeAcLhNWWh5bzN0Gh7OSLVQ-3_bjHyceMwlWL8YnfnaUB-Yeg6CU40R2xZOXQuIFE4KnGXewrWmgPK03UTVJv5z5JX1SrYe9j',
};

const reducer = (state, action) => {


    console.log(action);


    switch(action.type) {

        case "SET_USER":

            return {

                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return {

                ...state,
                token: action.token,
            };

        case "SET_PLAYLISTS":
            return {

                ...state,
                palylists: action.playlists,
            };



        case "SET_DISCOVER_WEEKLY":

            return {

                ...state,
                discover_weekly: action.discover_weekly,
            };


        default:
            return state;
    }

}

export default reducer;