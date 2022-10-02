import { ActionType } from "../action-types";
import { Action } from "../actions";
import axios from "axios";

export const seachRepositories = (term: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCHREPOSITORIESACTION,
    });

    const { data } = await axios.get(
      "https://registery.npmjs.org/-/v1/search",
      {
        params: {
          text: term,
        },
      }
    );

    const names = data.objects.map((result: any) => {
      return result.package.name;
    });

    dispatch({
      type: ActionType.SEARCHREPOSITORIESSUCCESSACTION,
      payload: names,
    });

    try {
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCHREPOSITORIESERRORACTION,
        payload: error.message,
      });
    }
  };
};
