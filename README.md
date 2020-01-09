# History API with Modals

Built by James Nuanez in 2020.

## Live Demo

https://history-api.jamesnuanez.com/

## About

This is a demonstration of how to use the history API to close a modal with the back button. It allows the following actions:

  * Press the back button to close the modal
  * After that, press the forward button to reopen the modal
  * Refresh the page with the modal open and the modal will stay open
  * Open the modal, navigate to another page, and click back, and the modal will be open

The impetus for this was trying to create a good user experience on mobile devices. Often times on an Android device users will open a modal that fills a large portion of the screen and then hit the back button expecting the modal to close. If it doesn't, the user is taken back to whatever page they were previously on. Whether or not this technique should be used is dependent upon the application and the size and type of modal being used.

Download [this presentation](public/presentation.ppt) for an explanation of how the code works.

## Deployment

1. `npm i`
2. `npm start`
3. Go to `localhost:4002` in your browser of choice.

## Usage

Open the developer console and watch the logs while doing the following actions. I also recommend opening `/public/demo.js` to see the code.

1. Click <strong>Demo</strong> in the nav bar
2. Click the <strong>Open Modal</strong> button
3. Click <strong>Go to about page</strong> in the modal
4. Click your browser's <strong>back</strong> button
5. <strong>Refresh</strong> the page
6. Click your browser's <strong>back</strong> button
7. Click your browser's <strong>forward</strong> button

## Other Notes

The modal can also be closed by hitting the escape key, clicking the background, or clicking the X in the modal. All of these events trigger `history.back()`, which is the same as pressing the browser's back button. The benefit of this approach is that it prevents superfluous history entries. No matter how many times you open and close the modal, it will only ever add one history entry.

In this demonstration, the URL is not changed. Although it is possible to change the URL with the history API, doing so with a modal brings along a lot of complexity, specifically when you go directly to the URL that should display the modal.
