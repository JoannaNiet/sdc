export default {
  multipass: true,
  floatPrecision: 2,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          cleanupIDs: false
        }
      }
    }
  ]
};
