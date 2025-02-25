const data = [
    {
        "videoId": "video01",
        "title": "Learn React in 30 Minutes",
        "thumbnailUrl": "https://picsum.photos/200/120?random=1",
        "description": "A quick tutorial to get started with React.",
        "channelId": "channel01",
        "uploader": "user01",
        "views": 15200,
        "likes": 1023,
        "dislikes": 45,
        "uploadDate": "2024-09-20",
        "comments": [
          {
            "commentId": "comment01",
            "userId": "user02",
            "text": "Great video! Very helpful.",
            "timestamp": "2024-09-21T08:30:00Z"
          }
        ]
      },
      {
        "videoId": "video02",
        "title": "Mastering JavaScript Async/Await",
        "thumbnailUrl": "https://picsum.photos/200/120?random=2",
        "description": "Deep dive into asynchronous programming in JavaScript.",
        "channelId": "channel02",
        "uploader": "user03",
        "views": 32890,
        "likes": 2450,
        "dislikes": 78,
        "uploadDate": "2024-08-15",
        "comments": [
          {
            "commentId": "comment02",
            "userId": "user04",
            "text": "Finally, async/await explained properly!",
            "timestamp": "2024-08-16T10:45:00Z"
          },
          {
            "commentId": "comment03",
            "userId": "user05",
            "text": "This was exactly what I needed. Thanks!",
            "timestamp": "2024-08-17T12:20:00Z"
          }
        ]
      },
      {
        "videoId": "video03",
        "title": "Python Crash Course for Beginners",
        "thumbnailUrl": "https://picsum.photos/200/120?random=3",
        "description": "Learn Python from scratch with this beginner-friendly tutorial.",
        "channelId": "channel03",
        "uploader": "user06",
        "views": 50230,
        "likes": 3980,
        "dislikes": 102,
        "uploadDate": "2024-07-10",
        "comments": [
          {
            "commentId": "comment04",
            "userId": "user07",
            "text": "Awesome tutorial! So easy to follow.",
            "timestamp": "2024-07-11T09:15:00Z"
          }
        ]
      },
      {
        "videoId": "video04",
        "title": "CSS Flexbox & Grid - The Ultimate Guide",
        "thumbnailUrl": "https://picsum.photos/200/120?random=4",
        "description": "Master CSS Flexbox and Grid layout techniques.",
        "channelId": "channel04",
        "uploader": "user08",
        "views": 18900,
        "likes": 1320,
        "dislikes": 65,
        "uploadDate": "2024-06-25",
        "comments": [
          {
            "commentId": "comment05",
            "userId": "user09",
            "text": "I finally understand Flexbox! Thank you!",
            "timestamp": "2024-06-26T14:00:00Z"
          }
        ]
      },
      {
        "videoId": "video05",
        "title": "Node.js & Express - Full Course",
        "thumbnailUrl": "https://picsum.photos/200/120?random=5",
        "description": "A complete guide to backend development with Node.js and Express.",
        "channelId": "channel05",
        "uploader": "user10",
        "views": 67500,
        "likes": 5870,
        "dislikes": 210,
        "uploadDate": "2024-05-18",
        "comments": [
          {
            "commentId": "comment06",
            "userId": "user11",
            "text": "Best Node.js tutorial ever! Learned so much.",
            "timestamp": "2024-05-19T18:30:00Z"
          },
          {
            "commentId": "comment07",
            "userId": "user12",
            "text": "Really appreciate the effort you put into this!",
            "timestamp": "2024-05-20T20:10:00Z"
          }
        ]
      },
      {
        "videoId": "video06",
        "title": "React Native Tutorial for Beginners",
        "thumbnailUrl": "https://picsum.photos/200/120?random=6",
        "description": "Build mobile apps with React Native from scratch.",
        "channelId": "channel06",
        "uploader": "user13",
        "views": 40200,
        "likes": 2980,
        "dislikes": 95,
        "uploadDate": "2024-04-30",
        "comments": [
          {
            "commentId": "comment08",
            "userId": "user14",
            "text": "I've always wanted to learn React Native. Thanks!",
            "timestamp": "2024-05-01T11:45:00Z"
          }
        ]
      },
      {
        "videoId": "video07",
        "title": "Mastering JavaScript - Beginner to Advanced",
        "thumbnailUrl": "https://picsum.photos/200/120?random=1",
        "description": "A step-by-step guide to mastering JavaScript from basics to advanced concepts.",
        "channelId": "channel06",
        "uploader": "user13",
        "views": 120000,
        "likes": 9400,
        "dislikes": 350,
        "uploadDate": "2024-06-10",
        "comments": [
          {
            "commentId": "comment08",
            "userId": "user14",
            "text": "Super helpful! The explanations are so clear.",
            "timestamp": "2024-06-11T10:15:00Z"
          },
          {
            "commentId": "comment09",
            "userId": "user15",
            "text": "This should be a paid course. Amazing content!",
            "timestamp": "2024-06-12T12:45:00Z"
          }
        ]
      },
      {
        "videoId": "video08",
        "title": "React.js Crash Course",
        "thumbnailUrl": "https://picsum.photos/200/120?random=1",
        "description": "Learn React.js fundamentals in this beginner-friendly crash course.",
        "channelId": "channel07",
        "uploader": "user16",
        "views": 85000,
        "likes": 7100,
        "dislikes": 200,
        "uploadDate": "2024-07-05",
        "comments": [
          {
            "commentId": "comment10",
            "userId": "user17",
            "text": "Finally, a React tutorial that makes sense!",
            "timestamp": "2024-07-06T15:30:00Z"
          },
          {
            "commentId": "comment11",
            "userId": "user18",
            "text": "Great crash course. Straight to the point!",
            "timestamp": "2024-07-07T18:00:00Z"
          }
        ]
      },
      {
        "videoId": "video09",
        "title": "MongoDB Tutorial for Beginners",
        "thumbnailUrl": "https://picsum.photos/200/120?random=1",
        "description": "A comprehensive introduction to MongoDB, a NoSQL database.",
        "channelId": "channel08",
        "uploader": "user19",
        "views": 56000,
        "likes": 4300,
        "dislikes": 150,
        "uploadDate": "2024-08-02",
        "comments": [
          {
            "commentId": "comment12",
            "userId": "user20",
            "text": "Super easy to follow! Thanks for this tutorial.",
            "timestamp": "2024-08-03T09:20:00Z"
          },
          {
            "commentId": "comment13",
            "userId": "user21",
            "text": "Perfect for beginners! Cleared all my doubts.",
            "timestamp": "2024-08-04T11:10:00Z"
          }
        ]
      }
]

export default data;