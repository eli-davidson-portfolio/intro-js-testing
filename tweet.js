class Tweet {
    constructor (sender, content, link) {
        this.sender = sender;
        this.content = content;
        this.link = `no link provided`;
        this.likes = 0;
        this.retweets = 0;
        this.replyCount = 0;
        this.replies = [];
        if (link) {
            this.link = link;
        }
    }
    like () {
        this.likes++;
    }
    retweet() {
        this.retweets++;
    }
    reply(replyString) {
        this.replies.push(replyString)
        this.replyCount++;
    }


}

module.exports = Tweet;
