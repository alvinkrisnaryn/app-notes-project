const BASE_URL = "https://notes-api.dicoding.dev/v2";

const Api = {
  async getNotes() {
    const response = await fetch(`${BASE_URL}/notes`);
    const responseJson = await response.json();
    return responseJson.data;
  },

  async addNote(title, body) {
    const response = await fetch(`${BASE_URL}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });
    const responseJson = await response.json();
    return responseJson.message;
  },

  async deleteNote(id) {
    const response = await fetch(`${BASE_URL}/notes/${id}`, {
      method: "DELETE",
    });
    const responseJson = await response.json();
    return responseJson.message;
  },
};

export default Api;
