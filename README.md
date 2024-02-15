# Word Quiz

Word Quiz is a flash trivia game where you have a fun time building your vocabulary for better expression and communication. Vocabulary size has been directly linked to reading comprehension. Linguistic vocabulary is synonymous with thinking vocabulary. A person may be judged by others based on his or her vocabulary.


## Installation

Node.js is required. To see if you have Node.js installed, In your terminal, type "node -v".

```bash
node -v
```

You should see something like: v15.14.0
If not, [download and install Node.js](https://nodejs.org/en/download/).

Make sure that you are currently connected to your MySQL server

After installation of Node.js, in your terminal in the root directory of this folder type the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
cd client && npm i && cd ../server && npm i && npm run seed
```

You should see something like this:

added 1477 packages in 8s
added 189 packages in 3s
> server@1.0.0 seed
> sudo mysql -u root -p < ./db_seed/word-quiz.sql


## How to use this application

From your terminal in the server directory start the express & webpack development server.

```bash
npm run app
```

You should see something like:

```bash
Starting the development server...
Compiled successfully!

You can now view Word Quiz in the browser.

  Local:            http://localhost:5000
  On Your Network:  http://XX.XXX.XXX.XX:5000

webpack compiled successfully
```

if your browser does not open up to Word Quiz, In your browser, in the URL search bar, type localhost: and the Port number that is stated in your terminal or click on the http link in your terminal:

```bash
  Local: http://localhost:5000
```

Once at the Word Quiz Home Page, click "Menu" in the top right corner to "Login", or "Sign Up" if you are not yet enrolled. Once logged in you will have the "Menu" options of "Play Word Quiz", "Word List", "Add a Word", "Stats", "Home", "LOGOUT".

~ Play Word Quiz: Play Word Quiz and each time try to beat your scores and learn new words at the same time.
~ Word List: Gives you the option to get a list of each word and its definition sorted by the first letter of the word.
~ Add a Word: Gives you the option to add your own word to the quiz.
~ Stats: Stats is where you can see your previous scores and accuracy.

Enjoy!!


## People

The author of Word Quiz is [William Erickson](william.erickson.3007892@tlm.cloud)

[There are multiple contributors] My fellow classmates in the (TLM Montana)

(wikipedia) for the  Word Recognition, Vocabulary information, and Research and Explanation "Authentication" info