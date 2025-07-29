## Scribe

A modern note-taking web application like Google Docs, built with NextJS, Tailwind CSS and third-party service: Liveblocks. Together, you have a real-time application for document-writing collaboration, tailored to foster productivity. Live preview [here](https://scribe-ashy.vercel.app)

![Scribe](/public/assets/images/thumbnail.png)

## Features

- [x] Simple authentication using Clerk
- [x] Modern & responsive UI
- [x] Document creation, editing and deletion
- [x] Modern and resourceful text-editor for collaborative writing
- [x] Share your documents with friends or workmates with ease
- [x] Manage roles in the collaborative environment - decide who can view and who can write

## Getting Started

Follow these steps to set up the project locally on your machine

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://npmjs.com) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/thecybermaniac/scribe.git
cd scribe
```

**Installation**

```bash
npm install
```

**Setup Environment Variables**

This application was built with third-party services like [Clerk](https://clerk.com) for authentication, [Liveblocks](https://liveblocks.io) for real-time collaboration and [Sentry](https://sentry.com) for performance monitoring. To make sure it works properly for you, you need to register on the specificed platforms, and create a project to get the necessary keys. Then, create a new file name `.env.local` in the root of the cloned project and add the following content:

```ini
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
LIVEBLOCKS_SECRET_KEY=YOUR_LIVEBLOCKS_SECRET_KEY
SENTRY_AUTH_TOKEN=YOUR_SENTRY_AUTH_TOKEN
```

Replace the placeholder values with your obtained credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project