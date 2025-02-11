import Route from '@/lib/route';

const SEO_DATA = {
  INDEX: {
    title: 'Database CI/CD | Database DevOps | Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: '',
  },
  ABOUT: {
    title: 'About Us',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.ABOUT}/`,
  },
  PRICING: {
    title: 'Bytebase Pricing',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.PRICING}/`,
  },
  CHANGELOG: {
    title: 'Changelog',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.CHANGELOG}/`,
  },
  BLOG: {
    title: 'Blog',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.BLOG}/`,
  },
  TUTORIAL: {
    title: 'Bytebase Tutorial',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.TUTORIAL}/`,
  },
  DATABASE_GLOSSARY: {
    title: 'Database Glossary',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_GLOSSARY}/`,
  },
  TERMS: {
    title: 'Bytebase Terms of Service',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.TERMS}/`,
  },
  PRIVACY: {
    title: 'Bytebase Privacy Policy',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.PRIVACY}/`,
  },
  SLA: {
    title: 'Service Level Agreement',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.SLA}/`,
  },
  SQL_REVIEW_GUIDE: {
    title: 'Database Review Guide',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.SQL_REVIEW_GUIDE}/`,
  },
  DBA: {
    title: 'Bytebase for DBA',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DBA}/`,
  },
  DEVELOPER: {
    title: 'Bytebase for Developer',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DEVELOPER}/`,
  },
  TECHLEAD: {
    title: 'Bytebase for Tech Lead',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.TECHLEAD}/`,
  },
  CONTACTS: {
    title: 'Bytebase Contact',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.CONTACTS}/`,
  },
  REFUND: {
    title: 'Bytebase Refund',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.REFUND}/`,
  },
  DEMO: {
    title: 'Bytebase Request a demo',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DEMO}/`,
  },
  CONFIRM_DEMO: {
    title: 'Demo Booking Confirmed',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.CONFIRM_DEMO}/`,
  },
  MYSQL: {
    title: 'Manage MySQL schema with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_MYSQL}/`,
  },
  POSTGRES: {
    title: 'Manage PostgreSQL schema with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_POSTGRES}/`,
  },
  CLICKHOUSE: {
    title: 'Manage ClickHouse schema with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_CLICKHOUSE}/`,
  },
  TIDB: {
    title: 'Manage TiDB schema with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_TIDB}/`,
  },
  SNOWFLAKE: {
    title: 'Manage Snowflake schema with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_SNOWFLAKE}/`,
  },
  ORACLE: {
    title: 'Manage Oracle schema with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_ORACLE}/`,
  },
  SQLSERVER: {
    title: 'Manage SQL Server schema with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_SQLSERVER}/`,
  },
  MONGO: {
    title: 'Manage MongoDB change management with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_MONGO}/`,
  },
  REDIS: {
    title: 'Manage Redis change management with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_REDIS}/`,
  },
  REDSHIFT: {
    title: 'Manage Redshift change management with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_REDSHIFT}/`,
  },
  MARIADB: {
    title: 'Manage MariaDB change management with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_MARIADB}/`,
  },
  OCEANBASE: {
    title: 'Manage OceanBase change management with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_OCEANBASE}/`,
  },
  SPANNER: {
    title: 'Manage Google Cloud Spanner change management with Bytebase',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.DATABASE_SPANNER}/`,
  },
  GITLAB: {
    title: 'Integration with GitLab',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.INTEGRATION_GITLAB}/`,
  },
  GITHUB: {
    title: 'Integration with GitHub',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.INTEGRATION_GITHUB}/`,
  },
  BITBUCKET: {
    title: 'Integration with Bitbucket',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.INTEGRATION_BITBUCKET}/`,
  },
  SLACK: {
    title: 'Integration with Slack',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.INTEGRATION_SLACK}/`,
  },
  DISCORD: {
    title: 'Integration with Discord',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.INTEGRATION_DISCORD}/`,
  },
  TEAMS: {
    title: 'Integration with Teams',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.INTEGRATION_TEAMS}/`,
  },
  DINGTALK: {
    title: 'Integration with DingTalk',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.INTEGRATION_DINGTALK}/`,
  },
  LARK: {
    title: 'Integration with Lark',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.INTEGRATION_LARK}/`,
  },
  WECOM: {
    title: 'Integration with WeCom',
    description:
      'Database schema migration and version control, Database CI/CD, and DevOps for developers and DBAs',
    pathname: `${Route.INTEGRATION_WECOM}/`,
  },
};

export default SEO_DATA;
