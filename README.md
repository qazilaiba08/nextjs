This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


two differtent types of components 
Client and Server 
next js wil be convert into server components

Routing
folder name its becoming route name its file page.tsx its render for that route its special file naming
convention for displaying web router content but in most cases that not enough
you well need nested routes lets say developed routes in admin dashboard with this 
application and wanna create a route for /dashboar/users nd /dashnoard/analysts 
offcourse you cant create two folders with the this is where nested routes handling

Layout page is the parent of all child route
it allows you to share UI elements to transform to all pages
for example developer make a features like a navbar or footer its appear 
all the children routes saving you having an input for the page 
but nextjs all requried layou but you can create additional layouts 
it's neccessary let say the developer wanna render a specific UI just for the
dashboard routes

ROUTE GROUPS
Letsay you dont wont to rot layout to appear dashboard route 
to only shows up in nom dashoard routes like Home ,About,Contact 
and more and thats means a separate Navbar to dashboard and 
another one dashbord routes thats pretty smillar to how things work in 
real life right? in such scenarious the developers use Route Groups 
They allows you to recorganize segmeants and project structure without
impact routes the developer can create folders unlike nested routes 
they dont show up the URL the developer do that by wrapping your 