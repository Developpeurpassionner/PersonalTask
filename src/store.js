import { createStore } from 'vuex';
import { Storage } from '@ionic/storage';
const storage = new Storage();
storage.create();

const store = createStore({
    state() {
      return {
        tabs: []
      };
    },
    mutations: {
      setTabs(state, tabs) {
        state.tabs = tabs;
      },
      addTabs(state, tab) {
        state.tabs.push(tab);
      }
    },
    actions: {
      async loadTasks({ commit }) {
        const tabs = await storage.get('tabs');
        if (tabs) {
          commit('setTabs', tabs);
        }
      },
      async saveTasks({ state }) {
        await storage.set('tabs', state.tabs);
      }
    }
  });  
  export default store;