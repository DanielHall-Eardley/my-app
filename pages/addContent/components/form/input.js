const { v4: uuid } = require("uuid");

module.exports = {
  uploadBlog: {
    interactionType: 'input',
    eventType: 'input',
    name: 'blog',
    elementId: 'uploadBlog',
    fn: function anonymous(event) {
      const blogFile = event.target.files[0];
      const blogName = `${uuid()}_${blogFile.name}`;
      console.log(blogFile);
      supabase.storage
        .from("blogs")
        .upload(`/${blogName}`, blogFile)
        .then((response) => {
          console.log(response);
        });
    }
  }
};