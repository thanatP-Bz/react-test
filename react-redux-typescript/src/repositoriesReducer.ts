interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: ActionType.SEARCHREPOSITORIESACTION;
}

interface SearchRepositoriesSucessAction {
  type: ActionType.SEARCHREPOSITORIESSUCCESSACTION;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCHREPOSITORIESERRORACTION;
  payload: string;
}

enum ActionType {
  SEARCHREPOSITORIESACTION = "search_repositories",
  SEARCHREPOSITORIESSUCCESSACTION = "search_repositories_success",
  SEARCHREPOSITORIESERRORACTION = "search_repositories_error",
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSucessAction
  | SearchRepositoriesErrorAction;

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
