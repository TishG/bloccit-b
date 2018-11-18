const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

describe("Post", () => {

  beforeEach((done) => {
//#1
    this.topic;
    this.post;
    sequelize.sync({force: true}).then((res) => {

      Topic.create({
        title: "Expeditions to Alpha Centauri",
        description: "A compilation of reports from recent visits to the star system."
      })
      
      .then((topic) => {
        this.topic = topic;

        Post.create({
          title: "My first visit to Proxima Centauri b",
          body: "I saw some rocks.",
          topicId: this.topic.id
        })
        
        .then((post) => {
          this.post = post;
          done();
        });
      })
      
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });

  describe("#create()", () => {

    it("should create a topic object with a title and description", (done) => {
//#1
      Topic.create({
        title: "Top 3 car brands",
        description: "Honda, Toyota, and Mazda",
        topicId: this.topic.id
      })
      
      .then((topic) => {
        expect(topic.title).toBe("Top 3 car brands");
        expect(topic.description).toBe("Honda, Toyota, and Mazda");
        done();
      })
     
      .catch((err) => {
        console.log(err);
        done();
      });
    });

    it("should not create a topic with missing title or description", (done) => {
        
        Topic.create({
          title: "The best places to vacation"
        })
        
        .then((topic) => {
          done();
        })
        
        .catch((err) => {
          expect(err.message).toContain("Topic.description cannot be null");
          done();
        })
      });
    });

    describe("#getPosts()", () => {

        it("should return an array of posts associated with the topic", (done) => {
    
          this.topic.getPosts()
          .then((associatedPosts) => {
            expect(associatedPosts[0].title).toBe("My first visit to Proxima Centauri b");
            done();
          });    
        });   
      });

});
