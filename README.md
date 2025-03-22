This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Versions

node v18.18.0 (npm v9.8.1)

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

## Handling Situations

1. The user answers all 12 questions correctly. As a result, the final page with the winnings and an option to start again will be displayed.  

2. The user makes a mistake on any question. As a result, the final page with the winnings and an option to start again will be displayed.  

3. The user answers a few questions correctly, then closes the tab and reopens the start page. As a result, they will see two buttons:  
   - The **Start** button allows them to start a new game.  
   - The **Continue** button lets them resume from where they left off.  

4. The user answers a few questions correctly and then manually changes the URL to navigate to the final page. As a result, they will see their current winnings, and upon clicking the **Go to menu** button, they will be redirected to the start page, where they can choose between **Start** and **Continue** buttons.  

5. The user answers a few questions correctly and then tries to change the question number in the URL. However, they will still remain on the current question.
