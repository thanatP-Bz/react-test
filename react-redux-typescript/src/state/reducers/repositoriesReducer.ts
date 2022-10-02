import { ActionType } from "../action-types/index";
import { Action } from "../actions";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCHREPOSITORIESACTION:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCHREPOSITORIESSUCCESSACTION:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCHREPOSITORIESERRORACTION:
      return { loading: true, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default reducer;
