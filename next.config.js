/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      // PulseCheck was renamed Cronbell in Oct 2026; keep the old case-study URL working.
      { source: '/blog/pulsecheck', destination: '/blog/cronbell', permanent: true },
    ];
  },
};
