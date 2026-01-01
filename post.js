const { BskyAgent } = require('@atproto/api');

const agent = new BskyAgent({ service: 'https://bsky.social' });

(async () => {
  try {
    console.log('Logging in with handle:', process.env.BSKY_HANDLE);
    await agent.login({
      identifier: process.env.BSKY_HANDLE,
      password: process.env.BSKY_APP_PASSWORD
    });

    console.log('Login successful! Posting...');
    await agent.post({ text: 'Release the full Epstein files!' });
    console.log('Posted successfully!');
  } catch (err) {
    console.error('Error posting:', err);
    process.exit(1);
  }
})();
