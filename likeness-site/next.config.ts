import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (avoids picking up unrelated
  // lockfiles in parent directories).
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
