# Word Quiz

Word Quiz is a flash trivia game where you have a fun time building your vocabulary for better expression and communication. Vocabulary size has been directly linked to reading comprehension. Linguistic vocabulary is synonymous with thinking vocabulary. A person may be judged by others based on his or her vocabulary.


## Installation

Node.js is required. To see if you have Node.js installed, In your terminal, type "node -v".

```bash
node -v
```

You should see something like: v15.14.0
If not, [download and install Node.js](https://nodejs.org/en/download/).

Make sure that you are currently connected to your MONGO-DB

After installation of Node.js, in your terminal in the root directory of this folder type the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
cd client && npm i && cd ../server && npm i && npm run seed
```

You should see something like this:

added 1477 packages in 8s
added 189 packages in 3s
> server@1.0.0 seed
> mongo wordquiz --eval 'printjson(db.dropDatabase())' && mongoimport --db=wordquiz --collection=words --file=db_seed/words.json
MongoDB shell version v4.0.6
connecting to: mongodb://127.0.0.1:27017/wordquiz?gssapiServiceName=mongodb
MongoDB server version: 4.0.6
{ "dropped" : "wordquiz", "ok" : 1 }
2023-08-03T07:02:37.387-0700    connected to: localhost
2023-08-03T07:02:37.499-0700    imported 2500 documents


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


## Research and Explanation "Authentication"

Authentication is a critical aspect of the majority of live web applications. By including authentication in this application it allows users to create accounts and being sure that certain information on those accounts can only be accessed by that specific user. Users will be able to register and log into real, secure accounts, and be able to pull real, secure information off of their client requests to influence the behavior of this app. Authentication ensures that user data is protected from malicious hackers and creating functions utilizing protected data that can be extremely difficult for web developers to properly test.


** JSON Web Token **

In this application I am using "JSON Web Token". When JWT create tokens, it stores them in the client side (local or session storage) and then it will make requests sending that token via headers. The token is stored in the “Authorization property” inside the headers.

In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned and must be saved locally (typically in local or session storage, but cookies can also be used), instead of the traditional approach of creating a session in the server and returning a cookie.

Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema.

This is a stateless authentication mechanism as the user state is never saved in server memory. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources. As JWTs are self-contained, all the necessary information is there, reducing the need to query the database multiple times.


** bcrypt **

I am using bcrypt to encrypt the user’s password when they signup to use this application. Bcrypt is used to generate salts and hash the user's password and then save it to the database.

bcrypt is a password hashing function designed by Niels Provos and David MaziÃ¨res, based on the Blowfish cipher, and presented at USENIX in 1999. Besides incorporating a salt to protect against rainbow table attacks, bcrypt is an adaptive function: over time, the iteration count can be increased to make it slower, so it remains resistant to brute-force search attacks even with increasing computation power.

The bcrypt function is the default password hash algorithm for OpenBSD and other systems including some Linux distributions such as SUSE Linux. The prefix "$2a$" or "$2b$" (or "$2y$") in a hash string in a shadow password file indicates that hash string is a bcrypt hash in modular crypt format. The rest of the hash string includes the cost parameter, a 128-bit salt (base-64 encoded as 22 characters), and 184 bits of the resulting hash value (base-64 encoded as 31 characters). The cost parameter specifies a key expansion iteration count as a power of two, which is an input to the crypt algorithm.

Blowfish is notable among block ciphers for its expensive key setup phase. It starts off with subkeys in a standard state, then uses this state to perform a block encryption using part of the key, and uses the result of that encryption (which is more accurately a hashing) to replace some of the subkeys. Then it uses this modified state to encrypt another part of the key, and uses the result to replace more of the subkeys. It proceeds in this fashion, using a progressively modified state to hash the key and replace bits of state, until all subkeys have been set.

Provos and MaziÃ¨res took advantage of this, and took it further. They developed a new key setup algorithm for Blowfish, dubbing the resulting cipher "Eksblowfish" ("expensive key schedule Blowfish"). The key setup begins with a modified form of the standard Blowfish key setup, in which both the salt and password are used to set all subkeys. There are then a number of rounds in which the standard Blowfish keying algorithm is applied, using alternatively the salt and the password as the key, each round starting with the subkey state from the previous round. In theory, this is no stronger than the standard Blowfish key schedule, but the number of rekeying rounds is configurable; this process can therefore be made arbitrarily slow, which helps deter brute-force attacks upon the hash or salt.

The mathematical algorithm itself requires initialization with 18 32-bit subkeys (equivalent to 72 octets/bytes). The original specification of bcrypt does not mandate any one particular method for mapping text-based passwords from userland into numeric values for the algorithm. One brief comment in the text mentions, but does not mandate, the possibility of simply using the ASCII encoded value of a character string, "Finally, the key argument is a secret encryption key, which can be a user-chosen password of up to 56 bytes (including a terminating zero byte when the key is an ASCII string)."

Note that the quote above mentions passwords "up to 56 bytes" even though the algorithm itself makes use of a 72 byte initial value. Although Provos and MaziÃ¨res do not state the reason for the shorter restriction, they may have been motivated by the following statement from Bruce Schneier's original specification of Blowfish, "The 448 [bit] limit on the key size ensures that the[sic] every bit of every subkey depends on every bit of the key."

Implementations have varied in their approach of converting passwords into initial numeric values, including sometimes reducing the strength of passwords containing non-ASCII characters.


## People

The author of Word Quiz is [William Erickson](william.erickson.3007892@tlm.cloud)

[There are multiple contributors] My fellow classmates in the (TLM Montana)

(wikipedia) for the  Word Recognition, Vocabulary information, and Research and Explanation "Authentication" info