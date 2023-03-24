let posts = [{
        id: 1,
        title: "post1",
        author_id: 1,
    },
    {
        id: 2,
        title: "post2",
        author_id: 1,
    },
    {
        id: 3,
        title: "post3",
        author_id: 2,
    },
    {
        id: 4,
        title: "post4",
        author_id: 3,
    },
];

function findLogInUser() {
    let users = {};
    return new Promise((res, rej) => {
        setTimeout(() => {
            users = { id: 5, name: "ahmed" };
            res(users);
        }, 1000);
    });
}

// callback hell
findLogInUser()
    .then(fetchUserPosts)
    .then(displayPosts)
    .catch((error) => console.log(chalk.red(error)));
// async function getUserPosts() {
//     const user = await findLogInUser();
//     const user_posts = await fetchUserPosts(user);
//     displayPosts(user_posts);
// }

// getUserPosts();

function fetchUserPosts(user) {
    // search for user posts
    return new Promise((res, rej) => {
        setTimeout(() => {
            try {
                const user_posts = posts.filter((post) => post.author_id == user.id);
                if (user_posts.length != 0) {
                    res(user_posts);
                } else {
                    throw new Error("no posts found");
                }
            } catch (error) {
                rej(error);
            }
        }, 100);
    });
}

function displayPosts(posts) {
    console.log(posts);
}