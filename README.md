## I wanted to get in some more reps with React and Material-UI components.
#### So, I made a portfolio site for some of my current projects.
If you are considering something similar, may I suggest [Gatsby?](https://www.gatsbyjs.org)  

I wish I had known about Gatsby beforehand, however making this ~~site~~ page from scratch was still a great learning and tinkering experience.

#### It is also an exercise in use of white space, break-points and `Grid`.

My understanding is `Grid` does not play well with IE and its adpotion rate suffers as a result.  YMMV, etc.

#### This project lives on a Heroku free-tier dyno.
It is kept "awake" by using a `wget` call set up for every 15 mins.  The call is automatically made via the Linux `cron` tool.

[Check this Ask Ubuntu thread for more info.](https://askubuntu.com/questions/2368/how-do-i-set-up-a-cron-job)

This is not really an ideal implementation and something like a New Relic traffic tool would be a better option, so I've added that to this repo's issues.

#### Data
Since this information is all rather static, there is no backing data store.  If I come up with a clever or lazy way to update the content here, I'll add an issue to the backlog.

#### Projects Listed
My Github repos or my [blog](https://chadblog.host) will likely have the most current info about my projects.
When updates will happen:
- notable version changes in a project
- new project is added
- UI tweaks

If any projects get put on ice for an extended period, I'll likely remove them or add an Archives component to aggregate them.



This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Please check out that page for more info, the default README is a beast, a very helpful beast that takes a while to step through.
