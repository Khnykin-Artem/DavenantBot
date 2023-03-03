const env = (() => {
  const { argv } = process;
  const envArgIndex = argv.indexOf("--env");
  if (envArgIndex === -1) return;
  return argv[envArgIndex + 1];
})();

if (env === "development") {
  var botConfig = {
    watch: ".",
    ignore_watch: ["node_modules"],
    watch_delay: 1000,
  };
} else if (env === "production") {
  var botConfig = {
    instances: "max",
    exec_mode: "cluster",
  };
}

module.exports = {
  apps: [
    {
      name: "server",
      script: "./dist/server.js",
      ...botConfig,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
