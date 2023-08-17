import fs from 'fs';

const env =
`VITE_TMDB_API_KEY=${process.env.VITE_TMDB_API_KEY}
VITE_ACCESS_TOKEN=${process.env.VITE_ACCESS_TOKEN}
`;

fs.writeFileSync('./.env', env);
