const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  basePath: "/docs",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    PIPEDREAM_NODE_VERSION: "20",
    PIPEDREAM_BASE_URL: "https://pipedream.com",
    API_BASE_URL: "https://api.pipedream.com/v1",
    SQL_API_BASE_URL: "https://rt.pipedream.com/sql",
    ENDPOINT_BASE_URL: "*.m.pipedream.net",
    PAYLOAD_SIZE_LIMIT: "512KB",
    MEMORY_LIMIT: "256MB",
    MEMORY_ABSOLUTE_LIMIT: "10GB",
    EMAIL_PAYLOAD_SIZE_LIMIT: "30MB",
    MAX_WORKFLOW_EXECUTION_LIMIT: "750",
    BASE_CREDITS_PRICE_MEMORY: "256",
    BASE_CREDITS_PRICE_SECONDS: "30",
    DATA_STORES_MAX_KEYS: "1,024",
    DAILY_TESTING_LIMIT: "30 minutes",
    INSPECTOR_EVENT_EXPIRY_DAYS: "365",
    FUNCTION_PAYLOAD_LIMIT: "6MB",
    DAILY_INVOCATIONS_LIMIT: "333",
    FREE_ORG_DAILY_INVOCATIONS_LIMIT: "66",
    PRICE_PER_INVOCATION: "0.0002",
    FREE_MONTHLY_INVOCATIONS: "10,000",
    PRO_MONTHLY_INVOCATIONS: "20,000",
    TEAM_MONTHLY_INVOCATIONS: "20,000",
    TEAM_MEMBER_LIMIT: "5",
    PRO_MONTHLY_PRICE: "$19",
    TEAM_MONTHLY_PRICE: "$19",
    DEFAULT_WORKFLOW_QUEUE_SIZE: "100",
    MAX_WORKFLOW_QUEUE_SIZE: "10,000",
    PYTHON_VERSION: "3.12",
    GO_LANG_VERSION: "1.21.5",
    CONFIGURED_PROPS_SIZE_LIMIT: "64KB",
    SERVICE_DB_SIZE_LIMIT: "60KB",
    TMP_SIZE_LIMIT: "2GB",
    DELAY_MIN_MAX_TIME:
    "You can pause your workflow for as little as one millisecond, or as long as one year",
    PUBLIC_APPS: "2,000",
    FREE_INSPECTOR_EVENT_LIMIT: "7 days of events",
    WARM_WORKERS_INTERVAL: "10 minutes",
    WARM_WORKERS_CREDITS_PER_INTERVAL: "5",
    ALGOLIA_APP_ID: "XY28M447C5",
    ALGOLIA_SEARCH_API_KEY: "9d9169458128b3d60c22bb04da4431c7",
    ALGOLIA_INDEX_NAME: "pipedream",
  },
});
