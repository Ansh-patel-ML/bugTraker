import store from "./store/store";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
store.dispatch(projectAdded({ description: "News Scrape" }));
store.dispatch(bugAdded({ description: "Ansh" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 1 }));
console.log(getUnresolvedBugs(store.getState()));
