# React Native Login Page

## What is this?

Just a small prototype of a login page implemented using React Native.
Small feature set for now. Users can login using email and password or create an account. Both once completed will forward to a user details now which for now just shows their email...

## Potential Additions

- Reset Password
- Adding for user profile stuff like usernames and stuff.
- Persistent session (user doesn't have to login every time they use the app)

I'm primarily just using this as a way to see what RN is like. Don't
take any of this too seriously :)

## Generating a Firebase Configuration File

<a name="link"></a>

- Go to https://console.firebase.google.com
- Click Add Project and give your project a name.
- Go to your project dashboard and click the Authentication tab
- Click the `Web Setup` button on the right hand side
- Copy the config object in the code
- Paste it in a file called `firebase-configuration.json` in the root folder of the project.

## How to run yourself

[See instructions on generating firebase configuration](#link)

Other than that just run `yarn start` and you're good to go. Or `npm start` if you don't like yarn :D
