/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/intl/setup.ts');
const nextConfig = {};

export default withNextIntl(nextConfig);