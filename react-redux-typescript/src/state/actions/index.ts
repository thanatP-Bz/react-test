import { ActionType } from "../action-types/index";

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

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSucessAction
  | SearchRepositoriesErrorAction;
