import axios from "axios";
const API_URL = "http://localhost:3001/api/v1/todos";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(API_URL);
    commit("setTodos", response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`${API_URL}/${id}`);
    commit("removeTodo", id);
  },

  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(
      `${API_URL}/${updatedTodo.id}`,
      updatedTodo
    );
    commit("setUpdatedTodo", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(API_URL, {
      todo: { title, completed: false },
    });
    commit("newTodo", response.data);
  },

  async filterTodos({ commit }, event) {
    const limit = parseInt(
      event.target.options[event.target.options.selectedIndex].innerText
    );
    const response = await axios.get(`${API_URL}?limit=${limit}`);
    commit("setTodos", response.data);
  },
};

const mutations = {
  setTodos: (state, todos) => {
    state.todos = todos;
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  setUpdatedTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (!updatedTodo.id) {
      return;
    }
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
  newTodo: (state, todo) => {
    state.todos.unshift(todo);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
