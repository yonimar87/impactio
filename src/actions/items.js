import axios from 'axios';

export function itemsHaveError(bool) {
    return {
        type: 'ITEMS_HAVE_ERROR',
        hasError: bool
    };
}

export function itemsAreLoading(bool) {
    return {
        type: 'ITEMS_ARE_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        console.log('step 5: items fetched from the store to the client side 4')
        dispatch(itemsAreLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(itemsAreLoading(false));

                return response;
            })
            .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
            .catch(() => dispatch(itemsHaveError(true)));
    };
}
