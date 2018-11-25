import Route from '@ember/routing/route';
import db from "../utils/db"

export default Route.extend({
  model() { //based on the url the route will load and return the model
    return db.books(); //returns the model - in that case book, in rental tutorial - all rentals
  },

  actions: {
    addBook(book) {
      db.addBook(book);
      this.refresh();
    },
    removeBook(book) {
      db.removeBook(book);
      this.refresh();
    }
  }
});
