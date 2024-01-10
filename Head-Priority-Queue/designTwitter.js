// 355. Design Twitter
import { MaxPriorityQueue } from '@datastructures-js/priority-queue';

var Twitter = function () {
  this.times = 0;

  //   userId -> tweet id
  this.tweetMap = {};
  //   userId -> followeeId
  this.followMap = {};
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.tweetMap.hasOwnProperty(userId)) {
    this.tweetMap[userId] = [];
  }

  this.tweetMap[userId].push([this.times, tweetId]);

  this.times += 1;
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  // need to the times each tweet id
  const res = [];
  const maxHeap = new MaxPriorityQueue();

  if (!this.followMap.hasOwnProperty(userId)) {
    this.followMap[userId] = new Set();
  }

  this.followMap[userId].add(userId);

  // who is user id following
  const followees = this.followMap[userId] ?? [];

  for (const followeeId of followees) {
    if (this.tweetMap.hasOwnProperty(followeeId)) {
      // the last of the list always is the newest tweet id
      const index = this.tweetMap[followeeId].length - 1;
      const [time, tweetId] = this.tweetMap[followeeId][index];
      maxHeap.enqueue([tweetId, followeeId, index - 1], time);
    }
  }

  while (maxHeap.size() && res.length < 10) {
    const [tweetId, followeeId, index] = maxHeap.dequeue().element;
    res.push(tweetId);
    if (index >= 0) {
      const [time, newTweetId] = this.tweetMap[followeeId][index];
      maxHeap.enqueue([newTweetId, followeeId, index - 1], time);
    }
  }

  return res;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.followMap.hasOwnProperty(followerId)) {
    this.followMap[followerId] = new Set();
  }
  this.followMap[followerId].add(followeeId);
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.followMap.hasOwnProperty(followerId)) {
    this.followMap[followerId].delete(followeeId);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

// Twitter() Initializes your twitter object.

// void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId

// List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.

const twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
twitter.getNewsFeed(1); // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
twitter.follow(1, 2); // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
twitter.getNewsFeed(1); // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2); // User 1 unfollows user 2.
twitter.getNewsFeed(1); // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
