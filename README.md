# Find usernames across multiple platforms in a click
![Screenshot from 2023-10-30 17-54-09](https://github.com/sojinsamuel/my-usernames/assets/77185816/58487d0b-3e37-454f-a25f-65a8e8c4be61)

A place where users or business tycoons can type in their brand name to check  if thats available as a username on more than one social media platform at the same time.
Currently it supports:
- Snapchat
- Youtube
- Facebook

## But What if its not available 😢
![Screenshot from 2023-10-30 17-59-24](https://github.com/sojinsamuel/my-usernames/assets/77185816/ab391f3c-d2a9-4736-8ddd-f81f52c07ce5)

If the username you liked isnt available on a particular platform, then you can add checks for those usernames like so, by going to the dashboard:
![Screenshot from 2023-10-30 18-02-25](https://github.com/sojinsamuel/my-usernames/assets/77185816/f56a0e9b-f402-4e20-b236-76ffde500865)

When a check is added for the first time, it runs a availability search in that instant likewise you saw on the homepage. But the gist is, that check you added will run every 24hrs (by a sscheduled nodejs bot) for each usernames those werent available at the first time to see if its available. Not just that, it also sends you an email which you used to register if a particular username becomes available.

### When you add a check it will look like so:
![Screenshot (8)](https://github.com/sojinsamuel/my-usernames/assets/77185816/3d831da9-739b-4739-8325-b6780f53e5fe)

P.S The Last time checked will update/reset when the nodejs bot runs the next time for an unavailble username

Lastly only authenticated users can access **/dashboard**, **/account** pages.

## Lighthouse Score
![Screenshot from 2023-10-30 17-50-33](https://github.com/sojinsamuel/my-usernames/assets/77185816/fceed611-d89e-4ee3-955f-a8e6877a6fd9)

### Stacks i used
- [Hanko for authentication](https://www.hanko.io/)
- [Planetscale](https://planetscale.com/)
- [Prisma](https://www.prisma.io/)
- [Nextjs](https://nextjs.org/)
- [Nextui](https://nextui.org/)
- [React TS particles](https://www.npmjs.com/package/react-tsparticles)
- [Vercel](https://vercel.com/) for hosting the site && [AWS ec2 instance](https://aws.amazon.com/ec2/) for the nodejs bot
- [Checksmarks API](checkmarks.com) for finding available usernames
