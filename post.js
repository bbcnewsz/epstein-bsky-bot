const { BskyAgent } = require('@atproto/api');

const handle = process.env.BSKY_HANDLE;
const password = process.env.BSKY_APP_PASSWORD;

if (!handle || !password) {
  console.error('ERROR: Environment variables missing!');
  process.exit(1);
}

const agent = new BskyAgent({ service: 'https://bsky.social' });

(async () => {
  try {
    console.log('Logging in with handle:', handle);
    await agent.login({ identifier: handle, password });
    console.log('Login successful! Posting...');
    await agent.post({ text: 'Release the full Epstein files!' });
    console.log('Posted successfully!');
  } catch (err) {
    console.error('Error posting:', err);
    process.exit(1);
  }
})();
